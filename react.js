module.exports = {
  parserOptions: {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-no-bind': [error, {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true
    }],
    'react/no-did-update-set-state': error,
    'react/no-unknown-property': error,
    'react/no-unused-prop-types': error,
    'react/prop-types': error,
    'react/react-in-jsx-scope': error
  }
};
