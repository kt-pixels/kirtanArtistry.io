import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 text-white antialiased">
      <Header onContactClick={openContact} />
      <main className="container mx-auto px-4 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer onContactClick={openContact} />

      <Contact isOpen={contactOpen} onClose={closeContact} />
    </div>
  );
}
