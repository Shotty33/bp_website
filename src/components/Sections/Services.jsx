import React, { useState } from 'react';
import { ArrowRight, Code, Brain, TrendingUp, Database } from 'lucide-react';
import CONFIG from '../../config/siteConfig';

const Services = ({ onRagModalOpen }) => {
  const [expandedService, setExpandedService] = useState(null);

  // Icon mapping
  const iconMap = {
    Code: Code,
    Brain: Brain,
    TrendingUp: TrendingUp,
    Database: Database,
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-cream">{CONFIG.services.title}</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Engineered solutions that transform your operations and drive growth
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {CONFIG.services.list.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 cursor-pointer border border-gray-800 hover:border-emerald-600 group"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
                {getIcon(service.iconName)}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-cream">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {expandedService === index && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRagModalOpen();
                      }}
                      className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <span>Learn more about RAG</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              <button className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors">
                {expandedService === index ? 'Show less' : 'Learn more'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
