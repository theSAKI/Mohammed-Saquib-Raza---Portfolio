import { Award, Briefcase, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 bg-grid-cyber mask-radial -z-10 bg-[#050508] opacity-35" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-widest mb-2.5 font-bold animate-pulse">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase" id="certifications-heading">
            Engineering Certifications
          </h2>
          <div className="w-16 h-1.2 bg-[#22D3EE] mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm mt-5 leading-relaxed font-mono">
            A comprehensive registry of academic certificates and technical programs I have completed to augment my core Software Engineering skill vectors.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6" id="certifications-container">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              id={`cert-item-${cert.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="p-6 sm:p-8 bg-[#0e0e12]/60 backdrop-blur-md rounded-2xl border border-zinc-900 overflow-hidden relative group hover:border-[#22D3EE]/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/25 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Award size={22} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono font-bold text-base sm:text-lg text-white select-none">
                        {cert.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-400 flex items-center gap-1 font-semibold uppercase">
                        <CheckCircle size={10} />
                        Verified
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 mt-1 font-mono">
                      Issued by <span className="text-[#22D3EE] font-bold">{cert.issuer}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                  {cert.date && (
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-md flex items-center gap-1.5 w-fit">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      id="cert-btn-verify"
                      className="px-4 py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-[#22D3EE]/35 text-white font-bold text-xs font-mono rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer w-full sm:w-auto shadow-md"
                    >
                      <span>Show Credential</span>
                      <ExternalLink size={12} className="text-[#22D3EE]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
