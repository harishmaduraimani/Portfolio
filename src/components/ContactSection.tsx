import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from './Icons';
import { DESIGNER } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0c10] py-20 md:py-32 overflow-hidden border-t border-white/10">
      
      {/* Background Graphic Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lime-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-lime-400 font-mono text-xs tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          SECTION // 04 — INQUIRIES
        </div>

        {/* Main Hero Contact Banner */}
        <div className="max-w-4xl">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            {DESIGNER.contact.heading}
          </h2>

          <p className="font-sans text-base sm:text-xl text-neutral-300 mt-6 max-w-2xl leading-relaxed font-medium">
            {DESIGNER.contact.subheading}
          </p>
        </div>

        {/* Contact Interaction Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#13151f] border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Email Block */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400">
              <Mail size={14} className="text-lime-400" />
              <span>PRIMARY DIRECT INBOX</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display font-black text-xl sm:text-3xl text-white uppercase tracking-tight">
                {DESIGNER.contact.email}
              </span>
              
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-lime-400" />
                    <span className="text-lime-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${DESIGNER.contact.email}?subject=Engineering%20Inquiry%20—%20Hardware%20%26%20Embedded%20Systems`}
              className="px-8 py-4 rounded-lg bg-lime-400 hover:bg-lime-300 text-black font-display font-extrabold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(118,255,3,0.3)] text-decoration-none"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>

        {/* Social Platforms & Metadata Matrix */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DESIGNER.contact.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#141620] border border-white/5 hover:border-lime-400/40 hover:bg-[#181b26] transition-all group text-decoration-none flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-lime-400">
                <span>{social.platform}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-white mt-4">
                {social.username}
              </div>
            </a>
          ))}
        </div>

        {/* Location & Studio Stamp */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-lime-400" />
            <span>BASE LAB: {DESIGNER.contact.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">AVAILABLE FOR EMBEDDED & ROBOTICS PROJECTS // 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};
