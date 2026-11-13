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
const STARTER_PATHS = [
  {
    topic: "Algebra: linear equations",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Find the missing value, one balanced step at a time.",
    icon: "∑",
    color: "green",
    references: [
      {
        title: "Elementary Algebra 2e",
        attribution: "Jay Abramson · OpenStax",
        kind: "Open textbook",
        url: "https://openstax.org/details/books/elementary-algebra-2e",
      },
    ],
    lesson: {
      pages: [
        {
          lede: "A linear equation is a statement that two expressions are equal. Learning to solve one is really learning how to keep a balance while finding an unknown.",
          sections: [
            { heading: "Think of a balance", text: "Imagine both sides of an equation on a set of scales. If you add, remove, multiply, or divide something on one side, you must do the same to the other. The balance stays level, and the equality stays true." },
            { heading: "A worked example", text: "Solve 2x + 3 = 11. First, subtract 3 from both sides: 2x = 8. Then divide both sides by 2: x = 4. Check your answer in the original equation: 2 × 4 + 3 = 11. It works." },
            { heading: "Try it yourself", text: "Solve 3x + 2 = 14. Ask yourself: what should you undo first? After you find x, substitute your answer into the original equation to check it." },
          ],
          callout: "The key idea: whatever you do to one side of an equation, do to the other side too.",
        },
        {
          lede: "Use inverse operations to undo the operations around an unknown. Undo them in reverse order, while keeping both sides of the equation balanced.",
          sections: [
            { heading: "Undo in reverse", text: "In 4x − 5 = 19, the unknown is multiplied by 4 and then 5 is subtracted. Undo subtraction first by adding 5 to both sides. Then undo multiplication by dividing both sides by 4." },
            { heading: "Work through it", text: "Adding 5 gives 4x = 24. Dividing by 4 gives x = 6. Check: 4 × 6 − 5 = 19. Each inverse operation moves you one step closer to the unknown." },
            { heading: "Try it yourself", text: "Solve 6x − 7 = 29. Which operation should you undo first? Write each balanced step before you calculate the answer." },
          ],
          callout: "Inverse pairs include addition/subtraction and multiplication/division. Apply the inverse to both sides.",
        },
        {
          lede: "Equations can describe relationships in everyday situations. Translating a situation into an equation helps you see what is known and what you need to find.",
          sections: [
            { heading: "Turn a situation into an equation", text: "Suppose four identical notebooks and a 3-dollar delivery fee cost 19 dollars altogether. If p is the price of one notebook, the total is 4p + 3 = 19." },
            { heading: "Solve and interpret", text: "Subtract the 3-dollar fee: 4p = 16. Divide by 4 notebooks: p = 4 dollars per notebook. The value makes sense in context, and checking 4 × 4 + 3 gives the original 19 dollars." },
            { heading: "Try it yourself", text: "A ride costs a 2-dollar starting fee plus 3 dollars per mile. If the total is 20 dollars, let m be the number of miles and write an equation to find m." },
          ],
          callout: "Name the unknown first, then translate the relationships in the story into operations.",
        },
        {
          lede: "Bring the steps together: identify what is happening to the unknown, undo those operations in reverse order, and check your result in the original equation.",
          sections: [
            { heading: "Your practice problem", text: "Solve 5x + 2 = 27. Show the operation you apply to both sides at each step, then substitute your answer back into the starting equation." },
            { heading: "Check your understanding", text: "In your own words, explain why an operation must be applied to both sides. Then try changing the 27 to another number and solve the new equation." },
            { heading: "Reflect", text: "Which step feels most natural now? Which part would you like to practice again: choosing the inverse operation, keeping both sides balanced, or checking your answer?" },
          ],
          callout: "For 5x + 2 = 27, subtract 2 to get 5x = 25, then divide by 5: x = 5. Check: 5 × 5 + 2 = 27.",
        },
      ],
    },
  },
  {
    topic: "The science of sleep",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Explore what happens in the brain and body as you sleep.",
    icon: "☾",
    color: "blue",
    references: [
      {
        title: "Overnight therapy? The role of sleep in emotional brain processing",
        attribution: "Matthew P. Walker & Els van der Helm · Psychological Bulletin (2009)",
        kind: "Peer-reviewed review",
        url: "https://doi.org/10.1037/a0016570",
      },
      {
        title: "Why Is Sleep Important?",
        attribution: "National Heart, Lung, and Blood Institute",
        kind: "Government health resource",
        url: "https://www.nhlbi.nih.gov/health/sleep/why-sleep-important",
      },
    ],
  },
  {
    topic: "Photography basics",
    level: "curious beginner",
    createdAt: new Date().toISOString(),
    completed: [],
    description: "Learn to shape light, composition, and focus into a picture.",
    icon: "◉",
    color: "gold",
    references: [
      {
        title: "Camera Exposure",
        attribution: "Cambridge in Colour · Photography tutorial",
        kind: "Educational reference",
        url: "https://www.cambridgeincolour.com/tutorials/camera-exposure.htm",
      },
    ],
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
    action.textContent = existing ? "Open path →" : "Start path →";
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
  const references = topic.references?.length
    ? `<section class="lesson-references" aria-labelledby="references-heading">
        <h2 id="references-heading">Starting references</h2>
        <p>Use these sources to check and explore this topic. They are starting points, not proof that every lesson statement has been independently verified.</p>
        <ul>${topic.references.map((reference) => `<li><a href="${escapeHtml(reference.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.title)}</a><span>${escapeHtml(reference.attribution)} · ${escapeHtml(reference.kind)}</span></li>`).join("")}</ul>
      </section>`
    : `<section class="lesson-references" aria-labelledby="references-heading">
        <h2 id="references-heading">References not researched yet</h2>
        <p>This prototype does not search or verify sources for custom topics. The material above is a study prompt, not researched instruction; check reliable, topic-specific references before relying on it.</p>
      </section>`;
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
  const lessonContent = topic.lesson?.pages?.[activeLessonIndex];
  $("#lesson-title").textContent = topic.lesson && activeLessonIndex === 0 ? topic.topic : lesson.title;
  $("#lesson-lede").textContent = lessonContent?.lede || topic.lesson?.lede || lesson.description;
  $("#lesson-level").textContent = `${topic.level} · YOUR LEARNING PATH`;
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
$("#complete-lesson").addEventListener("click", handleCompleteLesson);
$("#back-to-home").addEventListener("click", () => showView("home"));
$(".help-button").addEventListener("click", () => {
  window.alert("Curio is an early, local-first prototype. Your progress stays in this browser. Custom-topic paths are learning prompts, not AI-generated or expert-reviewed lessons.");
});

$("#today-label").textContent = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" }).format(new Date());
renderPaths();
