import { Link } from "react-router";

import type { Route } from "./+types/home";
import { dbContext } from "../context";
import {
  getClasses,
  getFeaturedProjects,
  getSkills,
  getWorkExperiences,
} from "../db/queries";
import {
  aboutBlurb,
  contact,
  education,
  heroEyebrow,
  heroTagline,
  name,
} from "../content";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineRow } from "../components/TimelineRow";
import { ProjectCard } from "../components/ProjectCard";
import { SkillGroup, groupByCategory } from "../components/SkillGroup";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Maxm Akins" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  const db = context.get(dbContext);
  const [featuredProjects, workExperiences, skills, classes] = await Promise.all([
    getFeaturedProjects(db, 3),
    getWorkExperiences(db),
    getSkills(db),
    getClasses(db),
  ]);
  return { featuredProjects, workExperiences, skills, classes };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featuredProjects, workExperiences, skills } = loaderData;
  const skillGroups = groupByCategory(skills);

  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <p className="lbl">{heroEyebrow}</p>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-tagline">{heroTagline}</p>

          <div className="hero-cta">
            <Link to="/resume" className="mono cta-box">
              Read the résumé →
            </Link>
            <span className="hand cta-aside">and grab the PDF</span>
            <svg
              className="cta-arrow"
              viewBox="0 0 44 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 4C10 14 22 22 40 24" />
              <path d="M31 26l9-2-2-9" />
            </svg>
          </div>

          <div className="mono hero-links">
            <a href={contact.github}>GitHub</a>
            <a href={contact.linkedin}>LinkedIn</a>
            <a href={`mailto:${contact.email}`}>Email</a>
          </div>
        </div>

        <div className="hero-aside">
          <svg
            className="hero-spot"
            viewBox="0 0 240 260"
            role="img"
            aria-label="Hand-drawn desk sketch"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g stroke="currentColor" strokeWidth="3">
              <rect x="34" y="120" width="172" height="104" rx="10" />
              <path d="M34 150h172" />
              <path d="M70 120V96c0-8 6-14 14-14h72c8 0 14 6 14 14v24" />
              <circle cx="120" cy="186" r="16" />
              <path d="M120 176v10l7 7" />
            </g>
            <path className="accent" strokeWidth="3" d="M150 70q20-26 44-18" />
            <path className="accent" strokeWidth="3" d="M188 46l8 4-2 9" />
            <g className="accent-fill">
              <circle cx="58" cy="58" r="4" />
              <circle cx="92" cy="40" r="3" />
              <circle cx="46" cy="92" r="3" />
            </g>
          </svg>
        </div>
      </section>

      <section className="section">
        <SectionHeader num="00" label="About" />
        <div className="sec-body">
          <p className="prose">{aboutBlurb}</p>
        </div>
      </section>

      <section className="section">
        <SectionHeader num="01" label="Experience" />
        <div className="sec-body timeline">
          {workExperiences.map((role) => (
            <TimelineRow key={role.id} item={role} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader num="02" label="Selected work" />
        <div className="sec-body project-grid">
          {featuredProjects.map((proj) => (
            <ProjectCard key={proj.id} item={proj} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader num="03" label="Education" />
        <div className="sec-body">
          <div className="edu-school">{education.school}</div>
          <div className="mono edu-meta">
            {education.degree} · {education.years} · {education.honors}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader num="04" label="Skills" />
        <div className="sec-body skill-list">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </section>
    </>
  );
}
