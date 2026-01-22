import fs from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(process.cwd())
const reportDir = path.join(projectRoot, 'reports', 'i18n')

async function main() {
  const validatePath = path.join(reportDir, 'validate.json')
  const raw = await fs.readFile(validatePath, 'utf8')
  const data = JSON.parse(raw)
  const missing = data?.missing ?? {}
  const outPath = path.join(reportDir, 'missing-keys.json')
  await fs.writeFile(outPath, JSON.stringify(missing, null, 2) + '\n', 'utf8')
  process.stdout.write(`Wrote ${Object.keys(missing).length} missing buckets to reports/i18n/missing-keys.json\n`)
}

main().catch((err) => {
  process.stderr.write(String(err) + '\n')
  process.exitCode = 1
})

