// src/components/About.jsx
import React, { useEffect, useState } from "react";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "Django",
  "Power BI",
  "Git",
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  // smooth reveal on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-white/20 relative overflow-hidden"
    >
      {/* subtle moving glow behind */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -bottom-12 right-0 w-52 h-52 rounded-full bg-purple-600/10 blur-3xl motion-safe:animate-pulse" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
        <header
          className={`mb-10 transform transition-all duration-700 ease-out motion-safe:duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: mounted ? "80ms" : "0ms" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-white">
            About Kirtan Kaushik
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-2xl">
            Web Developer & Trainer. I design and build production-grade web
            applications with thoughtful UI, strong performance and maintainable
            code.
          </p>
        </header>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: profile card */}
          <div
            className={`relative transform transition-all duration-700 ease-out motion-safe:duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: mounted ? "180ms" : "0ms" }}
          >
            {/* decorative gradient border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-800/30 via-pink-700/15 to-transparent blur-xl opacity-60 pointer-events-none" />

            <div className="relative bg-black/55 ring-1 ring-pink-900/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* small accent */}
              <div className="absolute right-6 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-700/10 blur-3xl pointer-events-none" />

              <div className="flex items-start gap-5">
                <div className="flex-1">
                  <div className="text-sm text-pink-300">Kirtan Kaushik</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    Web Developer • Trainer
                  </div>
                  <p className="mt-3 text-gray-300 text-sm leading-relaxed max-w-xl">
                    I build elegant, responsive interfaces with React and modern
                    tooling. I also train aspiring developers to write clean,
                    production-ready code.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-sm font-medium shadow-lg transform motion-safe:hover:-translate-y-0.5 transition"
                    >
                      View Projects
                    </a>
                    <a
                      href="/resume.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-700/30 text-sm text-gray-200 hover:border-pink-400 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Resume
                    </a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Stat label="Experience" value="5+ yrs" />
                    <Stat label="Projects" value="10+" />
                    <Stat label="Students" value="200+" />
                    <Stat label="Certs" value="2" />
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="mt-6 border-t border-pink-900/15 pt-4 text-sm text-gray-300">
                <strong className="text-white">Summary:</strong> Experienced
                frontend developer focused on React.js, responsive UI/UX, API
                integration and delivering production-ready applications.
              </div>
            </div>
          </div>

          {/* RIGHT: skills & details */}
          <aside
            className={`transform transition-all duration-700 ease-out motion-safe:duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: mounted ? "260ms" : "0ms" }}
          >
            <div className="relative rounded-3xl p-6 bg-gradient-to-br from-black/50 to-purple-900/20 ring-1 ring-pink-900/18 shadow-xl backdrop-blur-sm">
              <h4 className="text-sm text-pink-300 font-medium mb-4">
                Core Skills
              </h4>

              {/* polished skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SKILLS.map((s, idx) => (
                  <div
                    key={s}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl bg-black/25 ring-1 ring-pink-900/10 transform transition
                                hover:scale-105`}
                    style={{
                      transitionDuration: "400ms",
                      transitionDelay: mounted ? `${300 + idx * 40}ms` : "0ms",
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    <SkillIcon />
                    <span className="text-sm text-gray-100">{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-pink-900/15 pt-4">
                <h4 className="text-sm text-pink-300 font-medium mb-3">
                  Education & Certs
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold text-white">B.Com</span> —{" "}
                    Gurugram University
                  </li>
                  <li>Senior Secondary & Secondary — HBSE</li>
                  <li>Web Dev Cert — Acent India Technoart</li>
                  <li>Power BI — Microsoft</li>
                </ul>
              </div>

              <div className="mt-6 border-t border-pink-900/15 pt-4">
                <h4 className="text-sm text-pink-300 font-medium mb-3">
                  Experience Snapshot
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-pink-400 mt-1" />
                    <div>
                      <div className="font-medium text-white">
                        Frontend Development
                      </div>
                      <div className="text-xs text-gray-400">
                        React.js, responsive design, component-driven
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-purple-400 mt-1" />
                    <div>
                      <div className="font-medium text-white">
                        Training & Mentorship
                      </div>
                      <div className="text-xs text-gray-400">
                        Hands-on curriculum & workshops
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* subtle corner glow */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* small components */

function Stat({ label, value }) {
  return (
    <div className="rounded-lg px-3 py-2 bg-black/20 ring-1 ring-pink-900/12 text-center">
      <div className="text-white font-semibold">{value}</div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  );
}

function SkillIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-pink-300"
      />
      <path
        d="M7 12h10M7 16h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
