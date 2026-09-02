import type { WorkExperienceItem } from "../db/queries";

export function TimelineRow({
  item,
  showDetails = false,
}: {
  item: WorkExperienceItem;
  showDetails?: boolean;
}) {
  return (
    <div className="timeline-row">
      <div className="mono timeline-dates">
        {item.startDate} — {item.endDate}
      </div>
      <div>
        <div className="timeline-title">
          {item.title}{" "}
          <span className="timeline-company">/ {item.companyName}</span>
        </div>
        {showDetails && item.details.length > 0 && (
          <ul className="timeline-details">
            {item.details.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
