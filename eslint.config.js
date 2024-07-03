import eslint from "@eslint/js"
import tsEslint from "typescript-eslint"
import prettierConfig from "eslint-config-prettier"

export default tsEslint.config({
  extends: [
    eslint.configs.recommended,
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    prettierConfig,
  ],
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  ignores: ["dist/**/*", ".yarn/**/*", "eslint.config.js", ".pnp.*"],
})
