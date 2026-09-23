import React from 'react';
import { ArrowUpRight, FileText, Github, Cpu } from './Icons';
import type { Project } from '../data/portfolio';

interface ProjectFrameProps {
  project: Project;
  onSelect: (project: Project) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ProjectFrame: React.FC<ProjectFrameProps> = ({
  project,
  onSelect,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`group relative select-none text-left transition-all duration-300 ${className}`}
      style={style}
    >
      {/* Outer Wooden Gallery Frame Molding with Wall Shadow */}
      <div 
        onClick={() => onSelect(project)}
        className="relative w-full h-full rounded-[2px] sm:rounded-[3px] bg-[#0c0d12] p-[3px] sm:p-[5px] border-2 border-[#1e2028] shadow-[0_16px_34px_-4px_rgba(0,0,0,0.92),0_6px_14px_rgba(0,0,0,0.75)] group-hover:shadow-[0_24px_45px_-4px_rgba(0,0,0,0.98),0_0_25px_rgba(118,255,3,0.35)] group-hover:border-lime-400/70 group-hover:-translate-y-1.5 group-hover:scale-[1.03] transition-all duration-300 flex flex-col cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`View framed engineering project ${project.number}: ${project.title} - ${project.category}`}
      >
        {/* Inner Gallery Passepartout Mat */}
        <div className="relative w-full h-full p-[2.5px] sm:p-[4px] bg-[#f5f4ee] border border-[#d2cfc3] rounded-[1px] flex flex-col overflow-hidden shadow-inner">
          
          {/* Inner Engineering Hardware Canvas */}
          <div
            className="relative w-full h-full flex flex-col justify-between p-2 sm:p-2.5 overflow-hidden bg-[#0e1017]"
          >
            {/* PCB Trace & Grid Texture Background */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#76ff03 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '16px 16px, 8px 8px, 8px 8px'
              }}
            />

            {/* Top Artwork Header */}
            <div className="flex items-center justify-between z-10">
              <span
                className="font-mono text-[7px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 rounded text-black"
                style={{ backgroundColor: project.frameGrid.accentColor }}
              >
                PROJ // {project.number}
              </span>
              <span className="font-mono text-[7px] sm:text-[8px] text-white/60 uppercase tracking-widest font-bold">
                {project.year}
              </span>
            </div>

            {/* Center Engineering Typography & Icon */}
            <div className="my-auto text-center z-10 px-1">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 mb-1 mx-auto text-white/70 group-hover:text-lime-400 group-hover:border-lime-400 transition-colors">
                <Cpu size={12} />
              </div>
              <span className="font-mono text-[6.5px] sm:text-[7.5px] text-white/70 tracking-widest uppercase block truncate mb-0.5 font-semibold">
                {project.category}
              </span>
              <h4
                className="font-display font-black text-[9.5px] sm:text-xs md:text-sm text-white uppercase tracking-tight leading-tight drop-shadow line-clamp-2"
                style={{ textShadow: `0 0 15px ${project.frameGrid.accentColor}50` }}
              >
                {project.title}
              </h4>
              <span className="font-mono text-[6px] sm:text-[7px] text-lime-400/90 tracking-wider block mt-1 uppercase font-bold truncate">
                {project.technologies.slice(0, 3).join(' • ')}
              </span>
            </div>

            {/* Bottom Hardware Spec Badge */}
            <div className="flex items-center justify-between text-[5.5px] sm:text-[7px] font-mono text-white/50 border-t border-white/10 pt-1 z-10">
              <span>HARISH LABS</span>
              <span className="text-lime-400/80">HW // VERIFIED</span>
            </div>

            {/* Diagonal Glass Glare */}
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-80 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(130deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.03) 35%, transparent 55%)'
              }}
              aria-hidden="true"
            />

            {/* Ambient Specular Reflection */}
            <div
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full opacity-35 blur-xl pointer-events-none"
              style={{ backgroundColor: project.frameGrid.accentColor }}
            />
          </div>

        </div>

        {/* Project Card Hover Overlay with Engineering Metadata & Actions */}
        <div className="absolute inset-0 rounded-[2px] sm:rounded-[3px] bg-black/90 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2.5 sm:p-3 text-left z-30">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="font-black text-lime-400">
                PROJ {project.number}
              </span>
              <span className="text-white/60 text-[9px] font-bold">
                {project.year}
              </span>
            </div>
            <span className="font-mono text-[7.5px] sm:text-[8.5px] uppercase tracking-wider text-neutral-300 block">
              {project.category}
            </span>
            <h4 className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-tight leading-tight mt-0.5">
              {project.title}
            </h4>
            <p className="text-[7.5px] sm:text-[8.5px] text-neutral-300 line-clamp-2 mt-1 leading-tight font-sans">
              {project.shortDescription}
            </p>
            <div className="mt-1.5 pt-1 border-t border-white/10">
              <span className="font-mono text-[7px] text-lime-400 font-bold block truncate uppercase">
                TECH: {project.technologies.slice(0, 4).join(' • ')}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-1.5 border-t border-white/15">
            <div className="flex items-center justify-between gap-1">
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-1 px-1.5 rounded bg-white/10 hover:bg-lime-400 hover:text-black text-white text-[7.5px] sm:text-[8.5px] font-mono font-bold uppercase transition-colors flex items-center justify-center gap-0.5 text-decoration-none"
              >
                <FileText size={9} />
                <span>DOC</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-1 px-1.5 rounded bg-white/10 hover:bg-lime-400 hover:text-black text-white text-[7.5px] sm:text-[8.5px] font-mono font-bold uppercase transition-colors flex items-center justify-center gap-0.5 text-decoration-none"
              >
                <Github size={9} />
                <span>GITHUB</span>
              </a>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="w-full py-1 px-2 rounded bg-lime-400 hover:bg-lime-300 text-black text-[8px] sm:text-[9px] font-display font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer border-none shadow-sm"
            >
              <span>VIEW SPECS</span>
              <ArrowUpRight size={10} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
