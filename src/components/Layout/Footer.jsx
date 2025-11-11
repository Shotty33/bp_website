import React from 'react';
import CONFIG from '../../config/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-hunter-green-800 rounded-lg flex items-center justify-center font-bold text-cream text-sm">
            {CONFIG.company.logo}
          </div>
          <span className="font-bold text-lg text-cream">{CONFIG.company.name}</span>
        </div>
        <p className="text-gray-400 mb-2">{CONFIG.company.tagline}</p>
        <p className="text-gray-500 text-sm">Contact information coming soon</p>
      </div>
    </footer>
  );
};

export default Footer;
