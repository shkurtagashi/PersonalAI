const STORAGE_KEY = "curio.learning-space.v1";
const LESSONS = [
  { title: "Start with the big picture", time: "8 min", description: "Get oriented, connect the topic to what you already know, and set a clear learning goal." },
  { title: "Build the foundations", time: "12 min", description: "Break down the essential ideas and learn the vocabulary that makes everything else click." },
  { title: "See it in action", time: "10 min", description: "Work through a concrete example and notice how the core ideas show up in the real world." },
  { title: "Practice & reflect", time: "8 min", description: "Try a short challenge, explain what you have learned, and choose your next step." },
];
const TOPIC_CATALOG = [
  { category: "Foundations", topics: ["Reading comprehension", "Writing clear paragraphs", "Grammar and punctuation", "Fractions and decimals", "Ratios and percentages", "Basic geometry", "Study skills", "Research and source evaluation"] },
  { category: "Mathematics", topics: ["Algebra: linear equations", "Quadratic equations", "Functions and graphs", "Trigonometry", "Geometry and proofs", "Probability", "Statistics and data", "Calculus: derivatives"] },
  { category: "Biology & health", topics: ["Cell biology", "Genetics and inheritance", "Evolution and natural selection", "Human anatomy", "The science of sleep", "Nutrition basics", "Ecology and ecosystems", "Neuroscience foundations"] },
  { category: "Physics & chemistry", topics: ["Classical mechanics", "Electricity and magnetism", "Waves and sound", "Special relativity", "Quantum mechanics foundations", "Atoms and the periodic table", "Chemical reactions", "Organic chemistry basics"] },
  { category: "Earth & space", topics: ["Weather and climate", "Climate change science", "Rocks and plate tectonics", "The solar system", "Stars and galaxies", "Ocean science", "Environmental science", "Sustainability fundamentals"] },
  { category: "Computing & engineering", topics: ["Computer science fundamentals", "Programming with Python", "Web development basics", "Algorithms and data structures", "Artificial intelligence basics", "Data literacy", "Cybersecurity fundamentals", "Robotics and control systems"] },
  { category: "Society & behavior", topics: ["Psychology fundamentals", "Affective computing", "Cognitive science", "Sociology", "Economics fundamentals", "Political science", "Media literacy", "Ethics and moral philosophy"] },
  { category: "History & civics", topics: ["Ancient civilizations", "World history", "Modern European history", "History of science", "How governments work", "Democracy and citizenship", "International relations", "Human rights"] },
  { category: "Languages & literature", topics: ["English literature", "Poetry and close reading", "Creative writing", "Public speaking", "Spanish for beginners", "French for beginners", "Linguistics basics", "Mythology and storytelling"] },
  { category: "Business & money", topics: ["How money works", "Personal budgeting", "Compound interest", "Business fundamentals", "Marketing basics", "Entrepreneurship", "Accounting foundations", "Project management"] },
  { category: "Arts & design", topics: ["Photography basics", "Drawing fundamentals", "Color theory", "Graphic design principles", "Music theory", "Film language", "Architecture foundations", "Art history"] },
  { category: "Everyday skills", topics: ["Cooking fundamentals", "Gardening basics", "Critical thinking", "Decision-making", "Time management", "Communication skills", "First aid basics", "Learning how to learn"] },
];
const CURATED_LESSONS = {
  "Algebra: linear equations": {
    levels: {
      "curious beginner": [
        { summary: "An equation says two expressions have the same value. Keep that equality true by doing the same operation to both sides.", practice: "Solve 2x + 3 = 11, then substitute your answer to check it." },
        { summary: "Undo operations in reverse order: first undo addition or subtraction, then multiplication or division.", practice: "Solve 4x - 5 = 19. Write one balanced step at a time." },
        { summary: "A word problem becomes easier when you name the unknown and translate the relationships into an equation.", practice: "Four notebooks and a $3 delivery fee cost $19. Find the price of one notebook." },
        { summary: "After solving, substitute your result into the original equation. A true statement confirms the answer.", practice: "Solve 5x + 2 = 27 and explain why each step preserves equality." },
      ],
      "some experience": [
        { summary: "Use inverse operations to isolate the variable; simplify both sides before solving when needed.", practice: "Solve 3(2x - 1) = 15 and verify the result in the original equation." },
        { summary: "For equations with variables on both sides, collect variable terms on one side and constants on the other.", practice: "Solve 7x + 4 = 3x + 20. What operation keeps the equation equivalent?" },
        { summary: "Translate rates and fixed fees separately: total cost can be modeled as rate × quantity plus a fixed amount.", practice: "A ride costs $2 plus $3 per mile. Model and solve a $20 fare." },
        { summary: "Equivalent transformations preserve the solution set, but dividing by an expression requires checking that it is nonzero.", practice: "Solve 2(x + 4) = 3x - 1, then check by substitution." },
      ],
      "advanced learner": [
        { summary: "A linear equation in one variable reduces to ax = c. If a ≠ 0, it has one solution; if a = 0, it may have none or infinitely many.", practice: "Classify 2x + 4 = 2(x + 2) and 2x + 4 = 2x + 5." },
        { summary: "For a parameterized equation, partition parameter values by whether the coefficient of the unknown vanishes.", practice: "For (k - 1)x = k + 2, identify when the solution is unique and when it is not." },
        { summary: "Model assumptions determine whether a linear equation is appropriate; check units and domain restrictions as well as algebra.", practice: "Write a linear model for a fixed fee plus a per-unit cost, and state what the variables represent." },
        { summary: "A reliable solution argument names each reversible transformation and separately handles any non-invertible step.", practice: "Explain why multiplying both sides by zero can introduce solutions that were not in the original equation." },
      ],
    },
    resources: [
      { type: "Open textbook", title: "Elementary Algebra 2e, §2.1: Properties of Equality", attribution: "Jay Abramson · OpenStax", url: "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality" },
    ],
  },
  "The science of sleep": {
    levels: {
      "curious beginner": [
        { summary: "Sleep includes recurring NREM and REM stages. Sleep patterns and recommended duration vary with age.", practice: "Use the NHLBI guide to compare sleep stages and age-based recommendations." },
        { summary: "Sleep supports health and daytime functioning, but one night or one stage does not explain every outcome.", practice: "Choose one sleep claim and trace it to the cited evidence." },
        { summary: "Researchers study sleep and emotion using different methods; a review summarizes evidence rather than proving one universal mechanism.", practice: "Compare a claim in Walker and van der Helm's review with current NHLBI guidance." },
        { summary: "Sleep science changes as evidence accumulates. Separate established guidance from proposed explanations.", practice: "Write one conclusion and one unanswered question from your reading." },
      ],
      "some experience": [
        { summary: "Sleep architecture describes how NREM and REM stages change across a night; measures depend on physiological recordings.", practice: "Sketch a hypnogram and note what EEG, eye movement, and muscle tone can indicate." },
        { summary: "Walker and van der Helm review evidence on sleep and emotional brain processing; treat its synthesis as a research argument to evaluate.", practice: "Identify the review's question, evidence types, and one limitation." },
        { summary: "Distinguish correlation, experimental manipulation, and proposed mechanism when evaluating sleep-and-emotion findings.", practice: "For one cited study, identify its design before interpreting its conclusion." },
        { summary: "A review's conclusions depend on included studies and methods; compare them with newer research and health guidance.", practice: "Summarize what the evidence supports without extending it to a clinical diagnosis." },
      ],
      "advanced learner": [
        { summary: "Sleep-stage labels operationalize patterns in polysomnography; stage proportions alone do not establish cognitive or emotional function.", practice: "Compare how stage scoring and outcome measurement affect a study's inference." },
        { summary: "Critically appraise the 2009 Walker–van der Helm review as a historically important synthesis, not a final consensus statement.", practice: "Trace one mechanistic claim to the primary studies cited and inspect their design." },
        { summary: "Separate causal evidence from model-based interpretation, and examine sample size, confounds, and replication.", practice: "Draft a competing explanation for one reported association." },
        { summary: "Translate evidence cautiously: laboratory findings do not by themselves yield individual treatment advice.", practice: "State the population, outcome, and uncertainty before making a practical claim." },
      ],
    },
    resources: [
      { type: "Research review", title: "Overnight therapy? The role of sleep in emotional brain processing", attribution: "Matthew P. Walker & Els van der Helm · Psychological Bulletin (2009)", url: "https://doi.org/10.1037/a0016570" },
      { type: "Book", title: "Why We Sleep", attribution: "Matthew Walker · popular-science synthesis; check claims against current research", url: "https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325" },
      { type: "Health reference", title: "Why Is Sleep Important?", attribution: "National Heart, Lung, and Blood Institute", url: "https://www.nhlbi.nih.gov/health/sleep/why-sleep-important" },
    ],
  },
  "Photography basics": {
    levels: {
      "curious beginner": [
        { summary: "Exposure is influenced by aperture, shutter time, and ISO. Each changes the image in a different way.", practice: "Photograph one scene twice, changing only shutter speed." },
        { summary: "Aperture affects how much light enters and how much of the scene appears in focus.", practice: "Compare two aperture settings while keeping the framing steady." },
        { summary: "Shutter speed changes exposure time and can freeze or blur motion.", practice: "Photograph a moving subject with a fast and a slow shutter." },
        { summary: "ISO is another exposure control; compare image brightness and noise at different settings.", practice: "Make two indoor photos at different ISO settings and compare them." },
      ],
      "some experience": [
        { summary: "Exposure settings trade off: changing one setting can require adjusting another to maintain similar brightness.", practice: "Change aperture by one stop and compensate with shutter time." },
        { summary: "A wider aperture can reduce depth of field; the result also depends on focus distance and framing.", practice: "Make a portrait with a distinct background, then compare focus depth." },
        { summary: "Shutter speed controls motion rendering as well as exposure; subject speed and camera movement both matter.", practice: "Compare a stabilized long exposure with a handheld one." },
        { summary: "Higher ISO can help in low light but may reduce image quality depending on the camera and conditions.", practice: "Compare files at matched brightness rather than judging ISO numbers alone." },
      ],
      "advanced learner": [
        { summary: "Exposure choices are constrained optimization: preserve highlights, motion intent, depth of field, and acceptable noise.", practice: "For a moving subject in low light, state which constraints you prioritize and why." },
        { summary: "Equivalent exposure changes brightness while altering motion rendering or depth of field; equivalence is not aesthetic equivalence.", practice: "Create two equivalent exposures with visibly different motion or focus." },
        { summary: "Meter readings estimate exposure for a scene; evaluate them against subject reflectance and highlight clipping.", practice: "Compare a meter-based exposure with a histogram-guided adjustment." },
        { summary: "A histogram summarizes tonal distribution but does not encode subject intent or guarantee correct exposure.", practice: "Explain why two different scenes can produce similar histograms." },
      ],
    },
    resources: [
      { type: "Tutorial", title: "Camera Exposure", attribution: "Cambridge in Colour · photography education", url: "https://www.cambridgeincolour.com/tutorials/camera-exposure.htm" },
      { type: "Book", title: "Master Your Digital Camera", attribution: "Cambridge in Colour · photography guide", url: "https://www.cambridgeincolour.com/books/understanding-photography-v2/" },
      { type: "Book", title: "The Camera", attribution: "Ansel Adams · photographic technique", url: "https://books.google.com/books?vid=ISBN9780821221846" },
    ],
  },
  "Special relativity": {
    levels: {
      "curious beginner": [
        { summary: "Special relativity starts from two ideas: physical laws are the same in inertial frames, and vacuum light speed is invariant.", practice: "Explain why the second idea changes everyday assumptions about time." },
        { summary: "Events that are simultaneous in one inertial frame need not be simultaneous in another.", practice: "Use a moving-train thought experiment to compare two observers." },
        { summary: "Time dilation compares elapsed time along different paths through spacetime; it is not a clock malfunction.", practice: "Describe which observer measures each clock and in which frame." },
        { summary: "Mass-energy equivalence follows within the theory; E = mc² relates rest energy to invariant mass.", practice: "Explain what the equation does and does not say about an object's total energy." },
      ],
      "some experience": [
        { summary: "Lorentz transformations preserve the spacetime interval between events while mixing space and time coordinates.", practice: "Apply a one-dimensional Lorentz transformation to two events." },
        { summary: "Relativity of simultaneity follows from Lorentz transformations, not merely signal travel-time delays.", practice: "Distinguish a coordinate transformation from an observer's delayed observation." },
        { summary: "Proper time is invariant along a worldline; coordinate time depends on the chosen inertial frame.", practice: "Compare proper time for inertial paths between two events." },
        { summary: "The energy-momentum relation E² = (pc)² + (mc²)² includes rest energy as the p = 0 case.", practice: "Recover E = mc² by setting momentum to zero." },
      ],
      "advanced learner": [
        { summary: "The Minkowski interval is invariant under Lorentz transformations; causal structure follows from the light cone.", practice: "Classify event separations as timelike, spacelike, or null." },
        { summary: "Einstein's 1905 paper is a primary historical source; modern treatments formalize its kinematics with spacetime geometry.", practice: "Compare the paper's operational arguments with a four-vector derivation." },
        { summary: "For a clock following a timelike worldline, proper time is obtained by integrating the spacetime line element.", practice: "Derive proper time for inertial motion at constant velocity." },
        { summary: "Four-momentum conservation gives the invariant relation between energy, momentum, and rest mass.", practice: "Use four-momentum invariants to analyze a simple decay or collision." },
      ],
    },
    resources: [
      { type: "Primary paper", title: "On the Electrodynamics of Moving Bodies (1905)", attribution: "Albert Einstein · Annalen der Physik", url: "https://doi.org/10.1002/andp.19053221004" },
      { type: "Video course", title: "Introduction to Special Relativity", attribution: "Markus Klute · MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/8-20-introduction-to-special-relativity-january-iap-2021/" },
    ],
  },
  "Affective computing": {
    levels: {
      "curious beginner": [
        { summary: "Affective computing studies systems that can recognize, interpret, or respond to aspects of human emotion.", practice: "List what a computer can observe and what it cannot know directly about a person's feelings." },
        { summary: "Signals such as words or facial movement are imperfect clues, not direct measurements of a private emotional state.", practice: "Think of two different feelings that could produce the same outward signal." },
        { summary: "Rosalind Picard's work helped establish affective computing as a research area.", practice: "Read the MIT Media Lab group's description and identify its current research questions." },
        { summary: "Emotion-aware technology raises questions about consent, privacy, bias, and whether an inference should be acted on.", practice: "Name one benefit and one risk of emotion inference in an app." },
      ],
      "some experience": [
        { summary: "Affective-computing systems map observable features to affect-related labels or responses; labels depend on operational definitions.", practice: "Compare categorical labels with dimensional representations such as valence and arousal." },
        { summary: "Models may fail across people and contexts because expression, culture, disability, and situation affect signals.", practice: "Design an evaluation that tests performance across contexts and groups." },
        { summary: "Picard's foundational book framed the field; contemporary work spans sensing, interaction, health, and human-centered AI.", practice: "Compare the book's framing with the MIT group's current research overview." },
        { summary: "A classifier score is not a validated diagnosis or certain account of an individual's internal state.", practice: "Draft interface language that reports uncertainty and gives users control." },
      ],
      "advanced learner": [
        { summary: "Affective labels are construct-dependent; evaluate construct validity, annotation agreement, and ecological validity.", practice: "Specify a construct and justify how your proposed measurements operationalize it." },
        { summary: "Consider distribution shift, group calibration, missingness, and confounding before interpreting model performance.", practice: "Propose a preregistered evaluation with subgroup and out-of-domain tests." },
        { summary: "Picard's foundational work should be read alongside current empirical studies and critiques of emotion inference.", practice: "Separate historical framing, empirical evidence, and normative assumptions in a paper." },
        { summary: "Deployment requires necessity, consent, data minimization, contestability, and a clear account of downstream harms.", practice: "Threat-model an emotion-aware feature before deciding whether it should exist." },
      ],
    },
    resources: [
      { type: "Book", title: "Affective Computing", attribution: "Rosalind W. Picard · MIT Press", url: "https://books.google.com/books?id=GaVncRTcb1gC" },
      { type: "Research group", title: "Affective Computing", attribution: "MIT Media Lab", url: "https://www.media.mit.edu/groups/affective-computing/overview/" },
    ],
  },
};
const STARTER_PATHS = [
  {
    topic: "Algebra: linear equations",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Find the missing value, one balanced step at a time.",
    icon: "∑",
    color: "green",
  },
  {
    topic: "The science of sleep",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Explore what happens in the brain and body as you sleep.",
    icon: "☾",
    color: "blue",
  },
  {
    topic: "Photography basics",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Learn to shape light, composition, and focus into a picture.",
    icon: "◉",
    color: "gold",
  },
];

