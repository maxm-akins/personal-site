import type { Route } from "./+types/resume";
import { dbContext } from "../context";
import { getSkills, getWorkExperiences } from "../db/queries";
import { education, name } from "../content";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineRow } from "../components/TimelineRow";
import { SkillGroup, groupByCategory } from "../components/SkillGroup";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Résumé — Maxm Akins" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  const db = context.get(dbContext);
  const [workExperiences, skills] = await Promise.all([
    getWorkExperiences(db),
    getSkills(db),
  ]);
  return { workExperiences, skills };
}

export default function Resume({ loaderData }: Route.ComponentProps) {
  const { workExperiences, skills } = loaderData;
  const skillGroups = groupByCategory(skills);

  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <p className="lbl">Résumé</p>
          <div className="hero-namerow">
            <h1 className="hero-name">{name}</h1>
            <img className="avatar" src="/headshot.jpg" alt={name} width={88} height={88} />
          </div>

          <div className="hero-cta">
            <a
              className="mono cta-box"
              href="/Maxm_Akins_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF ↓
            </a>
            <span className="hand cta-aside">download, if you prefer</span>
          </div>
        </div>

        <div className="hero-aside">
          <svg
            className="hero-spot resume-spot"
            viewBox="12 11 146 182"
            role="img"
            aria-label="Hand-drawn sketch of a sheet of paper"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g stroke="currentColor" strokeWidth="3">
              <path d="M28 14h84l32 32v134a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10V24a10 10 0 0 1 10-10z" />
              <path d="M112 14v32h32" />
              <path d="M42 74h84M42 94h84M42 114h84M42 134h56" />
            </g>
            <path className="accent" strokeWidth="3" d="M96 158q18-6 34 6" />
            <path className="accent" strokeWidth="3" d="M124 162l8-2 1 9" />
            <g className="accent-fill">
              <circle cx="28" cy="30" r="4" />
              <circle cx="18" cy="52" r="3" />
              <circle cx="152" cy="110" r="3" />
            </g>
          </svg>
        </div>
      </section>

      <section className="section" aria-labelledby="experience">
        <SectionHeader num="01" label="Experience" id="experience" />
        <ul className="sec-body timeline">
          {workExperiences.map((role) => (
            <TimelineRow key={role.id} item={role} showDetails />
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="education">
        <SectionHeader num="02" label="Education" id="education" />
        <div className="sec-body">
          {education.map((e) => (
            <div key={e.school} className="edu-item">
              <h3 className="edu-school">{e.school}</h3>
              <p className="mono edu-meta">
                {e.degree} · {e.years} · GPA {e.gpa}
              </p>
              <p className="mono edu-meta">{e.honors}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="skills">
        <SectionHeader num="03" label="Skills" id="skills" />
        <ul className="sec-body skill-list">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              skills={group.skills}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
