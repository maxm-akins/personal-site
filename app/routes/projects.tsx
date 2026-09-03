import { redirect } from "react-router";

import type { Route } from "./+types/projects";
import { dbContext } from "../context";
import { getProjects } from "../db/queries";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Projects — Maxm Akins" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  // Projects tab is parked until the write-ups are ready — remove this line to restore.
  throw redirect("/");
  const db = context.get(dbContext);
  const projects = await getProjects(db);
  return { projects };
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <p className="lbl">Projects</p>
          <h1 className="hero-name">Things I've built</h1>
          <span className="hand hero-note">just the one worth showing, so far —</span>
        </div>

        <div className="hero-aside">
          <svg
            className="hero-spot"
            viewBox="0 0 240 260"
            role="img"
            aria-label="Hand-drawn sketch of a folder"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g stroke="currentColor" strokeWidth="3">
              <path d="M40 76h56l16 20h88a8 8 0 0 1 8 8v104a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V84a8 8 0 0 1 8-8z" />
              <path d="M32 128h176" />
            </g>
            <path className="accent" strokeWidth="3" d="M150 54q22-24 44-14" />
            <path className="accent" strokeWidth="3" d="M188 32l7 3-1 9" />
            <g className="accent-fill">
              <circle cx="58" cy="48" r="4" />
              <circle cx="92" cy="34" r="3" />
              <circle cx="44" cy="196" r="3" />
            </g>
          </svg>
        </div>
      </section>

      <section className="section" aria-labelledby="work">
        <SectionHeader num="01" label="Selected work" id="work" />
        <ul className="sec-body project-grid">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} item={proj} />
          ))}
        </ul>
      </section>
    </>
  );
}
