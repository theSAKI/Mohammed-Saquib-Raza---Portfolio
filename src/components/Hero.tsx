import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowUpRight, Github, Linkedin, Briefcase, Terminal, ArrowDown, Camera } from 'lucide-react';
import { personalInfo, stats, projects } from '../data';
import { jsPDF } from 'jspdf';

// Custom animated counter component supporting decimals & integers
function Counter({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Linear or easeOut back calculation
      const progressEase = 1 - Math.pow(1 - progress, 3); // cubic easeOut
      const current = progressEase * value;
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  // If value is a Float, show one decimal digit
  const isFloat = value % 1 !== 0;
  return (
    <span className="font-display font-black text-3xl md:text-4xl text-white tracking-tight">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      <span className="text-[#22D3EE] font-semibold">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showCopiedMsg, setShowCopiedMsg] = useState<boolean>(false);

  useEffect(() => {
    // Check url search parameters securely for administrative access
    const params = new URLSearchParams(window.location.search);
    const adminParam = params.get('admin');

    if (adminParam === 'true') {
      localStorage.setItem('msr_admin_active', 'true');
      setIsAdmin(true);
    } else if (adminParam === 'false') {
      localStorage.removeItem('msr_admin_active');
      setIsAdmin(false);
    } else {
      const persistedAdmin = localStorage.getItem('msr_admin_active');
      setIsAdmin(persistedAdmin === 'true');
    }

    const saved = localStorage.getItem('portfolio_avatar');
    if (saved) {
      setAvatarUrl(saved);
    } else {
      setAvatarUrl('https://lh3.googleusercontent.com/d/13K-0B10CcqjKNUAMDhd3fWS62r3u6r7e=w600-h600');
    }
  }, []);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) return;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        localStorage.setItem('portfolio_avatar', base64);
        setAvatarUrl(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    if (isAdmin) {
      fileInputRef.current?.click();
    }
  };

  const copyBase64ToClipboard = () => {
    if (avatarUrl) {
      navigator.clipboard.writeText(avatarUrl);
      setShowCopiedMsg(true);
      setTimeout(() => setShowCopiedMsg(false), 3000);
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Roles to rotate through
  const roles = [
    'Software Engineer',
    'AI Developer',
    'Python Specialist',
    'Machine Learning Developer',
    'Generative AI Builder',
    'Full-Stack Developer'
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Name Animation character variants
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const nameLetterVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.75 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 12
      }
    }
  };

  // Bio Description Animation word variants
  const bioContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
        delayChildren: 0.4
      }
    }
  };

  const bioWordVariants = {
    hidden: { opacity: 0, y: 12, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  // Highly premium, automated CV generation mechanism
  const triggerResumeExport = () => {
    // Generate beautiful PDF with exact spacing & content
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    let y = 16;

    // Title / Name
    doc.setFont("times", "bold");
    doc.setFontSize(23);
    doc.setTextColor(30, 64, 175); // Royal Blue color for name
    doc.text("Mohammed Saquib Raza", 15, y);
    
    y += 5.5;

    // Subtitle contact bar
    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    doc.text("Mobile: +91-8512090995    |    saquibraza5683@gmail.com    |    LinkedIn    |    GitHub", 15, y);
    
    y += 4.5;

    const addSectionHeader = (title: string) => {
      // Line header helper
      y += 2.5;
      doc.setFont("times", "bold");
      doc.setFontSize(11.5);
      doc.setTextColor(30, 41, 59); // Slate-800
      doc.text(title, 15, y);
      
      y += 1.2;
      doc.setDrawColor(203, 213, 225); // slate-300 light line
      doc.setLineWidth(0.25);
      doc.line(15, y, 195, y);
      
      y += 4.5;
    };

    // 1. Professional Summary
    addSectionHeader("PROFESSIONAL SUMMARY");
    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85); // slate-600
    const summaryText = "Computer Science and Engineering graduate specializing in full-stack web development, Android applications, and AI-powered systems. Proficient in Python, Next.js, Kotlin, Firebase, and PostgreSQL, with hands-on experience in REST API development, machine learning, and intelligent automation. Committed to building scalable, efficient solutions that translate technical expertise into real-world impact.";
    const summaryLines = doc.splitTextToSize(summaryText, 180);
    doc.text(summaryLines, 15, y);
    y += summaryLines.length * 4.2;

    // 2. Skills
    addSectionHeader("SKILLS");
    const skillsList = [
      { label: "Languages: ", content: "Python, SQL, C, JavaScript, Kotlin" },
      { label: "Frameworks & Libraries: ", content: "React.js, Next.js, Flask, Scikit-learn, Pandas, NumPy, Matplotlib" },
      { label: "Web & Backend: ", content: "HTML, CSS, Tailwind CSS, REST APIs, JWT Authentication, Jetpack Compose" },
      { label: "Databases: ", content: "PostgreSQL, MySQL, SQLite, Firebase Realtime Database, Qdrant" },
      { label: "Tools & Platforms: ", content: "Git, GitHub, VS Code, Jupyter Notebook, Android Studio, Streamlit" }
    ];

    skillsList.forEach(s => {
      doc.setFont("times", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      doc.text(s.label, 15, y);
      
      const labelWidth = doc.getTextWidth(s.label);
      doc.setFont("times", "normal");
      doc.setTextColor(51, 65, 85);
      doc.text(s.content, 15 + labelWidth, y);
      
      y += 4.0;
    });

    // 3. Experience
    addSectionHeader("EXPERIENCE");
    doc.setFont("times", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 64, 175); // Blue for experience title
    doc.text("Android App Development Intern — MindMatrixEd", 15, y);
    
    doc.setFont("times", "bold");
    doc.setTextColor(30, 41, 59);
    const dateStr = "Feb 2026 – May 2026";
    doc.text(dateStr, 195 - doc.getTextWidth(dateStr), y);
    
    y += 4.0;

    const experiencePoints = [
      "Developed Android application features using Kotlin and Jetpack Compose, implementing modern mobile development practices and responsive user interfaces.",
      "Integrated Firebase, Google AI Studio, and Generative AI capabilities to enhance application functionality and support intelligent user interactions.",
      "Contributed to UI/UX design, feature development, testing, debugging, and iterative enhancements throughout the Android application development lifecycle."
    ];

    experiencePoints.forEach(pt => {
      doc.setFont("times", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(51, 65, 85);
      doc.text("•", 18, y + 0.2);
      
      const ptLines = doc.splitTextToSize(pt, 173);
      doc.text(ptLines, 21, y);
      y += ptLines.length * 4.0 + 0.5;
    });

    // 4. Projects
    addSectionHeader("PROJECTS");

    const projectsList = [
      {
        title: "TWIST Social Media Platform",
        meta: "GitHub | Live Demo",
        tech: "Tech Stack | Next.js 14, Clerk, Supabase PostgreSQL, Tailwind CSS",
        bullets: [
          "Built a full-stack social media platform using Next.js 14, Clerk, and Supabase PostgreSQL, supporting secure authentication and real-time content interactions.",
          "Engineered REST APIs, user profile management, and dynamic post feeds to enable seamless user engagement across the platform.",
          "Implemented JWT-based authorization, Row Level Security (RLS) policies, and Git/GitHub version control workflows to secure application resources, manage code changes, and maintain database integrity."
        ]
      },
      {
        title: "Reddit User Persona Generator",
        meta: "GitHub",
        tech: "Tech Stack | Python, PRAW, Gemini AI",
        bullets: [
          "Built an AI-powered persona generation system using Python, PRAW, and Gemini AI, transforming Reddit activity into structured behavioural insights and user profiles.",
          "Orchestrated data extraction, prompt engineering, and LLM-driven analysis pipelines to identify personality traits, interests, motivations, and communication patterns from Reddit discussions."
        ]
      },
      {
        title: "Aave V2 DeFi Credit Scoring Model",
        meta: "GitHub",
        tech: "Tech Stack | Python, Pandas, NumPy, Scikit-learn, Matplotlib",
        bullets: [
          "Built a DeFi credit scoring pipeline using Python, Pandas, and NumPy, transforming raw Aave V2 transaction data into meaningful behavioural risk indicators.",
          "Implemented feature engineering, Isolation Forest, and Random Forest algorithms to evaluate wallet activity patterns and assign risk-aware credit scores."
        ]
      },
      {
        title: "Video Frame Search API",
        meta: "GitHub",
        tech: "Tech Stack | Python, FastAPI, OpenCV, Qdrant, FFmpeg",
        bullets: [
          "Built a video frame search system using FastAPI, OpenCV, and FFmpeg, enabling automated frame extraction and visual content analysis.",
          "Orchestrated embedding generation, Qdrant Vector Database integration, and HNSW-based similarity search to retrieve visually related frames with high search efficiency."
        ]
      }
    ];

    projectsList.forEach(proj => {
      // Title and Link
      doc.setFont("times", "bold");
      doc.setFontSize(10);
      doc.setTextColor(30, 64, 175);
      doc.text(proj.title, 15, y);
      
      doc.text(proj.meta, 195 - doc.getTextWidth(proj.meta), y);
      y += 3.8;

      // Tech line
      doc.setFont("times", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text(proj.tech, 15, y);
      y += 3.8;

      // Bullets
      proj.bullets.forEach(bullet => {
        doc.setFont("times", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        doc.text("•", 18, y + 0.2);
        
        const bLines = doc.splitTextToSize(bullet, 173);
        doc.text(bLines, 21, y);
        y += bLines.length * 3.8 + 0.5;
      });
      y += 0.8;
    });

    // 5. Education
    addSectionHeader("EDUCATION");
    const educationList = [
      { school: "HKBK College of Engineering", details: "2022 – 2026 B.E. Computer Science Engineering", score: "CGPA: 7.2" },
      { school: "SSMRV PU College, Bangalore", details: "2020 – 2021 12th (Intermediate)", score: "71%" },
      { school: "Silicon Valley School, Bangalore", details: "2017 – 2019 10th (Matriculation)", score: "79%" }
    ];

    educationList.forEach(edu => {
      doc.setFont("times", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      doc.text(edu.school, 15, y);
      
      doc.setFont("times", "normal");
      doc.setTextColor(51, 65, 85);
      doc.text(edu.details, 80, y);
      
      doc.text(edu.score, 195 - doc.getTextWidth(edu.score), y);
      y += 4.0;
    });

    // 6. Languages & Certifications
    addSectionHeader("LANGUAGES & CERTIFICATIONS");
    
    // Languages line
    doc.setFont("times", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    doc.text("Languages: ", 15, y);
    
    let curX = 15 + doc.getTextWidth("Languages: ");
    doc.setFont("times", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text("English, Hindi, Kannada", curX, y);
    y += 4.0;

    // Certification line
    doc.setFont("times", "bold");
    doc.setTextColor(30, 41, 59);
    doc.text("Certification: ", 15, y);
    
    curX = 15 + doc.getTextWidth("Certification: ");
    doc.setFont("times", "normal");
    doc.setTextColor(30, 64, 175);
    doc.text("Web Scraping with Python – Great Learning", curX, y);

    // Save
    doc.save("Mohammed_Saquib_Raza_Resume.pdf");
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-transparent"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-transparent" />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#8B5CF6]/4 blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase font-bold">
              Available for immediate opportunities
            </span>
          </motion.div>

          <span className="text-zinc-500 font-mono text-sm tracking-wide block mb-1">
            Hi, I am
          </span>

          <motion.h1
            variants={nameContainerVariants}
            initial="hidden"
            animate="visible"
            className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4.5 select-none uppercase flex flex-wrap gap-x-2.5 sm:gap-x-3.5"
            id="hero-name"
          >
            {(() => {
              const auroraColors = ['#22D3EE', '#10B981', '#8B5CF6'];
              let absoluteCharIdx = 0;
              return personalInfo.name.split(' ').map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {Array.from(word).map((char, cIdx) => {
                    const color = auroraColors[absoluteCharIdx % auroraColors.length];
                    absoluteCharIdx++;
                    return (
                      <motion.span
                        key={cIdx}
                        variants={nameLetterVariants}
                        className="inline-block transition-all duration-300 cursor-default hover:scale-110"
                        style={{
                          color: 'transparent',
                          WebkitTextStroke: `1.5px ${color}`,
                          textShadow: `0 0 10px ${color}22`
                        }}
                        whileHover={{
                          color: color,
                          textShadow: `0 0 15px ${color}, 0 0 30px ${color}88`
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ));
            })()}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-lg sm:text-xl lg:text-2xl font-mono text-zinc-100 font-bold mb-6 flex items-center flex-wrap gap-2 h-9"
          >
            <span>I'm a</span>
            <div className="relative overflow-visible inline-block h-full min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="text-[#22D3EE] select-none absolute left-0"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={bioContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-xs sm:text-sm text-zinc-400 font-mono max-w-2xl leading-relaxed mb-8"
          >
            {personalInfo.bio.split(' ').map((word, index) => (
              <motion.span
                key={index}
                variants={bioWordVariants}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Action CTAs with popping physics */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, background: 'rgba(34, 211, 238, 0.05)', boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo('projects')}
              id="hero-cta-projects"
              className="px-6 py-3.5 border border-[#22D3EE] text-[#22D3EE] rounded-xl text-xs font-mono font-bold tracking-widest transition-all cursor-pointer uppercase shrink-0"
            >
              Check Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, background: 'rgba(24, 24, 27, 0.9)', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerResumeExport}
              id="hero-cta-resume"
              className="px-6 py-3.5 border border-zinc-900 bg-zinc-950/40 text-zinc-400 rounded-xl text-xs font-mono font-bold tracking-widest transition-all flex items-center gap-1.5 cursor-pointer uppercase shrink-0"
            >
              <span>Download ↓</span>
            </motion.button>

            <div className="flex items-center gap-2 pl-2">
              <motion.a
                whileHover={{ scale: 1.1, color: '#22D3EE' }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="p-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 rounded-xl transition-all"
                title="GitHub Profile"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#22D3EE' }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="p-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 rounded-xl transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column Profile Picture Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center p-2"
            id="hero-avatar-container"
          >
            {/* Spinning Golden Accent Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#22D3EE]/20 animate-spin-slow" style={{ animationDuration: '35s' }} />
            <div className="absolute inset-4 rounded-full border border-[#22D3EE]/10" />
            
            {/* Pulsing Ambient Backlighting */}
            <div className="absolute inset-8 rounded-full bg-[#22D3EE]/[0.03] blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

            {/* Profile Picture Floating Wrapper */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleAvatarClick}
                className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-[#0e0e12] border border-[#22D3EE]/35 shadow-[0_0_35px_rgba(34,211,238,0.08)] group hover:border-[#22D3EE]/60 transition-colors duration-500 overflow-hidden flex items-center justify-center ${
                  isAdmin ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <input 
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Profile Image with Hover pop zoom */}
                <motion.div 
                  whileHover={isAdmin ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full h-full rounded-full overflow-hidden relative"
                >
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="Mohammed Saquib Raza - Profile"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center text-zinc-500">
                      <Camera size={40} className="text-zinc-600 mb-2 animate-pulse" />
                      <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">Loading Avatar</span>
                    </div>
                  )}
                  
                  {/* Hover upload prompt overlay - ONLY visible in ADMIN mode */}
                  {isAdmin && (
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        <Camera size={18} />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#22D3EE] uppercase">Upload Custom Photo</span>
                      <span className="text-[7.5px] font-mono text-zinc-400 uppercase">PNG, JPG or WEBP</span>
                    </div>
                  )}

                  {/* Tech overlay grid matrix */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </motion.div>

                {/* Status active node */}
                <div className="absolute bottom-5 right-5 w-4 h-4 rounded-full bg-green-500 border-2 border-[#050508] animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              </motion.div>

              {/* Admin console button below the photo - ONLY shown to owner */}
              {isAdmin && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-2 p-3 bg-[#0d0d14]/90 border border-[#22D3EE]/20 rounded-xl max-w-xs text-center backdrop-blur-md"
                >
                  <p className="text-[10px] font-mono text-[#22D3EE] font-extrabold uppercase tracking-widest">
                    ⚡ OWNER ADMIN SESSION ACTIVE
                  </p>
                  <p className="text-[9px] text-zinc-400 font-sans leading-relaxed">
                    Custom image loaded in local session. Click the button below to copy the code for permanent codebase replacement:
                  </p>
                  <button 
                    onClick={copyBase64ToClipboard}
                    className="mt-1 px-3 py-1.5 bg-[#22D3EE]/10 hover:bg-[#22D3EE]/25 text-[#22D3EE] hover:text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded border border-[#22D3EE]/30 active:scale-95 transition-all cursor-pointer"
                  >
                    {showCopiedMsg ? '✓ Copied Base64 Code!' : 'Copy Permanent Photo Code'}
                  </button>
                  {showCopiedMsg && (
                    <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase animate-pulse">
                      Paste this code in our chat to save it!
                    </span>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Slide Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo('about')}>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#22D3EE]" />
        </motion.div>
      </div>
    </section>
  );
}
