import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'work', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0c0d11] text-white selection:bg-lime-400 selection:text-black">
      {/* Noise Texture Grain */}
      <div className="noise-overlay" />

      {/* Floating Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Section 01: HOME / HERO (Image 1) */}
        <HomeSection onExploreClick={() => scrollToSection('work')} />

        {/* Section 02: ABOUT ME (Image 2) */}
        <AboutSection onEnterWork={() => scrollToSection('work')} />

        {/* Section 03: MY WORK / GALLERY (Image 3) */}
        <WorkSection />

        {/* Section 04: CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
