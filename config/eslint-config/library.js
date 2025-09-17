/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  extends: ['@rocketseat/eslint-config/react', 'prettier'],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'prettier/prettier': 'error',
  },
}
