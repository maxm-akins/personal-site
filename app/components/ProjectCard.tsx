import type { ProjectItem } from "../db/queries";

export function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <li className="project-card">
      <h3 className="project-name">{item.name}</h3>
      <p className="project-details">{item.details}</p>
      <div className="mono project-links">
        {item.link && (
          <a href={item.link} className="project-link">
            code
          </a>
        )}
        {item.webLink && (
          <a href={item.webLink} className="project-link">
            live
          </a>
        )}
      </div>
    </li>
  );
}
