/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error only import
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  base: 'pokereact',
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "src/setupTests.js", // if you have any setup files
  },
});
