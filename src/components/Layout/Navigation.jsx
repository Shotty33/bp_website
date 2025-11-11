import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CONFIG from '../../config/siteConfig';

const Navigation = ({ activeSection, scrolled, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center font-bold text-cream">
              {CONFIG.company.logo}
            </div>
            <span className="font-bold text-xl text-cream">{CONFIG.company.name}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services'].map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? 'text-emerald-400'
                    : 'text-gray-300 hover:text-emerald-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {['home', 'about', 'services'].map(section => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="block w-full text-left px-4 py-3 capitalize text-gray-300 hover:bg-gray-800 hover:text-emerald-300 transition-colors"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