const $ = (selector, root = document) => root.querySelector(selector);
const homeView = $("#home-view");
const topicsView = $("#topics-view");
const lessonView = $("#lesson-view");
let state = loadState();
let activeTopicId = null;
let activeLessonIndex = 0;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.topics)) {
      const topics = saved.topics.map((topic) => {
        const index = STARTER_PATHS.findIndex((starter, starterIndex) => topic.id === `starter-${starterIndex}`);
        return index < 0 ? topic : { ...topic, ...STARTER_PATHS[index], id: topic.id, completed: topic.completed || [] };
      });
      return { topics, minutes: Number(saved.minutes) || 0, lastLearnedDate: saved.lastLearnedDate || null, streak: Number(saved.streak) || 0 };
    }
  } catch (error) {
    console.warn("Could not load saved learning progress.", error);
  }
  return { topics: STARTER_PATHS.map((topic, index) => ({ ...topic, id: `starter-${index}` })), minutes: 0, lastLearnedDate: null, streak: 0 };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save learning progress on this device.", error);
    $("#lesson-save-note").textContent = "Progress could not be saved on this device.";
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function topicById(id) {
  return state.topics.find((topic) => topic.id === id);
}

function renderTopicNav() {
  $("#topic-count").textContent = String(state.topics.length);
  const nav = $("#topic-nav-list");
  nav.replaceChildren();
  state.topics.slice(0, 6).forEach((topic) => {
    const button = document.createElement("button");
    button.className = "topic-nav-item";
    button.type = "button";
    button.dataset.topicId = topic.id;
    const dot = document.createElement("span");
    dot.className = "topic-dot";
    const name = document.createElement("span");
    name.className = "topic-nav-name";
    name.textContent = topic.topic;
    button.append(dot, name);
    nav.append(button);
  });
}

