// src/components/Footer.jsx
import React from "react";

/**
 * Luxury Footer — frosted glass, gradient accents, social icons (SVG),
 * responsive: 1 / 2 / 4 columns (mobile / tablet / desktop).
 *
 * Pass onContactClick prop to open contact modal (used for Email).
 */

export default function Footer({ onContactClick }) {
  return (
    <footer
      className="
    mt-16 py-12
    bg-gradient-to-b from-[#0d0b12] to-[#1a1722]
    border-t border-purple-500/20
    text-gray-200
  "
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Logo + Buttons */}
        <div className="flex items-center justify-between mb-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-purple-400/40 shadow-md">
              <img
                src="logo.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="text-white font-semibold">Kirtan Kaushik</div>
              <div className="text-xs text-purple-300">
                Web Developer • Trainer
              </div>
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#projects"
              className="
            px-4 py-2 rounded-full
            bg-gradient-to-r from-purple-600 to-pink-500
            text-white text-sm shadow
            hover:scale-105 transition
          "
            >
              View Projects
            </a>

            <button
              onClick={onContactClick}
              className="
            px-4 py-2 rounded-full
            bg-white/10 
            border border-purple-300/30
            text-gray-200 text-sm
            hover:bg-white/20
            transition
          "
            >
              Contact
            </button>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">About</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              I’m Kirtan Kaushik — Web Developer & Trainer. I create modern,
              responsive web experiences and teach students industry-level
              skills.
            </p>

            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <div>Based in India</div>
              <div>Available for freelance & teaching</div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Skills</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>HTML • CSS • JavaScript</li>
              <li>React.js • Node.js • Express</li>
              <li>MongoDB • MySQL • Django</li>
              <li>Power BI • MS Office • Git</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Projects</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition"
                >
                  Social Media Web App
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition"
                >
                  Bus Tracking App
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition"
                >
                  Rukshak - NGO Website
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <SocialIconWhatsapp />
                <a
                  href="#"
                  className="text-sm text-gray-200 hover:text-purple-400"
                >
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <SocialIconGithub />
                <a
                  href="#"
                  className="text-sm text-gray-200 hover:text-purple-400"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-3">
                <SocialIconNaukri />
                <a
                  href="#"
                  className="text-sm text-gray-200 hover:text-purple-400"
                >
                  Naukri
                </a>
              </div>

              <div className="flex items-center gap-3">
                <SocialIconLinkedin />
                <a
                  href="#"
                  className="text-sm text-gray-200 hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <SocialIconMail />
                <button
                  onClick={onContactClick}
                  className="text-sm text-gray-200 hover:text-purple-400 underline"
                >
                  Email
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} Kirtan Kaushik. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- ICONS (inline SVGs) ---------------- */

function SocialIconWhatsapp() {
  return (
    <svg
      className="w-6 h-6 text-green-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M21 11.5a9.5 9.5 0 10-3 6.7L21 21l-1.8-5.9A9.46 9.46 0 0021 11.5z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.148-.672.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.482-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.672-1.618-.922-2.22-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0 0 .04.02.08.02.033 0 .06-.002.09.002.298.032 1.006.149 1.15.19.149.04.297.02.41-.025.134-.052.423-.158 1.028-.616.605-.458 1.017-1.038 1.157-1.192.148-.149.148-.297.104-.347-.044-.05-.235-.08-.532-.225z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIconGithub() {
  return (
    <svg
      className="w-6 h-6 text-gray-900 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.7 1.6.7 1 .6 2.6.4 3.2.3.1-.7.4-1.1.7-1.4-2.7-.3-5.6-1.3-5.6-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2A11.4 11.4 0 0112 6.8c1 .005 2 .14 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.9 5.6-5.7 5.9.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIconNaukri() {
  // Naukri doesn't have a universal SVG here; using a briefcase / job icon as placeholder
  return (
    <svg
      className="w-6 h-6 text-yellow-600 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 7a2 2 0 012-2h3V4a2 2 0 012-2h4a2 2 0 012 2v1h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIconLinkedin() {
  return (
    <svg
      className="w-6 h-6 text-blue-600 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM8 8h4.79v1.89h.07c.67-1.27 2.3-2.6 4.73-2.6C22.1 7.29 24 9.5 24 13.7V22h-5v-7.2c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V22H8V8z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIconMail() {
  return (
    <svg
      className="w-6 h-6 text-red-500 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zM3 6.9l8.5 6L20 6.9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
