export function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <span className="lbl">{label}</span>
    </div>
  );
}
