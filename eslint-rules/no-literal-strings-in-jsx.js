const TEXT_ATTRS = new Set(['aria-label', 'title', 'placeholder', 'alt'])

function isProbablyTranslatable(text) {
  const trimmed = String(text ?? '').trim()
  if (!trimmed) return false
  if (/^https?:\/\//i.test(trimmed)) return false
  if (/^\/images\//i.test(trimmed)) return false
  if (/^#[0-9a-f]{3,8}$/i.test(trimmed)) return false
  if (/^[0-9\s.,:%+-]+$/.test(trimmed)) return false
  return /[A-Za-zÀ-ÿ\u4e00-\u9fff]/.test(trimmed)
}

export default {
  meta: {
    type: 'suggestion',
    docs: { description: 'Discourage hardcoded user-facing strings in JSX.' },
    schema: [
      {
        type: 'object',
        properties: {
          allow: { type: 'array', items: { type: 'string' } },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      useTranslation: 'Avoid hardcoded user-facing strings; use i18n translations instead.',
    },
  },
  create(context) {
    const allow = new Set(context.options?.[0]?.allow ?? [])

    function report(node) {
      context.report({ node, messageId: 'useTranslation' })
    }

    return {
      JSXText(node) {
        const raw = node.value
        if (!isProbablyTranslatable(raw)) return
        if (allow.has(raw.trim())) return
        report(node)
      },
      JSXAttribute(node) {
        if (!node.name || node.name.type !== 'JSXIdentifier') return
        const attrName = node.name.name
        if (!TEXT_ATTRS.has(attrName)) return
        const init = node.value
        if (!init || init.type !== 'Literal') return
        if (!isProbablyTranslatable(init.value)) return
        if (allow.has(String(init.value).trim())) return
        report(node)
      },
    }
  },
}

