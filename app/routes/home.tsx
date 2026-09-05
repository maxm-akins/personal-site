import { Link } from "react-router";

import type { Route } from "./+types/home";
import { dbContext } from "../context";
import { getWorkExperiences } from "../db/queries";
import { aboutBlurb, educationSummary, heroEyebrow, name } from "../content";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Maxm Akins" }];
}

export async function loader({ context }: Route.LoaderArgs) {
  const db = context.get(dbContext);
  const workExperiences = await getWorkExperiences(db);
  return { currentRole: workExperiences[0] ?? null };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { currentRole } = loaderData;

  return (
    <section className="hero">
      <div className="hero-main">
        <p className="lbl">{heroEyebrow}</p>
        <h1 className="hero-name">{name}</h1>

        <p className="prose hero-about">{aboutBlurb}</p>

        <p className="mono hero-now">
          {currentRole && `${currentRole.title} at ${currentRole.companyName} · `}
          {educationSummary}
        </p>

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
      </div>

      <div className="hero-aside">
        <svg
          className="hero-spot"
          viewBox="19 7 210 208"
          role="img"
          aria-label="Hand-drawn desk scene with a laptop, notebook and coffee"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g stroke="currentColor" strokeWidth="3">
            <rect x="72" y="30" width="116" height="66" rx="8" />
            <path d="M52 96h156l16 22a5 5 0 0 1-4 8H40a5 5 0 0 1-4-8z" />
            <g transform="rotate(-6 70 176)">
              <rect x="44" y="148" width="54" height="60" rx="4" />
              <path d="M52 144v9M64 144v9M76 144v9M88 144v9" />
              <path d="M54 170h34M54 182h34M54 194h20" />
            </g>
            <path d="M158 164h46v26a15 15 0 0 1-15 15h-16a15 15 0 0 1-15-15z" />
            <path d="M204 171c13 0 13 18 0 18" />
          </g>
          <path className="accent" strokeWidth="3" d="M170 158q-7-10 0-20" />
          <path className="accent" strokeWidth="3" d="M187 158q-7-10 0-20" />
          <g className="accent-fill">
            <circle cx="54" cy="24" r="4" />
            <circle cx="88" cy="14" r="3" />
            <circle cx="26" cy="118" r="3" />
          </g>
        </svg>
      </div>
    </section>
  );
}
