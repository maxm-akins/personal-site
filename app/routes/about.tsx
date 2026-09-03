import type { Route } from "./+types/about";
import { SectionHeader } from "../components/SectionHeader";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Under the hood — Maxm Akins" }];
}

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <p className="lbl">Under the hood</p>
          <h1 className="hero-name">How this site is built</h1>
          <span className="hand hero-note"> stacks on stacks on stacks </span>
        </div>

        <div className="hero-aside">
          <svg
            className="hero-spot"
            viewBox="0 0 240 260"
            role="img"
            aria-label="Hand-drawn sketch of two interlocking gears"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g stroke="currentColor" strokeWidth="3">
              <circle cx="96" cy="114" r="40" />
              <circle cx="96" cy="114" r="15" />
              <circle cx="150" cy="164" r="24" />
              <circle cx="150" cy="164" r="9" />
            </g>
            <g stroke="currentColor" strokeWidth="9" strokeLinecap="butt">
              <path d="M134 114L143 114M122.9 140.9L129.2 147.2M96 152L96 161M69.1 140.9L62.8 147.2M58 114L49 114M69.1 87.1L62.8 80.8M96 76L96 67M122.9 87.1L129.2 80.8" />
              <path d="M170.3 172.4L178.6 175.9M158.4 184.3L161.9 192.6M141.6 184.3L138.1 192.6M129.7 172.4L121.4 175.9M129.7 155.6L121.4 152.1M141.6 143.7L138.1 135.4M158.4 143.7L161.9 135.4M170.3 155.6L178.6 152.1" />
            </g>
            <path className="accent" strokeWidth="3" d="M148 50q22-22 42-13" />
            <path className="accent" strokeWidth="3" d="M184 30l8 4-2 9" />
            <g className="accent-fill">
              <circle cx="48" cy="56" r="4" />
              <circle cx="202" cy="122" r="3" />
            </g>
          </svg>
        </div>
      </section>

      <section className="section" aria-labelledby="stack">
        <SectionHeader num="01" label="The stack" id="stack" />
        <div className="sec-body">
          <p className="prose">
            <strong>Runtime</strong> — This site runs on React Router v8
            deployed to Cloudflare Workers. Dynamic content lives in Cloudflare
            D1 (SQLite), read through Drizzle on every request.
          </p>
          <p className="prose">
            <strong>UI</strong> — I wanted to go for a simple and welcoming UI
            design: Newsreader for reading, IBM Plex Mono for metadata, Caveat
            for the margin notes, a locked warm palette with two color modes,
            and "hand" drawn graphics per page.
          </p>
          <p className="prose">
            <strong>CI/CD</strong> — GitHub Actions and Wrangler with a workflow
            file you can read.
          </p>
          <p className="prose">
            <strong>Tests</strong> — Tests run against a real D1 in the real
            Workers runtime, not mocks, with a typecheck alongside; both gate
            every deploy. A green run means the queries work on Cloudflare, not
            just locally.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="why">
        <SectionHeader num="02" label="Why these choices" id="why" />
        <div className="sec-body">
          <p className="prose">
            <strong>D1 over a hosted standalone database</strong> — the content
            is read-only from the app's side and I maintain it by hand, so a
            separate server earns nothing here but overengineering...sometimes
            less is more.
          </p>
          <p className="prose">
            <strong>React Router over the alternatives</strong> — Honestly, I
            just wanted to try it. I didn't have any experience with React
            Router before and wanted to give it a shot. I like it.
          </p>
          <p className="prose">
            <strong>A visible CI pipeline</strong> — While it is incredibly
            simple, this is a good way of showing you, yes you, that I
            understand the CI/CD concept and can implement it. It also makes me
            feel good to see the green checkmark on every merge.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="ai">
        <SectionHeader num="03" label="AI disclosure" id="ai" />
        <div className="sec-body">
          <p className="prose">
            I built this with AI assistance. Why would I even lie and tell you
            it wasn't with how things are these days?
          </p>
          <p className="prose">
            AI was utilized mainly for refactoring my old website (which was
            written by hand, believe it or not), scaffolding the new design, and
            review. It was leveraged, not given free rein: the architecture, the
            decisions, design direction, and every commit and merge were my
            calls. Nothing shipped without me reading and thoroughly testing it.
          </p>
          <p className="prose">
            <q>It's called disclosure, you d***head!</q>
          </p>
          <p className="prose">
            If you know where this quote is from, please reach out and let me
            know. You don't even have to be interested in me for a job. I will
            just think it is very funny.
          </p>
        </div>
      </section>
    </>
  );
}
