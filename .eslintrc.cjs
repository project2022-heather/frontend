module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    '@emotion',
  ],
  'rules': {
    'new-cap': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off', // ファイル名とコンポーネント名を一致させることで解決させるので不要
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': [
      'error',
      {ignore: ['css']},
    ],
    'require-jsdoc': 'off',
    'react/display-name': 'off',
    'max-len': 'off',
    'no-tabs': 'off',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
  'settings': {
    'react': {
      version: 'detect',
    },
  },
};
