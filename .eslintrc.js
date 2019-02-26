module.exports = {
  env: {
    browser: true,
    es6: true,
    node:true
  },

  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": 1,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
  },
};
