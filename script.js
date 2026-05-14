const portfolioData = {
  profile: {
    name: "Kirtan Kaushik",
    roles: [
      "Cloud and Fullstack Developer",
      "Data Analyst & Cloud Computing Trainer",
      "Full Stack Web Developer & Trainer",
      "Microsoft Azure Fundamentals",
    ],
    image: "assets/profile-identity.svg",
    resume: "assets/Kirtan-Kaushik-Resume.pdf",
    footerTagline:
      "Resume-backed portfolio for web development, data analytics, and Microsoft Azure cloud roles.",
    tagline:
      "Cloud and Fullstack Developer focused on web development, data analytics training, and Microsoft Azure fundamentals.",
    bio: "Motivated technology trainer with knowledge of Data Analytics and Cloud Computing fundamentals. Skilled in Python, SQL, Excel, Power BI, and Microsoft Azure basics. Familiar with cloud monitoring, backup, patching, VM provisioning, and basic Active Directory tasks. Quick learner with strong analytical and problem-solving skills.",
    story:
      "Kirtan's resume shows hands-on training across frontend development, backend development, data analytics, database systems, Microsoft Office tools, and Microsoft Azure cloud fundamentals.",
  },
  heroSlides: [
    {
      title: "Web Development",
      eyebrow: "Full Stack Training",
      copy: "Training experience across HTML, CSS, JavaScript, React.js, Python, Django, Node.js, MySQL, and MongoDB.",
      summary:
        "Frontend, backend, REST API, and database skills presented with recruiter-friendly clarity.",
      accent: "blue",
      visual: "code",
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Django"],
    },
    {
      title: "Data Analytics",
      eyebrow: "Analytics Trainer",
      copy: "Training students in Python, Pandas, NumPy, SQL, Excel, and Power BI for data cleaning, analysis, and dashboards.",
      summary:
        "Resume-backed analytics capability across dashboards, SQL queries, reporting, and real-world datasets.",
      accent: "cyan",
      visual: "ai",
      tags: ["Python", "Pandas", "NumPy", "SQL", "Power BI"],
    },
    {
      title: "Cloud Computing",
      eyebrow: "Microsoft Azure",
      copy: "Familiar with Azure VM creation, monitoring, backup, patch management, cloud infrastructure concepts, and basic Active Directory tasks.",
      summary:
        "Cloud operations foundation for teams that need Azure-aware junior talent with training experience.",
      accent: "violet",
      visual: "cloud",
      tags: ["Azure", "VM Creation", "Monitoring", "Backup", "Patching"],
    },
    {
      title: "Trainer Mindset",
      eyebrow: "Practical Mentoring",
      copy: "Guiding learners through real-world projects, project structure, basic applications, database operations, and productivity tools.",
      summary:
        "A communication-first profile suited for roles that value technical clarity, mentoring, and practical execution.",
      accent: "sunset",
      visual: "motion",
      tags: ["Training", "Projects", "Databases", "MS Office"],
    },
  ],
  metrics: [
    { label: "Public GitHub repos", value: "31" },
    { label: "Experience roles", value: "03" },
    { label: "Skill categories", value: "03" },
    { label: "Certifications listed", value: "05" },
  ],
  consoleStream: [
    "Resume content is used for the about, experience, education, and technical skills sections.",
    "Project cards use real repositories from github.com/kt-pixels and show missing descriptions honestly.",
    "Skills are grouped for web development, data analytics, and Microsoft Azure cloud computing roles.",
    "The contact form opens a prepared email so recruiters can reach Kirtan quickly.",
  ],
  focusPoints: [
    {
      title: "Data analytics training",
      copy: "Python, Pandas, NumPy, SQL, Excel, and Power BI sessions covering cleaning, analysis, dashboards, joins, aggregations, and window functions.",
    },
    {
      title: "Cloud computing fundamentals",
      copy: "Microsoft Azure services, VM creation, monitoring, backup, patching, and basic cloud infrastructure concepts.",
    },
    {
      title: "Full-stack project guidance",
      copy: "Frontend, backend, MS Office, productivity tools, MySQL, MongoDB, and hands-on project structure support.",
    },
  ],
  skillOrbit: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "DRF",
    "MySQL",
    "MongoDB",
    "Power BI",
  ],
  skillGroups: [
    {
      title: "Web Development",
      score: 92,
      description:
        "Frontend, backend, API, and database technologies listed in the provided brief and resume.",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "DRF",
        "Bootstrap",
        "Tailwind CSS",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Data Analytics",
      score: 90,
      description:
        "Analytics and reporting tools used in resume-backed training responsibilities.",
      items: [
        "Excel",
        "MS Word",
        "PowerPoint",
        "Power BI",
        "SQL",
        "Python",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "Cloud Computing",
      score: 86,
      description:
        "Microsoft Azure and operations concepts from the resume plus provided cloud skill list.",
      items: [
        "Microsoft Azure",
        "Virtual Machine Creation",
        "Azure DevOps",
        "CI/CD Pipeline",
        "Networking",
        "NSG",
        "Storage",
        "Backup Management",
        "Patch Scheduling",
        "Alerts & Monitoring",
      ],
    },
  ],
  projects: [
    {
      title: "offline-ai-coach",
      description:
        "GitHub README: A premium SaaS-style self-improvement platform with multi-step onboarding, personalized calorie intelligence, meal distribution, global food database search, and task, habit, workout, and AI coaching modules.",
      stack: ["JavaScript", "MERN", "React", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      source: "README verified",
      liveUrl: "",
      githubUrl: "https://github.com/kt-pixels/offline-ai-coach",
      updated: "Mar 8, 2026",
    },
    {
      title: "stationeryfrontend",
      description:
        "GitHub description is not provided. Repository metadata shows a React/Vite frontend with Tailwind CSS, Redux Toolkit, Framer Motion, charting, routing, and PDF export libraries.",
      stack: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Recharts"],
      category: "Frontend",
      source: "Repository metadata",
      liveUrl: "https://stationeryfrontend.vercel.app",
      githubUrl: "https://github.com/kt-pixels/stationeryfrontend",
      updated: "Dec 18, 2025",
    },
    {
      title: "stationerybackend",
      description:
        "GitHub description is not provided. Package metadata shows a JavaScript backend using Express, Mongoose, JWT, bcryptjs, CORS, dotenv, and Nodemon.",
      stack: ["JavaScript", "Node.js", "Express.js", "Mongoose", "JWT", "bcryptjs"],
      category: "Backend",
      source: "Repository metadata",
      liveUrl: "",
      githubUrl: "https://github.com/kt-pixels/stationerybackend",
      updated: "Dec 18, 2025",
    },
    {
      title: "bustracker",
      description:
        "GitHub description is not provided. README is the default React + Vite template; package metadata shows React Leaflet, geolib, axios, React Router, and Vite.",
      stack: ["React", "Vite", "React Leaflet", "geolib", "axios", "React Router"],
      category: "Frontend",
      source: "Repository metadata",
      liveUrl: "",
      githubUrl: "https://github.com/kt-pixels/bustracker",
      updated: "May 27, 2024",
    },
    {
      title: "rukshak",
      description:
        "GitHub description is not provided. Package metadata shows React, Firebase, Express, HBS, Mongoose, Swiper, React Router, and Vite.",
      stack: ["React", "Vite", "Firebase", "Express", "Mongoose", "Swiper"],
      category: "Full Stack",
      source: "Repository metadata",
      liveUrl: "",
      githubUrl: "https://github.com/kt-pixels/rukshak",
      updated: "Feb 22, 2024",
    },
    {
      title: "kirtanArtistry.io",
      description:
        "GitHub README: An immersive single-page portfolio experience built with HTML, CSS, and Vanilla JavaScript, with motion and 3D powered by GSAP, ScrollTrigger, Lenis, and Three.js.",
      stack: ["HTML", "CSS", "JavaScript", "GSAP", "Lenis", "Three.js"],
      category: "Portfolio",
      source: "README verified",
      liveUrl: "",
      githubUrl: "https://github.com/kt-pixels/kirtanArtistry.io",
      updated: "May 9, 2026",
    },
  ],
  counters: [
    { label: "Public repositories checked", value: 31 },
    { label: "Experience entries", value: 3 },
    { label: "Skill categories", value: 3 },
    { label: "Certification cards", value: 5 },
  ],
  timeline: [
    {
      label: "January 2026 Present",
      title: "Data Analyst & Cloud Computing Trainer",
      meta: "DAFFODILS INFOTECH PVT. LTD.",
      description:
        "Training students in Python Pandas, NumPy, SQL, Excel, and Power BI for data analytics. Teaching data cleaning, analysis, dashboard creation, SQL queries, joins, aggregations, window functions, Cloud Computing fundamentals, Microsoft Azure services, Azure VM creation, monitoring, backup, and basic cloud infrastructure concepts.",
    },
    {
      label: "July 2025",
      title: "Full Stack Web Developer & Trainer",
      meta: "Brilliant Institute of Technology",
      description:
        "Training students in Frontend HTML, CSS, JavaScript, React.js and Backend Python, Django, Node.js development. Guiding students in MS Word, Excel, PowerPoint, basic computer operations, Power BI, Cloud Computing fundamentals, Microsoft Azure implementation, hands-on web projects, MySQL, and MongoDB.",
    },
    {
      label: "Nav 2024",
      title: "Full Stack Web Developer And Cloud computing Trainer",
      meta: "ACENT INDIA TECHNOART PVT. LTD.",
      description:
        "Delivered training on Full Stack Development including HTML, CSS, JavaScript, React.js, Python, and Django. Assisted students in building basic web applications and understanding project structure. Introduced Cloud Computing fundamentals, basic Microsoft Azure services, Virtual Machine setup, cloud resource management, MySQL, and MongoDB.",
    },
  ],
  education: [
    {
      title: "Bachelor of Commerce (B.Com)",
      institution: "Gurugram University, Haryana",
      meta: "Resume-listed education",
    },
    {
      title: "Senior Secondary (12th Grade)",
      institution: "HBSE Board - Haryana Board of School Education",
      meta: "Resume-listed education",
    },
    {
      title: "Secondary (10th Grade)",
      institution: "HBSE Board - Haryana Board of School Education",
      meta: "Resume-listed education",
    },
  ],
  certifications: [
    {
      title: "Python",
      issuer: "Certification listed in provided requirements",
      meta: "Certification",
    },
    {
      title: "Data Analyst",
      issuer: "Certification listed in provided requirements",
      meta: "Certification",
    },
    {
      title: "Power BI Certification",
      issuer: "Microsoft Power BI (Interactive Dashboards & Data Visualization)",
      meta: "Resume + provided requirements",
    },
    {
      title: "Prompt Engineering",
      issuer: "Certification listed in provided requirements",
      meta: "Certification",
    },
    {
      title: "Web Development Certification",
      issuer: "ACENT INDIA TECHNOART PVT. LTD.",
      meta: "Resume-listed certification",
    },
  ],
  socials: [
    {
      label: "Email",
      value: "Open inbox",
      url: "mailto:kirtankaushik45@gmail.com",
    },
    { label: "Phone", value: "Call directly", url: "tel:+919810298566" },
    { label: "GitHub", value: "kt-pixels", url: "https://github.com/kt-pixels" },
    {
      label: "LinkedIn",
      value: "Kirtan Kaushik",
      url: "https://www.linkedin.com/in/kirtan-kaushik-71a901324/",
    },
  ],
  github: {
    username: "kt-pixels",
    profileUrl: "https://github.com/kt-pixels",
  },
  linkedin: {
    profileUrl: "https://www.linkedin.com/in/kirtan-kaushik-71a901324/",
  },
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const isFinePointer = window.matchMedia("(pointer: fine)").matches;

let lenisInstance = null;
let heroSliderState = {
  activeIndex: 0,
  intervalId: null,
};
let soundState = {
  enabled: false,
  context: null,
};
let heroSceneState = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loading");
  renderPortfolio();
  initTheme();
  initSmoothScroll();
  initLoader();
  initRoleRotator();
  initHeroSlider();
  initConsoleStream();
  initFooterParticles();
  initProgressBar();
  initCustomCursor();
  initMagneticElements();
  initTiltCards();
  initRevealAnimations();
  initCounters();
  initSectionAccentObserver();
  initNavigationState();
  initTransitionFlash();
  initContactForm();
  initSoundSystem();
  initHeroParallax();
  initGitHub();
  initThreeHero();
  initMobileNavbar();
});

