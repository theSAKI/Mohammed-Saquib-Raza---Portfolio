import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple, high-performance IntersectionObserver to track the active viewport section
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // trigger active when section occupies middle 30% of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 selection:bg-[#22D3EE]/25 selection:text-[#22D3EE] antialiased overflow-x-hidden font-sans">
      {/* Persistent Animated Dark Aurora Gradient Mesh Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-[#020617]">
        {/* Violet Aurora Blob */}
        <div className="absolute top-[-15%] left-[-10%] w-[65%] h-[65%] rounded-full bg-[#8B5CF6]/15 blur-[160px] animate-aurora-1" />
        {/* Indigo Aurora Blob */}
        <div className="absolute top-[10%] right-[-15%] w-[70%] h-[70%] rounded-full bg-[#6366F1]/15 blur-[160px] animate-aurora-2" />
        {/* Cyan Aurora Blob */}
        <div className="absolute bottom-[-15%] left-[-5%] w-[60%] h-[60%] rounded-full bg-[#22D3EE]/15 blur-[160px] animate-aurora-3" />
        {/* Pink Aurora Blob */}
        <div className="absolute bottom-[20%] right-[10%] w-[55%] h-[55%] rounded-full bg-[#EC4899]/15 blur-[160px] animate-aurora-4" />
      </div>

      {/* Floating Glassmorphic Top Header */}
      <Header activeSection={activeSection} />

      {/* Main Orchestrated View Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
