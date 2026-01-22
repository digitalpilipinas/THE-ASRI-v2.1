# Translation Workflow

## Roles
- Engineers: add/update keys in `en`, keep structure stable, add context metadata, run validation.
- Translators/Content team: translate non-English locale JSON files using metadata notes for context.
- Reviewers: approve translations and ensure validation passes.

## Where to Work
- Source strings: `src/locales/en/{namespace}.json`
- Translations: `src/locales/{lang}/{namespace}.json`
- Context and constraints: `src/locales/_meta/{namespace}.meta.json`

## Rules
- Do not change keys in non-English files without changing English first.
- Keep interpolation placeholders identical across locales (example: `{{year}}`, `{{brand}}`).
- Prefer short, scannable labels for navigation and buttons.

## Suggested Review Checklist (PR)
- `npm run i18n:validate` passes.
- No unexpected keys added/removed in non-English locales.
- Placeholders match English for every key.
- UI still looks correct with longer strings (German/French expansion).

