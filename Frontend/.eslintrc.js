// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Versión de ECMAScript que deseas usar
    sourceType: 'module', // Utiliza "module" si estás utilizando ES Modules
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  rules: {
    // Aquí puedes personalizar tus reglas de ESLint
  },
};
