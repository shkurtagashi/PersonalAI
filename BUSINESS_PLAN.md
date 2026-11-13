# Curio — business and product plan

## Executive summary

**Idea:** A personal teacher that helps people learn almost any subject at a time and pace that fits their life, from school foundations through university-level study and lifelong learning.

**Promise:** “Understand what you want to understand, one useful step at a time.”

**Product:** A tutor-led learning space that turns a learner's goal, current knowledge, time, and preferred way of learning into a sequenced path. It explains concepts, asks questions, gives practice and feedback, checks understanding, and adjusts the next lesson. A learner should be able to ask “why?”, change level, request another example, or continue later without starting over.

**Stage:** The included application is a front-end proof of concept. It demonstrates topic selection, a four-part learning path, a sample authored lesson, progress tracking, and local saving. It does not yet have generative AI, a content library, user accounts, or learning analytics. Treat demand, pricing, and learning-outcome estimates below as hypotheses to test, not established results.

## The problem and opportunity

- Students often get a fixed explanation at a fixed pace, even when their gaps and questions differ.
- People learning independently may not know what to study next or whether they actually understand a topic.
- Existing resources can be excellent but fragmented across textbooks, videos, practice sites, and forums.
- A general-purpose chatbot can answer questions but may not provide a coherent course, reliable sourcing, durable progress, or feedback grounded in the learner's level.

The opportunity is to make high-quality, structured tutoring more accessible—not to claim that one model already knows every subject or can replace teachers.

## Who it is for

**Initial beachhead (recommended):** Adult self-directed learners and university students preparing for an exam, filling a knowledge gap, or learning a subject for work. They can choose a subject and judge whether the experience is helpful, and direct-to-consumer testing can happen without a school procurement cycle.

**Expansion segments:**

1. Middle- and high-school learners needing a patient practice partner.
2. Families supporting a learner at home.
3. University students seeking explanations, revision plans, and practice.
4. Adult learners exploring interests or changing careers.
5. Teachers who want differentiated explanations and practice materials.
6. Schools, universities, libraries, employers, and tutoring organizations.

**Jobs to be done:** “Help me understand this confusing idea”; “make me a realistic study plan”; “help me practice without giving away the answer”; “show me how this connects to what I already know”; “help me know what to learn next.”

## Product experience

1. **Set a goal:** Enter a topic, intended outcome, deadline (optional), available time, and starting level. Permit a plain-language answer such as “I want to understand derivatives before my exam.”
2. **Diagnose gently:** Ask a few optional questions or use a short, low-stakes check. Never treat a guess as a precise assessment.
3. **Build a path:** Break the goal into prerequisites, concepts, examples, practice, and a review. Let the learner reorder, skip, or ask for a different route.
4. **Teach interactively:** Explain one concept at a time; offer plain-language, rigorous, visual, or worked-example modes; check for understanding; give hints before solutions.
5. **Practice and adapt:** Use short exercises, varied examples, spaced review, and explicit feedback. If the learner is stuck, find the prerequisite gap rather than repeating the same explanation.
6. **Track and reflect:** Show demonstrated skills and next steps, not just time spent or an opaque mastery percentage. Offer a learner-controlled recap and export.

**Prototype today:** a searchable, filterable catalog of 96 topic ideas across 12 broad subject areas; sample learning paths; a written linear-equations lesson; generic study scaffolds for user-entered or catalog topics; sequential completion; a progress view; and browser-local saving. Catalog entries are discovery prompts, not evidence that Curio has developed or sourced all those lessons. The first AI-backed release must clearly distinguish generated instruction from verified source material.

**Source standard:** Every published topic path should expose topic-relevant references, preferring seminal contributions when pertinent, scholarly books or peer-reviewed research, and current authoritative textbooks or institutional sources. Cite the work that supports a specific claim, not a famous name as decoration. Verify bibliographic details and links, identify popular synthesis separately from peer-reviewed evidence, note disagreement or updates, and never invent citation counts. The current starter paths display reference starting points; user-entered topics explicitly have no researched citations yet and are only generic study prompts.

## Differentiation and defensibility

- A coherent path and memory of learning goals, not only a one-off answer.
- Evidence of understanding from learner work, not streaks or chatbot engagement alone.
- Explanations and practice tailored to level, language, accessibility needs, and available time.
- Transparent references and uncertainty where factual claims matter.
- A respectful tutor that supports productive struggle instead of doing assessed work for the learner.
- Over time, a reviewed curriculum map, evaluation suite, teacher workflows, and trusted integrations can improve quality. User data should not be treated as a moat or used for model training without informed consent.

## Business model options

These are alternatives to test; avoid launching all of them at once.

