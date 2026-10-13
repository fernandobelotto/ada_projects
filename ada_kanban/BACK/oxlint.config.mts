import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import jest from "ultracite/oxlint/jest";
import nestjs from "ultracite/oxlint/nestjs";

export default defineConfig({
  extends: [core, nestjs, jest],
  ignorePatterns: core.ignorePatterns,
  // Owner preference: arrow-function components and no func-style restriction.
  rules: {
    "func-style": "off",
    "react/function-component-definition": "off",
  },
});