function cardMarkup(topic) {
  const progress = Math.round(((topic.completed?.length || 0) / LESSONS.length) * 100);
  return `<article class="path-card" data-open-topic="${escapeHtml(topic.id)}">
    <div class="path-card-top"><span class="subject-icon ${escapeHtml(topic.color || "green")}">${escapeHtml(topic.icon || "✦")}</span><button class="path-menu" type="button" data-remove-topic="${escapeHtml(topic.id)}" aria-label="Remove ${escapeHtml(topic.topic)}" title="Remove topic">···</button></div>
    <button class="path-open" type="button" data-open-topic="${escapeHtml(topic.id)}">
      <span class="path-title">${escapeHtml(topic.topic)}</span>
      <span class="path-description">${escapeHtml(topic.description || `Build your understanding of ${topic.topic}, one idea at a time.`)}</span>
      <span class="path-card-footer"><span class="card-progress" role="progressbar" aria-label="Path progress" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress}%"></span></span><span class="card-progress-label">${progress ? `${progress}% complete` : `${LESSONS.length} lessons`}</span></span>
    </button>
  </article>`;
}

function renderPaths() {
  $("#path-grid").innerHTML = state.topics.slice(0, 2).map(cardMarkup).join("");
  $("#all-paths-grid").innerHTML = state.topics.map(cardMarkup).join("");
  $("#empty-state").classList.toggle("hidden", state.topics.length > 0);
  $("#path-grid").classList.toggle("hidden", state.topics.length === 0);
  $("#topics-empty-state").classList.toggle("hidden", state.topics.length > 0);
  $("#all-paths-grid").classList.toggle("hidden", state.topics.length === 0);
  $("#minutes-value").innerHTML = `${state.minutes} <small>min</small>`;
  $("#lessons-value").textContent = String(state.topics.reduce((total, topic) => total + (topic.completed?.length || 0), 0));
  $("#streak-value").textContent = `${state.streak} ${state.streak === 1 ? "day" : "days"}`;
  renderTopicNav();
  renderTopicCatalog();
}

