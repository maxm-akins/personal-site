export function SectionHeader({
  num,
  label,
  id,
}: {
  num: string;
  label: string;
  id: string;
}) {
  return (
    <div className="sec-head">
      <span className="sec-num" aria-hidden="true">
        {num}
      </span>
      <h2 id={id} className="lbl sec-label">
        {label}
      </h2>
    </div>
  );
}
