import React from 'react';
import { ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { LandingPagePrompt } from '../types';

interface PromptCardProps {
  prompt: LandingPagePrompt;
  onClick: () => void;
  index: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick, index }) => {
  const getIcon = () => {
    switch (index) {
      case 0: return <Sparkles className="w-6 h-6 text-indigo-500" />;
      case 1: return <Layers className="w-6 h-6 text-blue-500" />;
      case 2: return <Cpu className="w-6 h-6 text-emerald-500" />;
      default: return <Sparkles className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-start p-8 bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 text-left w-full h-full border border-gray-100"
    >
      <div className="mb-6 p-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors">
        {getIcon()}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-apple-600 transition-colors">
        {prompt.title}
      </h3>
      
      <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-3">
        {prompt.primary_goal}
      </p>

      <div className="mt-auto flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
        Launch Page
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </button>
  );
};

export default PromptCard;