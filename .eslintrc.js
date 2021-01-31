module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0, { ignore: 0, customValidators: 0, skipUndeclared: 0 }],
    'react/jsx-props-no-spreading': [0, {
      html: 'ignore', custom: 'ignore', explicitSpread: 'ignore', exceptions: [],
    }],
  },
};
