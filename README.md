# maxmakins.com

My résumé / portfolio site. The stack is part of the point — a small, current
edge deployment rather than a static export.

**[maxmakins.com](https://maxmakins.com)** · [Under the hood](https://maxmakins.com/about)

## Stack

- **[React Router v8](https://reactrouter.com)** (framework mode) on **Cloudflare
  Workers** — SSR at the edge, route-level loaders, no client-side data fetching.
- **[Drizzle](https://orm.drizzle.team) + Cloudflare D1** (SQLite) — résumé
  content lives in the database and is queried live on every request. No CMS and
  no admin UI: content is edited with console SQL.
- **Vitest** via `@cloudflare/vitest-plugin` (real D1 bindings in the `workerd`
  runtime) + Testing Library; Vite 7 build.
- **GitHub Actions → Wrangler** for CI/CD. Push to `main` runs typecheck, tests
  and build, then applies D1 migrations and deploys.

## Layout

```
app/
  routes/       home, resume, projects, about, shell (nav + footer layout)
  components/    D1-item-typed presentational components
  db/            schema.ts (4 tables) · queries.ts (typed getter seam)
  content.ts     static copy — name, education, contact; everything else is D1
  app.css        "margin notes" theme: tokens on :root, light + dark
workers/app.ts   request handler; wires the D1 binding into a RouterContext
drizzle/         generated migrations (tracked)
seed.sql         re-runnable content seed
test/            workers/ (real D1) · unit/ (jsdom + RTL)
```

Components import types and getters from `app/db/queries.ts`, never `drizzle-orm`
directly.

## Develop

```bash
npm install
npm run dev          # dev server against a local D1
npm run typecheck    # wrangler types + react-router typegen + tsc
npm test             # all Vitest projects
npm run build
```

Seed the local database:

```bash
npx wrangler d1 execute personal-site --local --file=seed.sql
```

## Content

Experience, skills and projects are rows in D1 — edit `seed.sql` and re-apply it,
or run SQL directly against the remote database:

```bash
npx wrangler d1 execute personal-site --remote --command="UPDATE work_experience SET ..."
```

Education and contact details are strings in `app/content.ts`. The downloadable
résumé is a static asset at `public/Maxm_Akins_Resume.pdf`.

## Deploy

Automatic on push to `main` (`.github/workflows/ci.yml`). Manual: `npm run deploy`.
