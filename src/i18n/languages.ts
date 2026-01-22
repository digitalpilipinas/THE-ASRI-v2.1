export type SupportedLanguage = 'en' | 'es' | 'zh' | 'fr' | 'de' | 'ja' | 'ko' | 'pt' | 'it'

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en'

export const SUPPORTED_LANGUAGES: Array<{
  code: SupportedLanguage
  nativeName: string
  englishName: string
  dir: 'ltr' | 'rtl'
}> = [
  { code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr' },
  { code: 'zh', nativeName: '中文', englishName: 'Chinese', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr' },
  { code: 'ko', nativeName: '한국어', englishName: 'Korean', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian', dir: 'ltr' },
]

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return SUPPORTED_LANGUAGES.some((l) => l.code === value)
}

export function getLanguageDir(lang: string): 'ltr' | 'rtl' {
  const found = SUPPORTED_LANGUAGES.find((l) => l.code === lang)
  return found?.dir ?? 'ltr'
}
