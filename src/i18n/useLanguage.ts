import { useCallback } from 'react'
import i18n from './i18n'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, type SupportedLanguage, isSupportedLanguage } from './languages'

export function useLanguage() {
  const language = (isSupportedLanguage(i18n.language) ? i18n.language : DEFAULT_LANGUAGE) as SupportedLanguage

  const setLanguage = useCallback(async (next: SupportedLanguage) => {
    await i18n.changeLanguage(next)
  }, [])

  return {
    language,
    setLanguage,
    supported: SUPPORTED_LANGUAGES,
  }
}

