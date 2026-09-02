import { env } from "cloudflare:workers";
import { RouterContextProvider } from "react-router";
import { drizzle } from "drizzle-orm/d1";
import { sql } from "drizzle-orm";
import { expect, test } from "vitest";

import { dbContext } from "../../app/context";

test("a loader can read dbContext and query D1", async () => {
  const context = new RouterContextProvider();
  context.set(dbContext, drizzle(env.personal_site));

  const db = context.get(dbContext);
  const row = await db.get<{ one: number }>(sql`select 1 as one`);

  expect(row).toEqual({ one: 1 });
});
