import { MONOGRAM_PATHS, MONOGRAM_VIEWBOX } from "./monogram";

export function Logo() {
  return (
    <svg
      className="logo"
      viewBox={MONOGRAM_VIEWBOX}
      role="img"
      aria-label="Maxm Akins"
      fill="currentColor"
      fillRule="evenodd"
    >
      {MONOGRAM_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
