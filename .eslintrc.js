module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:vue/essential', 'google', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
