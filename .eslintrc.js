module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    DEBUG: false,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  // settings: {
  //   "import/resolver": {
  //     webpack: {
  //       config: {
  //         extensions:['.js', '.ts', '.tsx', '.scss'],
  //         modules: [
  //           path.resolve(__dirname, 'src'),
  //           path.resolve(__dirname, 'node_modules'),
  //         ],
  //       }
  //     }
  //   }
  // },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      2,
      {
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
  },
}
