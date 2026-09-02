import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Maxm Akins — under construction" }];
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-sky-100 p-8 text-center dark:bg-slate-900">
      <svg
        viewBox="0 0 200 200"
        className="w-56 max-w-full"
        role="img"
        aria-label="A traffic cone"
      >
        <g className="text-slate-300 dark:text-slate-700" fill="currentColor">
          <ellipse cx="100" cy="170" rx="58" ry="9" />
        </g>
        <g className="chips" fill="#fbbf24">
          <rect x="32" y="50" width="11" height="11" rx="2" />
          <circle cx="162" cy="44" r="5" />
          <rect x="150" y="80" width="9" height="9" rx="2" />
        </g>
        <g className="cone">
          <rect x="48" y="152" width="104" height="20" rx="6" fill="#c2410c" />
          <path
            d="M100 38c4 0 7 2 8 7l27 102c1 5-2 8-7 8H72c-5 0-8-3-7-8L92 45c1-5 4-7 8-7Z"
            fill="#f97316"
          />
          <path d="M87 80h26l4 17H83Z" fill="#fff" />
          <path d="M80 112h40l5 20H75Z" fill="#fff" />
        </g>
      </svg>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Website is under construction
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Something new is being built here — check back soon.
        </p>
      </div>
    </main>
  );
}