function renderPortfolio() {
  $("[data-tagline]").textContent = portfolioData.profile.tagline;
  $("[data-bio]").textContent = portfolioData.profile.bio;
  $("[data-story]").textContent = portfolioData.profile.story;
  $("[data-footer-tagline]").textContent = portfolioData.profile.footerTagline;
  $("[data-year]").textContent = String(new Date().getFullYear());

  renderHeroSlides();
  renderMetrics();
  renderFocusPoints();
  renderSkillOrbit();
  renderSkillGroups();
  renderProjectFilters();
  renderProjects();
  renderCountersMarkup();
  renderTimeline();
  renderEducation();
  renderCertifications();
  renderSocialLinks();
  renderFooterSocials();
  renderGitHubFallback();
}

function renderHeroSlides() {
  const slider = $("[data-hero-slider]");
  slider.innerHTML = portfolioData.heroSlides
    .map(
      (slide, index) => `
      <article class="hero-slide ${index === 0 ? "is-active" : ""}" data-slide-index="${index}" data-slide-accent="${slide.accent}">
        <div class="hero-slide__copy">
          <span class="hero-slide__index js-slide-stagger">${slide.eyebrow}</span>
          <h3 class="js-slide-stagger">${slide.title}</h3>
          <p class="js-slide-stagger">${slide.copy}</p>
        </div>
        ${createHeroSlideVisual(slide.visual)}
      </article>
    `,
    )
    .join("");

  syncHeroSlideMeta(0);
}

