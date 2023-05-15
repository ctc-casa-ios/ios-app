const baseConfig = {
  extends: 'universe/native',
};

const overrides = {
  rules: {
    'no-console': 'error',
  },
};

module.exports = Object.assign({}, baseConfig, overrides);
