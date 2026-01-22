import fs from 'node:fs/promises'
import path from 'node:path'
import ts from 'typescript'

const projectRoot = path.resolve(process.cwd())
const srcRoot = path.join(projectRoot, 'src')
const reportDir = path.join(projectRoot, 'reports', 'i18n')

const TEXT_ATTRS = new Set(['aria-label', 'title', 'placeholder', 'alt'])

function isProbablyTranslatable(text) {
  const trimmed = text.trim()
  if (!trimmed) return false
  if (/^https?:\/\//i.test(trimmed)) return false
  if (/^\/images\//i.test(trimmed)) return false
  if (/^#[0-9a-f]{3,8}$/i.test(trimmed)) return false
  if (/^[0-9\s.,:%+-]+$/.test(trimmed)) return false
  return true
}

function toPos(sourceFile, pos) {
  const lc = sourceFile.getLineAndCharacterOfPosition(pos)
  return { line: lc.line + 1, column: lc.character + 1 }
}

function addEntry(entries, sourceFile, node, kind, text, extra = {}) {
  if (!isProbablyTranslatable(text)) return
  const { line, column } = toPos(sourceFile, node.getStart(sourceFile))
  entries.push({
    text: text.trim().replace(/\s+/g, ' '),
    file: path.relative(projectRoot, sourceFile.fileName),
    line,
    column,
    kind,
    ...extra,
  })
}

function scanSourceFile(sourceFile, entries) {
  function visit(node) {
    if (ts.isJsxText(node)) {
      addEntry(entries, sourceFile, node, 'jsxText', node.getText(sourceFile))
    }

    if (ts.isJsxAttribute(node) && node.initializer) {
      const attrName = node.name.getText(sourceFile)
      const valueNode = node.initializer
      if (TEXT_ATTRS.has(attrName) && ts.isStringLiteral(valueNode)) {
        addEntry(entries, sourceFile, valueNode, 'jsxAttribute', valueNode.text, { attr: attrName })
      }
    }

    if (ts.isCallExpression(node)) {
      const callee = node.expression.getText(sourceFile)
      if (callee === 'alert' && node.arguments.length > 0) {
        const arg = node.arguments[0]
        if (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg)) {
          addEntry(entries, sourceFile, arg, 'alert', arg.text)
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
}

async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = []
  for (const ent of entries) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist') continue
      results.push(...(await listFiles(full)))
      continue
    }
    if (ent.isFile() && (ent.name.endsWith('.ts') || ent.name.endsWith('.tsx'))) results.push(full)
  }
  return results
}

async function scanIndexHtml(entries) {
  const htmlPath = path.join(projectRoot, 'index.html')
  const html = await fs.readFile(htmlPath, 'utf8')
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i)
  if (titleMatch?.[1]) {
    entries.push({ text: titleMatch[1].trim(), file: 'index.html', line: 1, column: 1, kind: 'htmlTitle' })
  }
  const descMatch = html.match(/<meta\\s+name=['"]description['"]\\s+content=['"]([^'"]+)['"][^>]*>/i)
  if (descMatch?.[1]) {
    entries.push({ text: descMatch[1].trim(), file: 'index.html', line: 1, column: 1, kind: 'htmlMetaDescription' })
  }
}

async function main() {
  const entries = []
  await scanIndexHtml(entries)

  const files = await listFiles(srcRoot)
  for (const filePath of files) {
    const code = await fs.readFile(filePath, 'utf8')
    const sourceFile = ts.createSourceFile(
      filePath,
      code,
      ts.ScriptTarget.Latest,
      true,
      filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
    )
    scanSourceFile(sourceFile, entries)
  }

  entries.sort((a, b) => (a.file === b.file ? a.line - b.line : a.file.localeCompare(b.file)))

  await fs.mkdir(reportDir, { recursive: true })
  await fs.writeFile(path.join(reportDir, 'inventory.json'), JSON.stringify(entries, null, 2) + '\n', 'utf8')

  const summary = new Map()
  for (const e of entries) {
    const bucket = e.file.split(path.sep)[0] === 'src' ? e.file.split(path.sep).slice(0, 3).join('/') : e.file
    summary.set(bucket, (summary.get(bucket) ?? 0) + 1)
  }

  const summaryLines = [
    '# i18n Inventory Summary',
    '',
    `Total entries: ${entries.length}`,
    '',
    ...[...summary.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `- ${k}: ${v}`),
    '',
  ]
  await fs.writeFile(path.join(reportDir, 'summary.md'), summaryLines.join('\n'), 'utf8')

  process.stdout.write(`Wrote ${entries.length} entries to reports/i18n/inventory.json\n`)
}

main().catch((err) => {
  process.stderr.write(String(err) + '\n')
  process.exitCode = 1
})
