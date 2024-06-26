import { fixupConfigRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import reactRefresh from "react-refresh";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintPluginImport,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
