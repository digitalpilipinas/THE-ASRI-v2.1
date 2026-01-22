import { describe, it, expect } from 'vitest'
import i18n from './i18n'

describe('i18n', () => {
  it('sets html lang and dir when language changes', async () => {
    await i18n.changeLanguage('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.documentElement.dir).toBe('ltr')

    await i18n.changeLanguage('es')
    expect(document.documentElement.lang).toBe('es')
    expect(document.documentElement.dir).toBe('ltr')

    await i18n.changeLanguage('ja')
    expect(document.documentElement.lang).toBe('ja')
    expect(document.documentElement.dir).toBe('ltr')
  })

  it('loads navigation translations for supported languages', async () => {
    for (const locale of ['es', 'ja', 'ko', 'pt', 'it'] as const) {
      await i18n.changeLanguage(locale)
      const home = i18n.t('navigation:items.home.full')
      expect(home).toBeTruthy()
    }
  })
})
