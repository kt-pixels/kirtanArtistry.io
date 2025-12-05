// src/components/Projects.jsx
import React, { useEffect, useState } from "react";

const PROJECTS = [
  {
    title: "Social Media Web App",
    subtitle: "React • Node • MongoDB",
    img: "/assets/project1.jpg",
    tech: ["React.js", "Node.js", "MongoDB"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Bus Tracking Interface",
    subtitle: "React • Maps API",
    img: "/assets/project2.jpg",
    tech: ["React.js", "Maps API", "Socket.io"],
    live: "#",
    code: "#",
  },
  {
    title: "Rukshak - NGO Website",
    subtitle: "React • Tailwind",
    img: "/assets/project3.jpg",
    tech: ["React.js", "Tailwind", "Netlify"],
    live: "#",
    code: "#",
  },
  {
    title: "Social Media Web App",
    subtitle: "React • Node • MongoDB",
    img: "/assets/project1.jpg",
    tech: ["React.js", "Node.js", "MongoDB"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Bus Tracking Interface",
    subtitle: "React • Maps API",
    img: "/assets/project2.jpg",
    tech: ["React.js", "Maps API", "Socket.io"],
    live: "#",
    code: "#",
  },
  {
    title: "Rukshak - NGO Website",
    subtitle: "React • Tailwind",
    img: "/assets/project3.jpg",
    tech: ["React.js", "Tailwind", "Netlify"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Selected Projects
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              A curated set of projects demonstrating production-ready front-end
              patterns, architecture and polished UI/UX.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md ring-1 ring-purple-200/40 text-sm text-gray-800 hover:scale-105 transition">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-transparent border border-purple-200/20 text-sm text-purple-700 hover:bg-purple-50 transition">
              Featured
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 lg:grid-cols-3 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ProjectCard ---------------- */
function ProjectCard({ p, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120 + index * 120);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`relative rounded-3xl transform transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Gradient border wrapper */}
      <div
        className="rounded-3xl p-[1.5px] bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
        style={{ backgroundSize: "200% 200%" }}
      >
        {/* Inner frosted card */}
        <article
          className="relative rounded-3xl overflow-hidden bg-white/50 backdrop-blur-md shadow-2xl ring-1 ring-purple-200/30
                     hover:-translate-y-2 focus-within:-translate-y-2 transition-transform duration-300"
          tabIndex={0}
        >
          {/* Featured ribbon */}
          {p.featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold shadow">
                ★ Featured
              </span>
            </div>
          )}

          {/* Image with overlay */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* overlay that appears on hover/focus */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white drop-shadow">
                    {p.title}
                  </h3>
                  <p className="text-xs text-purple-200 mt-1">{p.subtitle}</p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm shadow hover:scale-105 transition"
                    aria-label={`View live ${p.title}`}
                  >
                    Live
                  </a>

                  <a
                    href={p.code}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 text-gray-900 text-sm ring-1 ring-purple-200/30 hover:scale-105 transition"
                    aria-label={`View code ${p.title}`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
            <p className="mt-2 text-sm text-gray-700">{p.subtitle}</p>

            {/* tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/30 text-gray-800 ring-1 ring-purple-200/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* short description / CTA */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Modern responsive UI, performance optimizations, and clean
                architecture.
              </p>

              <div className="ml-4 flex items-center gap-3">
                <a
                  href={p.live}
                  className="hidden md:inline-flex px-3 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm shadow hover:scale-105 transition"
                >
                  Open
                </a>

                <a
                  href={p.code}
                  className="inline-flex items-center px-3 py-2 rounded-full bg-white/60 text-gray-900 text-sm ring-1 ring-purple-200/30 hover:scale-105 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* subtle focus ring for keyboard users */}
          <span className="absolute inset-0 pointer-events-none rounded-3xl ring-0 focus-within:ring-2 focus-within:ring-purple-300/40" />
        </article>
      </div>
    </div>
  );
}
