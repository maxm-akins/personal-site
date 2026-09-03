import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

import { contact } from "../content";
import { Logo } from "../components/Logo";

const NAV = [
  { to: "/home", label: "Home" },
  { to: "/resume", label: "Résumé" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

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
      <span aria-hidden="true">{theme === "dark" ? "☾" : "☽"}</span>{" "}
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
            <NavLink key={to} to={to}>
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
        <span className="footer-sign">Thanks for scrolling —</span>
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
