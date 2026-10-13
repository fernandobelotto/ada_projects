import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, react],
  ignorePatterns: core.ignorePatterns,
  // Owner preference: arrow-function components and no func-style restriction.
  rules: {
    "func-style": "off",
    "react/function-component-definition": "off",
  },
});
