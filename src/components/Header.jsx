// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Header({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // manage focus & body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(
        () => panelRef.current?.querySelector("a,button")?.focus(),
        80
      );
    } else {
      document.body.style.overflow = "";
      btnRef.current?.focus();
    }
  }, [open]);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="relative text-sm sm:text-base px-2 py-1 hover:text-pink-300 transition-colors
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* Top nav - glass effect */}
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between
                   backdrop-blur-md bg-gradient-to-br from-black/60 via-purple-900/30 to-pink-900/10
                   border border-pink-900/20 rounded-b-2xl shadow-xl"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left: logo + name */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
            aria-label="Go to home"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-pink-400/30 shadow-lg transform transition-transform hover:scale-105">
              <img
                src="logo.png"
                alt="Kirtan Kaushik logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-white text-lg">
                Kirtan Kaushik
              </span>
              <span className="text-xs text-pink-300">
                Web Developer • Trainer
              </span>
            </div>
          </a>
        </div>

        {/* Right: desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 shadow-md
                         transform hover:-translate-y-0.5 hover:scale-[1.02] transition"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            ref={btnRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-black/30 hover:bg-black/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel (slide down) */}
      <div
        ref={panelRef}
        id="mobile-menu"
        className={`md:hidden fixed inset-x-4 top-[74px] z-40 rounded-xl overflow-hidden shadow-2xl transform origin-top transition-all duration-250
                    ${
                      open
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0 pointer-events-none"
                    }`}
        style={{ transformOrigin: "top center" }}
        aria-hidden={!open}
      >
        <div className="bg-gradient-to-br from-black/85 to-purple-900/85 backdrop-blur-md border border-pink-900/20 p-5">
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white hover:text-pink-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white hover:text-pink-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white hover:text-pink-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white hover:text-pink-300"
            >
              Projects
            </a>

            <div className="pt-3 border-t border-pink-900/20 mt-2">
              <button
                onClick={() => {
                  onContactClick();
                  setOpen(false);
                }}
                className="w-full mt-2 px-4 py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
              >
                Contact
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              <div className="mb-1">Follow</div>
              <div className="flex gap-3">
                <a href="#" className="underline text-pink-300">
                  GitHub
                </a>
                <a href="#" className="underline text-pink-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
