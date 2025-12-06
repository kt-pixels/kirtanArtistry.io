// src/components/Hero.jsx
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 overflow-hidden"
      aria-label="Hero"
    >
      {/* decorative glows - animated softly */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-8 left-1/4 w-56 h-56 bg-pink-400/18 rounded-full blur-3xl motion-safe:animate-pulse" />
        <div className="hidden md:block absolute bottom-8 right-1/4 w-72 h-72 bg-purple-500/16 rounded-full blur-3xl motion-safe:animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: content */}
          <div className="order-2 lg:order-1">
            {/* badge */}
            <div
              className={`inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm ring-1 ring-purple-300/30 shadow-sm
                          transform transition-all duration-700 ease-out motion-safe:duration-700
                          ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
              style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
            >
              <span className="text-xs font-medium text-purple-700">
                Web Developer • Trainer
              </span>
            </div>

            {/* heading */}
            <h1
              className={`mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight
                          transform transition-all duration-700 ease-out motion-safe:duration-700
                          ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }`}
              style={{ transitionDelay: mounted ? "200ms" : "0ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Kirtan Kaushik
              </span>
            </h1>

            {/* description */}
            <p
              className={`mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed
                          transform transition-all duration-700 ease-out motion-safe:duration-700
                          ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }`}
              style={{ transitionDelay: mounted ? "320ms" : "0ms" }}
            >
              I design and build responsive, modern, and high-performance web
              applications using React, Node.js, and industry-level tooling. I
              combine technical craft with thoughtful UI/UX.
            </p>

            {/* CTA buttons: full width on small screens */}
            <div
              className={`mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:items-center
                          transform transition-all duration-700 ease-out motion-safe:duration-700
                          ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }`}
              style={{ transitionDelay: mounted ? "440ms" : "0ms" }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium shadow-lg transform motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-xl"
                aria-label="View Projects"
              >
                View My Projects
              </a>

              <a
                href="#skills"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm ring-1 ring-purple-200 text-gray-900 text-sm font-medium hover:ring-purple-400 transition"
                aria-label="Explore Skills"
              >
                Explore Skills
              </a>
            </div>

            {/* small stats */}
            <div
              className={`mt-6 sm:mt-8 flex flex-wrap gap-4 text-sm text-gray-600
                          transform transition-all duration-700 ease-out motion-safe:duration-700
                          ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }`}
              style={{ transitionDelay: mounted ? "560ms" : "0ms" }}
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                5+ Years Experience
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                10+ Projects
              </div>
            </div>
          </div>

          {/* RIGHT: image card */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end
                        transform transition-all duration-700 ease-out motion-safe:duration-700
                        ${
                          mounted
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                        }`}
            style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-200/40
                         w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80
                         transform motion-safe:transition-transform motion-safe:duration-700
                         motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.03]"
              aria-hidden="false"
            >
              <img
                src="logo.png"
                alt="Portrait of Kirtan Kaushik"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/assets/logo.jpg";
                }}
              />

              {/* subtle gradient overlay + soft shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/25 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
