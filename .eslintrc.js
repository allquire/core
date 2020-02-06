module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
    project: 'tsconfig.json'
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    strict: 0,
    'prettier/prettier': 'error',
    camelcase: 0,
    'no-console': 0,
    'require-await': 0,
    'handle-callback-err': 0,
    'require-atomic-updates': 0,
    'no-empty': 0,
    'no-empty-source': 0,
    'import/no-unresolved': 0,
    'node/no-unsupported-features/es-syntax': 0
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'prettier/prettier': 0
      }
    }
  ]
}
