import React, { useState } from 'react';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import { PROMPTS } from './data';

export default function App() {
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);

  const selectedPrompt = PROMPTS.find(p => p.id === selectedPromptId);

  const handleSelectPrompt = (id: string) => {
    setSelectedPromptId(id);
  };

  const handleBack = () => {
    setSelectedPromptId(null);
  };

  return (
    <div className="antialiased text-slate-900 bg-[#F5F5F7] min-h-screen">
      {selectedPrompt ? (
        <LandingPage prompt={selectedPrompt} onBack={handleBack} />
      ) : (
        <Dashboard onSelectPrompt={handleSelectPrompt} />
      )}
    </div>
  );
}