# Curio

Curio is a local-first prototype for a personal learning companion: a learner can choose a subject, get a simple learning path, work through short lessons, and track progress.

## Run it

Open `index.html` in a modern browser. No build step, dependencies, API keys, or server are required.

## CI/CD

The GitHub Actions workflow in `.github/workflows/ci.yml` checks JavaScript syntax and verifies local HTML assets and unique IDs on pushes to development branches and pull requests targeting `dev` or `main`. Work on a short-lived feature branch from `dev`, open a reviewed pull request into `dev`, then open a release pull request from `dev` to `main`. CI rejects release pull requests whose source branch is not `dev`. Merging into `main` triggers the Pages deployment workflow after validation.

### One-time GitHub branch protection

GitHub Actions YAML cannot prevent direct pushes to a branch. GitHub reports that rulesets and classic branch-protection rules are not enforced for this private repository on its current plan; enforcement requires moving the repository to a GitHub Team or Enterprise organization account. Until then, treat the workflow checks as advisory: review changes and confirm checks pass before merging, and do not merge a release PR unless its source is `dev`. A failing workflow check does not itself block a merge.

After upgrading, a repository administrator should create rulesets (or branch protection rules) for both `main` and `dev`:

1. Require changes through pull requests; disallow force pushes and branch deletion.
2. Require the **Validate static app** status check before merging to both branches.
3. Require at least one independent approval before merging to `main`.
4. Apply the rules to administrators as well, if supported and desired.

### GitHub Pages

1. In **Settings → Pages**, set the source to **GitHub Actions**.
2. Push a feature branch based on `dev` and open a pull request into `dev` so CI can validate changes.
3. Merge a reviewed release pull request from `dev` into `main`; the deployment workflow validates and publishes the static app.
4. A manual workflow dispatch is available for recovery, but deployment is guarded to run only when the selected ref is `main`.

The GitHub Pages workflow uploads only the static app files. It is not suitable for an AI backend or secrets.

## What works in this prototype

- Browse a few sample learning paths or create a path for a topic of your choice.
- Browse and search 96 topic ideas across 12 subject areas, then start a study path from the catalog.
- Switch between beginner, intermediate, and advanced material for five curated topics: linear equations, sleep, photography, special relativity, and affective computing.
- Follow links to source papers, books, open course videos, and institutional references where provided.
- Pick a starting level, work through a four-step learning path, and mark lessons complete.
- See progress, estimated learning time, and streaks update; progress is saved in this browser.
- Remove a topic and its local progress.
- Use the layout on desktop and mobile screens.
- See starting references on built-in sample topics.

Five topics have short level-adjusted lesson notes and curated starting references. Links are further-reading suggestions, not independent verification of every claim or expert review of the app's lesson text. Other catalog and custom topics remain study prompts without topic-specific researched content. This keeps the prototype honest and usable without an API key. See [BUSINESS_PLAN.md](./BUSINESS_PLAN.md) for the proposed next step: a source-grounded, tutor-led product.

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
