import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from './Icons';
import { DESIGNER } from '../data/portfolio';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', number: '01' },
    { id: 'about', label: 'ABOUT', number: '02' },
    { id: 'work', label: 'WORK', number: '03' },
    { id: 'contact', label: 'CONTACT', number: '04' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-scrolled py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3 bg-transparent border-none cursor-pointer text-left p-0"
            aria-label="Scroll to home"
          >
            <div className="monogram-box flex items-center justify-center font-display font-black text-sm tracking-widest px-3 py-1.5 rounded bg-black/70 border border-white/20 text-white group-hover:border-lime-400 group-hover:text-lime-400 transition-colors">
              <span className="text-lime-400 mr-1">[</span>
              {DESIGNER.initials}
              <span className="text-lime-400 ml-1">]</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-xs tracking-wider text-white uppercase">
                {DESIGNER.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                HARDWARE LAB // ONLINE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <nav
            className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-widest uppercase transition-all duration-200 border-none cursor-pointer ${
                    isActive
                      ? 'text-black bg-lime-400 shadow-[0_0_15px_rgba(118,255,3,0.4)]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[9px] opacity-60 mr-1 font-mono">{item.number}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs font-display font-bold tracking-wider uppercase rounded border border-white/20 bg-white/5 hover:bg-lime-400 hover:text-black hover:border-lime-400 text-white transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-black/70 border border-white/20 text-white hover:text-lime-400 hover:border-lime-400 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              // NAVIGATION DIRECTORY
            </span>
            <div className="flex flex-col gap-1 mt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between py-4 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                      isActive
                        ? 'border-lime-400/50 bg-lime-400/10 text-lime-400'
                        : 'border-white/5 text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-display font-black text-2xl tracking-tight uppercase">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs opacity-60">/{item.number}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>LOCATION</span>
              <span className="text-white">{DESIGNER.contact.location}</span>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 rounded-lg bg-lime-400 text-black font-display font-black text-sm tracking-wider uppercase text-center border-none cursor-pointer flex items-center justify-center gap-2"
            >
              <span>LET'S TALK HARDWARE</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
