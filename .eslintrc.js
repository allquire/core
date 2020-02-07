module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
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
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {},
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ]
    }
  ]
}
