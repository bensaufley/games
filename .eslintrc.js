const { rules: importRules } = require('eslint-config-airbnb-base/rules/imports');

const dependencyRule = importRules['import/no-extraneous-dependencies'];

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

    'import/no-extraneous-dependencies': [
      dependencyRule[0],
      {
        ...dependencyRule[1],
        devDependencies: [
          ...dependencyRule[1].devDependencies,
          '**/webpack.config.ts',
        ],
      },
    ],
  },
};