function createHeroSlideVisual(type) {
  switch (type) {
    case "cloud":
      return `
        <div class="hero-slide__visual hero-slide__visual--cloud">
          <div class="visual-cloud-grid"></div>
          <div class="visual-cloud-node visual-cloud-node--a">
            <span>Cloud Layer</span>
            <strong>Edge Delivery</strong>
          </div>
          <div class="visual-cloud-node visual-cloud-node--b">
            <span>Compute Mesh</span>
            <strong>Resilient Routing</strong>
          </div>
          <div class="visual-cloud-node visual-cloud-node--c">
            <span>Live Infra</span>
            <strong>Scalable Services</strong>
          </div>
          <div class="visual-server visual-server--a">
            <span>Node</span>
            <strong>01</strong>
          </div>
          <div class="visual-server visual-server--b">
            <span>Node</span>
            <strong>02</strong>
          </div>
          <span class="visual-link visual-link--one"></span>
          <span class="visual-link visual-link--two"></span>
          <span class="visual-link visual-link--three"></span>
          <span class="visual-pulse"></span>
        </div>
      `;
    case "ai":
      return `
        <div class="hero-slide__visual hero-slide__visual--ai">
          <div class="visual-ai-core"></div>
          <span class="visual-neural-link visual-neural-link--one"></span>
          <span class="visual-neural-link visual-neural-link--two"></span>
          <span class="visual-neural-link visual-neural-link--three"></span>
          <div class="visual-metric visual-metric--one">
            <span>Inference</span>
            <strong>Realtime</strong>
            <div class="visual-metric__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="visual-metric visual-metric--two">
            <span>Automation</span>
            <strong>Adaptive</strong>
            <div class="visual-metric__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="visual-metric visual-metric--three">
            <span>Signals</span>
            <strong>Model Aware</strong>
            <div class="visual-metric__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      `;
    case "motion":
      return `
        <div class="hero-slide__visual hero-slide__visual--motion">
          <div class="visual-motion-card visual-motion-card--a">
            <span>Scene</span>
            <strong>Scroll Choreography</strong>
          </div>
          <div class="visual-motion-card visual-motion-card--b">
            <span>GPU</span>
            <strong>Ready</strong>
          </div>
          <div class="visual-motion-card visual-motion-card--c">
            <span>Interaction</span>
            <strong>Micro-Motion Layer</strong>
          </div>
          <div class="visual-motion-ribbon"></div>
          <div class="visual-motion-path"></div>
          <div class="visual-motion-path visual-motion-path--two"></div>
          <span class="visual-motion-chip visual-motion-chip--one">Premium UI</span>
        </div>
      `;
    case "code":
    default:
      return `
        <div class="hero-slide__visual hero-slide__visual--code">
          <div class="visual-card visual-card--editor">
            <div class="visual-card__head">
              <span>studio/app.tsx</span>
              <div class="visual-card__lights">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="visual-card__stack">
              <div class="visual-line" style="--size:82%"></div>
              <div class="visual-line" style="--size:64%"></div>
              <div class="visual-line" style="--size:74%"></div>
              <div class="visual-line--short"></div>
              <div class="visual-line" style="--size:88%"></div>
              <div class="visual-line--mini"></div>
            </div>
          </div>
          <div class="visual-terminal">
            <span class="visual-terminal__title">Build Stream</span>
            <div class="visual-terminal__lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="visual-orbital"></div>
        </div>
      `;
  }
}

function renderMetrics() {
  const metricsMarkup = portfolioData.metrics
    .map(
      (metric) => `
      <article class="metric-card glass-panel is-reveal">
        <span>${metric.label}</span>
        <strong>${metric.value}</strong>
      </article>
    `,
    )
    .join("");
  $("[data-metrics]").innerHTML = metricsMarkup;
}

function renderFocusPoints() {
  const focusMarkup = portfolioData.focusPoints
    .map(
      (item) => `
      <article class="focus-item">
        <strong>${item.title}</strong>
        <p>${item.copy}</p>
      </article>
    `,
    )
    .join("");
  $("[data-focus-points]").innerHTML = focusMarkup;
}

function renderSkillOrbit() {
  const orbit = $("[data-skill-orbit]");
  const total = portfolioData.skillOrbit.length;

  orbit.innerHTML = portfolioData.skillOrbit
    .map((skill, index) => {
      const angle = `${(360 / total) * index}deg`;
      const radius =
        index % 3 === 0 ? "7.1rem" : index % 2 === 0 ? "9.8rem" : "12.6rem";
      return `
        <span
          class="orbit-pill"
          style="--angle:${angle}; --radius:${radius}; --delay:${index * 0.1}s;"
        >
          ${skill}
        </span>
      `;
    })
    .join("");
}

function renderSkillGroups() {
  const wrapper = $("[data-skill-groups]");
  wrapper.innerHTML = portfolioData.skillGroups
    .map(
      (group) => `
      <article class="skill-group tilt-card is-reveal">
        <div class="skill-group__header">
          <div>
            <span class="panel-tag">${group.title}</span>
            <strong>${group.description}</strong>
          </div>
          <div class="skill-group__value">${group.score}%</div>
        </div>
        <div class="skill-bar" aria-hidden="true" style="--value:${group.score}%;">
          <span></span>
        </div>
        <div class="skill-items">
          ${group.items.map((item) => `<span class="skill-item">${item}</span>`).join("")}
        </div>
      </article>
    `,
    )
    .join("");
}

