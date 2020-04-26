module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'simple-import-sort',
  ],
  extends: [
    'airbnb-typescript-prettier',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],

    'sort-imports': 0,
    'import/order': 0,

    'simple-import-sort/sort': ['error'],
  },
};
