# Curio — draft company and agent operating model

**Curio is a working product name, not a confirmed company or registered entity.** No market research, name/trademark clearance, legal formation, hiring, or financial review has been performed. This document is a proposed operating model, not legal, tax, investment, or HR advice.

## Org chart

```text
Founder / CEO — human, accountable decision-maker
├── Academic Lead agent — curriculum, pedagogy, and content-quality gate
└── Technology Manager agent — technical direction and delivery coordination
    ├── Frontend Developer agent — learner-facing web experience
    └── Backend Developer agent — APIs, data, AI integration, and operations

People & HR agent — people-process adviser; reports to the human founder
Finance agent — planning and bookkeeping-preparation adviser; reports to the human founder
```

The six roles are workspace custom-agent profiles in `.github/agents/`. In supported Copilot clients, a user can select an agent from the agent picker and ask it to do that role's work. They are reusable instructions for AI sessions, **not six running employees, autonomous services, or a functioning multi-agent system**. They do not communicate with one another or take actions in external systems. The current web app does not invoke them. Delegation, shared memory, credentials, background jobs, or automatic approvals would require separate engineering and explicit testing.

## Role charters

| Agent | Accountable for | Typical deliverables | Must not do |
|---|---|---|---|
| **Academic Lead** | Learning outcomes, prerequisite maps, instructional quality, assessment design, source quality, and academic-integrity policy | Reviewed lesson brief, learning objective, misconception list, assessment rubric, cited content review | Invent facts or citations; claim expertise without evidence; publish unreviewed content; make high-stakes learner judgments |
| **Technology Manager** | Architecture, technical roadmap, delivery coordination, quality gates, reliability, accessibility, and technical risk | Scoped technical plan, decisions with trade-offs, acceptance criteria, release checklist, review of test evidence | Claim tests ran if they did not; expose secrets; approve a production release or weaken privacy/security gates |
| **Frontend Developer** | Accessible, responsive, learner-facing interface and client-side behavior | Small scoped UI changes, focused tests, accessibility notes, exact changed-file summary | Put API secrets in browser code; invent backend behavior; silently discard user data or add unrelated features |
| **Backend Developer** | Server-side APIs, identity, persistence, tutor-provider adapter, source retrieval, safety enforcement, observability, and cost controls | API/data design, implementation, tests, migration and operational notes | Put credentials in client code; collect unnecessary learner data; call a provider or external system without configured authorization |
| **People & HR** | Role descriptions, hiring plans, interview structure, onboarding, team practices, and policy drafts | Draft role scorecard, structured interview questions, onboarding checklist, policy options | Make or communicate hiring/firing decisions; handle sensitive employee records; present jurisdiction-dependent rules as legal advice |
| **Finance** | Budget scenarios, cost assumptions, runway model structure, pricing hypotheses, and bookkeeping checklists | Assumption-labeled spreadsheet/model brief, cost drivers, scenario comparisons, questions for an accountant | Move money, access banking, approve spending, file taxes, promise returns, or present estimates as actual results |

Each agent's instructions and tool permissions are deliberately bounded. Developer agents can edit and run project code; academic, HR, and finance profiles can read, research, and draft project materials but cannot run terminal commands. The profiles are not a substitute for human experts.

## Decision rights and review flow

1. **Founder sets the goal.** The human founder owns product direction, scope, budget, hiring, publication, and company decisions.
2. **Academic Lead defines the learning brief.** Each lesson starts with an audience, prerequisite, measurable objective, accepted source standard, and assessment plan.
3. **Technology Manager turns it into a delivery brief.** The manager proposes architecture and acceptance criteria; frontend and backend agents work only within the approved scope.
4. **Build and verify.** Developer agents make changes and report the exact commands and results. A reviewer checks the diff. No agent may claim unrun tests passed.
5. **Academic and product review.** Learning content is checked against its sources and objective; generated teaching stays labeled and reviewable.
6. **Human release gate.** The founder approves production deploys, external claims, data policy, provider contracts, spending, hiring, and any feature for minors.

An agent response should distinguish **verified facts**, **assumptions**, and **recommendations**; cite primary sources for external factual claims; report uncertainty and missing evidence; and ask for approval before any consequential action. Topic lessons should cite sources relevant to the specific claims: seminal contributors when relevant, peer-reviewed or scholarly work, and current authoritative references. A famous name is not a substitute for evidence, and citation counts must not be invented. In this repository the profiles only work with the tools and context made available by the selected Copilot harness.

## Lean startup structure

At the prototype stage, the human founder remains accountable for product, company operations, privacy, security, and go/no-go decisions. The agents can help draft and critique work; they do not count as staff, contractors, legal representatives, accountants, teachers, or a board. If the project advances, prioritize qualified human review for pedagogy, child safeguarding, privacy/security, accounting, and jurisdiction-specific legal matters before those risks become material.

## Company setup checklist — not yet completed

- Choose where the business will operate and get local legal/accounting advice on entity type, tax, founder ownership, and IP assignment.
- Check the working name, domain, and relevant trademarks before using it commercially. No clearance has been done.
- Define founder roles, ownership, decision rights, and agreements before bringing in co-founders or investors.
- Open appropriate business accounts and maintain an accountant-reviewed ledger; do not treat model-generated projections as books or filings.
- Set a written data inventory, retention/deletion policy, vendor review, incident plan, and privacy terms before collecting learner accounts or using AI providers.
- Before serving minors, obtain jurisdiction-specific privacy, consent, safeguarding, and education-policy review. The current prototype should be treated as an adult concept test.
- Create a real operating budget from measured hosting, model, content-review, support, legal, and accessibility costs. No revenue forecast or funding commitment is assumed here.

## Next operating step

Run five observed usability sessions with adult learners, record findings without unnecessary personal data, and ask the Academic Lead and Technology Manager profiles to produce separate review notes. The founder reconciles them and chooses the next milestone; this is a manual workflow, not an automated multi-agent run.

## Repository delivery

The repository includes GitHub Actions checks for pushes and pull requests to `dev` and `main`. Work should be reviewed into `dev`, then promoted by a release pull request from `dev` to `main`; Pages deploys from `main` after validation. The human repository owner must enable branch protection/rulesets requiring pull requests and the CI status check—workflow files alone cannot block direct pushes—and configure Pages to use GitHub Actions. CI and a local Git repository do not themselves configure GitHub protections or a production service.