| Model | Potential upside | Trade-offs | Best time to test |
|---|---|---|---|
| Free tier + individual subscription | Simple self-serve start; recurring revenue | Needs a clear paid value and reliable inference costs | Early consumer pilot |
| Usage credits / pay-as-you-go | Transparent cost linkage; suits occasional use | Can make learners anxious about asking questions | If usage varies widely |
| One-time course or exam-prep purchase | Easy to understand and budget | Less suitable for open-ended learning; content upkeep | Focused exam or certificate pilots |
| Family plan | Serves multiple learners; parent tools may add value | Stronger child-safety, privacy, and consent obligations | After safety and household controls mature |
| Teacher plan | Classroom utility and word of mouth | Requires classroom features, accessibility, and support | Teacher discovery and small pilots |
| School / university licensing | Larger contracts and institutional fit | Long sales cycles, procurement, integrations, evidence, and privacy review | After learning-outcome and security validation |
| Employer / workforce learning | Clear professional use cases and budgets | Requires role-specific content and reporting safeguards | After one or two domains prove value |
| Sponsored access / library partnership | Broadens access and supports underserved learners | Partnership operations and funding complexity | Once the product is stable |
| Open-source core / paid hosted service | Trust and community contributions | Requires a sustainable services model | If openness is strategically important |
| White-label / API licensing | Reaches existing learning platforms | Less direct user relationship and high integration burden | Later, with proven product quality |

**Initial recommendation:** Test a generous free individual tier with a clearly bounded paid plan for longer paths, richer practice, and saved learning history. Keep essential learning usable without payment. Publish understandable limits, cancel-anytime terms, and accessibility commitments. Do not set final prices until interviews, willingness-to-pay tests, retention, and per-learner serving costs are known.

## Go-to-market and validation

1. Interview 15–25 learners across the initial segment. Ask about recent learning attempts and what they did when stuck; do not pitch first.
2. Run a small, opt-in pilot around two or three well-scoped learning goals. Include a human-reviewed baseline and a way to report mistakes.
3. Compare a short pre-check and post-check, learner explanation in their own words, confidence calibration, return use, and reported usefulness.
4. Test acquisition channels with small experiments: educator and learner communities, study guides, student clubs, search-oriented topic pages, and partnerships with libraries or tutors. Respect community rules; do not seed undisclosed promotions.
5. Offer a teacher or tutor co-design cohort only after the learner flow is reliable.
6. Consider institutional sales only after demonstrating outcome quality, data protection, accessibility, and support readiness.

**North-star metric:** Learners who can correctly explain or apply a targeted concept after a learning session, measured with an appropriate, reviewed task—not minutes in app.

**Supporting measures:** First-path completion, return to a planned review, correct transfer to a new example, learner confidence versus observed performance, helpfulness rating, citation use, time to a useful explanation, accessibility task completion, error reports, safety escalations, and cost per successful learning session.

**Guardrails:** Hallucination and citation error rates by subject; performance gaps across learner groups and languages; harmful or age-inappropriate outputs; overreliance; answer leakage in assessment contexts; data deletion and export success; latency; and support burden. Do not optimize streaks or session duration at the expense of learning.

## Product and technology choices

| Decision | Options | Recommended starting point |
|---|---|---|
| Client | Responsive web; native mobile; cross-platform app | Responsive web to validate quickly; consider installable PWA after usability testing |
| Tutor | Hosted language model; self-hosted model; retrieval plus model; authored courses only | Server-side model with retrieval over curated sources for supported subjects; disclose coverage and uncertainty |
| Content strategy | Unrestricted generation; expert-authored content; curated sources plus generation | Hybrid: reviewed core paths and sourced explanations; allow generation only with evaluations and safeguards |
| Personalization | Learner self-rating; diagnostic questions; performance model | Start with learner choice and optional low-stakes checks; make inferences inspectable and correctable |
| Storage | Browser only; account-backed cloud; institution-managed | Local prototype first; later account-backed sync with data export/delete and opt-in retention |
| Audience | One broad general tutor; age bands; subject-by-subject rollout | Adult pilot, then add school-age learners only after age-specific safety, consent, and pedagogy review |
| Revenue | Subscription; credits; courses; institution contracts; sponsorship | Validate free-plus-subscription with actual usage economics before committing |

**Architecture direction for a production version:** Accessible web client → authenticated application API → tutor orchestration service → model provider behind a replaceable adapter → retrieval/search over licensed or open educational sources → evaluation, safety, and observability pipeline. Keep credentials and policy enforcement server-side. Separate account identity from learning records where feasible; minimize data, apply retention limits, and support export/deletion. A client-only API integration is not acceptable because it exposes provider credentials.

**Current delivery setup:** GitHub Actions CI checks JavaScript syntax and static HTML asset/ID consistency on pushes and pull requests to `main`. GitHub Pages publishing is a separate manual workflow, so a push alone does not publish the site. This is suitable only for the static prototype; a production AI tutor would require a backend, secrets management, security review, and separate deployment controls.

## Roadmap and decision gates

### Phase 0 — Validate the problem (1–2 weeks)

