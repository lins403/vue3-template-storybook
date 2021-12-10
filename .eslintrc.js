module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'off'
  }
}
