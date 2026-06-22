import { motion } from 'motion/react';
import { Layers, Smartphone, Zap, CheckCircle, Award, Calendar, MapPin } from 'lucide-react';
import { personalInfo, timelineEvents } from '../data';

interface SpecialtyCardProps {
  id: string;
  icon: any;
  title: string;
  text: string;
  key?: string;
}

// Helper component to render sector summaries
function SpecialtyCard({ icon, title, text, id }: SpecialtyCardProps) {
  return (
    <motion.div 
      id={`specialty-card-${id}`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.02, x: 5, borderColor: 'rgba(34, 211, 238, 0.4)', backgroundColor: 'rgba(24, 24, 27, 0.6)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="p-5 bg-[#0e0e12]/60 backdrop-blur-md rounded-xl relative group border border-zinc-900 shadow-xl cursor-all-scroll"
    >
      <div className="absolute top-0 left-4 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[9px] font-mono text-[#22D3EE] tracking-widest uppercase font-bold">
        SPECIALTY
      </div>
      <div className="flex gap-4 items-start pt-2">
        <div className="p-3 bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-lg text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-zinc-950 transition-all duration-200">
          {icon}
        </div>
        <div className="flex flex-col">
          <h4 className="font-mono font-bold text-sm text-white group-hover:text-[#22D3EE] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 font-sans">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const specialties = [
    {
      id: 'fs',
      icon: <Layers size={18} />,
      title: 'Full-Stack Development',
      text: 'Responsive web products utilizing React, Next.js, Flask backend servers, REST configurations, and modular state controls.'
    },
    {
      id: 'ad',
      icon: <Smartphone size={18} />,
      title: 'Android Development',
      text: 'Native Android application builds styled dynamically using Kotlin, modern Jetpack Compose layouts, and stable Google platform integrations.'
    },
    {
      id: 'ai',
      icon: <CheckCircle size={18} />, // Fallback to check since BrainExt isn't standard
      title: 'AI & Machine Learning',
      text: 'Designing NLP constructs, generative prompt frameworks matching Gemini models, and predictive data scikit-learn analytics.'
    },
    {
      id: 'ps',
      icon: <Zap size={18} />,
      title: 'Problem Solving',
      text: 'Algorithmic performance improvements, sorting structural datastores, and maintaining relational databases with speed indexes.'
    },
    {
      id: 'se',
      icon: <Award size={18} />,
      title: 'Software Engineering',
      text: 'Applying Agile workflows, JWT authorization constraints, comprehensive unit debugging, and strict version control.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-black opacity-35" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2.5 font-bold animate-pulse">
            ABOUT ME & EXPERIENCE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase" id="about-heading">
            Engineering Code. Innovating Solutions.
          </h2>
          <div className="w-16 h-1.2 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm mt-5 leading-relaxed font-mono">
            {personalInfo.fullBio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Specialties */}
          <div className="lg:col-span-6 flex flex-col gap-6" id="about-specialties">
            <h3 className="font-mono font-black text-lg text-white mb-2 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-6 bg-[#8B5CF6] rounded-full"></span>
              Core Competencies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {specialties.map((item) => (
                <SpecialtyCard
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Timeline Education & Experiences */}
          <div className="lg:col-span-6 flex flex-col gap-6" id="about-timeline">
            <h3 className="font-mono font-black text-lg text-white mb-2 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-6 bg-[#8B5CF6] rounded-full"></span>
              Career & Education Journey
            </h3>

            {/* Timeline Tree */}
            <div className="relative border-l border-zinc-900 ml-4 pl-8 flex flex-col gap-8">
              {timelineEvents.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 180, damping: 20, delay: index * 0.1 }}
                  className="relative group" 
                  id={`timeline-item-${item.id}`}
                >
                  {/* Glowing Node Dot */}
                  <div className={`absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-2 bg-zinc-950 flex items-center justify-center transition-all ${
                    item.type === 'experience' 
                      ? 'border-[#22D3EE] text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-zinc-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                      : 'border-[#10B981] text-[#10B981] group-hover:bg-[#10B981] group-hover:text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  </div>

                  {/* Bubble detail content */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ scale: 1.015, borderColor: item.type === 'experience' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(16, 185, 129, 0.3)', backgroundColor: 'rgba(14, 14, 18, 0.75)' }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="p-6 bg-[#0e0e12]/60 backdrop-blur-md rounded-xl border border-zinc-900/80 shadow-xl"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-bold">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <Calendar size={11} className={item.type === 'experience' ? 'text-[#22D3EE]' : 'text-[#10B981]'} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                          <MapPin size={10} />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h4 className="font-mono font-black text-sm text-white mt-1 group-hover:text-[#22D3EE] transition-colors uppercase">
                      {item.title}
                    </h4>
                    <span className={item.type === 'experience' ? 'text-xs text-[#22D3EE]/80 font-mono tracking-wide' : 'text-xs text-[#10B981]/80 font-mono tracking-wide'}>
                      {item.subtitle}
                    </span>

                    <ul className="mt-4 flex flex-col gap-2">
                       {item.description.map((desc, dIndex) => (
                        <li key={dIndex} className="text-xs text-zinc-400 leading-relaxed font-sans flex items-start gap-2">
                          <span className={`select-none mt-1 ${item.type === 'experience' ? 'text-[#22D3EE]' : 'text-[#10B981]'}`}>▪</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
