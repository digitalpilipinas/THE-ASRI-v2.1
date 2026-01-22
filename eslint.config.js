import tsParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import noLiteralStringsInJsx from './eslint-rules/no-literal-strings-in-jsx.js'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'reports/**'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'local-i18n': { rules: { 'no-literal-strings-in-jsx': noLiteralStringsInJsx } },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'local-i18n/no-literal-strings-in-jsx': 'warn',
    },
  },
]

