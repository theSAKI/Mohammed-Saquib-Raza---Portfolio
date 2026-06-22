import { motion } from 'motion/react';
import { 
  Terminal, Code, Database, Smartphone, Cpu, 
  Layers, Compass, Zap, Workflow, BarChart2, 
  Grid, LineChart, Server, ShieldAlert, Palette, 
  Flame, Hash, GitBranch, Github, Monitor, BookOpen, Tv 
} from 'lucide-react';
import { skillCategories } from '../data';

// Helper component that maps string icon name to Lucide Icon
function SkillIcon({ name, size = 16 }: { name: string; size?: number }) {
  const iconMap: Record<string, any> = {
    Terminal: <Terminal size={size} />,
    Code: <Code size={size} />,
    Database: <Database size={size} />,
    Smartphone: <Smartphone size={size} />,
    Cpu: <Cpu size={size} />,
    Layers: <Layers size={size} />,
    Compass: <Compass size={size} />,
    Zap: <Zap size={size} />,
    Workflow: <Workflow size={size} />,
    BarChart: <BarChart2 size={size} />,
    Grid: <Grid size={size} />,
    LineChart: <LineChart size={size} />,
    Server: <Server size={size} />,
    ShieldAlert: <ShieldAlert size={size} />,
    Palette: <Palette size={size} />,
    Flame: <Flame size={size} />,
    Hash: <Hash size={size} />,
    GitBranch: <GitBranch size={size} />,
    Github: <Github size={size} />,
    Monitor: <Monitor size={size} />,
    BookOpen: <BookOpen size={size} />,
    Tv: <Tv size={size} />
  };

  return iconMap[name] || <Code size={size} />;
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-transparent overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#1d4ed8]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2.5 font-bold animate-pulse">
            ENGINEERING STACK
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase" id="skills-heading">
            Technical Frameworks & Proficiencies
          </h2>
          <div className="w-16 h-1.2 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm mt-5 leading-relaxed font-mono">
            A comprehensive overview of programming systems, databases, cloud repositories, and analysis tools I leverage to construct robust production solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title} 
              id={`skill-cat-${catIndex}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6, scale: 1.025, borderColor: 'rgba(34, 211, 238, 0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: catIndex * 0.05 }}
              className="p-6 bg-[#0e0e12]/60 backdrop-blur-md rounded-2xl border border-zinc-900 relative overflow-hidden group shadow-xl cursor-default"
            >
              {/* Abs/Visual tag decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#22D3EE]/5 to-transparent rounded-full -mr-6 -mt-6 group-hover:from-[#22D3EE]/10 transition-colors" />

              <h3 className="font-mono font-black text-sm text-white tracking-wider uppercase mb-6 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
                {category.title}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} id={`skill-item-${catIndex}-${skillIndex}`} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-900/40">
                      <span className="text-[10px] font-bold text-zinc-300 flex items-center gap-1.5 font-mono">
                        <span className="text-[#22D3EE]">
                          <SkillIcon name={skill.iconName || 'Code'} size={12} />
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono font-black text-[#22D3EE]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill loader bar */}
                    <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#22D3EE] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