function renderTopicCatalog() {
  const categorySelect = $("#catalog-category");
  if (!categorySelect.dataset.initialized) {
    TOPIC_CATALOG.forEach(({ category }) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.append(option);
    });
    categorySelect.dataset.initialized = "true";
  }

  const query = $("#catalog-search").value.trim().toLocaleLowerCase();
  const categoryFilter = categorySelect.value;
  const matchingTopics = TOPIC_CATALOG.flatMap(({ category, topics }) => topics
    .filter((topic) => (categoryFilter === "all" || category === categoryFilter) && topic.toLocaleLowerCase().includes(query))
    .map((topic) => ({ topic, category })));

  $("#catalog-count").textContent = `${matchingTopics.length} ${matchingTopics.length === 1 ? "topic" : "topics"}`;
  $("#catalog-no-results").classList.toggle("hidden", matchingTopics.length > 0);
  const catalog = $("#topic-catalog");
  catalog.replaceChildren();

  matchingTopics.forEach(({ topic, category }) => {
    const existing = state.topics.find((item) => item.topic.toLocaleLowerCase() === topic.toLocaleLowerCase());
    const hasCuratedLesson = Boolean(CURATED_LESSONS[topic]);
    const button = document.createElement("button");
    button.className = "catalog-topic";
    button.type = "button";
    button.dataset.catalogTopic = topic;
    const categoryLabel = document.createElement("span");
    categoryLabel.className = "catalog-topic-category";
    categoryLabel.textContent = category;
    const topicLabel = document.createElement("span");
    topicLabel.className = "catalog-topic-name";
    topicLabel.textContent = topic;
    const action = document.createElement("span");
    action.className = "catalog-topic-action";
    action.textContent = existing ? "Open path →" : hasCuratedLesson ? "Curated lesson →" : "Study prompt →";
    button.append(categoryLabel, topicLabel, action);
    catalog.append(button);
  });
}

