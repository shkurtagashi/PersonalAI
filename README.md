# Curio

Curio is a local-first prototype for a personal learning companion: a learner can choose a subject, get a simple learning path, work through short lessons, and track progress.

## Run it

Open `index.html` in a modern browser. No build step, dependencies, API keys, or server are required.

## CI/CD

The GitHub Actions workflow in `.github/workflows/ci.yml` checks JavaScript syntax and verifies local HTML assets and unique IDs on pushes to `main` and pull requests targeting `main`.

To publish with GitHub Pages:

1. Create a GitHub repository and add it as this repository's `origin`.
2. Push the `main` branch so GitHub Actions can run CI.
3. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
4. After CI passes, open **Actions → Deploy to GitHub Pages → Run workflow** to publish manually.

Publishing is deliberately manual; pushing code does not make the site public. The deploy workflow validates the project and uploads only the static app files.

## What works in this prototype

- Browse a few sample learning paths or create a path for a topic of your choice.
- Pick a starting level, work through a four-step learning path, and mark lessons complete.
- See progress, estimated learning time, and streaks update; progress is saved in this browser.
- Remove a topic and its local progress.
- Use the layout on desktop and mobile screens.
- See starting references on built-in sample topics.

The linear-equations sample includes a written lesson. Built-in sample topics include starting references, not verified citations for every lesson statement. Custom topics currently produce a reusable learning framework and prompts; they do **not** produce researched sources, expert-reviewed explanations, or AI-generated subject content. This keeps the prototype honest and usable without an API key. See [BUSINESS_PLAN.md](./BUSINESS_PLAN.md) for the proposed next step: a source-grounded, tutor-led product.

## Project files

- `index.html` — app structure and views
- `styles.css` — responsive visual design
- `app.js` — interactions, learning-path templates, and local persistence
- `BUSINESS_PLAN.md` — product strategy, business model options, risks, and roadmap
- `TEAM.md` — proposed company structure, human approval gates, and setup checklist
- `.github/agents/` — six reusable Copilot custom-agent role profiles
- `.github/workflows/` — CI checks and manual GitHub Pages deployment
- `scripts/check-site.py` — dependency-free static asset and HTML ID check

The role profiles are selectable workspace agents in supported Copilot clients; they are not running employees, do not automatically collaborate, and are not wired into the learner app. See [TEAM.md](./TEAM.md) for role boundaries and what remains unbuilt.

## Before a public launch

Replace the local topic templates with a secure server-side tutor service, vetted content and citations, user accounts and data controls, age-appropriate safeguards, accessibility testing, and a reviewed privacy policy. Do not put AI-provider credentials in browser code.
