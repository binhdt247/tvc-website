import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NextJsCodeExporter from './components/NextJsCodeExporter';

export default function App() {
  const [activeSection, setActiveSection] = useState('trang-chu');

  // Track scroll position to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['trang-chu', 'gioi-thieu', 'dich-vu', 'du-an', 'lien-he'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* Navigation Layer */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single Page Sections */}
      <main className="overflow-x-hidden">
        <Hero onLearnMore={() => handleNavigate('dich-vu')} />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer block */}
      <Footer onNavigate={handleNavigate} />

      {/* Direct copy exporter helper for Next.js files requested by user */}
      <NextJsCodeExporter />
    </div>
  );
}
