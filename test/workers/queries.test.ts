import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import { beforeAll, expect, test } from "vitest";

import {
  getClasses,
  getProjects,
  getSkills,
  getWorkExperiences,
} from "../../app/db/queries";
import { project, skill, workExperience } from "../../app/db/schema";

const db = drizzle(env.personal_site);

beforeAll(async () => {
  await db.insert(workExperience).values([
    { companyName: "B Co", companyLocation: "X", title: "Dev", startDate: "2023", endDate: "2024", details: ["b1"], sortOrder: 1 },
    { companyName: "A Co", companyLocation: "Y", title: "Sr Dev", startDate: "2024", endDate: "Present", details: ["a1", "a2"], sortOrder: 2 },
  ]);
  await db.insert(project).values([
    { name: "P1", details: "d1", sortOrder: 1 },
    { name: "P2", link: "https://gh/p2", webLink: "https://p2", details: "d2", sortOrder: 2 },
    { name: "P3", details: "d3", sortOrder: 3 },
    { name: "P4", details: "d4", sortOrder: 4 },
  ]);
  await db.insert(skill).values([
    { name: "Zig", category: "Languages", sortOrder: 2 },
    { name: "Go", category: "Languages", sortOrder: 1 },
    { name: "Misc", sortOrder: 3 },
  ]);
});

test("getWorkExperiences: sort_order desc, details as string[]", async () => {
  const rows = await getWorkExperiences(db);
  expect(rows.map((r) => r.companyName)).toEqual(["A Co", "B Co"]);
  expect(rows[0].details).toEqual(["a1", "a2"]);
});

test("getProjects: sort_order desc, nullable link/web_link", async () => {
  const rows = await getProjects(db);
  expect(rows.map((r) => r.name)).toEqual(["P4", "P3", "P2", "P1"]);
  expect(rows.find((r) => r.name === "P1")?.link).toBeNull();
  expect(rows.find((r) => r.name === "P1")?.webLink).toBeNull();
  expect(rows.find((r) => r.name === "P2")?.webLink).toBe("https://p2");
});

test("getSkills: sort_order asc, nullable category", async () => {
  const rows = await getSkills(db);
  expect(rows.map((r) => r.name)).toEqual(["Go", "Zig", "Misc"]);
  expect(rows.find((r) => r.name === "Misc")?.category).toBeNull();
});

test("getClasses: empty until course rows are added", async () => {
  expect(await getClasses(db)).toEqual([]);
});
