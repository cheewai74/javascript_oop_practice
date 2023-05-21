/* eslint-disable immutable/no-mutation */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'immutable',
  ],
  rules: {
    'immutable/no-mutation': 2,
  },
};
