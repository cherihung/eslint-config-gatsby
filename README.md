# eslint-config-gatsby

ESLint rule configuration for Gatsby starter that I'm working on.
http://eslint.org/docs/rules/

Plugins Used:
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

## Usage

Install the configs by running:

```sh
npm install --save-dev eslint eslint-config-gatsby
```

The plugins and parser used are dependencies of this project. No need to specify them separately in your project.

Then add the extends to your `.eslintrc.js` to use all the rules:

```js
module.exports = {
  extends: ['gatsby'],
  rules: {
      //...
  }
}
```

Or specify only the pieces you want to extend:

```js
module.exports = {
  extends: [
   'gatsby/core',
   'gatsby/import',
   'gatsby/babel',
   'gatsby/jsxally',
   'gatsby/react'
  ],
  rules: {
    //...
  }
}
```