- Interview learners and educators; choose one initial audience and a few representative learning goals.
- Agree on learning outcomes, privacy boundaries, and a reviewed evaluation rubric.
- **Gate:** Proceed only if people can name a repeated, meaningful learning problem and agree to try a prototype.

### Phase 1 — Prototype (current)

- Test topic capture, path presentation, written instruction, progress affordances, and mobile layout.
- Gather usability feedback; this build stores progress only in the current browser.
- **Gate:** Users can start a path without assistance and understand what is and is not generated.

### Phase 2 — Trustworthy learning MVP

- Add accounts only if sync is validated; implement server-side tutor calls, curated source retrieval, transparent citations, rate/cost controls, and feedback reporting.
- Build a small reviewed content/evaluation set in one subject area; add hint-first practice, simple diagnostic questions, and spaced review.
- Add user-visible controls for data export/deletion, consent, and memory.
- **Gate:** Meet pre-agreed subject quality, safety, citation, accessibility, cost, and learning-outcome thresholds with a small pilot.

### Phase 3 — Learning and retention

- Improve adaptation based on demonstrated understanding; add path editing, review scheduling, and multilingual/accessibility options validated with learners.
- Evaluate learning gains against a suitable comparison; audit disparities and failure modes.
- **Gate:** Repeatable learning benefit and healthy opt-in retention without manipulative engagement design.

### Phase 4 — Responsible expansion

- Expand subjects and school-age support one reviewed domain at a time.
- Add teacher/family controls, institutional administration, LMS integrations, or enterprise plans only when the segment requests them and privacy/safeguarding reviews pass.
- **Gate:** Each audience and new subject meets its own quality and support bar.

## Risks and mitigations

- **Incorrect or misleading teaching:** Retrieval from reputable material, citations, expert review, subject-specific tests, visible uncertainty, and easy corrections. Do not claim universal coverage.
- **Shallow learning or answer dependence:** Ask the learner to reason, offer hints, use retrieval practice, and measure transfer rather than answer completion.
- **Assessment misconduct:** Provide learning help and explanations; use context-sensitive boundaries for active tests and make a hint-first mode available.
- **Children's privacy and safeguarding:** Start with adults. Before supporting minors, conduct a jurisdiction-specific legal and safeguarding review; use age-appropriate defaults, guardian/educator controls as appropriate, minimal collection, strict retention, and no behavioral ads.
- **Sensitive learner data:** Minimize collection; do not infer diagnoses or sell learning profiles; encrypt in transit and at rest; restrict staff access; document retention, deletion, incident response, and vendor processing.
- **Bias and unequal quality:** Evaluate across subjects, languages, skill levels, disability access, and learner groups. Provide alternatives and a reporting path.
- **Model/vendor dependence and unpredictable costs:** Keep a provider adapter, measure per-session costs, set transparent quotas, cache safe reusable material, and maintain an authored fallback.
- **Copyright and licensing:** Use material with appropriate rights, track provenance and licenses, cite sources, and provide takedown/contact workflows. Do not ingest or reproduce unlicensed textbooks.
- **Growth versus outcomes:** Avoid addictive streaks and pressure notifications; give learners control; treat meaningful learning and well-being as primary.
- **Institutional sales complexity:** Do not promise compliance or integrations before independent review; establish procurement, accessibility, security, and support readiness first.

## Open questions to resolve with users

1. Which first audience and first learning subject have the greatest unmet need?
2. Is the strongest entry point exam preparation, school support, university concepts, or lifelong learning?
3. Do learners prefer a conversational tutor, a structured course, or a switchable combination?
4. How much source detail and citation visibility help without interrupting learning?
5. Which accessibility, language, offline, and low-bandwidth needs are essential?
6. What data, if any, do learners want remembered between sessions?
7. Which paid feature is valuable enough to support sustainable inference and expert-review costs?

## Immediate next steps

1. Put the prototype in front of five learners and observe where they hesitate.
2. Choose one beachhead audience and one small subject pilot.
3. Write acceptance criteria for lesson accuracy, citations, helpfulness, accessibility, privacy, and learning gain before connecting a model.
4. Build the secure server-side tutor and evaluation harness only after those criteria and the data policy are agreed.
5. Use pilot evidence—not feature count—to decide whether to pursue consumer, education, or institutional growth.

## Company operating model

Curio is a working name only; no entity has been formed, name clearance completed, staff hired, or finance/legal review performed. The proposed lean org has a human founder as the accountable decision-maker, supported by six reusable role agents: Academic Lead, Technology Manager, Frontend Developer, Backend Developer, People & HR, and Finance. Their responsibilities, boundaries, human approval gates, and company setup checklist are in [TEAM.md](./TEAM.md); their workspace profiles are in `.github/agents/`.

These are selectable instructions for supported Copilot clients, not autonomous workers or a live multi-agent system. The application does not invoke them. They cannot hire staff, move funds, access external accounts, deploy software, or approve lessons for release. Human specialists remain necessary for legal formation, accounting, child safeguarding, privacy/security, and academic review as the company grows.
