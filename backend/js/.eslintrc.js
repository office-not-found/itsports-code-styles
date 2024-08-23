module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["public/**", "build/**", "dist/**"],
  overrides: [
    {
      files: ["*.ts"],

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "max-len": ["error", { code: 100, tabWidth: 4 }],
    "keyword-spacing": ["error", { after: true }],
    "eol-last": "error",
    indent: ["error", 4],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "prefer-promise-reject-errors": 2,
    curly: "on",
    "comma-dangle": ["error", "never"],
    "comma-spacing": "error",
    "comma-style": "error",
    "quote-props": ["error", "consistent"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "space-before-blocks": ["error", "always"],
    "spaced-comment": ["error", "always"],
    "prefer-const": ["error", { destructuring: "all" }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "switch-colon-spacing": "error",
    "operator-linebreak": ["error", "after"],
    "no-useless-call": "error",
    semi: ["error", "always"],
    "no-trailing-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { max: 2 }],
    "no-return-await": "error",
  },
};
