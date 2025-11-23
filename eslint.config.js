import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

// shared rules for both frontend and backend
const sharedRules = {
  "no-unused-vars": [
    "error",
    { varsIgnorePattern: "^[A-Z_]", argsIgnorePattern: "^_" },
  ],
};

export default defineConfig([
  globalIgnores(["**/dist", "**/node_modules", "**/build"]),

  // frontend configuration
  {
    files: ["frontend/**/*.{js,jsx}"],
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: sharedRules,
  },

  // backend configuration
  {
    files: ["backend/**/*.js"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: sharedRules,
  },
]);
