import { asc, desc } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

import { class_, project, skill, workExperience } from "./schema";

export type WorkExperienceItem = typeof workExperience.$inferSelect;
export type ProjectItem = typeof project.$inferSelect;
export type ClassItem = typeof class_.$inferSelect;
export type SkillItem = typeof skill.$inferSelect;

export async function getWorkExperiences(
  db: DrizzleD1Database,
): Promise<WorkExperienceItem[]> {
  return db.select().from(workExperience).orderBy(desc(workExperience.sortOrder));
}

export async function getProjects(
  db: DrizzleD1Database,
): Promise<ProjectItem[]> {
  return db.select().from(project).orderBy(desc(project.sortOrder));
}

export async function getFeaturedProjects(
  db: DrizzleD1Database,
  limit = 3,
): Promise<ProjectItem[]> {
  return db
    .select()
    .from(project)
    .orderBy(desc(project.sortOrder))
    .limit(limit);
}

export async function getClasses(db: DrizzleD1Database): Promise<ClassItem[]> {
  return db.select().from(class_).orderBy(asc(class_.id));
}

export async function getSkills(db: DrizzleD1Database): Promise<SkillItem[]> {
  return db.select().from(skill).orderBy(asc(skill.sortOrder));
}
