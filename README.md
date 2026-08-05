# Portfolio

Astro + Tailwind portfolio, auto-deployed to GitHub Pages via GitHub Actions.

## Edit your content

Everything you need to change lives in one place: `src/pages/index.astro`,
between the `EDIT ME` comments near the top — your name, blurb, links,
projects, and skills.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to GitHub Pages

1. Create a new GitHub repo (see the step-by-step in chat for naming rules).
2. In `astro.config.mjs`, set `site` to your Pages URL and `base` accordingly.
3. Push this project to the repo's `main` branch.
4. In the repo: **Settings → Pages → Source → GitHub Actions**.
5. Push again (or re-run the workflow) — the site builds and deploys
   automatically on every push to `main`.
