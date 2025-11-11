import React from 'react';
import CONFIG from '../../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-cream">{CONFIG.about.title}</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          {CONFIG.about.intro}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.about.values.map((value, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 cursor-pointer border border-gray-800 hover:border-emerald-700"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
