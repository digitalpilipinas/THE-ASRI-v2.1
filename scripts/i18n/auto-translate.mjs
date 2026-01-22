import fs from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(process.cwd())
const localesRoot = path.join(projectRoot, 'src', 'locales')
const DEFAULT_LOCALE = 'en'

const AUTH_KEY = process.env.DEEPL_AUTH_KEY
const API_URL = process.env.DEEPL_API_URL ?? 'https://api-free.deepl.com/v2/translate'

const TARGET_LOCALES = (process.env.I18N_TARGET_LOCALES ?? 'ja,ko,pt,it')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const TARGET_LANG_MAP = {
  ja: 'JA',
  ko: 'KO',
  pt: process.env.DEEPL_PT_VARIANT ?? 'PT-PT',
  it: 'IT',
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

async function readJsonOrEmpty(filePath) {
  try {
    return await readJson(filePath)
  } catch {
    return {}
  }
}

function setByPath(root, pathParts, value) {
  let cur = root
  for (let i = 0; i < pathParts.length - 1; i++) {
    const key = pathParts[i]
    const nextKey = pathParts[i + 1]
    const isIndex = String(Number(nextKey)) === nextKey
    if (cur[key] === undefined) cur[key] = isIndex ? [] : {}
    cur = cur[key]
  }
  const last = pathParts[pathParts.length - 1]
  cur[last] = value
}

function getByPath(root, pathParts) {
  let cur = root
  for (const p of pathParts) {
    if (cur == null) return undefined
    cur = cur[p]
  }
  return cur
}

function collectStringLeaves(baseNode, localeNode, prefix = []) {
  const out = []

  if (typeof baseNode === 'string') {
    const current = localeNode
    const needs = current === undefined || current === null || String(current) === baseNode
    if (needs) out.push({ path: prefix, text: baseNode })
    return out
  }

  if (Array.isArray(baseNode)) {
    for (let i = 0; i < baseNode.length; i++) {
      out.push(...collectStringLeaves(baseNode[i], Array.isArray(localeNode) ? localeNode[i] : undefined, [...prefix, String(i)]))
    }
    return out
  }

  if (isPlainObject(baseNode)) {
    for (const [k, v] of Object.entries(baseNode)) {
      out.push(...collectStringLeaves(v, isPlainObject(localeNode) ? localeNode[k] : undefined, [...prefix, k]))
    }
    return out
  }

  return out
}

async function translateBatch(texts, targetLang) {
  const body = new URLSearchParams()
  for (const t of texts) body.append('text', t)
  body.set('target_lang', targetLang)

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${AUTH_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!res.ok) {
    const msg = await res.text().catch(() => '')
    throw new Error(`DeepL request failed (${res.status}): ${msg}`)
  }

  const json = await res.json()
  const translations = json?.translations
  if (!Array.isArray(translations)) throw new Error('Unexpected DeepL response shape')
  return translations.map((t) => t?.text ?? '')
}

async function listNamespaces() {
  const defaultDir = path.join(localesRoot, DEFAULT_LOCALE)
  const entries = await fs.readdir(defaultDir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.json'))
    .map((e) => e.name.replace(/\.json$/, ''))
}

async function run() {
  if (!AUTH_KEY) {
    process.stderr.write('DEEPL_AUTH_KEY is required to run i18n:auto-translate\n')
    process.exitCode = 1
    return
  }

  const namespaces = await listNamespaces()

  for (const locale of TARGET_LOCALES) {
    const targetLang = TARGET_LANG_MAP[locale]
    if (!targetLang) {
      process.stderr.write(`Unsupported locale for auto-translate: ${locale}\n`)
      process.exitCode = 1
      return
    }

    for (const ns of namespaces) {
      const basePath = path.join(localesRoot, DEFAULT_LOCALE, `${ns}.json`)
      const base = await readJsonOrEmpty(basePath)

      const localePath = path.join(localesRoot, locale, `${ns}.json`)
      const current = await readJsonOrEmpty(localePath)

      const leaves = collectStringLeaves(base, current)
      if (leaves.length === 0) continue

      const batchSize = 40
      for (let i = 0; i < leaves.length; i += batchSize) {
        const batch = leaves.slice(i, i + batchSize)
        const translated = await translateBatch(batch.map((b) => b.text), targetLang)
        for (let j = 0; j < batch.length; j++) {
          setByPath(current, batch[j].path, translated[j])
        }
      }

      const raw = JSON.stringify(current, null, 2) + '\n'
      await fs.writeFile(localePath, raw, 'utf8')
    }
  }

  process.stdout.write('i18n auto-translate complete\n')
}

run().catch((err) => {
  process.stderr.write(String(err) + '\n')
  process.exitCode = 1
})
