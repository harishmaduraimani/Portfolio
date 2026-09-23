import React from 'react';
import { ArrowDown, Sparkles } from './Icons';
import { DESIGNER } from '../data/portfolio';

interface HomeSectionProps {
  onExploreClick: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* Background Hero Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home.jpg"
          alt="Harish Maduraimani - Graphic Designer Hero Mural"
          className="w-full h-full object-cover object-center filter contrast-[1.02]"
          loading="eager"
        />
        {/* Very subtle edge vignette to keep text readable without darkening the artwork */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Top spacing for navigation */}
      <div className="pt-28 md:pt-32" />

      {/* Hero Content Overlay (Strategically placed so as not to cover character or graffiti) */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-xl flex flex-col gap-4">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-lime-400 uppercase font-semibold">
              {DESIGNER.subtitle}
            </span>
          </div>

          {/* Engineer Identity Block */}
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm text-lime-400 font-bold uppercase tracking-wider mb-1">
              HI, I'M
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase drop-shadow-lg leading-none">
              HARISH MADURAIMANI.
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-display font-extrabold text-sm sm:text-lg tracking-widest text-lime-400 uppercase">
                {DESIGNER.role}
              </span>
              <span className="text-white/40 text-xs font-mono">•</span>
              <span className="text-neutral-300 text-xs font-mono tracking-wider">
                CHENNAI / GLOBAL
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-neutral-200 font-medium max-w-lg backdrop-blur-xs drop-shadow leading-relaxed">
            {DESIGNER.description}
          </p>

          {/* Secondary Statement */}
          <div className="border-l-2 border-lime-400 pl-3 py-1 bg-black/40 rounded-r backdrop-blur-xs">
            <p className="font-mono text-[11px] sm:text-xs text-lime-400 font-black tracking-wide uppercase">
              "{DESIGNER.secondaryStatement}"
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={onExploreClick}
              className="group px-6 py-3.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-black font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(118,255,3,0.35)] cursor-pointer border-none"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#about"
              className="px-5 py-3.5 rounded-lg bg-black/60 hover:bg-black/80 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/20 hover:border-white/40 transition-all flex items-center gap-2 backdrop-blur-md text-decoration-none"
            >
              <Sparkles size={15} className="text-lime-400" />
              <span>ABOUT ME</span>
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
};
