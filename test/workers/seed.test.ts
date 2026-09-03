import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import { beforeAll, expect, test } from "vitest";

import {
  getClasses,
  getProjects,
  getSkills,
  getWorkExperiences,
} from "../../app/db/queries";

const db = drizzle(env.personal_site);

beforeAll(async () => {
  const statements = env.TEST_SEED.split(/;\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith("--"));
  for (const s of statements) await env.personal_site.prepare(s).run();
});

test("seed loads every work experience in résumé order", async () => {
  const rows = await getWorkExperiences(db);
  expect(rows).toHaveLength(5);
  expect(rows.map((r) => r.companyName)).toEqual([
    "Apple",
    "BNY",
    "GrayMatter Systems",
    "FACET Lab",
    "FACET Lab",
  ]);
  expect(rows[0].details).toHaveLength(3);
  expect(rows[0].details[0]).toContain("generative and agentic AI");
  expect(rows[1].details[0]).toContain("Shipped production features");
});

test("seed loads the project with both links", async () => {
  const rows = await getProjects(db);
  expect(rows).toHaveLength(1);
  expect(rows[0]).toMatchObject({
    name: "Personal Website",
    link: "https://github.com/maxm-akins/personal-site",
    webLink: "https://maxmakins.com",
  });
});

test("seed loads all skills, grouped by category via sort_order", async () => {
  const rows = await getSkills(db);
  expect(rows).toHaveLength(31);
  expect(rows[0]).toMatchObject({ name: "Python", category: "Languages" });
  expect(
    rows.find((r) => r.category === "Frameworks & Runtimes")?.name,
  ).toBe("React Router");
  expect(rows.at(-1)).toMatchObject({ name: "CI/CD", category: "Practices" });
});

test("class table is seeded empty", async () => {
  expect(await getClasses(db)).toEqual([]);
});
