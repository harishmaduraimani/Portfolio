import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Download, X, ExternalLink } from './Icons';
import { DESIGNER, SKILLS_CATEGORIES } from '../data/portfolio';

interface AboutSectionProps {
  onEnterWork: () => void;
}

// 3 Realistic Fluorescent Tube Light Fixtures
const TUBE_LIGHTS = [
  {
    id: 1,
    name: 'Top-Left Fluorescent Tube',
    x: 45.0,
    y: 22.8,
    width: 16.5,
    height: 3.6,
    spillWidth: 34,
    spillHeight: 24
  },
  {
    id: 2,
    name: 'Top-Right Fluorescent Tube',
    x: 63.3,
    y: 22.5,
    width: 16.2,
    height: 3.6,
    spillWidth: 34,
    spillHeight: 24
  },
  {
    id: 3,
    name: 'Lower Fluorescent Tube',
    x: 59.8,
    y: 34.9,
    width: 16.0,
    height: 3.6,
    spillWidth: 32,
    spillHeight: 22
  }
];

// Engineering Disciplines
const INTERACTIVE_CATEGORIES = [
  "STARTUPS & PRODUCT",
    "EMBEDDED SYSTEMS",
    "AI / MACHINE LEARNING",
    "ROBOTICS & AUTOMATION",
    "PCB & ELECTRONICS",
    "SOFTWARE & WEB",
    "GRAPHIC DESIGN",
    "BRAND DESIGN",
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onEnterWork }) => {
  const [doorHovered, setDoorHovered] = useState(false);
  const [hoveredTube, setHoveredTube] = useState<number | null>(null);
  const [selectedWord, setSelectedWord] = useState<string>('EMBEDDED SYSTEMS');
  const [selectedSkill, setSelectedSkill] = useState<string>('ESP32');
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowResumeModal(false);
    };
    if (showResumeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showResumeModal]);

  return (
    <section
      id="about"
      className="relative w-full max-w-full h-screen min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image - Full Screen Edge to Edge (Same as Home) */}
      <img
        src="/images/about-me.jpg"
        alt="About Me Hardware Lab & Graffiti Studio Environment"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        loading="lazy"
      />

      {/* ======================================================== */}
      {/* CINEMATIC DARK GRADIENT OVERLAY                          */}
      {/* Subtle edge vignette framing while preserving wall art   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Subtle top/bottom edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45" />

        {/* Gentle horizontal framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

        {/* Radial vignette preserving warm illumination around lights and wooden door */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 53% 50%, transparent 45%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.6) 100%)'
          }}
        />
      </div>

      {/* Stage Layer mathematically locked to the exact 1024x572 object-cover image pixels */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'max(100vw, calc(100vh * (1024 / 572)))',
          height: 'max(100vh, calc(100vw / (1024 / 572)))'
        }}
      >
        {/* ======================================================== */}
        {/* 3 REALISTIC INTERACTIVE FLUORESCENT TUBE LIGHTS          */}
        {/* Exact pixel alignment with physical wall fixtures        */}
        {/* ======================================================== */}
        {TUBE_LIGHTS.map((tube) => {
          const isHovered = hoveredTube === tube.id;

          return (
            <React.Fragment key={tube.id}>
              {/* 1. Realistic Wall Light Spill */}
              <div
                className={`absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
                  isHovered ? 'opacity-95 scale-105' : 'opacity-25 scale-100'
                }`}
                style={{
                  left: `${tube.x + tube.width / 2}%`,
                  top: `${tube.y + tube.height / 2}%`,
                  width: `${tube.spillWidth}%`,
                  height: `${tube.spillHeight}%`,
                  background:
                    'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 248, 230, 0.45) 0%, rgba(255, 238, 195, 0.22) 42%, rgba(255, 225, 170, 0.05) 72%, transparent 100%)',
                  mixBlendMode: 'screen'
                }}
                aria-hidden="true"
              />

              {/* 2. Soft Fluorescent Bloom & Dispersion Aura */}
              <div
                className={`absolute pointer-events-none rounded-full transition-all duration-400 ease-out ${
                  isHovered
                    ? 'opacity-95 blur-[8px] bg-amber-100/60 shadow-[0_0_40px_rgba(255,250,230,0.9),0_0_80px_rgba(255,235,180,0.55)]'
                    : 'opacity-40 blur-[4px] bg-white/35 shadow-[0_0_16px_rgba(255,245,215,0.3)]'
                }`}
                style={{
                  left: `${tube.x - 0.5}%`,
                  top: `${tube.y - 0.8}%`,
                  width: `${tube.width + 1}%`,
                  height: `${tube.height + 1.6}%`
                }}
                aria-hidden="true"
              />

              {/* 3. Hot Phosphor Inner Glass Core */}
              <div
                className={`absolute pointer-events-none rounded-full transition-all duration-300 ease-out ${
                  isHovered
                    ? 'opacity-100 bg-gradient-to-r from-amber-100/70 via-white to-amber-100/70 shadow-[0_0_12px_#ffffff,0_0_26px_rgba(255,250,225,0.95)]'
                    : 'opacity-40 bg-gradient-to-r from-transparent via-white/85 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                }`}
                style={{
                  left: `${tube.x + 0.6}%`,
                  top: `${tube.y + 0.9}%`,
                  width: `${tube.width - 1.2}%`,
                  height: `${tube.height - 1.8}%`
                }}
                aria-hidden="true"
              />

              {/* 4. Downward Light Spill reflection */}
              <div
                className={`absolute pointer-events-none transition-all duration-500 ease-out ${
                  isHovered ? 'opacity-85' : 'opacity-20'
                }`}
                style={{
                  left: `${tube.x + 1.5}%`,
                  top: `${tube.y + tube.height - 0.5}%`,
                  width: `${tube.width - 3}%`,
                  height: '7%',
                  background: 'linear-gradient(to bottom, rgba(255, 245, 220, 0.28) 0%, transparent 100%)',
                  mixBlendMode: 'screen'
                }}
                aria-hidden="true"
              />

              {/* 5. Interactive Hit Zone for Tube Hover */}
              <div
                onMouseEnter={() => setHoveredTube(tube.id)}
                onMouseLeave={() => setHoveredTube(null)}
                className="absolute pointer-events-auto cursor-pointer z-30"
                style={{
                  left: `${tube.x - 1}%`,
                  top: `${tube.y - 1.5}%`,
                  width: `${tube.width + 2}%`,
                  height: `${tube.height + 3}%`
                }}
                aria-label={tube.name}
              />
            </React.Fragment>
          );
        })}

        {/* Handwritten-Style Accents on the Blueprint Wall (Lime Green) */}
        {DESIGNER.stickyNotes.map((note, index) => (
          <div
            key={index}
            className="absolute hidden sm:flex items-center justify-center font-hand text-lime-400 font-bold select-none tracking-widest text-sm lg:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] pointer-events-none"
            style={{
              left: `${note.x}%`,
              top: `${note.y}%`,
              transform: `rotate(${note.rotation}deg)`
            }}
          >
            <span>- {note.text} -</span>
          </div>
        ))}

        {/* ======================================================== */}
        {/* PARCHMENT FIXED CONTAINER (Does NOT scroll)              */}
        {/* Strictly confined within visible parchment paper bounds   */}
        {/* ======================================================== */}
        <div
          className="absolute pointer-events-auto z-20 select-text overflow-hidden"
          style={{
            left: '5.2%',
            top: '6.5%',
            width: '32.0%',
            height: '38.5%',
            maxHeight: '38.5%'
          }}
        >
          {/* Vertical Neon Lime Accent Line on the Right Edge of the Parchment Container */}
          <div
            className="absolute -right-[2px] sm:-right-[3px] top-[10%] h-[56%] w-1 sm:w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_#76ff03,0_0_24px_rgba(118,255,3,0.65)] pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* DEDICATED CONTENT VIEWPORT (Scrolls vertically inside parchment) */}
          <div
            className="w-full h-full overflow-y-auto overflow-x-hidden parchment-scroll select-text relative z-10"
            style={{
              paddingTop: 'clamp(22px, 2.5vw, 32px)',
              paddingBottom: 'clamp(24px, 2.8vw, 32px)',
              paddingLeft: 'clamp(22px, 2.5vw, 32px)',
              paddingRight: 'clamp(24px, 2.8vw, 34px)'
            }}
          >
            <div className="flex flex-col gap-3 sm:gap-4 pr-1 select-text">
              {/* Main Headline - Bold Black Typography */}
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black/70 block mb-0.5">
                  // PROFILE // 02
                </span>
                <h2 className="font-display font-black text-xl sm:text-2xl lg:text-[28px] leading-[1.08] text-black uppercase tracking-tight select-text">
                  HI, I'M HARISH<br />MADURAIMANI,
                </h2>
              </div>

              {/* Bio Paragraph 1 */}
              <p className="font-sans text-xs sm:text-sm lg:text-[14px] leading-relaxed text-[#140e08] font-bold select-text">
                {DESIGNER.bioParagraphs[0]}
              </p>

              {/* Bio Paragraph 2 */}
              <p className="font-sans text-xs sm:text-sm lg:text-[13.5px] leading-relaxed text-[#1a120b] font-semibold select-text">
                {DESIGNER.bioParagraphs[1]}
              </p>

              {/* Section: I LOVE BUILDING: (8 Interactive Category Tags) */}
              <div className="pt-2 sm:pt-3 border-t border-black/15 flex flex-col gap-2 select-text">
                <div className="flex items-center justify-between select-text">
                  <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black select-text">
                    // I LOVE BUILDING:
                  </span>
                  <span className="font-mono text-[9px] text-black/60 uppercase tracking-wider select-none">
                    TAP TO HIGHLIGHT
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {INTERACTIVE_CATEGORIES.map((cat) => {
                    const isSelected = selectedWord === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedWord(cat)}
                        className={`group relative z-10 inline-flex items-center px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-display font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer border pointer-events-auto select-none ${
                          isSelected
                            ? 'bg-black/90 text-lime-400 border-lime-400 shadow-[0_0_12px_rgba(118,255,3,0.45),inset_0_0_8px_rgba(118,255,3,0.15)] [text-shadow:0_0_8px_rgba(118,255,3,0.7)] scale-[1.02]'
                            : 'bg-[#2c1d0f]/10 border-black/35 text-black hover:text-lime-400 hover:border-lime-400/80 hover:bg-black/80 hover:shadow-[0_0_10px_rgba(118,255,3,0.35)] hover:[text-shadow:0_0_6px_rgba(118,255,3,0.6)]'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span className="opacity-60 mr-1 font-mono text-[9px] group-hover:opacity-100 group-hover:text-lime-400 transition-opacity">
                          [
                        </span>
                        <span>{cat}</span>
                        <span className="opacity-60 ml-1 font-mono text-[9px] group-hover:opacity-100 group-hover:text-lime-400 transition-opacity">
                          ]
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section: TECHNICAL SKILLS PANEL */}
              <div className="pt-2 sm:pt-3 border-t border-black/15 flex flex-col gap-3 select-text">
                <div className="flex items-center justify-between select-text">
                  <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black select-text">
                    // TECHNICAL SKILLS
                  </span>
                  <span className="font-mono text-[9px] text-black/60 uppercase tracking-wider select-none">
                    6 DISCIPLINES
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {SKILLS_CATEGORIES.map((catGroup) => (
                    <div key={catGroup.title} className="flex flex-col gap-1">
                      <span className="font-mono text-[9.5px] sm:text-[10px] font-bold text-black/75 uppercase tracking-wider">
                        • {catGroup.title}
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {catGroup.skills.map((skill) => {
                          const isSkillSelected = selectedSkill === skill;
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => setSelectedSkill(skill)}
                              className={`text-[9px] sm:text-[10.5px] font-mono font-bold px-2 py-0.5 rounded transition-all duration-200 cursor-pointer border select-none ${
                                isSkillSelected
                                  ? 'bg-black text-lime-400 border-lime-400 shadow-[0_0_8px_rgba(118,255,3,0.4)] [text-shadow:0_0_6px_rgba(118,255,3,0.7)]'
                                  : 'bg-black/5 text-[#1e150d] border-black/20 hover:text-lime-400 hover:bg-black/80 hover:border-lime-400 hover:[text-shadow:0_0_6px_rgba(118,255,3,0.5)]'
                              }`}
                            >
                              {skill}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Resume CTA inside parchment for mobile convenience */}
              <div className="pt-3 border-t border-black/15 flex items-center justify-between pb-1 select-none">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-black/80 font-bold">
                  <FileText size={13} className="text-black" />
                  <span>HARISH_RESUME_2026.PDF</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowResumeModal(true)}
                  className="px-2.5 py-1 rounded bg-black text-lime-400 hover:bg-black/90 text-[10px] font-display font-extrabold uppercase tracking-wider border border-black cursor-pointer shadow-sm flex items-center gap-1"
                >
                  <span>VIEW CV</span>
                  <ArrowRight size={11} />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PINNED PHYSICAL HANGING RESUME CARD ON THE STUDIO WALL   */}
        {/* Positioned on blueprint/drawing wall beside parchment    */}
        {/* ======================================================== */}
        <div
          className="absolute pointer-events-auto z-20 hidden md:block"
          style={{
            left: '38.2%',
            top: '49.5%',
            width: '9.8%',
            minWidth: '135px'
          }}
        >
          {/* Subtle hanging rotation & hover physics */}
          <div className="group relative transition-all duration-300 -rotate-2 hover:rotate-0 hover:scale-105 hover:-translate-y-1">
            
            {/* Metallic Pushpin Graphic pinned at top center of document */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
              {/* Metallic brass/silver thumbtack head */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 shadow-[0_3px_6px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-neutral-500/80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400/80 shadow-[0_0_4px_#76ff03]" />
              </div>
              {/* Pin shadow cast on paper */}
              <div className="w-2.5 h-1 bg-black/40 blur-[1px] -mt-0.5 rounded-full" />
            </div>

            {/* Document Body (Physical Drafting Paper Appearance) */}
            <div className="w-full bg-[#12141c] p-3 sm:p-3.5 rounded-[2px] border border-white/20 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_2px_6px_rgba(0,0,0,0.6)] group-hover:border-lime-400/70 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.95),0_0_20px_rgba(118,255,3,0.3)] transition-all">
              
              {/* Blueprint Grid Watermark Texture */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white/50 text-[8px] font-mono">
                <span className="text-lime-400 font-bold uppercase tracking-wider">DOC // 01</span>
                <span>PDF • A4</span>
              </div>

              {/* Title & Name */}
              <div className="py-2.5 flex flex-col gap-0.5">
                <span className="font-display font-black text-[12px] tracking-wider text-white uppercase block leading-tight">
                  RESUME
                </span>
                <span className="font-mono text-[9px] font-bold text-lime-400 uppercase tracking-tight block">
                  HARISH MADURAIMANI
                </span>
                <span className="font-mono text-[7.5px] text-neutral-400 uppercase tracking-widest block mt-0.5">
                  ELECTRONICS ENGINEERING
                </span>
              </div>

              {/* Document Actions */}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowResumeModal(true)}
                  className="w-full py-1.5 rounded bg-lime-400 hover:bg-lime-300 text-black font-display font-black text-[9px] sm:text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer border-none flex items-center justify-center gap-1 shadow-sm"
                >
                  <FileText size={11} />
                  <span>VIEW RESUME</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Harish_Maduraimani_Electronics_Resume.pdf"
                  className="w-full py-1.5 rounded bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white font-mono text-[8.5px] uppercase tracking-wider transition-all duration-200 cursor-pointer border border-white/15 flex items-center justify-center gap-1 text-decoration-none"
                >
                  <Download size={10} />
                  <span>DOWNLOAD</span>
                </a>
              </div>

              {/* Physical paper tape accent on bottom corner */}
              <div className="absolute -bottom-2 -right-2 w-7 h-3 bg-amber-100/25 rotate-45 border-l border-r border-black/20 pointer-events-none backdrop-blur-xs" />
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* WOODEN DOOR INTERACTIVE PORTAL                            */}
        {/* Positioned over the central wooden door in Image 2        */}
        {/* ======================================================== */}
        <div
          className="absolute pointer-events-auto z-20"
          style={{
            left: '48.8%',
            top: '50.8%',
            width: '14.8%',
            height: '43.8%'
          }}
        >
          {/* Always Visible "ENTER MY WORK →" Button directly above door */}
          <button
            onClick={onEnterWork}
            onMouseEnter={() => setDoorHovered(true)}
            onMouseLeave={() => setDoorHovered(false)}
            className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-black/90 border border-lime-400 text-lime-400 font-display font-black text-[11px] sm:text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(118,255,3,0.4)] flex items-center gap-1.5 transition-all duration-200 cursor-pointer focus:outline-none ${
              doorHovered
                ? 'bg-lime-400 text-black shadow-[0_0_25px_rgba(118,255,3,0.7)] scale-105'
                : 'hover:bg-lime-400 hover:text-black'
            }`}
            aria-label="Enter My Work Gallery through the studio door"
          >
            <span>ENTER MY WORK</span>
            <ArrowRight size={13} className={doorHovered ? 'text-black' : 'text-lime-400'} />
          </button>

          {/* Glowing Green Door Frame Outline */}
          <button
            onClick={onEnterWork}
            onMouseEnter={() => setDoorHovered(true)}
            onMouseLeave={() => setDoorHovered(false)}
            className="w-full h-full cursor-pointer border-none bg-transparent p-0 relative focus:outline-none"
            aria-label="Studio Door"
          >
            <div
              className={`absolute inset-0 border-2 rounded-t-sm transition-all duration-300 pointer-events-none ${
                doorHovered
                  ? 'border-lime-400 shadow-[0_0_30px_rgba(118,255,3,0.5)] bg-lime-400/10'
                  : 'border-lime-400/60 shadow-[0_0_15px_rgba(118,255,3,0.25)]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* IN-BROWSER RESUME PREVIEW MODAL                          */}
      {/* ======================================================== */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setShowResumeModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Harish Maduraimani Resume"
        >
          <div
            className="relative w-full max-w-4xl h-[88vh] bg-[#10121a] border border-white/20 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161824]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
                <div>
                  <h3 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-wider leading-none">
                    RESUME // HARISH MADURAIMANI
                  </h3>
                  <span className="font-mono text-[10px] text-lime-400 tracking-wider uppercase block mt-0.5">
                    ELECTRONICS • EMBEDDED • ROBOTICS • IoT
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-all text-decoration-none"
                >
                  <span>OPEN IN TAB</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="/resume.pdf"
                  download="Harish_Maduraimani_Electronics_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-black text-xs font-display font-black uppercase tracking-wider transition-all text-decoration-none shadow-md"
                >
                  <Download size={13} />
                  <span>DOWNLOAD PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  aria-label="Close Resume Preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF viewer with clean fallback */}
            <div className="flex-1 w-full h-full bg-[#181a26] relative overflow-hidden flex flex-col">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0"
                title="Harish Maduraimani Resume"
                className="w-full flex-1 border-none bg-neutral-900"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
