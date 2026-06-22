import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ShieldCheck, Heart, CircleCheck, Star, Activity, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Soft, ultra-blurred dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#02050e]/90 backdrop-blur-lg"
      />

      {/* Modal Main Body Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#09090f]/95 backdrop-blur-md border border-[#22D3EE]/80 rounded-2xl p-6 sm:p-8 z-10 shadow-[0_0_50px_rgba(34,211,238,0.12)]"
        id={`project-modal-${project.id}`}
      >
          {/* Close Core Trigger */}
          <button
            onClick={onClose}
            id="close-modal-btn"
            className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-[#22D3EE] hover:border-[#22D3EE]/30 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Tag Category Banner */}
          <span className="px-3 py-1 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[10px] font-mono font-bold text-[#22D3EE] uppercase tracking-widest w-fit block mb-4">
            {project.category}
          </span>

          <h3 className="font-mono font-black text-2xl sm:text-3xl text-white mb-2 pr-10 uppercase select-none">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Quick Stats Grid */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6" id="modal-project-stats">
              {project.stats.map((stat, sIdx) => (
                <div key={sIdx} className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-[#22D3EE] mt-1 flex items-center gap-1.5 font-mono">
                    <Sparkles size={11} className="text-[#22D3EE] animate-pulse" />
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Highlight Points */}
          {project.highlights && (
            <div className="mb-6">
              <h4 className="font-mono font-semibold text-xs text-zinc-400 uppercase tracking-wider mb-3">
                Key Architectural Details
              </h4>
              <div className="flex flex-col gap-3">
                {project.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex gap-3 items-start p-3 bg-zinc-950/40 border border-zinc-900 rounded-lg">
                    <span className="text-[#22D3EE] select-none text-sm mt-0.5 font-mono">☑</span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used Grid */}
          <div className="mb-8">
            <h4 className="font-mono font-semibold text-xs text-zinc-400 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-xs text-zinc-300 font-mono font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-zinc-900">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-link-github"
                className="w-full sm:w-auto px-5 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white rounded-xl text-center text-xs font-mono font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Github size={14} />
                <span>Source Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-link-live"
                className="w-full sm:w-auto px-5 py-3 bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-zinc-950 rounded-xl text-center text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                <ExternalLink size={14} />
                <span>Launch Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
  );
}
