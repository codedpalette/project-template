import eslint from "@eslint/js"
import tsEslint from "typescript-eslint"
import prettierConfig from "eslint-config-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import simpleImportSort from "eslint-plugin-simple-import-sort"

export default tsEslint.config(
  {
    ignores: ["dist/**/*", ".yarn/**/*", "eslint.config.js", ".pnp.*"],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
)
