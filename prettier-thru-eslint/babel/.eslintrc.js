module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
