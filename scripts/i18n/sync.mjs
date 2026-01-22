import fs from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(process.cwd())
const localesRoot = path.join(projectRoot, 'src', 'locales')
const DEFAULT_LOCALE = 'en'

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isEmptyTranslation(value) {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (isPlainObject(value)) return Object.keys(value).length === 0
  return false
}

function mergeMissing(target, source) {
  if (Array.isArray(source)) {
    if (target === undefined || target === null || (Array.isArray(target) && target.length === 0)) return source
    return target
  }

  if (isPlainObject(source)) {
    const out = isPlainObject(target) ? { ...target } : {}
    for (const [k, v] of Object.entries(source)) {
      out[k] = mergeMissing(out[k], v)
    }
    return out
  }

  if (target === undefined || isEmptyTranslation(target)) return source
  return target
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function readJsonOrEmpty(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

async function listNamespaces() {
  const defaultDir = path.join(localesRoot, DEFAULT_LOCALE)
  const entries = await fs.readdir(defaultDir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.json'))
    .map((e) => e.name.replace(/\.json$/, ''))
}

async function listLocales() {
  const entries = await fs.readdir(localesRoot, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
    .map((e) => e.name)
}

async function sync() {
  const namespaces = await listNamespaces()
  const locales = await listLocales()

  for (const locale of locales) {
    if (locale === DEFAULT_LOCALE) continue
    const localeDir = path.join(localesRoot, locale)
    await fs.mkdir(localeDir, { recursive: true })

    for (const ns of namespaces) {
      const basePath = path.join(localesRoot, DEFAULT_LOCALE, `${ns}.json`)
      const base = await readJsonOrEmpty(basePath)

      const localePath = path.join(localeDir, `${ns}.json`)
      const hadFile = await fileExists(localePath)
      const current = await readJsonOrEmpty(localePath)

      const next = mergeMissing(current, base)
      const raw = JSON.stringify(next, null, 2) + '\n'

      if (!hadFile) {
        await fs.writeFile(localePath, raw, 'utf8')
        continue
      }

      const prevRaw = JSON.stringify(current, null, 2) + '\n'
      if (prevRaw !== raw) {
        await fs.writeFile(localePath, raw, 'utf8')
      }
    }
  }
}

sync().catch((err) => {
  process.stderr.write(String(err) + '\n')
  process.exitCode = 1
})
