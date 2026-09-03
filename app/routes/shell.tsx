import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

import { contact } from "../content";
import { Logo } from "../components/Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Résumé" },
  { to: "/about", label: "Under the hood" },
];

function ScrollSign() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <span
      className="footer-sign"
      style={{ visibility: scrolled ? "visible" : "hidden" }}
    >
      Thanks for scrolling ;)
    </span>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {}
    const media =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    const current =
      stored ??
      document.documentElement.dataset.theme ??
      (media ? "dark" : "light");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="mono theme-toggle"
      onClick={toggle}
      aria-pressed={theme === "dark"}
    >
      <svg
        className="tt-icon"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <>
            <path
              d="M20.5 14.5A8 8 0 0 1 9.5 3.5 8 8 0 1 0 20.5 14.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              className="tt-star"
              d="M17.6 3.1l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7z"
              stroke="none"
            />
          </>
        ) : (
          <g fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="4.3" />
            <path d="M12 2.4v2.6M12 19v2.6M2.4 12h2.6M19 12h2.6M5 5l1.9 1.9M17.1 17.1 19 19M19 5l-1.9 1.9M6.9 17.1 5 19" />
          </g>
        )}
      </svg>
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}

export default function Shell() {
  return (
    <>
      <nav className="nav">
        <Link to={NAV[0].to} className="nav-brand" aria-label="Home">
          <Logo />
        </Link>
        <div className="nav-links">
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <ScrollSign />
        <div className="footer-links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}
