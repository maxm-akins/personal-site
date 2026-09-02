import { env } from "cloudflare:workers";
import { expect, test } from "vitest";

async function columns(table: string) {
  const { results } = await env.personal_site
    .prepare(`PRAGMA table_info(${table})`)
    .all<{ name: string }>();
  return results.map((c) => c.name).sort();
}

test.each([
  [
    "work_experience",
    ["company_location", "company_name", "details", "end_date", "id", "sort_order", "start_date", "title"],
  ],
  ["project", ["details", "id", "link", "name", "sort_order", "web_link"]],
  ["class", ["code", "details", "grade", "id", "name", "term"]],
  ["skill", ["category", "id", "name", "sort_order"]],
])("%s has the expected columns", async (table, expected) => {
  expect(await columns(table)).toEqual(expected);
});
