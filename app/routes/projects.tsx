import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Projects — Maxm Akins" }];
}

export default function Projects() {
  return (
    <section className="stub">
      <span className="sec-num">02</span>
      <span className="lbl">Selected work</span>
      <h1 className="stub-title">Projects</h1>
      <p className="stub-body">
        [ Every project, written up at length — coming soon. ]
      </p>
      <span className="hand">still writing these up —</span>
    </section>
  );
}
