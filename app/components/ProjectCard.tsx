import type { ProjectItem } from "../db/queries";

export function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <div className="project-card">
      <div className="project-name">{item.name}</div>
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
    </div>
  );
}
