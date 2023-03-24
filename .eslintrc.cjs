module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "prettier",
    "plugin:react/jsx-runtime"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/no-unknown-property": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off"
  }
}
