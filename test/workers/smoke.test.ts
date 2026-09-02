import { exports } from "cloudflare:workers";
import { expect, test } from "vitest";

test("GET / renders the holding page", async () => {
  const res = await exports.default.fetch(new Request("https://example.com/"));
  expect(res.status).toBe(200);
  const html = await res.text();
  expect(html).toContain("Under construction");
  expect(html).toContain("New site in progress");
});

test("unknown path returns 404", async () => {
  const res = await exports.default.fetch(
    new Request("https://example.com/does-not-exist"),
  );
  expect(res.status).toBe(404);
});
