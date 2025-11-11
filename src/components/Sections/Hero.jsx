import React from 'react';
import { ArrowRight } from 'lucide-react';
import CONFIG from '../../config/siteConfig';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl flex items-center justify-center transform transition-transform hover:scale-105">
                <span className="text-5xl font-bold text-cream">{CONFIG.company.logo}</span>
              </div>
              <div className="absolute -top-2 -right-2 text-4xl animate-pulse">✨</div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-cream">
            {CONFIG.hero.headline}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {CONFIG.hero.subheadline}
          </p>
          <p className="text-sm text-emerald-400 mb-8 italic">{CONFIG.company.tagline}</p>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/50 inline-flex items-center space-x-2 group"
          >
            <span>{CONFIG.hero.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
