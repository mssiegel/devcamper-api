module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  plugins: ['import', 'jest'],
  env: {
    node: true,
    'jest/globals': true,
  },
  rules: {
    'linebreak-style': 0,
    semi: 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-return-await': 0,
    'func-names': 0,
    'prefer-destructuring': 0,
    'no-use-before-define': ['error', { functions: false }],
  },
}