function renderProjectFilters() {
  const wrapper = $("[data-project-filters]");
  if (!wrapper) {
    return;
  }

  const filters = [
    "All",
    ...new Set(portfolioData.projects.map((project) => project.category)),
  ];

  wrapper.innerHTML = filters
    .map(
      (filter, index) => `
      <button
        class="filter-pill magnetic ${index === 0 ? "is-active" : ""}"
        type="button"
        data-project-filter="${filter}"
        aria-pressed="${index === 0 ? "true" : "false"}"
      >
        ${filter}
      </button>
    `,
    )
    .join("");

  wrapper.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-filter]");
    if (!button) {
      return;
    }

    const activeFilter = button.dataset.projectFilter;
    $$("[data-project-filter]", wrapper).forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    filterProjectCards(activeFilter);
  });
}

function renderProjects() {
  const wrapper = $("[data-project-grid]");
  wrapper.innerHTML = portfolioData.projects
    .map((project, index) => {
      const thumbnail = generateProjectArtwork(project, index);
      const liveDisabled = !project.liveUrl;
      const sourceDisabled = !project.githubUrl;
      return `
        <article class="project-card tilt-card is-reveal" data-project-category="${project.category}">
          <div class="project-card__shell">
            <div class="project-card__visual" style="--thumb:url('${thumbnail}')">
              <span class="project-card__label">${project.category}</span>
            </div>
            <div class="project-card__meta">
              <span>${project.source} / Updated ${project.updated}</span>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
            <div class="project-tags">
              ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
            <div class="project-card__actions">
              <a class="project-link magnetic ${liveDisabled ? "is-disabled" : ""}" href="${liveDisabled ? "#" : project.liveUrl}" ${liveDisabled ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>
                ${liveDisabled ? "Preview pending" : "Live preview"}
              </a>
              <a class="project-link magnetic ${sourceDisabled ? "is-disabled" : ""}" href="${sourceDisabled ? "#" : project.githubUrl}" ${sourceDisabled ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>
                ${sourceDisabled ? "Source pending" : "GitHub"}
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function filterProjectCards(activeFilter) {
  $$("[data-project-category]").forEach((card) => {
    const visible =
      activeFilter === "All" || card.dataset.projectCategory === activeFilter;
    card.classList.toggle("is-filtered-out", !visible);
  });
}

function renderCountersMarkup() {
  const wrapper = $("[data-counters]");
  wrapper.innerHTML = portfolioData.counters
    .map(
      (counter) => `
      <article class="counter-card glass-panel is-reveal">
        <strong data-counter="${counter.value}" data-suffix="${counter.suffix || ""}">0${counter.suffix || ""}</strong>
        <span>${counter.label}</span>
      </article>
    `,
    )
    .join("");
}

function renderEducation() {
  const wrapper = $("[data-education-grid]");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = portfolioData.education
    .map(
      (item) => `
      <article class="credential-card tilt-card is-reveal">
        <span class="panel-tag">${item.meta}</span>
        <h3>${item.title}</h3>
        <p>${item.institution}</p>
      </article>
    `,
    )
    .join("");
}

function renderCertifications() {
  const wrapper = $("[data-certification-grid]");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = portfolioData.certifications
    .map(
      (item) => `
      <article class="credential-card tilt-card is-reveal">
        <span class="panel-tag">${item.meta}</span>
        <h3>${item.title}</h3>
        <p>${item.issuer}</p>
      </article>
    `,
    )
    .join("");
}

function renderTimeline() {
  const wrapper = $("[data-timeline]");
  wrapper.innerHTML = portfolioData.timeline
    .map(
      (item, index) => `
      <article class="timeline__item tilt-card is-reveal">
        <div class="timeline__meta">
          <span>${item.label}</span>
          <strong>Phase ${String(index + 1).padStart(2, "0")}</strong>
        </div>
        <div class="timeline__content">
          <h3>${item.title}</h3>
          <p>${item.meta}</p>
        </div>
        <p>${item.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderSocialLinks() {
  const wrapper = $("[data-social-links]");
  wrapper.innerHTML = portfolioData.socials
    .map((item) => {
      const resolved = resolveSocial(item);
      return `
        <a class="social-link magnetic ${resolved.disabled ? "is-disabled" : ""}" href="${resolved.disabled ? "#" : resolved.url}" ${resolved.disabled ? 'aria-disabled="true"' : resolved.external ? 'target="_blank" rel="noreferrer"' : ""}>
          <span>${item.label}</span>
          <strong>${resolved.value}</strong>
        </a>
      `;
    })
    .join("");
}

function renderFooterSocials() {
  const wrapper = $("[data-footer-socials]");
  const footerItems = portfolioData.socials.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn",
  );

  wrapper.innerHTML = footerItems
    .map((item) => {
      const resolved = resolveSocial(item);
      return `
        <a class="footer-social-link magnetic ${resolved.disabled ? "is-disabled" : ""}" href="${resolved.disabled ? "#" : resolved.url}" ${resolved.disabled ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>
          <span>${item.label}</span>
          <strong>${resolved.disabled ? "Awaiting live URL" : resolved.value}</strong>
        </a>
      `;
    })
    .join("");
}

function resolveSocial(item) {
  let url = item.url;
  let value = item.value;

  if (
    item.label === "GitHub" &&
    !url &&
    !isPlaceholderValue(portfolioData.github.profileUrl)
  ) {
    url = portfolioData.github.profileUrl;
    value = "Live profile";
  }

  if (
    item.label === "LinkedIn" &&
    !url &&
    portfolioData.linkedin.profileUrl &&
    !isPlaceholderValue(portfolioData.linkedin.profileUrl)
  ) {
    url = portfolioData.linkedin.profileUrl;
    value = "Professional profile";
  }

  return {
    url,
    value,
    disabled: !url,
    external: Boolean(url && url.startsWith("http")),
  };
}

function renderGitHubFallback(
  message = "Live GitHub sync will refresh these values when the browser can reach the GitHub API. Static repository data is already loaded below.",
) {
  const stats = [
    { label: "GitHub profile", value: "kt-pixels" },
    { label: "Public repos", value: "31" },
    { label: "Featured repos", value: portfolioData.projects.length },
    { label: "Live fallback", value: "Ready" },
  ];

  const languages = [
    { name: "JavaScript", value: 46 },
    { name: "CSS", value: 24 },
    { name: "HTML", value: 18 },
    { name: "Python", value: 12 },
  ];

  $("[data-github-status]").textContent = "Static GitHub data loaded";
  $("[data-github-stats]").innerHTML = stats
    .map(
      (item) => `
      <article class="github-stat">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </article>
    `,
    )
    .join("");

  $("[data-language-bars]").innerHTML = languages
    .map(
      (language) => `
      <div class="language-bar">
        <div class="language-bar__head">
          <span>${language.name}</span>
          <span>${language.value}%</span>
        </div>
        <div class="language-bar__track" style="--value:${language.value}%;">
          <span></span>
        </div>
      </div>
    `,
    )
    .join("");

  $("[data-github-graph]").innerHTML = `
    <div class="graph-empty">
      <div>
        <p>${message}</p>
        <p class="graph__head">Profile source: <strong>github.com/kt-pixels</strong></p>
      </div>
    </div>
  `;

  $("[data-repo-list]").innerHTML = portfolioData.projects
    .slice(0, 3)
    .map(
      (project) => `
      <article class="repo-card">
        <div class="repo-card__meta">
          <span>${project.category}</span>
          <strong>${project.title}</strong>
        </div>
        <p>${project.description}</p>
        <div class="repo-tags">
          ${project.stack
            .slice(0, 3)
            .map((tech) => `<span>${tech}</span>`)
            .join("")}
        </div>
      </article>
    `,
    )
    .join("");
}

function generateProjectArtwork(project, index) {
  const colorPairs = [
    ["#56d7ff", "#8c6bff"],
    ["#88ffe0", "#3bb1ff"],
    ["#ffbf73", "#ff6cb3"],
    ["#9effc2", "#56c8ff"],
    ["#7de7ff", "#ff8d77"],
  ];
  const [first, second] = colorPairs[index % colorPairs.length];
  const title = project.title.toUpperCase();
  const accent = project.category.toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="g${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${first}" stop-opacity="0.98"/>
          <stop offset="100%" stop-color="${second}" stop-opacity="0.98"/>
        </linearGradient>
        <radialGradient id="r${index}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="520" rx="28" fill="#050915"/>
      <rect x="18" y="18" width="764" height="484" rx="22" fill="url(#g${index})" opacity="0.14"/>
      <circle cx="620" cy="150" r="110" fill="url(#r${index})"/>
      <path d="M80 380C210 290 340 430 470 330S700 350 760 120" fill="none" stroke="url(#g${index})" stroke-width="10" stroke-linecap="round" opacity="0.8"/>
      <path d="M80 150H310" stroke="#ffffff" stroke-opacity="0.42" stroke-width="2"/>
      <path d="M80 180H540" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
      <path d="M80 210H460" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
      <rect x="80" y="86" width="170" height="38" rx="17" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.18"/>
      <text x="108" y="111" fill="#ffffff" fill-opacity="0.88" font-size="15" font-family="Arial, sans-serif" letter-spacing="4">${accent}</text>
      <text x="80" y="280" fill="#ffffff" font-size="56" font-family="Arial, sans-serif" font-weight="700">${title}</text>
      <text x="80" y="314" fill="#ffffff" fill-opacity="0.72" font-size="16" font-family="Arial, sans-serif" letter-spacing="6">PRODUCT EXPERIENCE LAUNCH</text>
      <circle cx="685" cy="392" r="62" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="2"/>
      <circle cx="685" cy="392" r="40" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
      <circle cx="685" cy="392" r="14" fill="#ffffff" fill-opacity="0.86"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function initTheme() {
  const toggles = $$("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme || "dark";
  applyTheme(initialTheme);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const nextTheme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  $$("[data-theme-toggle]").forEach((toggle) => {
    toggle.textContent = theme === "dark" ? "Light" : "Dark";
  });
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#060816" : "#eef3ff");
}

function initSmoothScroll() {
  if (typeof Lenis === "undefined" || prefersReducedMotion) {
    return;
  }

  lenisInstance = new Lenis({
    smoothWheel: true,
    duration: 1.05,
    lerp: 0.08,
  });

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    lenisInstance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
}

function initLoader() {
  const loader = $(".loader");
  const loaderBar = $(".loader__bar span");
  const loaderStage = $("[data-loader-stage]");
  const loaderCount = $("[data-loader-count]");
  const stages = [
    "Calibrating interface",
    "Streaming motion systems",
    "Rendering recruiter mode",
    "Launching portfolio OS",
  ];

  let progress = 0;
  let stageIndex = 0;

  const pulse = setInterval(() => {
    progress = Math.min(progress + Math.random() * 10 + 4, 94);
    loaderBar.style.width = `${progress}%`;
    loaderCount.textContent = String(Math.round(progress)).padStart(2, "0");
    stageIndex = Math.min(stages.length - 1, Math.floor(progress / 30));
    loaderStage.textContent = stages[stageIndex];
  }, 120);

  const minimumLoad = new Promise((resolve) =>
    window.setTimeout(resolve, 1350),
  );
  const loadEvent = new Promise((resolve) =>
    window.addEventListener("load", resolve, { once: true }),
  );

  Promise.all([minimumLoad, loadEvent]).then(() => {
    clearInterval(pulse);
    loaderBar.style.width = "100%";
    loaderCount.textContent = "100";
    loaderStage.textContent = "Portfolio live";

    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      runIntroSequence();
    }, 360);
  });
}

function runIntroSequence() {
  if (typeof gsap === "undefined" || prefersReducedMotion) {
    $$(".is-reveal").forEach((item) => item.classList.remove("is-reveal"));
    return;
  }

  const heroTargets = [
    ".hero .section-kicker",
    ".hero .hud-badge",
    ".hero h1",
    ".hero [data-tagline]",
    ".hero [data-bio]",
    ".hero .hero__trust-strip",
    ".hero .hero__cta",
    ".hero .hero__stats .metric-card",
    ".hero .hero__profile",
    ".hero .hero-slider",
    ".hero .hero__console",
  ];

  gsap.set(heroTargets, { opacity: 0, y: 28 });
  gsap.timeline({ defaults: { ease: "power3.out" } }).to(heroTargets, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.07,
  });
}

function initRoleRotator() {
  const target = $("[data-rotating-role]");
  let index = 0;

  const updateRole = () => {
    target.textContent =
      portfolioData.profile.roles[index % portfolioData.profile.roles.length];
    index += 1;
  };

  updateRole();
  window.setInterval(updateRole, 2200);
}

function initHeroSlider() {
  const sliderRoot = $(".hero-slider");
  const prevButton = $("[data-slide-action='prev']");
  const nextButton = $("[data-slide-action='next']");
  const dotsWrapper = $("[data-slide-dots]");

  dotsWrapper.innerHTML = portfolioData.heroSlides
    .map(
      (slide, index) => `
      <button type="button" class="${index === 0 ? "is-active" : ""}" data-slide-dot="${index}" aria-label="Go to ${slide.title}"></button>
    `,
    )
    .join("");

  const activate = (nextIndex, { immediate = false } = {}) => {
    const total = portfolioData.heroSlides.length;
    heroSliderState.activeIndex = (nextIndex + total) % total;
    syncHeroSlideMeta(heroSliderState.activeIndex);

    const slides = $$(".hero-slide");
    const dots = $$("[data-slide-dot]");
    slides.forEach((slide, index) => {
      slide.classList.toggle(
        "is-active",
        index === heroSliderState.activeIndex,
      );
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === heroSliderState.activeIndex);
    });

    if (!immediate) {
      animateActiveSlide();
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    heroSliderState.intervalId = window.setInterval(() => {
      activate(heroSliderState.activeIndex + 1);
    }, 5600);
  };

  const stopAutoplay = () => {
    if (heroSliderState.intervalId) {
      window.clearInterval(heroSliderState.intervalId);
      heroSliderState.intervalId = null;
    }
  };

  prevButton.addEventListener("click", () =>
    activate(heroSliderState.activeIndex - 1),
  );
  nextButton.addEventListener("click", () =>
    activate(heroSliderState.activeIndex + 1),
  );

  dotsWrapper.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide-dot]");
    if (!button) {
      return;
    }

    const index = Number(button.dataset.slideDot);
    activate(index);
  });

  sliderRoot.addEventListener("pointerenter", stopAutoplay);
  sliderRoot.addEventListener("pointerleave", startAutoplay);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  activate(0, { immediate: true });
  startAutoplay();
}

