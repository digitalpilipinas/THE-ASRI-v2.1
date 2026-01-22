import fs from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(process.cwd())
const localesRoot = path.join(projectRoot, 'src', 'locales')
const reportDir = path.join(projectRoot, 'reports', 'i18n')

const DEFAULT_LOCALE = 'en'
const REQUIRED_LOCALES = ['en', 'es', 'zh', 'fr', 'de']
const REQUIRED_NAMESPACES = new Set(['common', 'navigation', 'footer', 'home', 'contact'])

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function flattenKeys(obj, prefix = '') {
  const out = new Map()
  if (!isObject(obj)) return out
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (isObject(v)) {
      for (const [ck, cv] of flattenKeys(v, key).entries()) out.set(ck, cv)
    } else {
      out.set(key, v)
    }
  }
  return out
}

function placeholdersOf(value) {
  if (typeof value !== 'string') return new Set()
  const matches = value.match(/{{\\s*([a-zA-Z0-9_]+)\\s*}}/g) ?? []
  return new Set(matches.map((m) => m.replace(/[{}\\s]/g, '')))
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

async function listNamespaces() {
  const defaultDir = path.join(localesRoot, DEFAULT_LOCALE)
  const entries = await fs.readdir(defaultDir, { withFileTypes: true })
  return entries.filter((e) => e.isFile() && e.name.endsWith('.json')).map((e) => e.name.replace(/\.json$/, ''))
}

async function listLocales() {
  const entries = await fs.readdir(localesRoot, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
    .map((e) => e.name)
}

async function validate() {
  const namespaces = await listNamespaces()
  const locales = await listLocales()
  const results = {
    ok: true,
    locales,
    namespaces,
    missingFiles: {},
    missing: {},
    extra: {},
    placeholderMismatches: [],
  }

  for (const locale of locales) {
    const missing = []
    for (const ns of namespaces) {
      const localePath = path.join(localesRoot, locale, `${ns}.json`)
      const exists = await fileExists(localePath)
      if (!exists) missing.push(ns)
    }
    if (missing.length) {
      results.ok = false
      results.missingFiles[locale] = missing
    }
  }

  for (const ns of namespaces) {
    const defaultPath = path.join(localesRoot, DEFAULT_LOCALE, `${ns}.json`)
    const base = flattenKeys(await readJson(defaultPath))
    for (const locale of REQUIRED_LOCALES) {
      const localePath = path.join(localesRoot, locale, `${ns}.json`)
      let localized = new Map()
      try {
        localized = flattenKeys(await readJson(localePath))
      } catch {
        localized = new Map()
      }

      const missingKeys = []
      const extraKeys = []

      if (REQUIRED_NAMESPACES.has(ns)) {
        for (const key of base.keys()) {
          if (!localized.has(key)) missingKeys.push(key)
        }
      }
      for (const key of localized.keys()) {
        if (!base.has(key)) extraKeys.push(key)
      }

      if (missingKeys.length) {
        if (REQUIRED_NAMESPACES.has(ns)) results.ok = false
        results.missing[`${locale}.${ns}`] = missingKeys
      }
      if (extraKeys.length) {
        results.ok = false
        results.extra[`${locale}.${ns}`] = extraKeys
      }

      for (const [k, baseValue] of base.entries()) {
        if (!localized.has(k)) continue
        const localValue = localized.get(k)
        const a = placeholdersOf(baseValue)
        const b = placeholdersOf(localValue)
        const same =
          a.size === b.size && [...a.values()].every((p) => b.has(p))
        if (!same) {
          results.ok = false
          results.placeholderMismatches.push({
            locale,
            namespace: ns,
            key: k,
            base: [...a.values()],
            localized: [...b.values()],
          })
        }
      }
    }
  }

  await fs.mkdir(reportDir, { recursive: true })
  await fs.writeFile(path.join(reportDir, 'validate.json'), JSON.stringify(results, null, 2) + '\n', 'utf8')

  if (!results.ok) {
    process.stderr.write('i18n validation failed. See reports/i18n/validate.json\\n')
    process.exitCode = 1
    return
  }

  process.stdout.write('i18n validation ok\\n')
}

validate().catch((err) => {
  process.stderr.write(String(err) + '\\n')
  process.exitCode = 1
})
