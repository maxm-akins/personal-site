import { NavLink, Outlet } from "react-router";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Résumé" },
  { to: "/about", label: "About" },
];

export default function Shell() {
  return (
    <>
      <nav className="nav">
        <span className="nav-brand">Maxm Akins</span>
        <div className="nav-links">
          {NAV.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </div>
        {/* theme toggle — task-005 */}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <span className="footer-sign">Thanks for scrolling —</span>
        <div className="footer-links">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Email</span>
        </div>
      </footer>
    </>
  );
}
