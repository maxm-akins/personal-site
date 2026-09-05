import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Maxm Akins is a software engineer based in Austin, TX. Résumé and notes on how this site is built."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let label = "Error";
  let headline = "Something broke";
  let details = "An unexpected error occurred. Try again in a moment.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      label = "404";
      headline = "This page wandered off";
      details =
        "The page you asked for isn't here — it may have moved, or never existed.";
    } else {
      label = String(error.status);
      details = error.statusText || details;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="error-page">
      <p className="lbl">{label}</p>
      <h1 className="hero-name">{headline}</h1>
      <p className="prose hero-about">{details}</p>
      <a className="hand hero-note" href="/">
        take me home →
      </a>
      <svg
        className="error-spot"
        viewBox="0 0 200 200"
        role="img"
        aria-label="Hand-drawn signpost beside a winding path"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="currentColor" strokeWidth="3">
          <path d="M72 176h56" />
          <path d="M100 176V56" />
          <path d="M100 70h52l13 14-13 14h-52z" />
          <path d="M100 108H48l-13 14 13 14h52z" />
        </g>
        <path
          className="accent"
          strokeWidth="3"
          strokeDasharray="1 10"
          d="M44 188q34-6 26-40t34-38"
        />
        <g className="accent-fill">
          <circle cx="150" cy="64" r="4" />
          <circle cx="46" cy="150" r="3" />
        </g>
      </svg>
      {stack && (
        <pre className="error-trace mono">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
