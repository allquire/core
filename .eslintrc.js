module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    codeFrame: true,
    ecmaVersion: 2020
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
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
    'import/no-unresolved': 0
  }
}
