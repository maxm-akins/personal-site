import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About — Maxm Akins" }];
}

export default function About() {
  return (
    <section className="stub">
      <span className="sec-num">00</span>
      <span className="lbl">Colophon</span>
      <h1 className="stub-title">About</h1>
      <p className="stub-body">
        [ How this site is built, and why — coming soon. ]
      </p>
      <span className="hand">more on this soon —</span>
    </section>
  );
}
