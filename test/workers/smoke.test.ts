import { exports } from "cloudflare:workers";
import { expect, test } from "vitest";

test("GET / renders the home route", async () => {
  const res = await exports.default.fetch(new Request("https://example.com/"));
  expect(res.status).toBe(200);
  expect(await res.text()).toContain("Maxm Akins");
});

test("unknown path returns 404", async () => {
  const res = await exports.default.fetch(
    new Request("https://example.com/does-not-exist"),
  );
  expect(res.status).toBe(404);
});
