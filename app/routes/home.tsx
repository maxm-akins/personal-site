import type { Route } from "./+types/home";
import { dbContext } from "../context";
import {
  getFeaturedProjects,
  getSkills,
  getWorkExperiences,
} from "../db/queries";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Maxm Akins" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  const db = context.get(dbContext);
  const [work, projects, skills] = await Promise.all([
    getWorkExperiences(db),
    getFeaturedProjects(db),
    getSkills(db),
  ]);
  return { work, projects, skills };
}

// Temporary unstyled dump of the D1 data — Phase 2 replaces this with the real UI.
export default function Home({ loaderData }: Route.ComponentProps) {
  const { work, projects, skills } = loaderData;
  return (
    <main>
      <h1>Maxm Akins</h1>

      <h2>Experience</h2>
      <ul>
        {work.map((w) => (
          <li key={w.id}>
            {w.title} — {w.companyName}, {w.companyLocation} ({w.startDate} –{" "}
            {w.endDate})
            {w.details.length > 0 && (
              <ul>
                {w.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            {p.name} — {p.details}
          </li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        {skills.map((s) => (
          <li key={s.id}>
            {s.name}
            {s.category ? ` (${s.category})` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}
