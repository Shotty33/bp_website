import React, { useState, useEffect } from 'react';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import RagModal from './components/Modals/RagModal';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [ragModalOpen, setRagModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <RagModal isOpen={ragModalOpen} onClose={() => setRagModalOpen(false)} />

      <Navigation
        activeSection={activeSection}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services onRagModalOpen={() => setRagModalOpen(true)} />

      <Footer />
    </div>
  );
};

export default App;
