import js from "@eslint/js"
import globals from "globals"
import runePlugin from "rune-sdk/eslint.js"
import tseslint from "@typescript-eslint/eslint-plugin" // Explicitly import the plugin
import pluginReactHooks from "eslint-plugin-react-hooks"
import prettier from "eslint-plugin-prettier/recommended"

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  js.configs.recommended,
  ...runePlugin.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@typescript-eslint": tseslint, // Add the TypeScript plugin
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn", // Enable the specific rule
    },
  },
  prettier,
]
