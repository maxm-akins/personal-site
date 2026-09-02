import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Résumé — Maxm Akins" }];
}

export default function Resume() {
  return (
    <section className="stub">
      <span className="sec-num">01</span>
      <span className="lbl">Full history</span>
      <h1 className="stub-title">Résumé</h1>
      <p className="stub-body">
        [ The full résumé on-site, plus a PDF to download — coming soon. ]
      </p>
      <span className="hand">the PDF's on its way —</span>
    </section>
  );
}
