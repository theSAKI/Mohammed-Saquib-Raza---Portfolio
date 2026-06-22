import { motion } from 'motion/react';
import { Briefcase, Building2, Calendar, Target, Award, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    'Developed native Android application features from scratch using Kotlin and Jetpack Compose, emphasizing state patterns and reactive UI layers.',
    'Integrated Firebase Realtime Database for active, real-time message syncing and automated backup queries.',
    'Engineered Generative AI capabilities powered by Google AI Studio, incorporating structured prompt-mapping schemas inside mobile pipelines.',
    'Refined visual layouts, improving interface accessibility, debugging race conditions, and contributing to agile review cycles.'
  ];

  const highlights = [
    { label: 'Platform', value: 'Android Ecosystem' },
    { label: 'Technology', value: 'Kotlin & Jetpack Compose' },
    { label: 'Core Focus', value: 'Generative AI & Firebase' },
    { label: 'Team Model', value: 'Cross-functional Agile' }
  ];

  return (
    <section id="experience" className="py-24 relative bg-transparent">
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-cyber-dark opacity-35" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2 font-semibold">
            PROFESSIONAL BACKGROUND
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase" id="experience-heading">
            Work Experience & Internships
          </h2>
          <div className="w-16 h-1 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-5 leading-relaxed font-sans">
            Recruiter-focused overview of my previous professional placements, practical duties, and milestones gained in technical environments.
          </p>
        </div>

        {/* Professional Experience Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="max-w-4xl mx-auto" 
          id="experience-panel"
        >
          <div className="bg-[#0e0e12]/60 backdrop-blur-md rounded-2xl border border-zinc-900 overflow-hidden relative group hover:border-[#22D3EE]/25 duration-300">
            {/* Visual Header Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#22D3EE]" />
            
            <div className="p-8 sm:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] group-hover:scale-105 transition-transform duration-300">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#22D3EE] transition-colors">
                      Android App Development Intern
                    </h3>
                    <span className="text-sm font-medium text-[#22D3EE] font-mono mt-0.5 flex items-center gap-1.5">
                      <Building2 size={13} />
                      MindMatrixEd
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-900 text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                    <Calendar size={13} className="text-[#22D3EE]" />
                    Feb 2026 – May 2026
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 mt-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md w-fit">
                    Completed Successfully
                  </span>
                </div>
              </div>

              {/* Quick Metrics highlights */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-950/40 rounded-xl border border-slate-900/60 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex flex-col pl-3 border-l-2 border-slate-900 hover:border-[#22D3EE]/30 transition-colors">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-white mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detailed Duties List */}
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Target size={14} className="text-[#22D3EE]" />
                  Key Responsibilities & Achievements
                </h4>
                
                <div className="flex flex-col gap-4">
                  {responsibilities.map((bullet, index) => (
                    <div 
                      key={index}
                      className="flex gap-3.5 items-start p-4 hover:bg-slate-950/40 border border-transparent hover:border-slate-900 rounded-xl transition-all duration-200"
                    >
                      <div className="p-1 rounded bg-[#22D3EE]/10 text-[#22D3EE] mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
