import { reactRouter } from "@react-router/dev/vite";
import { cloudflareTest } from "@cloudflare/vitest-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [reactRouter(), cloudflareTest({ wrangler: { configPath: "./wrangler.jsonc" } })],
        test: {
          name: "workers",
          include: ["test/workers/**/*.test.ts"],
        },
      },
      {
        esbuild: { jsx: "automatic" },
        test: {
          name: "unit",
          environment: "jsdom",
          include: ["test/unit/**/*.test.{ts,tsx}"],
          setupFiles: ["test/unit/setup.ts"],
        },
      },
    ],
  },
});
