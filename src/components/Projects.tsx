import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

// Interactive, beautiful CSS simulated mock layouts representing what each system does conceptually
function ProjectPreview({ id }: { id: string }) {
  if (id === 'twist') {
    return (
      <div className="relative w-full h-44 bg-zinc-950/90 overflow-hidden flex items-center justify-center border-b border-zinc-900 rounded-t-2xl group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)]" />
        
        {/* Left Side UI Mockup Block */}
        <div className="absolute left-6 text-left max-w-[48%] pointer-events-none transition-transform group-hover:translate-x-1 duration-300">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-5 h-5 rounded bg-[#22D3EE] flex items-center justify-center font-display font-black text-[10px] text-zinc-900">T</div>
            <span className="text-[11px] font-mono font-bold text-[#22D3EE] tracking-tight">Twist</span>
          </div>
          <p className="text-[9px] font-sans text-slate-400 leading-relaxed font-mono">
            A modern social media platform where connections matter.
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-[#22D3EE] text-zinc-950 font-mono text-[6px] font-black uppercase">Get Started</span>
            <span className="px-1.5 py-0.5 rounded border border-slate-800 text-slate-500 font-mono text-[6px] bg-slate-950">Explore</span>
          </div>
        </div>

        {/* Orbit Node Graph Illustration on Right */}
        <div className="absolute right-10 w-24 h-24 flex items-center justify-center pointer-events-none">
          {/* Glowing CORE */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4.5 h-4.5 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.78)] z-10 flex items-center justify-center" 
          />
          {/* Circular orbit paths */}
          <div className="absolute w-20 h-20 rounded-full border border-dashed border-zinc-800/80" />
          <div className="absolute w-12 h-12 rounded-full border border-dashed border-zinc-900" />
          
          {/* Orbiting particles */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute top-2 left-6 w-2.5 h-2.5 rounded-full bg-[#0e0e12] border border-[#22D3EE]/60 flex items-center justify-center text-[5px] text-[#22D3EE]">♥</div>
            <div className="absolute bottom-2 right-6 w-2.5 h-2.5 rounded-full bg-[#0e0e12] border border-[#22D3EE]/60 flex items-center justify-center text-[5px] text-[#22D3EE]">☻</div>
          </motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute w-14 h-14"
          >
            <div className="absolute top-0 right-1 w-2 h-2 rounded-full bg-[#EC4899]/80" />
            <div className="absolute bottom-0 left-1 w-2 h-2 rounded-full bg-[#8B5CF6]/65" />
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === 'interview-ai') {
    return (
      <div className="relative w-full h-44 bg-[#0a0a0f] overflow-hidden flex flex-col justify-between p-3.5 border-b border-emerald-500/15 rounded-t-2xl group select-none font-mono text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row with Menu tabs */}
        <div className="flex items-center justify-between w-full border-b border-zinc-900/60 pb-1.5">
          <div className="flex items-center gap-1 font-sans">
            <div className="w-4.5 h-4.5 rounded-md bg-[#10b981]/25 border border-emerald-400/30 flex items-center justify-center text-[10px] text-emerald-400">
              ⚡
            </div>
            <span className="text-[11px] font-black tracking-tight text-white uppercase">InterviewAI</span>
          </div>
          <div className="flex items-center gap-2 text-[6.5px] text-slate-500 font-bold">
            <span className="text-emerald-400 border-b border-emerald-400">Dashboard</span>
            <span>Interviews</span>
            <span>Progress</span>
            <span>Profile</span>
            <div className="w-4 h-4 rounded-full bg-[#18181b] border border-zinc-900 flex items-center justify-center text-[6px] text-zinc-400 font-sans font-bold">
              C
            </div>
          </div>
        </div>

        {/* Middle Banner Row */}
        <div className="flex items-center justify-between w-full my-1">
          <div className="flex flex-col text-left">
            <h5 className="text-[10px] sm:text-[11px] font-sans font-extrabold tracking-tight text-white">Interview Dashboard</h5>
            <span className="text-[5.5px] text-zinc-500 font-sans leading-none mt-0.5">
              Manage active interview setups and track metrics over time.
            </span>
          </div>
          <button className="px-2 py-1 bg-emerald-400 font-sans font-black text-zinc-950 text-[6.5px] tracking-tight rounded flex items-center gap-0.5 shadow-sm shadow-emerald-400/20">
            ▶ <span className="uppercase font-black text-[6px]">Start Your Interview</span>
          </button>
        </div>

        {/* Metrics Grid Row - 5-columns */}
        <div className="grid grid-cols-5 gap-1 my-0.5 w-full shrink-0">
          <div className="bg-[#111116] border border-zinc-900 rounded p-1 flex flex-col text-left">
            <span className="text-[4.5px] text-zinc-500 uppercase tracking-wider scale-90 origin-left">Total Sessions</span>
            <span className="text-[9.5px] text-zinc-100 font-black mt-0.5">2</span>
          </div>
          <div className="bg-[#111116] border border-zinc-900 rounded p-1 flex flex-col text-left">
            <span className="text-[4.5px] text-zinc-500 uppercase tracking-wider scale-90 origin-left">Avg Score</span>
            <span className="text-[9.5px] text-[#10b981] font-black mt-0.5">78%</span>
          </div>
          <div className="bg-[#111116] border border-zinc-900 rounded p-1 flex flex-col text-left">
            <span className="text-[4.5px] text-zinc-500 uppercase tracking-wider scale-90 origin-left">Top Score</span>
            <span className="text-[9.5px] text-[#10b981] font-black mt-0.5">84%</span>
          </div>
          <div className="bg-[#111116] border border-zinc-900 rounded p-1 flex flex-col text-left">
            <span className="text-[4.5px] text-zinc-500 uppercase tracking-wider scale-90 origin-left">Strongest</span>
            <span className="text-[5px] font-sans text-zinc-200 truncate mt-0.5 leading-tight">Tech Accuracy</span>
          </div>
          <div className="bg-[#111116] border border-zinc-900 rounded p-1 flex flex-col text-left">
            <span className="text-[4.5px] text-zinc-500 uppercase tracking-wider scale-90 origin-left">Weakest</span>
            <span className="text-[5px] font-sans text-zinc-200 truncate mt-0.5 leading-tight font-sans">Communic...</span>
          </div>
        </div>

        {/* Interactive canvas chart log */}
        <div className="flex items-center justify-between text-[5.5px] text-zinc-500 border-t border-zinc-900/60 pt-1 mt-0.5">
          <div className="flex items-center gap-1">
            <span>PERFORMANCE PARAMETERS (RADAR ACCURACY INDEX)</span>
          </div>
          <div className="flex gap-2 text-zinc-400">
            <span className="text-[#22D3EE] font-bold">SCORE PROGRESS ARC ACTIVE</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'resume-ats') {
    return (
      <div className="relative w-full h-44 bg-[#080b13] overflow-hidden flex flex-col justify-between p-3 border-b border-[#10B981]/20 rounded-t-2xl group select-none font-mono text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Header bar */}
        <div className="flex items-center justify-between w-full border-b border-zinc-900 pb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center font-display font-black text-[9px] text-zinc-950">AI</div>
            <span className="text-[11px] font-sans font-extrabold tracking-tight text-white uppercase leading-none">ResumeIQ Pro</span>
          </div>
          <div className="text-[6px] text-[#10B981] font-bold uppercase tracking-widest flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse" />
            PROCESSING ENGINE v2.4.0-stable
          </div>
        </div>

        {/* Content body split in two */}
        <div className="grid grid-cols-12 gap-2 my-1.5 flex-grow items-stretch">
          {/* Left Column: SOURCE DOCUMENTS (Drag & Drop box representing the layout) */}
          <div className="col-span-5 border border-dashed border-[#10B981]/25 rounded-md p-1.5 flex flex-col items-center justify-center text-center bg-zinc-950/45">
            <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-0.5 text-[#10B981]">
              <span className="text-[9px]">↑</span>
            </div>
            <span className="text-[5.5px] text-zinc-300 font-sans tracking-tight leading-tight block">
              Drag & Drop PDF Resume or click to browse
            </span>
            <span className="text-[4.5px] text-[#10B981]/80 mt-0.5 leading-none font-mono block">
              Max 5MB
            </span>
          </div>

          {/* Right Column: TARGET JOB DESCRIPTION MATCHER */}
          <div className="col-span-7 bg-[#050914] border border-zinc-900 rounded-md p-1.5 flex flex-col">
            <span className="text-[5px] text-[#10B981]/80 uppercase tracking-wider font-extrabold mb-0.5 block">
              TARGET JOB DESCRIPTION MATCHER
            </span>
            <div className="flex-grow bg-slate-950/80 rounded border border-slate-900 p-1 text-[5px] text-[#10B981]/85 text-left overflow-hidden leading-snug">
              Paste core requirements here to run keyword optimization, missing term gap analyses, and relevance scoring...
            </div>
          </div>
        </div>

        {/* Active components footer bar */}
        <div className="flex items-center justify-between text-[5px] text-zinc-400 border-t border-zinc-900/80 pt-1">
          <div className="flex gap-2">
            <span className="flex items-center gap-0.5 text-[#10B981]">● OCR parsed</span>
            <span className="flex items-center gap-0.5 text-zinc-500">● NLP active</span>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center gap-0.5 text-[#10B981]">● KPI scores ready</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'reddit') {
    return (
      <div className="relative w-full h-44 bg-zinc-950/70 overflow-hidden flex items-center justify-center border-b border-zinc-900 rounded-t-2xl group select-none">
        <div className="absolute inset-0 bg-grid-cyber opacity-15" />
        
        {/* Reddit username profile label on left */}
        <div className="absolute left-6 text-left max-w-[50%] pointer-events-none transition-transform group-hover:translate-x-1 duration-300">
          <div className="flex items-center gap-1.5 mb-1 bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-0.5 rounded-full w-max text-[#10B981]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[8.5px] font-mono uppercase tracking-wider font-extrabold">Reddit Persona</span>
          </div>
          <span className="text-white font-mono text-xs font-black block mt-1.5">u/anonymous_user</span>
          <p className="text-[8px] font-mono text-slate-500 mt-1">Status: Extracting cognitive profiles</p>
        </div>

        {/* Orbit radar ring design */}
        <div className="absolute right-8 w-24 h-24 flex items-center justify-center pointer-events-none">
          <div className="relative w-16 h-16 rounded-full bg-[#10B981]/5 border border-[#10B981]/25 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-black text-[#10B981]">92%</span>
            <span className="text-[6px] font-mono text-slate-500 uppercase tracking-widest leading-none">accuracy</span>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-6px] rounded-full border border-dashed border-[#10B981]/30"
            />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'defi') {
    return (
      <div className="relative w-full h-44 bg-zinc-950 overflow-hidden flex flex-col justify-between p-4.5 border-b border-zinc-900 rounded-t-2xl group select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04)_0%,transparent_80%)] -z-10" />
        
        {/* On-Chain Defi score details */}
        <div className="flex justify-between items-start pointer-events-none w-full">
          <div className="flex flex-col text-left">
            <span className="text-[7.5px] font-mono text-slate-500 uppercase tracking-wider font-extrabold">Aave Wallets Index</span>
            <span className="text-[#8B5CF6] font-mono text-base font-black tracking-tight mt-0.5">742 <span className="text-[8.5px] text-zinc-600">/ 900</span></span>
          </div>
          <div className="px-2 py-0.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded text-[8px] font-mono text-[#8B5CF6] font-extrabold uppercase">
            Score: A+
          </div>
        </div>

        {/* Outliers chart logs layout */}
        <div className="w-full flex flex-col justify-center font-mono text-[8.5px] text-zinc-400 gap-1 mt-auto pointer-events-none transition-transform group-hover:translate-x-1 duration-300">
          <div className="flex justify-between">
            <span>Model Engine: Random Forest Regressor</span>
            <span className="text-[#8B5CF6] font-bold">STABLE</span>
          </div>
          <div className="flex justify-between">
            <span>Isolation Forest Outliers Flag</span>
            <span className="text-zinc-500">PASSED</span>
          </div>
          <div className="w-full bg-zinc-900/80 h-1.5 rounded-full overflow-hidden mt-1 inline-flex">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-[#8B5CF6] rounded-full" 
            />
          </div>
        </div>
      </div>
    );
  }

  if (id === 'video-search') {
    return (
      <div className="relative w-full h-44 bg-zinc-950 overflow-hidden flex flex-col items-center justify-center border-b border-zinc-900 rounded-t-2xl group pointer-events-none select-none">
        {/* Header Search Field */}
        <div className="absolute top-3 inset-x-4 h-6 rounded bg-slate-900/60 border border-zinc-900 flex items-center px-2 text-[8px] font-mono text-zinc-450 justify-between">
          <span className="font-semibold text-slate-400">API Index: locate "cyan vector panel"</span>
          <span className="text-[#8B5CF6]">25 FPS</span>
        </div>

        {/* Video Frames preview grid */}
        <div className="absolute bottom-4 flex justify-between w-[90%] gap-2 transition-transform group-hover:scale-[1.02] duration-300">
          <div className="flex-1 h-15 rounded bg-zinc-900 border border-zinc-800 flex flex-col relative overflow-hidden">
            <div className="flex-1 bg-gradient-to-tr from-[#8B5CF6]/40 to-zinc-900 animate-pulse" />
            <span className="absolute bottom-1 right-1 text-[5.5px] font-mono text-zinc-500 font-semibold">0:12</span>
            <div className="absolute inset-0 border border-[#8B5CF6]/30 animate-pulse" />
          </div>
          <div className="flex-1 h-15 rounded bg-zinc-900 border border-zinc-800 flex flex-col relative overflow-hidden">
            <div className="flex-1 bg-gradient-to-tr from-violet-950 to-zinc-900" />
            <span className="absolute bottom-1 right-1 text-[5.5px] font-mono text-zinc-500 font-semibold">0:45</span>
            <div className="absolute top-1 left-1 bg-[#8B5CF6] text-white font-mono text-[5px] px-0.5 rounded font-black uppercase">98% Match</div>
          </div>
          <div className="flex-1 h-15 rounded bg-zinc-900 border border-zinc-800 flex flex-col relative overflow-hidden">
            <div className="flex-1 bg-gradient-to-tr from-[#8B5CF6]/10 to-zinc-950" />
            <span className="absolute bottom-1 right-1 text-[5.5px] font-mono text-zinc-500 font-semibold">1:04</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 bg-zinc-950 overflow-hidden flex items-center justify-center border-b border-zinc-900 rounded-t-2xl">
      <div className="absolute inset-0 bg-grid-cyber opacity-15" />
      <span className="text-[10px] font-mono text-zinc-600 block uppercase tracking-widest">System Container Live</span>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'AI/ML', 'Backend'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Map specific conceptual roles to match the reference headers perfectly
  const getProjectSubtitle = (id: string, cat: string) => {
    switch (id) {
      case 'twist': return 'Social Media Platform';
      case 'interview-ai': return 'AI Product Demo Platform';
      case 'resume-ats': return 'Smart Document Analyzer';
      case 'reddit': return 'Behavioral Profiling System';
      case 'defi': return 'DeFi Credit Risk Pipeline';
      case 'video-search': return 'Vector Frame Search API';
      default: return cat + ' Engineering Program';
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      {/* Background Soft Overlays */}
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-black opacity-30" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2.5 font-bold animate-pulse">
            MY PORTFOLIO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase" id="projects-heading">
            Featured Systems & Applications
          </h2>
          <div className="w-16 h-1.2 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm mt-5 leading-relaxed font-mono">
            A curated selection of software systems I have designed and engineered, highlighting robust architectures, predictive intelligence, and responsive interfaces.
          </p>
        </div>

        {/* Controls Panel - Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-4.5 bg-[#0b0b0e]/70 backdrop-blur-md border border-zinc-900 rounded-2xl mb-12 shadow-xl">
          {/* Filters List */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto" id="project-filter-list">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.replace(' ', '-').toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-zinc-950 font-bold'
                    : 'text-slate-400 hover:text-white bg-zinc-950/80 hover:bg-zinc-900/60 border border-zinc-900/50 hover:border-zinc-800'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className={`absolute inset-0 rounded-xl -z-10 ${
                      cat === 'All' 
                        ? 'bg-gradient-to-r from-[#22D3EE] via-[#10B981] to-[#8B5CF6]' 
                        : cat === 'Full Stack' 
                        ? 'bg-[#22D3EE]' 
                        : cat === 'AI/ML' 
                        ? 'bg-[#10B981]' 
                        : 'bg-[#8B5CF6]'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              <Search size={14} />
            </span>
            <input
              type="text"
              id="project-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specs (Next.js, Python, ML)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#22D3EE] transition-colors font-mono"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="projects-grid"
          layout="position"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => {
                // Assign elegant 3-color identifiers: Full Stack (Cyan), AI/ML (Green), Backend (Purple)
                const isFullStack = project.category === 'Full Stack';
                const isAIML = project.category === 'AI/ML';
                
                const hoverBorderClass = isFullStack 
                  ? 'hover:border-[#22D3EE]/40 hover:shadow-[#22D3EE]/5' 
                  : isAIML 
                  ? 'hover:border-[#10B981]/40 hover:shadow-[#10B981]/5' 
                  : 'hover:border-[#8B5CF6]/40 hover:shadow-[#8B5CF6]/5';
                  
                const badgeBg = isFullStack 
                  ? 'bg-[#22D3EE]/5 border-[#22D3EE]/20 text-[#22D3EE]' 
                  : isAIML 
                  ? 'bg-[#10B981]/5 border-[#10B981]/20 text-[#10B981]' 
                  : 'bg-[#8B5CF6]/5 border-[#8B5CF6]/20 text-[#8B5CF6]';
                  
                const readMoreText = isFullStack 
                  ? 'text-[#22D3EE] hover:text-[#22D3EE]/80' 
                  : isAIML 
                  ? 'text-[#10B981] hover:text-[#10B981]/80' 
                  : 'text-[#8B5CF6] hover:text-[#8B5CF6]/80';
                  
                const titleHover = isFullStack 
                  ? 'hover:text-[#22D3EE]' 
                  : isAIML 
                  ? 'hover:text-[#10B981]' 
                  : 'hover:text-[#8B5CF6]';

                return (
                  <motion.div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    layout
                    initial={{ opacity: 0, y: 55, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: (idx % 3) * 0.08 }}
                    whileHover={{ y: -8, scale: 1.018 }}
                    className={`group bg-[#0e0e12]/60 backdrop-blur-md rounded-2xl border border-zinc-900 ${hoverBorderClass} relative flex flex-col justify-between transition-all duration-300 shadow-xl`}
                  >
                    <div className="flex flex-col">
                      {/* Simulated High Fidelity Mockup Top Area */}
                      <ProjectPreview id={project.id} />

                      {/* Card Content body details */}
                      <div className="p-6">
                        {/* Flex Title Line */}
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 
                            onClick={() => setSelectedProject(project)}
                            className={`font-mono font-bold text-lg sm:text-l text-zinc-100 ${titleHover} transition-colors cursor-pointer select-none leading-tight`}
                          >
                            {project.title.replace(' Social Media Platform', '').replace(' Platform', '').replace(' Model', '').replace(' Generator', '').replace(' Analyzer', '')}
                          </h3>
                          <div className="flex items-center gap-3 shrink-0 pt-1">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                id={`project-${project.id}-github`}
                                className="text-zinc-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 duration-150"
                                title="View GitHub Repository"
                              >
                                <Github size={17} />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                id={`project-${project.id}-live`}
                                className={`text-zinc-500 hover:${isFullStack ? 'text-[#22D3EE]' : isAIML ? 'text-[#FACC15]' : 'text-[#8B5CF6]'} transition-all transform hover:scale-110 active:scale-95 duration-150`}
                                title="View Live Demo"
                              >
                                <ExternalLink size={17} />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Subtitle conceptually matching screenshot */}
                        <span className="text-xs font-mono text-zinc-500 block mb-3.5">
                          {getProjectSubtitle(project.id, project.category)}
                        </span>

                        {/* Badge Tags Rows */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2 py-0.5 rounded text-[9px] font-mono border tracking-wide uppercase font-bold ${badgeBg}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Main Paragraph Description */}
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4 min-h-[50px] line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Show More action trigger */}
                    <div className="px-6 pb-6 pt-0 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        id={`project-read-more-${project.id}`}
                        className={`text-xs font-mono font-bold ${readMoreText} transition-colors flex items-center gap-1 cursor-pointer group uppercase tracking-wider`}
                      >
                        <span>Show More</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                key="no-match"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                id="no-projects-fallback" 
                className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center border border-dashed border-zinc-900 rounded-2xl bg-zinc-950/20"
              >
                <span className="text-xs font-mono text-zinc-600 block mb-2">
                  No matching systems located
                </span>
                <p className="text-sm text-zinc-500 font-sans">
                  Try widening your filtering parameters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Details Popup Case Study */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

