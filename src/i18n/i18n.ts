import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getLanguageDir } from './languages'

const localeModules = import.meta.glob('../locales/*/*.json') as Record<
  string,
  () => Promise<unknown>
>

function setDocumentLanguage(lang: string) {
  document.documentElement.lang = lang
  document.documentElement.dir = getLanguageDir(lang)
}

function loadNamespace(lng: string, ns: string): Promise<unknown> {
  const key = `../locales/${lng}/${ns}.json`
  const loader = localeModules[key]
  if (!loader) {
    return Promise.reject(new Error(`Missing locale module: ${key}`))
  }
  return loader().then((m) => {
    if (typeof m === 'object' && m !== null && 'default' in m) {
      return (m as { default: unknown }).default
    }
    return m
  })
}

export const DEFAULT_NAMESPACES = ['common', 'navigation', 'footer'] as const

export async function preloadNamespaces(namespaces: readonly string[]) {
  await i18n.loadNamespaces([...namespaces])
}

void i18n
  .use(
    resourcesToBackend((lng: string | readonly string[], ns: string | readonly string[]) =>
      loadNamespace(String(Array.isArray(lng) ? lng[0] : lng), String(Array.isArray(ns) ? ns[0] : ns))
    )
  )
  .use(
    new LanguageDetector(null, {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'asri.locale',
      caches: ['localStorage'],
    })
  )
  .use(initReactI18next)
  .init({
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'common',
    ns: [...DEFAULT_NAMESPACES],
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: import.meta.env.DEV
      ? (_lng: string | readonly string[], ns: string, key: string) => {
          const msg = `[i18n missing] ${String(ns)}:${String(key)}`
          console.warn(msg)
        }
      : undefined,
  })

i18n.on('languageChanged', (lang: string) => setDocumentLanguage(lang))

setDocumentLanguage(i18n.language || DEFAULT_LANGUAGE)

void preloadNamespaces(DEFAULT_NAMESPACES)

export default i18n