function syncHeroSlideMeta(index) {
  const slide = portfolioData.heroSlides[index];
  $("[data-slide-status]").textContent =
    `Slide ${String(index + 1).padStart(2, "0")} / ${String(portfolioData.heroSlides.length).padStart(2, "0")}`;
  $("[data-slide-description]").textContent = slide.summary;
  $("[data-slide-tags]").innerHTML = slide.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  const hero = $(".hero");
  hero.dataset.accent = slide.accent;

  if (window.scrollY < hero.offsetHeight * 0.85) {
    document.body.dataset.accent = slide.accent;
  }
}

function animateActiveSlide() {
  if (typeof gsap === "undefined" || prefersReducedMotion) {
    return;
  }

  const activeSlide = $(".hero-slide.is-active");
  if (!activeSlide) {
    return;
  }

  const staggerTargets = $$(".js-slide-stagger", activeSlide);
  gsap.fromTo(
    staggerTargets,
    {
      opacity: 0,
      y: 16,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      overwrite: true,
    },
  );
}

function initConsoleStream() {
  const stream = $("[data-console-stream]");
  stream.innerHTML = portfolioData.consoleStream
    .map((entry) => `<li>${entry}</li>`)
    .join("");
}

function initFooterParticles() {
  const wrapper = $("[data-footer-particles]");
  if (!wrapper) {
    return;
  }

  const particles = Array.from({ length: 18 }, (_, index) => {
    const x = `${6 + ((index * 19) % 86)}%`;
    const y = `${12 + ((index * 23) % 72)}%`;
    const size = `${0.14 + (index % 5) * 0.08}rem`;
    const duration = `${4.8 + (index % 6) * 1.1}s`;
    const delay = `${(index % 7) * 0.34}s`;
    return `<span style="--x:${x}; --y:${y}; --size:${size}; --duration:${duration}; --delay:${delay};"></span>`;
  });

  wrapper.innerHTML = particles.join("");
}

