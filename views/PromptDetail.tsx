import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Target, Users, Zap, Layout, Palette, Code2, Search, MessageSquare } from 'lucide-react';
import { LandingPagePrompt } from '../types';

interface PromptDetailProps {
  prompt: LandingPagePrompt;
  onBack: () => void;
}

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-6 text-gray-900">
    <div className="p-1.5 bg-gray-100 rounded-lg text-gray-600">
      {icon}
    </div>
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">
    {children}
  </span>
);

const PromptDetail: React.FC<PromptDetailProps> = ({ prompt, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-sans">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
            Brief ID: {prompt.id}
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 pb-32">
        {/* Header Section */}
        <header className="mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
            Detailed Strategy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {prompt.title}
          </h1>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200/60 max-w-3xl">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Role & Context</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              "{prompt.role}"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Strategy & Goal */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <SectionTitle icon={<Target className="w-5 h-5" />} title="Primary Goal & Strategy" />
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {prompt.primary_goal}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Positioning Statement</h3>
                <div className="pl-4 border-l-2 border-blue-500">
                  <p className="text-gray-600 italic">{prompt.positioning}</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-4">Target Audience</h3>
              <div className="flex flex-wrap gap-2">
                {prompt.target_audience.map((audience, idx) => (
                  <Pill key={idx}>{audience}</Pill>
                ))}
              </div>
            </section>

            {/* Pain Points & Value Props */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                  Pain Points
                </h3>
                <ul className="space-y-4">
                  {prompt.core_pain_points_to_target.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-300 rounded-full shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                  Value Props
                </h3>
                <ul className="space-y-4">
                  {prompt.primary_value_props.map((prop, idx) => (
                    <li key={idx} className="flex items-start text-gray-800 font-medium text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      {prop}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Structure */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <SectionTitle icon={<Layout className="w-5 h-5" />} title="Page Structure" />
               <div className="space-y-0">
                  {prompt.page_structure.map((section, idx) => (
                    <div key={idx} className="flex group">
                       <div className="flex flex-col items-center mr-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'} transition-colors`}>
                            {idx + 1}
                          </div>
                          {idx !== prompt.page_structure.length - 1 && (
                            <div className="w-px h-full bg-gray-100 my-1"></div>
                          )}
                       </div>
                       <div className="pb-8 pt-0.5">
                          <p className="text-gray-700 text-sm font-medium">{section}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* Copy & Tone */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <SectionTitle icon={<MessageSquare className="w-5 h-5" />} title="Copy & Persuasion" />
               
               <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Headline Style</h4>
                    <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      {prompt.copy_requirements.headline_style}
                    </p>
                  </div>
                  {prompt.copy_requirements.voice && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Voice</h4>
                      <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {prompt.copy_requirements.voice}
                      </p>
                    </div>
                  )}
               </div>

               <div className="space-y-6">
                 <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Persuasion Tactics</h4>
                    <div className="flex flex-wrap gap-2">
                      {prompt.copy_requirements.use_persuasion.map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded border border-purple-100">{item}</span>
                      ))}
                    </div>
                 </div>
                 {prompt.copy_requirements.avoid && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Avoid</h4>
                      <div className="flex flex-wrap gap-2">
                        {prompt.copy_requirements.avoid.map((item, i) => (
                          <span key={i} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded border border-red-100 strike-through decoration-red-300">No {item}</span>
                        ))}
                      </div>
                    </div>
                 )}
               </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Brand Style */}
            <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Palette className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-semibold tracking-tight">Aesthetics</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Theme</h4>
                  <p className="text-gray-200 font-medium">{prompt.brand_style.theme}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Tone</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{prompt.brand_style.tone}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {prompt.brand_style.design_keywords?.map((kw, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 text-white/90 text-[10px] rounded backdrop-blur-sm">
                        {kw}
                      </span>
                    )) || <span className="text-gray-500 text-xs">Modern, Clean</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Specs */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
               <SectionTitle icon={<Code2 className="w-4 h-4" />} title="Technical Stack" />
               <ul className="space-y-3">
                 <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Framework</span>
                    <span className="font-mono text-xs font-medium bg-gray-100 px-2 py-1 rounded">{prompt.technical_output.preferred_stack}</span>
                 </li>
                 <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Format</span>
                    <span className="text-gray-900 font-medium">{prompt.technical_output.format}</span>
                 </li>
                 <li className="text-sm pt-1">
                    <span className="block text-gray-500 mb-1">Accessibility</span>
                    <span className="text-gray-800 text-xs leading-tight">{prompt.technical_output.accessibility}</span>
                 </li>
               </ul>
            </div>

            {/* CTA Strategy */}
            <div className="bg-blue-600 rounded-3xl p-6 shadow-lg shadow-blue-200 text-white">
               <div className="flex items-center gap-2 mb-4">
                 <Zap className="w-4 h-4 text-blue-200" />
                 <h3 className="font-semibold">Call to Action</h3>
               </div>
               <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 mb-3">
                 <span className="block text-[10px] uppercase tracking-wider text-blue-200 mb-1">Primary</span>
                 <span className="font-bold text-lg">{prompt.cta_strategy.primary_cta}</span>
               </div>
               <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                 <span className="block text-[10px] uppercase tracking-wider text-blue-200 mb-1">Secondary</span>
                 <span className="font-medium text-sm">{prompt.cta_strategy.secondary_cta}</span>
               </div>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
               <SectionTitle icon={<Search className="w-4 h-4" />} title="SEO Targets" />
               <div className="flex flex-wrap gap-2 mb-4">
                  {prompt.seo_requirements.primary_keywords.slice(0, 5).map((kw, i) => (
                    <span key={i} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      {kw}
                    </span>
                  ))}
               </div>
               <div className="text-xs text-gray-400 border-t border-gray-100 pt-3">
                 Includes Schema: {prompt.seo_requirements.on_page.filter(x => x.toLowerCase().includes('schema')).join(', ') || 'Product, FAQ'}
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptDetail;