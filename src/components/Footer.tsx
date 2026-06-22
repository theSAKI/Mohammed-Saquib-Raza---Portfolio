import { useState, useEffect } from 'react';
import { ArrowUp, Clock, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Show beautifully formatted UTC date/time according to project timezone or user's local timezone
      const date = new Date();
      setTime(date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="app-footer" className="py-12 bg-transparent md:bg-[#050508]/10 backdrop-blur-sm border-t border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Attribution, Logo & Credits */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/25 flex items-center justify-center font-mono font-bold text-xs text-[#22D3EE] shadow-sm">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold text-zinc-300">
              Designed & Developed by {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-600 mt-0.5 uppercase tracking-wider">
              © 2026. All rights reserved.
            </span>
          </div>
        </div>

        {/* Dynamic Digital Clock */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-500" id="footer-realtime-clock">
          <Clock size={12} className="text-[#22D3EE] animate-pulse" />
          <span>SERVER TIME:</span>
          <span className="text-zinc-300 font-bold">{time} IDT</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          id="btn-scroll-top"
          className="p-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 hover:border-[#22D3EE]/30 text-zinc-400 hover:text-[#22D3EE] rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center group"
          title="Scroll back to top"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