function initProgressBar() {
  const bar = $(".progress-bar span");
  let rafId = null;

  const update = () => {
    rafId = null;
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  const requestUpdate = () => {
    if (rafId !== null) {
      return;
    }
    rafId = requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initCustomCursor() {
  if (!isFinePointer || prefersReducedMotion) {
    document.body.classList.add("cursor-hidden");
    return;
  }

  const ring = $(".cursor-ring");
  const dot = $(".cursor-dot");
  const trailLayer = $(".trail-layer");
  const state = {
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    lastTrail: 0,
  };

  const animate = () => {
    state.ringX += (state.targetX - state.ringX) * 0.16;
    state.ringY += (state.targetY - state.ringY) * 0.16;
    ring.style.transform = `translate(${state.ringX}px, ${state.ringY}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${state.targetX}px, ${state.targetY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  window.addEventListener(
    "pointermove",
    (event) => {
      state.targetX = event.clientX;
      state.targetY = event.clientY;
      ring.style.opacity = "1";
      dot.style.opacity = "1";
      document.body.classList.remove("cursor-hidden");

      const now = performance.now();
      if (now - state.lastTrail > 42) {
        spawnTrail(event.clientX, event.clientY, trailLayer);
        state.lastTrail = now;
      }
    },
    { passive: true },
  );

  window.addEventListener("pointerleave", () => {
    document.body.classList.add("cursor-hidden");
  });
}

function spawnTrail(x, y, layer) {
  if (layer.childElementCount > 14) {
    layer.firstElementChild?.remove();
  }

  const particle = document.createElement("span");
  particle.className = "trail-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  layer.appendChild(particle);
  particle.addEventListener("animationend", () => particle.remove(), {
    once: true,
  });
}

function initMagneticElements() {
  if (!isFinePointer || prefersReducedMotion) {
    return;
  }

  $$(".magnetic").forEach((element) => {
    element.addEventListener(
      "pointermove",
      (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        element.style.transform = `translate(${offsetX * 0.1}px, ${offsetY * 0.1}px)`;
      },
      { passive: true },
    );

    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });
}

function initTiltCards() {
  if (!isFinePointer || prefersReducedMotion) {
    return;
  }

  $$(".tilt-card, .project-card").forEach((card) => {
    card.addEventListener(
      "pointermove",
      (event) => {
        const rect = card.getBoundingClientRect();
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      },
      { passive: true },
    );

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initRevealAnimations() {
  if (
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined" ||
    prefersReducedMotion
  ) {
    $$(".is-reveal").forEach((item) => item.classList.remove("is-reveal"));
    return;
  }

  gsap.utils.toArray(".is-reveal").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      },
    );
  });
}

function initCounters() {
  const counters = $$("[data-counter]");
  if (!counters.length) {
    return;
  }

  const animateCounter = (element) => {
    const targetValue = Number(element.dataset.counter);
    const suffix = element.dataset.suffix || "";
    const start = performance.now();
    const duration = 1400;

    const tick = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(targetValue * eased);
      element.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initSectionAccentObserver() {
  const sections = $$("main .section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.accent) {
          document.body.dataset.accent = entry.target.dataset.accent;
        }
      });
    },
    {
      threshold: 0.35,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function initNavigationState() {
  const links = $$(".site-nav a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = `#${entry.target.id}`;
        const link = $(`.site-nav a[href="${id}"]`);
        if (!link) {
          return;
        }
        if (entry.isIntersecting) {
          links.forEach((item) => item.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.45,
    },
  );

  sections.forEach((section) => observer.observe(section));

  const anchorLinks = $$('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) {
        return;
      }

      event.preventDefault();
      if (lenisInstance) {
        lenisInstance.scrollTo(target, { offset: -108 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initTransitionFlash() {
  const overlay = $(".page-transition");
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      overlay.classList.remove("is-active");
      void overlay.offsetWidth;
      overlay.classList.add("is-active");
    });
  });
}

function initContactForm() {
  const form = $("#contact-form");
  const status = $("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form__status";

    const fields = $$(
      "input[required], textarea[required], select[required]",
      form,
    );
    let hasError = false;

    fields.forEach((field) => {
      const wrapper = field.closest(".field");
      wrapper.classList.remove("is-error");

      if (
        !field.value.trim() ||
        (field.type === "email" && !isValidEmail(field.value.trim()))
      ) {
        wrapper.classList.add("is-error");
        hasError = true;
      }
    });

    if (hasError) {
      status.textContent =
        "Please complete the required fields before launching the message.";
      status.classList.add("is-error");
      return;
    }

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company") || "Not provided";
    const projectType = data.get("projectType");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject Type: ${projectType}\n\nMessage:\n${message}`,
    );

    status.textContent = "Opening your email client now.";
    status.classList.add("is-success");
    window.location.href = `mailto:kirtankaushik45@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initSoundSystem() {
  const toggles = $$("[data-sound-toggle]");
  toggles.forEach((toggle) => {
    toggle.textContent = "Sound Off";
  });

  const ensureAudio = async () => {
    if (soundState.context) {
      if (soundState.context.state === "suspended") {
        await soundState.context.resume();
      }
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    soundState.context = new AudioContextClass();
  };

  const playTone = async (frequency = 420, duration = 0.08) => {
    if (!soundState.enabled) {
      return;
    }

    await ensureAudio();
    if (!soundState.context) {
      return;
    }

    const oscillator = soundState.context.createOscillator();
    const gain = soundState.context.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(
      0.012,
      soundState.context.currentTime + 0.01,
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      soundState.context.currentTime + duration,
    );
    oscillator.connect(gain);
    gain.connect(soundState.context.destination);
    oscillator.start();
    oscillator.stop(soundState.context.currentTime + duration);
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", async () => {
      soundState.enabled = !soundState.enabled;
      toggles.forEach((item) => {
        item.textContent = soundState.enabled ? "Sound On" : "Sound Off";
      });
      await playTone(soundState.enabled ? 640 : 260, 0.12);
    });
  });

  const interactiveTargets = $$(
    ".button, .icon-button, .project-link, .social-link, .contact-chip, .slider-control, .footer-social-link, .footer-detail, .footer-nav-link",
  );
  interactiveTargets.forEach((target) => {
    target.addEventListener("pointerenter", () => playTone(420, 0.06));
    target.addEventListener("click", () => playTone(580, 0.08));
  });
}

function initHeroParallax() {
  if (!isFinePointer || prefersReducedMotion) {
    return;
  }

  const hero = $(".hero");
  const content = $(".hero__content");
  const stage = $(".hero__stage");
  const profile = $(".hero__profile");
  const slider = $(".hero-slider");
  const state = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  };

  const animate = () => {
    state.x += (state.targetX - state.x) * 0.08;
    state.y += (state.targetY - state.y) * 0.08;
    content.style.transform = `translate3d(${state.x * -8}px, ${state.y * -8}px, 0)`;
    stage.style.transform = `translate3d(${state.x * 6}px, ${state.y * 6}px, 0)`;
    profile.style.transform = `translate3d(${state.x * 4}px, ${state.y * 4}px, 0)`;
    slider.style.transform = `translate3d(${state.x * 3}px, ${state.y * 3}px, 0)`;
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  hero.addEventListener(
    "pointermove",
    (event) => {
      const rect = hero.getBoundingClientRect();
      state.targetX = (event.clientX - rect.left) / rect.width - 0.5;
      state.targetY = (event.clientY - rect.top) / rect.height - 0.5;
    },
    { passive: true },
  );

  hero.addEventListener("pointerleave", () => {
    state.targetX = 0;
    state.targetY = 0;
  });
}

async function initGitHub() {
  const username = portfolioData.github.username.trim();
  const placeholder =
    !username || username.includes("your-") || username.includes("[");
  if (placeholder) {
    return;
  }

  const status = $("[data-github-status]");
  status.textContent = "Syncing GitHub data";

  try {
    const [userResponse, reposResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      ),
      fetch(
        `https://api.github.com/users/${username}/events/public?per_page=20`,
      ),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub request failed");
    }

    const user = await userResponse.json();
    const repos = (await reposResponse.json()).filter(
      (repo) => !repo.fork && !repo.archived && repo.size > 0,
    );
    const events = eventsResponse.ok ? await eventsResponse.json() : [];

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0,
    );
    const featuredRepos = repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 4);

    const languageMap = {};
    const languageSources = repos.slice(0, 6);

    await Promise.all(
      languageSources.map(async (repo) => {
        if (!repo.languages_url) {
          return;
        }
        const languageResponse = await fetch(repo.languages_url);
        if (!languageResponse.ok) {
          return;
        }
        const languageData = await languageResponse.json();
        Object.entries(languageData).forEach(([language, bytes]) => {
          languageMap[language] = (languageMap[language] || 0) + bytes;
        });
      }),
    );

    const totalLanguageBytes =
      Object.values(languageMap).reduce((sum, bytes) => sum + bytes, 0) || 1;
    const languages = Object.entries(languageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, bytes]) => ({
        name,
        value: Math.max(8, Math.round((bytes / totalLanguageBytes) * 100)),
      }));

    const latestPush = events.find((event) => event.type === "PushEvent");

    status.textContent = "GitHub sync live";
    $("[data-github-stats]").innerHTML = [
      { label: "Public repos", value: user.public_repos },
      { label: "Followers", value: user.followers },
      { label: "Total stars", value: totalStars },
      {
        label: "Latest activity",
        value: latestPush ? "Push event" : "Available",
      },
    ]
      .map(
        (item) => `
      <article class="github-stat">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </article>
    `,
      )
      .join("");

    $("[data-language-bars]").innerHTML = languages.length
      ? languages
          .map(
            (language) => `
          <div class="language-bar">
            <div class="language-bar__head">
              <span>${language.name}</span>
              <span>${language.value}%</span>
            </div>
            <div class="language-bar__track" style="--value:${language.value}%;"><span></span></div>
          </div>
        `,
          )
          .join("")
      : `<p>No language data available yet.</p>`;

    $("[data-github-graph]").innerHTML = `
      <img
        src="https://ghchart.rshah.org/00aefe/${username}"
        alt="${username} GitHub contribution graph"
        loading="lazy"
      >
    `;

    $("[data-repo-list]").innerHTML = featuredRepos
      .map(
        (repo) => `
        <article class="repo-card">
          <div class="repo-card__meta">
            <span>${repo.visibility || "public"} repo</span>
            <strong>${repo.name}</strong>
          </div>
          <p>${repo.description || "No GitHub description provided."}</p>
          <div class="repo-tags">
            <span>${repo.language || "Multi-stack"}</span>
            <span>${repo.stargazers_count} stars</span>
            <span>${formatDate(repo.updated_at)}</span>
          </div>
        </article>
      `,
      )
      .join("");
  } catch (error) {
    renderGitHubFallback(
      "GitHub sync could not complete in this environment. The fallback layout is active until the username and API access succeed.",
    );
  }
}

