# i18n QA Checklist

## Manual QA (Per Language)
- Switch language from the header selector and from the mobile menu selector.
- Confirm no full page reload occurs and UI updates immediately.
- Verify `html[lang]` updates (screen reader language correctness).
- Verify critical screens:
  - Home
  - Contact form
  - Navigation + Footer
- Check common interactive UI:
  - Buttons, labels, placeholders, alerts/toasts
  - aria-labels for navigation controls

## Text Expansion
- Confirm buttons do not clip or overflow in German/French.
- Confirm line wrapping remains readable in Chinese.

## RTL Verification (When Adding RTL Locales)
- Switch to an RTL language (e.g., Arabic) once added.
- Verify:
  - `html[dir]` becomes `rtl`
  - toasts, sheets, and selects mirror placement correctly
  - directional icons and motion feel correct

## Automated Checks
- Run `npm run i18n:inventory` to refresh the translatable string report.
- Run `npm run i18n:validate` to check key coverage and placeholder consistency.
- Run `npm test` for i18n behavior tests.

