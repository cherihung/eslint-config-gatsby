module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'babel',
  ],
  rules: {
    // babel plugin
    'babel/object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'babel/new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      capIsNewExceptions: ['Immutable', 'Arc'],
    }],
    'babel/flow-object-type': 'off',
    'babel/no-invalid-this': 'off',
    'babel/semi': 'off',
  },
};