function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function isPlaceholderValue(value) {
  return !value || value.includes("your-") || value.includes("[");
}

function initThreeHero() {
  if (prefersReducedMotion || typeof THREE === "undefined") {
    return;
  }

  const canvas = $("#hero-canvas");
  const hero = $(".hero");
  if (!canvas || !hero) {
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    46,
    hero.clientWidth / hero.clientHeight,
    0.1,
    100,
  );
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });

  const setRendererSize = () => {
    camera.aspect = hero.clientWidth / hero.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, hero.clientWidth < 800 ? 1.15 : 1.55),
    );
    renderer.setSize(hero.clientWidth, hero.clientHeight);
  };

  setRendererSize();
  camera.position.set(0, 0, 8);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.IcosahedronGeometry(1.65, 1);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x5ed7ff,
    emissive: 0x24154e,
    emissiveIntensity: 1.1,
    metalness: 0.46,
    roughness: 0.22,
    transparent: true,
    opacity: 0.92,
    clearcoat: 1,
  });

  const core = new THREE.Mesh(geometry, material);
  group.add(core);

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.15, 1),
    new THREE.MeshBasicMaterial({
      color: 0xb687ff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    }),
  );
  group.add(wire);

  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.05, 16, 200),
    new THREE.MeshBasicMaterial({
      color: 0x88ffe0,
      transparent: true,
      opacity: 0.28,
    }),
  );
  torus.rotation.x = 1.1;
  group.add(torus);

  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 920;
  const positions = new Float32Array(particleCount * 3);

  for (let index = 0; index < particleCount; index += 1) {
    const radius = 4 + Math.random() * 4.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );

  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0xbad9ff,
      size: 0.024,
      transparent: true,
      opacity: 0.66,
    }),
  );
  scene.add(particles);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.54);
  scene.add(ambientLight);

  const lightA = new THREE.PointLight(0x5ed7ff, 2.1, 30);
  lightA.position.set(4, 3, 4);
  scene.add(lightA);

  const lightB = new THREE.PointLight(0xb687ff, 1.6, 30);
  lightB.position.set(-4, -2, 3);
  scene.add(lightB);

  const mouse = { x: 0, y: 0 };
  const clock = new THREE.Clock();
  let isVisible = true;
  let resizeTimeout = null;

  hero.addEventListener(
    "pointermove",
    (event) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    },
    { passive: true },
  );

  document.addEventListener("visibilitychange", () => {
    isVisible = !document.hidden;
  });

  const handleResize = () => {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(setRendererSize, 100);
  };

  const animate = () => {
    if (!isVisible) {
      requestAnimationFrame(animate);
      return;
    }

    const elapsed = clock.getElapsedTime();
    core.rotation.x += 0.003;
    core.rotation.y += 0.0042;
    wire.rotation.x -= 0.0026;
    wire.rotation.y += 0.0034;
    torus.rotation.z += 0.0022;
    particles.rotation.y += 0.0007;
    particles.rotation.x -= 0.00042;

    group.rotation.x += (mouse.y * 0.16 - group.rotation.x) * 0.04;
    group.rotation.y += (mouse.x * 0.24 - group.rotation.y) * 0.04;
    group.position.y = Math.sin(elapsed * 0.9) * 0.11;
    lightA.position.x = 4 + mouse.x * 1.7;
    lightA.position.y = 3 + mouse.y * 1.2;
    lightB.position.x = -4 - mouse.x * 1.4;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  heroSceneState = { material, wire, torus, lightA, lightB };

  window.addEventListener("resize", handleResize);
  requestAnimationFrame(animate);
}

/* =========================
   MOBILE NAVIGATION
========================= */

function initMobileNavbar() {
  const menuBtn = document.querySelector("[data-mobile-nav-toggle]");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector("[data-mobile-nav-overlay]");
  const closeBtn = document.querySelector("[data-mobile-nav-close]");

  if (!menuBtn || !mobileNav || !overlay || !closeBtn) {
    console.log("Mobile nav elements not found");
    return;
  }

  function openMenu() {
    mobileNav.classList.add("active");
    overlay.hidden = false;

    menuBtn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileNav.classList.remove("active");
    overlay.hidden = true;

    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", openMenu);

  closeBtn.addEventListener("click", closeMenu);

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-nav__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