function showView(view) {
  homeView.classList.toggle("hidden", view !== "home");
  topicsView.classList.toggle("hidden", view !== "topics");
  lessonView.classList.toggle("hidden", view !== "lesson");
  $("#breadcrumb-current").textContent = view === "home" ? "Overview" : view === "topics" ? "My topics" : "Learning path";
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view || (view === "lesson" && button.dataset.view === "topics")));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildLessonContent(topic, index) {
  const curated = CURATED_LESSONS[topic.topic];
  const levelContent = curated?.levels[topic.level]?.[index];
  const resources = curated?.resources || topic.references?.map((reference) => ({
    type: reference.kind,
    title: reference.title,
    attribution: reference.attribution,
    url: reference.url,
  }));
  const references = resources?.length
    ? `<section class="lesson-references" aria-labelledby="references-heading">
        <h2 id="references-heading">Further learning</h2>
        <p>Short starting points from researchers, educators, and academic institutions. Check the original source for context.</p>
        <ul>${resources.map((resource) => `<li><span class="reference-type">${escapeHtml(resource.type)}</span><a href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.title)}</a><span>${escapeHtml(resource.attribution)}</span></li>`).join("")}</ul>
      </section>`
    : `<section class="lesson-references" aria-labelledby="references-heading">
        <h2 id="references-heading">References not researched yet</h2>
        <p>This prototype does not search or verify sources for custom topics. The material above is a study prompt, not researched instruction; check reliable, topic-specific references before relying on it.</p>
      </section>`;
  if (curated && levelContent) {
    return `<h2>${escapeHtml(lessonLabel(index))}</h2>
      <p>${escapeHtml(levelContent.summary)}</p>
      <p class="lesson-callout">${escapeHtml(levelContent.practice)}</p>
      ${references}`;
  }
  if (topic.lesson) {
    const { sections, callout } = topic.lesson.pages?.[index] || topic.lesson;
    return `${sections.map((section) => `<h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.text)}</p>`).join("")}<p class="lesson-callout">${escapeHtml(callout)}</p>${references}`;
  }
  const lesson = LESSONS[index];
  return `<h2>${escapeHtml(lesson.title)}</h2>
    <p>This is your starting point for <strong>${escapeHtml(topic.topic)}</strong>. Begin with what you already know, then use the prompts below to build a clearer picture.</p>
    <h2>Your learning prompt</h2>
    <p>${escapeHtml(lesson.description)}</p>
    <p class="lesson-callout">Write down one question about ${escapeHtml(topic.topic)} that you would love to answer. Use it to guide your exploration of this lesson.</p>
    <h2>Make it your own</h2>
    <p>Think of a real situation where ${escapeHtml(topic.topic)} might matter. What would you like to understand better? Save your question in your notes and revisit it as you move through this path.</p>
    ${references}`;
}

