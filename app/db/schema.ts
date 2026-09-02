import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const workExperience = sqliteTable("work_experience", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("company_name").notNull(),
  companyLocation: text("company_location").notNull(),
  title: text("title").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  details: text("details", { mode: "json" }).$type<string[]>().notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const project = sqliteTable("project", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  link: text("link"),
  webLink: text("web_link"),
  details: text("details").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const class_ = sqliteTable("class", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  code: text("code").notNull(),
  term: text("term").notNull(),
  grade: text("grade").notNull(),
  details: text("details", { mode: "json" }).$type<string[]>(),
});

export const skill = sqliteTable("skill", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category"),
  sortOrder: integer("sort_order").notNull().default(0),
});
