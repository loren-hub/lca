import eslintConfigNext from 'eslint-config-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const config = [
  ...eslintConfigNext,
  {
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]

export default config