function lessonLabel(index) {
  return ["Core idea", "Build the model", "Apply it", "Think critically"][index] || "Explore further";
}

function openTopic(id) {
  const topic = topicById(id);
  if (!topic) return;
  activeTopicId = id;
  activeLessonIndex = Math.min(topic.completed?.length || 0, LESSONS.length - 1);
  renderLesson();
  showView("lesson");
}

function renderLesson() {
  const topic = topicById(activeTopicId);
  if (!topic) return;
  const lesson = LESSONS[activeLessonIndex];
  const curated = CURATED_LESSONS[topic.topic];
  const levelContent = curated?.levels[topic.level]?.[activeLessonIndex];
  const lessonContent = topic.lesson?.pages?.[activeLessonIndex];
  $("#lesson-title").textContent = topic.lesson && activeLessonIndex === 0 ? topic.topic : lesson.title;
  $("#lesson-lede").textContent = levelContent
    ? "Short, level-adjusted lesson. Use the references below to explore the evidence in more depth."
    : lessonContent?.lede || topic.lesson?.lede || lesson.description;
  $("#lesson-level").textContent = "YOUR LEARNING PATH";
  $("#lesson-level-select").value = topic.level;
  $("#lesson-duration").textContent = `◷  ${lesson.time}`;
  $("#lesson-step").textContent = `STEP ${activeLessonIndex + 1} OF ${LESSONS.length}`;
  $("#lesson-body").innerHTML = buildLessonContent(topic, activeLessonIndex);
  const completed = topic.completed?.length || 0;
  $("#path-progress-label").textContent = `${completed} / ${LESSONS.length} done`;
  $("#path-progress-bar").style.width = `${Math.round((completed / LESSONS.length) * 100)}%`;
  $("#lesson-step-list").innerHTML = LESSONS.map((item, index) => {
    const status = index < completed ? "completed" : index === activeLessonIndex ? "current" : "";
    return `<li class="lesson-step ${status}"><span class="step-marker">${index < completed ? "✓" : index + 1}</span><span>${escapeHtml(item.title)}</span></li>`;
  }).join("");
  const completeButton = $("#complete-lesson");
  const isComplete = (topic.completed || []).includes(activeLessonIndex);
  completeButton.disabled = isComplete;
  completeButton.innerHTML = isComplete
    ? activeLessonIndex < LESSONS.length - 1 ? "Lesson complete <span aria-hidden=\"true\">✓</span>" : "Path completed <span aria-hidden=\"true\">✓</span>"
    : activeLessonIndex < LESSONS.length - 1 ? "Mark lesson complete <span aria-hidden=\"true\">✓</span>" : "Complete learning path <span aria-hidden=\"true\">✓</span>";
  completeButton.classList.toggle("is-complete", isComplete);
  $("#lesson-save-note").textContent = "Your progress is saved on this device.";
}

