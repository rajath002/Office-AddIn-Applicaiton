import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/testSetup.ts"],
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*.tsx"],
    },
  },
});
