import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { expect, test } from "vitest";

import { MONOGRAM_PATHS, MONOGRAM_VIEWBOX } from "../../app/components/monogram";

test("public/favicon.svg geometry matches the shared monogram module", () => {
  const svg = readFileSync(
    resolve(process.cwd(), "public/favicon.svg"),
    "utf8",
  );
  const ds = [...svg.matchAll(/<path\s+d="([^"]+)"/g)].map((m) => m[1]);

  expect(ds).toEqual(MONOGRAM_PATHS);
  expect(svg).toContain(`viewBox="${MONOGRAM_VIEWBOX}"`);
});
