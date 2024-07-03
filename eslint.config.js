import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tsEslint from "typescript-eslint"
import prettierConfig from "eslint-config-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import compatPlugin from "eslint-plugin-compat"

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default tsEslint.config(
  {
    ignores: ["dist/**/*", ".yarn/**/*", "eslint.config.js", ".pnp.*"],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  ...fixupConfigRules(compat.extends("plugin:import/recommended")),
  ...fixupConfigRules(compat.extends("plugin:import/typescript")),
  ...fixupConfigRules(compatPlugin.configs["flat/recommended"]),
  prettierConfig,
  {
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/member-ordering": "warn",

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
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
    },
  },
)
