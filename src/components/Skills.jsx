// src/components/Skills.jsx
import React, { useEffect, useState } from "react";

const SKILLS = [
  {
    name: "HTML",
    cat: "Frontend",
    desc: "Semantic markup & accessibility",
    pct: 92,
  },
  {
    name: "CSS",
    cat: "Frontend",
    desc: "Responsive layouts, Tailwind, animations",
    pct: 90,
  },
  {
    name: "JavaScript",
    cat: "Frontend",
    desc: "ES6+, async patterns & DOM",
    pct: 88,
  },
  {
    name: "React.js",
    cat: "Frontend",
    desc: "Hooks, state, component architecture",
    pct: 86,
  },

  { name: "Node.js", cat: "Backend", desc: "Server logic & APIs", pct: 72 },
  {
    name: "Express.js",
    cat: "Backend",
    desc: "REST endpoints, middleware",
    pct: 70,
  },
  { name: "MongoDB", cat: "Database", desc: "NoSQL & CRUD ops", pct: 68 },
  { name: "MySQL", cat: "Database", desc: "Relational DB & queries", pct: 64 },

  {
    name: "Python",
    cat: "Backend",
    desc: "Scripting & backend basics",
    pct: 60,
  },
  { name: "Django", cat: "Backend", desc: "Django REST basics", pct: 55 },
  { name: "Power BI", cat: "Data", desc: "Dashboards & DAX", pct: 70 },
  { name: "MS Office", cat: "Productivity", desc: "Excel, Word, PPT", pct: 88 },

  { name: "Git", cat: "Tooling", desc: "Version control workflows", pct: 86 },
  { name: "GitHub", cat: "Tooling", desc: "Repo & collaboration", pct: 86 },
  { name: "Canva", cat: "Design", desc: "Design assets & thumbnails", pct: 72 },
  { name: "Tally", cat: "Finance", desc: "Accounting basics", pct: 52 },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="skills"
      className="mt-10
    py-20 
             bg-white/10 backdrop-blur-xl 
             rounded-3xl 
             shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
             border border-white/20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Skills & Mastery
            </h2>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              A concise view of core competencies — visualized proficiency,
              categories and a short professional description for each skill.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button className="px-4 py-2 rounded-full text-sm bg-black/30 ring-1 ring-pink-900/20 hover:scale-105 transition">
              All
            </button>
            <button className="px-4 py-2 rounded-full text-sm bg-black/20 border border-pink-800/10 text-pink-300">
              Frontend
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700
            ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {SKILLS.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Skill card shows name, category, description and a circular proficiency ring */
function SkillCard({ skill, index }) {
  const [visible, setVisible] = useState(false);

  // staggered reveal
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80 + index * 80);
    return () => clearTimeout(t);
  }, [index]);

  const size = 64;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.pct / 100) * circumference;

  return (
    <div
      className={`relative rounded-2xl p-5 overflow-hidden
        bg-gradient-to-br from-black/45 to-black/35 ring-1 ring-pink-900/18
        shadow-2xl transform transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(149,66,226,0.12)]
        group cursor-default
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ borderRadius: "18px" }}
    >
      {/* decorative accent (gradient edge) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background:
            "linear-gradient(120deg, rgba(238,130,238,0.06), rgba(128,0,128,0.03))",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* circular proficiency */}
        <div className="flex-shrink-0">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="block"
          >
            <defs>
              <linearGradient id={`g-${skill.name}`} x1="0" x2="1">
                <stop offset="0%" stopColor="#ff7bc7" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {/* background ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={stroke}
              fill="none"
            />

            {/* progress ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={`url(#g-${skill.name})`}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={visible ? offset : circumference}
              fill="none"
              style={{
                transition: "stroke-dashoffset 900ms cubic-bezier(.2,.9,.2,1)",
              }}
            />

            {/* center label */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              className="text-xs font-semibold"
              style={{ fill: "white", fontSize: 12, fontWeight: 700 }}
            >
              {skill.pct}%
            </text>
          </svg>
        </div>

        {/* content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-white font-semibold text-lg truncate">
              {skill.name}
            </h3>
            <span className="text-xs text-pink-300 font-medium">
              {skill.cat}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-300 leading-relaxed truncate">
            {skill.desc}
          </p>

          <div className="mt-3 flex gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-black/30 ring-1 ring-pink-900/10 text-gray-200">
              Professional
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-black/20 ring-1 ring-pink-900/8 text-gray-200">
              Practical
            </span>
          </div>
        </div>
      </div>

      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(400px 200px at 10% 10%, rgba(255,123,199,0.06), transparent 10%), radial-gradient(300px 150px at 90% 90%, rgba(139,92,246,0.05), transparent 20%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
