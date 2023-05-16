module.exports = {
  extends: ['eslint:recommended', 'plugin:react-native/all'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'error',
  },
};
