/*
 * Copyright (©) 08.10.2021, 16:01. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  "plugins": [
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  parser: "vue-eslint-parser",
  rules: {
    // eslint rules
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "comma-spacing": "error",
    "eol-last": "error",
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {"max": 2}
    ],
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "space-before-blocks": 2,
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-infix-ops": "error",
    "spaced-comment": [
      "warn",
      "always"
    ],
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-extra-semi': 2,
    eqeqeq: 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    camelcase: 0,
    'no-new': 0,
    indent: 'off',
    // typescript-eslint rules
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/explicit-function-return-type': 0,
    "@typescript-eslint/ban-ts-comment": ["off"],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prettier/prettier": [
      "warn",
      {
        "code": 120,
        "tabWidth": 4,
        "printWidth": 120,
        "singleQuote": true,
        "semi": false
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
