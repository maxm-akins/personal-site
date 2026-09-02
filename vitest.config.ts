import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          reactRouter(),
          cloudflareTest(async () => ({
            wrangler: { configPath: "./wrangler.jsonc" },
            miniflare: {
              bindings: {
                TEST_MIGRATIONS: await readD1Migrations(
                  path.join(import.meta.dirname, "drizzle"),
                ),
              },
            },
          })),
        ],
        test: {
          name: "workers",
          include: ["test/workers/**/*.test.ts"],
          setupFiles: ["test/workers/apply-migrations.ts"],
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
