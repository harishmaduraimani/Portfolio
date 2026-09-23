import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, Sparkles, FileText, Github } from './Icons';
import { type Project, PROJECTS } from '../data/portfolio';
import { ProjectFrame } from './ProjectFrame';
import { ProjectModal } from './ProjectModal';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeView, setActiveView] = useState<'wall' | 'list'>('wall');

  return (
    <section
      id="work"
      className="relative w-full min-h-screen h-screen overflow-hidden bg-black flex flex-col justify-between border-t border-white/5"
    >
      {/* ======================================================== */}
      {/* FULL-BLEED BACKGROUND GRAFFITI WALL (Edge-to-Edge)       */}
      {/* 100vw x 100vh - Touches Left, Right, Top & Bottom Edges  */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/my-work.jpg"
          alt="Full-Bleed Graffiti Wall Exhibition Space"
          className="w-full h-full object-cover object-center filter contrast-[1.02] select-none pointer-events-none"
          loading="lazy"
        />

        {/* Subtle cinematic gradient overlays - stronger behind text, light over artwork */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/15 to-black/30 pointer-events-none" />
      </div>

      {/* Top Global Navigation Spacing */}
      <div className="pt-24 sm:pt-28" />

      {/* ======================================================== */}
      {/* HEADER OVERLAY (Left Section Title)                      */}
      {/* ======================================================== */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-lime-400 uppercase font-semibold">
              SECTION // 03 — HARDWARE & EMBEDDED SYSTEMS
            </span>
          </div>

          {/* Heading: Exactly "MY WORK" in large futuristic display font */}
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none">
            MY WORK
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-300 mt-2 tracking-wide font-medium">
            INTELLIGENT HARDWARE • EMBEDDED PLATFORMS • ROBOTICS • IoT
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VIEW SWITCHER CONTROLS (Top-Right Above Project Frames)  */}
      {/* Positioned at top: 9%, right: 6% to never overlap frames */}
      {/* ======================================================== */}
      <div className="relative z-30 px-6 sm:px-10 mt-3 md:mt-0 md:absolute md:top-[9%] md:right-[6%] pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/85 p-1.5 rounded-xl border border-white/15 backdrop-blur-md shadow-2xl w-fit">
          <button
            onClick={() => setActiveView('wall')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer border-none ${
              activeView === 'wall'
                ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(118,255,3,0.35)]'
                : 'text-neutral-400 hover:text-white bg-transparent'
            }`}
          >
            SPATIAL WALL VIEW
          </button>
          <button
            onClick={() => setActiveView('list')}
            className={`px-4 py-2 rounded-lg text-xs font-display font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer border-none ${
              activeView === 'list'
                ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(118,255,3,0.35)]'
                : 'text-neutral-400 hover:text-white bg-transparent'
            }`}
          >
            PROJECT LIST [{PROJECTS.length}]
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. SPATIAL WALL VIEW (Default Mode)                      */}
      {/* ======================================================== */}
      {activeView === 'wall' ? (
        <>
          {/* Desktop/Tablet: Physical Gallery Frames Stage locked to wall artwork */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
            <div
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'max(100vw, calc(100vh * (1024 / 572)))',
                height: 'max(100vh, calc(100vw / (1024 / 572)))'
              }}
            >
              {/* Overhead Gallery Lighting Glare Simulation */}
              <div
                className="absolute top-[2%] right-[5%] w-[45%] h-[4%] opacity-40 blur-md bg-white/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Six Physical Gallery Frames mounted on the right/center of the wall */}
              {PROJECTS.slice(0,6).map((project) => (
                <div
                  key={project.id}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `${project.frameGrid.x}%`,
                    top: `${project.frameGrid.y}%`,
                    width: `${project.frameGrid.width}%`,
                    height: `${project.frameGrid.height}%`
                  }}
                >
                  <ProjectFrame
                    project={project}
                    onSelect={(p) => setSelectedProject(p)}
                    className="w-full h-full"
                  />
                </div>
              ))}

              {/* Exhibition Wall Signage on bottom right floor */}
              <div className="absolute right-[4%] bottom-[5%] pointer-events-none text-right">
                <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest block">
                  PHYSICAL INSTALLATION // 06 ENGINEERING SYSTEMS
                </span>
                <span className="font-mono text-[10px] font-bold text-lime-400 tracking-wider">
                  RAW BRICK • HARDWARE PROTOTYPES
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Gallery (Stacked on top of the full-bleed graffiti wall) */}
          <div className="md:hidden relative z-20 container mx-auto px-6 py-6 overflow-y-auto max-h-[62vh] parchment-scroll flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400">
              <Sparkles size={14} />
              <span>FEATURED HARDWARE // VERTICAL STACK</span>
            </div>

            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-3 p-4 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-black text-lime-400">PROJ {project.number}</span>
                  <span className="text-white/60 font-bold">{project.year}</span>
                </div>

                <div className="w-full h-44">
                  <ProjectFrame
                    project={project}
                    onSelect={(p) => setSelectedProject(p)}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                  <span className="font-mono text-[10px] text-lime-400 uppercase tracking-wider font-bold">
                    {project.category}
                  </span>
                  <h4 className="font-display font-black text-base text-white uppercase">
                    {project.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="mt-1 pt-1 border-t border-white/10">
                    <span className="font-mono text-[10px] text-neutral-400 block truncate">
                      TECH: {project.technologies.join(' • ')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded bg-white/10 text-white hover:bg-lime-400 hover:text-black font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1 text-decoration-none"
                      >
                        <FileText size={11} />
                        <span>PDF</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded bg-white/10 text-white hover:bg-lime-400 hover:text-black font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1 text-decoration-none"
                      >
                        <Github size={11} />
                        <span>CODE</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-1.5 rounded bg-lime-400 text-black font-display font-black text-xs uppercase tracking-wider border-none cursor-pointer flex items-center gap-1 shadow-md"
                    >
                      <span>VIEW SPECS</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* ======================================================== */
        /* 2. PROJECT LIST VIEW (Clean Engineering Catalog)         */
        /* ======================================================== */
        <div className="relative z-20 container mx-auto px-6 py-6 flex-1 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full p-6 sm:p-8 rounded-2xl bg-black/85 border border-white/15 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Switch Back Action Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <button
                onClick={() => setActiveView('wall')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/60 border border-white/20 text-neutral-300 hover:text-lime-400 hover:border-lime-400 transition-all text-xs font-display font-extrabold uppercase tracking-wider cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>← SPATIAL WALL VIEW</span>
              </button>

              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                ENGINEERING CATALOG // 06 SYSTEMS
              </span>
            </div>

            {/* Engineering Project Rows */}
            <div className="divide-y divide-white/10 max-h-[55vh] overflow-y-auto parchment-scroll pr-2 space-y-2">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="group py-4 px-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-all duration-200"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    {/* Project Number */}
                    <span className="font-mono font-black text-base sm:text-lg text-lime-400 group-hover:text-lime-300 transition-colors pt-0.5">
                      {project.number}
                    </span>

                    {/* Title, Category & Description */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 
                          onClick={() => setSelectedProject(project)}
                          className="font-display font-black text-base sm:text-xl text-white uppercase tracking-tight group-hover:text-lime-400 transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-white/50 font-bold ml-auto sm:ml-0">
                          YEAR: {project.year}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed max-w-2xl">
                        {project.shortDescription}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-lime-400">
                        <span className="text-white/40">TECH:</span>
                        {project.technologies.map((t, idx) => (
                          <span key={idx} className="bg-black/60 border border-white/10 px-2 py-0.5 rounded text-[10.5px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Matrix */}
                  <div className="flex items-center gap-2.5 sm:self-center pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                    <a
                      href={project.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1 text-decoration-none"
                    >
                      <FileText size={13} />
                      <span className="hidden sm:inline">DOCUMENT</span>
                      <span className="sm:hidden">PDF</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1 text-decoration-none"
                    >
                      <Github size={13} />
                      <span className="hidden sm:inline">GITHUB</span>
                      <span className="sm:hidden">GIT</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-1.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-black text-xs font-display font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer border-none shadow-md"
                    >
                      <span>SPECS</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* AMBIENT FOOTER METADATA (Over the Wall Floor)            */}
      {/* ======================================================== */}
      <div className="relative z-20 container mx-auto px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          
          <span></span>
        </div>
        
      </div>

      {/* Full Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
      />
    </section>
  );
};
