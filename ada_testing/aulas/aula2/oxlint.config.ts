import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import jest from "ultracite/oxlint/jest";

export default defineConfig({
  extends: [core, jest],
  ignorePatterns: core.ignorePatterns,
  // Owner preference: arrow-function components and no func-style restriction.
  rules: {
    "func-style": "off",
    "react/function-component-definition": "off",
  },
});
