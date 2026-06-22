import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-[#050508]/75 backdrop-blur-md border-b border-[#22D3EE]/10 shadow-lg shadow-black/30' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-2 group"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/25 flex items-center justify-center font-mono font-bold text-[#22D3EE] group-hover:border-[#22D3EE]/65 transition-all shadow-md shadow-[#22D3EE]/5">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-base tracking-tight text-white group-hover:text-[#22D3EE] transition-colors select-none uppercase">
                Saquib Raza
              </span>
              <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950 border border-zinc-900 rounded-full px-2 py-1 backdrop-blur-sm" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'text-white font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#22D3EE]/10 border border-[#22D3EE]/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Links & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="social-github-header"
                className="p-2 text-slate-400 hover:text-[#22D3EE] rounded-lg hover:bg-slate-900 transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="social-linkedin-header"
                className="p-2 text-slate-400 hover:text-[#22D3EE] rounded-lg hover:bg-slate-900 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Resume Call-to-Action */}
            <button
               onClick={() => handleNavClick('contact')}
               id="cta-hire-header"
               className="hidden lg:flex items-center justify-center px-4 py-2 border border-[#22D3EE] hover:bg-[#22D3EE] hover:text-zinc-950 text-[#22D3EE] rounded-lg text-xs font-mono font-bold tracking-widest transition-all shadow-md shadow-[#22D3EE]/10 hover:shadow-[#22D3EE]/20 hover:scale-[1.03] uppercase"
             >
              Get in Touch
            </button>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors border border-slate-900"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            id="mobile-drawer"
            className="fixed inset-x-0 top-[73px] z-45 md:hidden p-6 glass-card border-b border-[#22D3EE]/10 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-mono transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-[#22D3EE]/10 text-[#22D3EE] border-l-2 border-[#22D3EE] font-bold pl-4'
                      : 'text-zinc-300 hover:bg-slate-900/40 hover:text-white pl-2'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
                  )}
                </button>
              ))}

              <div className="h-px bg-slate-900 my-2"></div>

              <div className="flex items-center gap-4 px-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  id="mobile-github"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="mobile-linkedin"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  id="mobile-email"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
