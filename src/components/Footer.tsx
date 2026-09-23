import React from 'react';
import { ArrowDown } from './Icons';
import { DESIGNER } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08090c] border-t border-white/5 py-10 text-neutral-400 font-mono text-xs">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Designer Signature */}
        <div className="flex items-center gap-3">
          <div className="font-display font-black text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
            <span className="text-lime-400">[</span>
            {DESIGNER.initials}
            <span className="text-lime-400">]</span>
          </div>
          <span className="text-neutral-300 font-sans font-semibold">
            {DESIGNER.name} • {DESIGNER.role}
          </span>
        </div>

        {/* Center: Street Art Environment Attribution */}
        <div className="text-center text-neutral-400 text-[11px]">
          ORIGINAL GRAFFITI ARTWORK & STUDIO ENVIRONMENT © {DESIGNER.name} • ALL RIGHTS RESERVED
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span className="rotate-180 inline-block">
            <ArrowDown size={14} />
          </span>
          <span className="font-display font-bold text-xs uppercase tracking-wider">BACK TO TOP</span>
        </button>

      </div>
    </footer>
  );
};
