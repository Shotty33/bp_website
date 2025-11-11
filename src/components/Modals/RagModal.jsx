import React from 'react';
import { X, Database, Brain, Sparkles } from 'lucide-react';
import CONFIG from '../../config/siteConfig';

const RagModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-hunter-green-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-cream mb-2">{CONFIG.rag.title}</h2>
              <p className="text-xl text-hunter-green-400">{CONFIG.rag.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cream transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Simple RAG Diagram */}
          <div className="mb-8 bg-black p-6 rounded-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="w-28 h-28 bg-hunter-green-800 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Database className="w-14 h-14 text-cream" />
                </div>
                <p className="font-semibold text-cream">Your Data</p>
                <p className="text-sm text-gray-400">Documents, databases, files</p>
              </div>

              <div className="hidden md:block text-3xl text-hunter-green-500">→</div>

              <div className="text-center">
                <div className="w-28 h-28 bg-hunter-green-800 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Brain className="w-14 h-14 text-cream" />
                </div>
                <p className="font-semibold text-cream">RAG System</p>
                <p className="text-sm text-gray-400">Retrieval + AI Model</p>
              </div>

              <div className="hidden md:block text-3xl text-hunter-green-500">→</div>

              <div className="text-center">
                <div className="w-28 h-28 bg-hunter-green-800 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Sparkles className="w-14 h-14 text-cream" />
                </div>
                <p className="font-semibold text-cream">Smart Answers</p>
                <p className="text-sm text-gray-400">Accurate, contextual results</p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {CONFIG.rag.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black p-5 rounded-lg border border-gray-800"
              >
                <h3 className="text-lg font-semibold mb-2 text-hunter-green-400">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagModal;
