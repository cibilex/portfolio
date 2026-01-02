import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    ignores: ['eslint.config.js', 'prettier.config.js', '.output/*', '.tanstack/*', 'node_modules/*', 'dist/*'],
  },
  {
    rules: {
      '@typescript-eslint/no-unnecessary-condition': 'off',
    },
  },
]
