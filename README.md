# Visionary Website

A portfolio site for a website-building business, with a dark cinematic
hero, four fixed pricing tiers ($500–$10,000), a portfolio grid, process
timeline, about, FAQ, and contact form. Built with React + Vite, plain CSS
(no framework), and scroll-triggered reveal animations. Fully responsive
from mobile up, with `prefers-reduced-motion` respected throughout.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel,
Netlify, Cloudflare Pages, GitHub Pages, or your own server).

Quickest path: install the Vercel or Netlify CLI, then run `vercel` or
`netlify deploy` from this folder — both auto-detect Vite projects.

### Deploying to GitHub Pages

GitHub Pages only serves static files — it can't run `npm run build` for
you, so pushing the raw `src/` folder as-is will show a blank page. This
repo includes a workflow (`.github/workflows/deploy.yml`) that builds and
deploys automatically:

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The workflow installs dependencies, runs `npm run build`, and publishes
the `dist/` folder — that's the only part that should ever go live.

If you'd rather deploy manually instead of using the workflow: run
`npm run build` locally, then push only the contents of the generated
`dist/` folder to your `gh-pages` branch (or whichever branch Pages is
configured to serve from) — never the source files directly.

## Things to customize before launch

- **Contact form**: `src/components/Contact.jsx` currently simulates a
  submission client-side (no backend is wired up). Point it at a real
  service — [Formspree](https://formspree.io), [Resend](https://resend.com),
  Netlify Forms, or your own API route — by replacing the `handleSubmit`
  function's `setTimeout` with an actual `fetch()` call.
- **Portfolio**: `src/components/Portfolio.jsx` has four placeholder
  project cards with generated mockup art. Swap in real screenshots and
  case-study links once you have client work to show.
- **Pricing copy**: tier names, prices, and feature lists live at the top
  of `src/components/Pricing.jsx` — edit freely as your packages evolve.
- **Fonts**: loaded from Google Fonts in `index.html` (Fraunces, Inter,
  JetBrains Mono). Swap the `<link>` tag if you'd rather self-host them.
- **Logo**: `src/components/Logo.jsx` is a hand-coded SVG mark + wordmark.
  Regenerate as a proper vector file (Figma/Illustrator) if you want a
  refined version down the line.

## Project structure

```
src/
  components/     one file per section (Nav, Hero, Pricing, etc.)
  hooks/
    useReveal.js  IntersectionObserver hook powering scroll animations
  index.css       design tokens (colors, type, spacing) + base styles
  App.jsx         assembles all sections
  main.jsx        React entry point
```

All colors, fonts, and spacing values are defined once as CSS custom
properties at the top of `src/index.css` — change a value there and it
updates everywhere it's used.