function updateLearningStreak() {
  const dateKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const today = dateKey(new Date());
  if (state.lastLearnedDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = dateKey(yesterday);
  state.streak = state.lastLearnedDate === yesterdayKey ? state.streak + 1 : 1;
  state.lastLearnedDate = today;
}

function createTopic(name, level) {
  const topic = {
    id: `topic-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topic: name,
    level,
    createdAt: new Date().toISOString(),
    completed: [],
    description: `Build your understanding of ${name}, one idea at a time.`,
    icon: "✦",
    color: ["green", "blue", "gold", "rose"][state.topics.length % 4],
  };
  state.topics.unshift(topic);
  saveState();
  renderPaths();
  openTopic(topic.id);
}

function handleCompleteLesson() {
  const topic = topicById(activeTopicId);
  if (!topic) return;
  if (!topic.completed.includes(activeLessonIndex)) {
    topic.completed.push(activeLessonIndex);
    topic.completed.sort((a, b) => a - b);
    state.minutes += Number.parseInt(LESSONS[activeLessonIndex].time, 10) || 0;
    updateLearningStreak();
  }
  saveState();
  renderPaths();
  if (activeLessonIndex < LESSONS.length - 1) activeLessonIndex += 1;
  renderLesson();
}

$("#topic-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#topic-input");
  const name = input.value.trim();
  const message = $("#form-message");
  if (!name) {
    message.textContent = "Add a topic to build your learning path.";
    input.focus();
    return;
  }
  if (state.topics.some((topic) => topic.topic.toLowerCase() === name.toLowerCase())) {
    message.textContent = "You already have a path for that topic. Open it from your learning paths.";
    return;
  }
  message.textContent = "";
  createTopic(name, $("#level-select").value);
  input.value = "";
});

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) showView(viewButton.dataset.view);
  const topicButton = event.target.closest("[data-topic-id]");
  if (topicButton) openTopic(topicButton.dataset.topicId);
  const card = event.target.closest(".path-open");
  if (card) openTopic(card.dataset.openTopic);
  const removeButton = event.target.closest("[data-remove-topic]");
  if (removeButton) {
    event.stopPropagation();
    const topic = topicById(removeButton.dataset.removeTopic);
    if (topic && window.confirm(`Remove "${topic.topic}" and its saved progress?`)) {
      state.topics = state.topics.filter((item) => item.id !== topic.id);
      saveState();
      renderPaths();
    }
  }
  const suggestion = event.target.closest("[data-topic]");
  if (suggestion) {
    $("#topic-input").value = suggestion.dataset.topic;
    $("#topic-input").focus();
  }
  const catalogTopic = event.target.closest("[data-catalog-topic]");
  if (catalogTopic) {
    const topic = state.topics.find((item) => item.topic.toLocaleLowerCase() === catalogTopic.dataset.catalogTopic.toLocaleLowerCase());
    if (topic) openTopic(topic.id);
    else createTopic(catalogTopic.dataset.catalogTopic, $("#level-select").value);
  }
});

$("#catalog-search").addEventListener("input", renderTopicCatalog);
$("#catalog-category").addEventListener("change", renderTopicCatalog);
$("#lesson-level-select").addEventListener("change", (event) => {
  const topic = topicById(activeTopicId);
  if (!topic) return;
  topic.level = event.target.value;
  saveState();
  renderLesson();
});
$("#complete-lesson").addEventListener("click", handleCompleteLesson);
$("#back-to-home").addEventListener("click", () => showView("home"));
$(".help-button").addEventListener("click", () => {
  window.alert("Curio is an early, local-first prototype. Your progress stays in this browser. Custom-topic paths are learning prompts, not AI-generated or expert-reviewed lessons.");
});

$("#today-label").textContent = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" }).format(new Date());
renderPaths();
