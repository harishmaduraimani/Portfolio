import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Layers, Cpu, FileText, Github, ExternalLink } from './Icons';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#11131a] border border-white/15 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161822]">
          <div className="flex items-center gap-3">
            <span
              className="px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider text-black"
              style={{ backgroundColor: project.frameGrid.accentColor || '#76ff03' }}
            >
              PROJ // {project.number}
            </span>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest hidden sm:inline">
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/50">•</span>
            <span className="font-mono text-xs text-lime-400 font-bold hidden sm:inline">
              YEAR: {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={project.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
            >
              <FileText size={13} />
              <span className="hidden sm:inline">OPEN PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1.5 text-decoration-none"
            >
              <Github size={13} />
              <span className="hidden sm:inline">SOURCE CODE</span>
              <span className="sm:hidden">GIT</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10 parchment-scroll">
          
          {/* Prominent Project Image / System Hardware Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0b0c12] p-6 sm:p-8 flex flex-col justify-between min-h-[220px] shadow-2xl">
            {/* PCB Trace & Grid Texture Background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#76ff03 1.5px, transparent 1.5px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px, 12px 12px, 12px 12px'
              }}
            />

            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/15 text-lime-400 font-mono text-[11px] font-bold tracking-widest uppercase">
                <Cpu size={13} />
                <span>{project.caseStudy.schematicBadge}</span>
              </div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                HARISH LABS // PROTO_SYS
              </span>
            </div>

            <div className="my-6 z-10">
              <span className="font-mono text-xs font-bold text-lime-400 uppercase tracking-widest block mb-1">
                {project.category}
              </span>
              <h2 id="modal-title" className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                {project.title}
              </h2>
              <p className="font-mono text-sm sm:text-base text-neutral-300 mt-2 font-medium max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 z-10 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2 text-lime-400">
                <span className="text-neutral-400 font-bold">STACK:</span>
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-black/60 border border-white/15">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-white/60 font-bold">
                ENGINEERING VERIFIED // {project.year}
              </span>
            </div>

            {/* Ambient Corner Glow */}
            <div
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{ backgroundColor: project.frameGrid.accentColor }}
            />
          </div>

          {/* Grid Layout: Problem & Solution vs Specs & Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Overview, Problem, Solution, Hardware, Software (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Executive Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-lime-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span>SYSTEM OVERVIEW</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-200">
                  {project.caseStudy.overview}
                </p>
              </div>

              {/* The Problem */}
              <div className="space-y-3 p-5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-bold block">
                  // THE ENGINEERING CHALLENGE & PROBLEM
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-3 p-5 rounded-xl bg-black/40 border border-lime-400/25">
                <span className="text-xs font-mono tracking-widest uppercase text-lime-400 font-bold block">
                  // THE ARCHITECTURAL SOLUTION
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Hardware Architecture Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-lime-400 font-bold">
                  <Cpu size={15} />
                  <span>HARDWARE & CIRCUIT DESIGN</span>
                </div>
                <div className="space-y-2.5">
                  {project.caseStudy.hardware.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-lime-400 px-2 py-0.5 rounded bg-white/5">
                        HW 0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-mono">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software & Firmware Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-lime-400 font-bold">
                  <Layers size={15} />
                  <span>FIRMWARE, ALGORITHMS & SOFTWARE</span>
                </div>
                <div className="space-y-2.5">
                  {project.caseStudy.software.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-white/5">
                        SW 0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-mono">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Specs, Technologies, Role & Actions (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Technical Specifications Table */}
              <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono uppercase text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400" />
                    <span>TECHNICAL SPECIFICATIONS</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold">LAB BENCH</span>
                </div>

                <div className="divide-y divide-white/10">
                  {project.caseStudy.specs.map((spec, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-neutral-400">{spec.label}</span>
                      <span className="text-lime-400 font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role & Year */}
              <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase text-neutral-400 block font-bold">
                  // MY ENGINEERING ROLE
                </span>
                <p className="font-sans text-sm text-neutral-200 leading-relaxed">
                  {project.caseStudy.myRole}
                </p>
                <span className="font-mono text-xs text-lime-400 font-bold block pt-1">
                  PROJECT TIMELINE: {project.year}
                </span>
              </div>

              {/* Technologies Matrix */}
              <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-neutral-300 block font-bold">
                  // TECHNOLOGIES & TOOLS USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.caseStudy.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-lime-400 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documentation & Code Actions */}
              <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-neutral-300 block font-bold">
                  // PROJECT ARTIFACTS
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={project.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-lime-400 hover:bg-lime-300 text-black font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-decoration-none shadow-md"
                  >
                    <FileText size={14} />
                    <span>OPEN PROJECT DOCUMENT (PDF)</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/15 text-decoration-none"
                  >
                    <Github size={14} />
                    <span>VIEW GITHUB REPOSITORY</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Modal Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#161822]">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-display font-bold text-white uppercase border border-white/10 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">PREV: {prevProject.title}</span>
            <span className="sm:hidden">PREV</span>
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-lime-400 hover:text-black text-white text-xs font-display font-black uppercase tracking-wider transition-colors text-decoration-none border border-white/15"
          >
            DISCUSS HARDWARE COLLABORATION
          </a>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-display font-bold text-white uppercase border border-white/10 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">NEXT: {nextProject.title}</span>
            <span className="sm:hidden">NEXT</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
