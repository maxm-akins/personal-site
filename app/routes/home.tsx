import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New site in progress" }];
}

export default function Home() {
  return (
    <main className="holding">
      <p className="holding-label">Under construction</p>
      <h1>New site in progress</h1>
      <svg
        className="holding-spot"
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
      <p className="holding-note">- back soon -</p>
    </main>
  );
}
