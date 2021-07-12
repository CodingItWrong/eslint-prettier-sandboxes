module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
};
