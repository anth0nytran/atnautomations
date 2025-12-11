import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Phone, Calendar, Mic, ShieldCheck, Layout, Zap, BarChart2, Layers, FileText, AlertTriangle, Cpu, GitCommit, Lock, Check, ChevronDown, PhoneOff, Clock, UserX, EyeOff, Activity, Anchor, Globe, MousePointer, Terminal, Server, Bot, Sparkles, Mail, Search, MessageSquare, Database, ArrowUpRight, X, Calculator, CheckSquare, ClipboardCheck } from 'lucide-react';
import { LandingPagePrompt } from '../types';
import { generateContent, GeneratedContent } from '../utils/contentGenerator';
import ServiceForm from '../components/ServiceForm';

interface LandingPageProps {
  prompt: LandingPagePrompt;
  onBack: () => void;
}

// Layout Props now include onOpenPortfolio
interface LayoutProps {
  content: GeneratedContent;
  onBack: () => void;
  onOpenForm: () => void;
  onOpenPortfolio?: () => void;
}

const IconMap: Record<string, React.ElementType> = {
  "phone-off": PhoneOff, clock: Clock, "user-x": UserX, mic: Mic, "calendar-check": Calendar, "shield-check": ShieldCheck,
  "eye-off": EyeOff, activity: Activity, anchor: Anchor, layout: Layout, zap: Zap, "bar-chart-2": BarChart2,
  layers: Layers, "file-text": FileText, "alert-triangle": AlertTriangle, cpu: Cpu, "git-commit": GitCommit, lock: Lock
};

// ==========================================
// PORTFOLIO OVERLAY (NEW)
// ==========================================
const PortfolioOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projects = [
    {
      name: "Tomi Jewelry",
      type: "E-Commerce & Branding",
      desc: "Minimalist luxury storefront with automated inventory sync.",
      color: "bg-stone-100",
      textColor: "text-stone-800",
      url: "https://tomijewelry.com"
    },
    {
      name: "Diamond Streets Realty",
      type: "Lead Gen & IDX",
      desc: "High-conversion landing pages for top-tier listings.",
      color: "bg-blue-50",
      textColor: "text-blue-900",
      url: "https://diamondstreetrealty.com"
    },
    {
      name: "BeCreativesCo",
      type: "Agency Portfolio",
      desc: "Dynamic showcase with integrated booking automation.",
      color: "bg-purple-50",
      textColor: "text-purple-900",
      url: "https://becreativesco.com"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-6xl h-[85vh] bg-white border-2 border-black flex flex-col shadow-[16px_16px_0px_0px_rgba(50,50,50,1)]">
        
        {/* Header */}
        <div className="h-16 border-b-2 border-black flex items-center justify-between px-6 bg-emerald-400">
           <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-black" />
              <span className="font-black uppercase tracking-tight text-lg">Live Work Showcase</span>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-black hover:text-white transition-colors border-2 border-black bg-white">
              <X size={20} />
           </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#f0f0f0] grid lg:grid-cols-3 gap-8">
           {projects.map((project, i) => (
             <div key={i} className="flex flex-col h-full">
                {/* Browser Frame */}
                <a 
                   href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-300 block"
                >
                   {/* Browser Bar */}
                   <div className="h-8 border-b-2 border-black flex items-center px-3 gap-2 bg-white">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full border border-black bg-white" />
                        <div className="w-2.5 h-2.5 rounded-full border border-black bg-white" />
                      </div>
                      <div className="flex-1 bg-[#f0f0f0] border border-black h-4 ml-2 rounded-sm text-[8px] flex items-center px-2 font-mono truncate">
                         {project.name.toLowerCase().replace(/\s/g, '')}.com
                      </div>
                   </div>
                   
                   {/* Content Mock */}
                   <div className={`flex-1 ${project.color} p-6 flex flex-col items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                      <h3 className={`text-3xl font-black uppercase text-center mb-2 z-10 ${project.textColor}`}>{project.name}</h3>
                      <p className={`text-xs font-bold uppercase tracking-widest z-10 ${project.textColor} opacity-60`}>{project.type}</p>
                      
                      {/* Fake Button */}
                      <div className="mt-8 px-6 py-2 border-2 border-black bg-white text-black text-xs font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-emerald-400 transition-colors z-10">
                         View Case Study
                      </div>
                   </div>
                </a>
                
                {/* Description */}
                <div className="mt-4 px-2">
                   <p className="font-bold text-sm">{project.desc}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t-2 border-black bg-white flex justify-between items-center">
            <span className="font-bold uppercase text-xs">Want results like this?</span>
            <button onClick={() => { onClose(); }} className="px-6 py-2 bg-black text-white font-bold uppercase text-sm hover:bg-emerald-500 hover:text-black transition-colors">
               Get My Free Audit
            </button>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// LEAD MAGNET COMPONENT (NEW)
// ==========================================

const LeadMagnetSection: React.FC<{ 
  magnet: GeneratedContent['leadMagnet']; 
  onOpenForm: () => void;
  styleVariant: 'luxury' | 'swiss' | 'friendly';
}> = ({ magnet, onOpenForm, styleVariant }) => {
  const [inputs, setInputs] = useState<number[]>(
    magnet.data.inputs?.map(i => i.defaultValue) || []
  );
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = parseFloat(value) || 0;
    setInputs(newInputs);
  };

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  // Result Calculation
  let resultDisplay = "";
  if (magnet.type === 'calculator') {
    const total = inputs.reduce((acc, curr) => acc * curr, 1) * 4; // Monthly calculation logic from generator (val * val * 4)
    resultDisplay = `$${total.toLocaleString()}`;
  } else if (magnet.type === 'roi') {
    const total = inputs.reduce((acc, curr) => acc + curr, 0) * 4; // Monthly hours
    resultDisplay = `${total} hrs`;
  } else if (magnet.type === 'checklist') {
    resultDisplay = `${Math.round((checkedItems.length / (magnet.data.items?.length || 1)) * 100)}%`;
  }

  // Styles
  const isSwiss = styleVariant === 'swiss';
  const isFriendly = styleVariant === 'friendly';
  const isLuxury = styleVariant === 'luxury';

  return (
    <section className={`py-20 px-6 ${isSwiss ? 'bg-white border-b-2 border-black' : (isFriendly ? 'bg-slate-50' : 'bg-[#FDFCF8]')}`}>
       <div className={`max-w-4xl mx-auto rounded-3xl overflow-hidden relative ${
         isSwiss ? 'border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white' : 
         isFriendly ? 'bg-white shadow-xl shadow-indigo-100 border border-indigo-100' : 
         'bg-white border border-stone-200 shadow-2xl shadow-stone-200/50'
       }`}>
          
          <div className={`p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center ${
            isSwiss ? 'bg-emerald-400' : isFriendly ? 'bg-gradient-to-br from-indigo-50 to-white' : 'bg-stone-50'
          }`}>
             <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                  isSwiss ? 'bg-black text-white' : isFriendly ? 'bg-indigo-100 text-indigo-700' : 'bg-stone-200 text-stone-600'
                }`}>
                   {magnet.type === 'calculator' && <Calculator size={14} />}
                   {magnet.type === 'checklist' && <CheckSquare size={14} />}
                   {magnet.type === 'roi' && <ClipboardCheck size={14} />}
                   <span>Free Tool</span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isSwiss ? 'uppercase tracking-tighter' : isLuxury ? 'font-serif' : ''}`}>
                  {magnet.title}
                </h2>
                <p className={`text-lg ${isSwiss ? 'font-bold' : 'text-gray-600'}`}>
                  {magnet.subtitle}
                </p>
             </div>
             
             {/* Result Display Area */}
             <div className={`flex flex-col items-center justify-center p-8 rounded-2xl text-center ${
               isSwiss ? 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 
               isFriendly ? 'bg-white shadow-lg shadow-indigo-100 border border-indigo-50' : 
               'bg-white shadow-inner border border-stone-100'
             }`}>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                   {magnet.type === 'checklist' ? 'Readiness Score' : magnet.data.resultLabel}
                </div>
                <div className={`text-5xl font-bold mb-2 ${
                  isSwiss ? 'text-black' : isFriendly ? 'text-indigo-600' : 'text-stone-800'
                }`}>
                   {resultDisplay}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                   {magnet.type === 'roi' ? 'Saved per month' : magnet.type === 'checklist' ? 'Optimized' : 'Revenue recovered'}
                </div>
             </div>
          </div>

          <div className="p-8 md:p-12 bg-white">
             {/* Inputs / Checklist */}
             <div className="mb-10">
                {(magnet.type === 'calculator' || magnet.type === 'roi') && (
                  <div className="grid sm:grid-cols-2 gap-6">
                     {magnet.data.inputs?.map((input, i) => (
                       <div key={i}>
                          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                            isSwiss ? 'text-black' : 'text-gray-500'
                          }`}>
                            {input.label}
                          </label>
                          <div className="relative">
                            {input.prefix && (
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{input.prefix}</span>
                            )}
                            <input 
                               type="number" 
                               value={inputs[i]}
                               onChange={(e) => handleInputChange(i, e.target.value)}
                               className={`w-full p-4 ${input.prefix ? 'pl-8' : ''} font-bold text-lg outline-none transition-all ${
                                 isSwiss ? 'bg-gray-100 border-2 border-black focus:bg-emerald-100' : 
                                 isFriendly ? 'bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500' :
                                 'bg-stone-50 border-b border-stone-200 focus:border-stone-500'
                               }`}
                            />
                          </div>
                       </div>
                     ))}
                  </div>
                )}

                {magnet.type === 'checklist' && (
                   <div className="space-y-3">
                      {magnet.data.items?.map((item, i) => (
                        <button 
                           key={i} 
                           onClick={() => toggleCheck(i)}
                           className={`w-full flex items-center gap-4 p-4 text-left transition-all ${
                             isSwiss ? 'border-2 border-black hover:bg-emerald-100' : 
                             isFriendly ? 'border border-slate-100 rounded-xl hover:bg-indigo-50 hover:border-indigo-200' :
                             'border-b border-stone-100 hover:bg-stone-50'
                           } ${checkedItems.includes(i) ? (isSwiss ? 'bg-emerald-400' : isFriendly ? 'bg-indigo-50 border-indigo-200' : 'bg-stone-50') : 'bg-white'}`}
                        >
                           <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                             checkedItems.includes(i) ? 
                               (isSwiss ? 'bg-black text-white' : isFriendly ? 'bg-indigo-600 text-white' : 'bg-stone-800 text-white') : 
                               (isSwiss ? 'border-2 border-black' : 'border border-gray-300')
                           }`}>
                              {checkedItems.includes(i) && <Check size={14} strokeWidth={3} />}
                           </div>
                           <span className={`font-medium ${checkedItems.includes(i) ? 'text-black' : 'text-gray-600'}`}>
                             {item}
                           </span>
                        </button>
                      ))}
                   </div>
                )}
             </div>

             {/* Footer CTA */}
             <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t ${
               isSwiss ? 'border-black' : 'border-gray-100'
             }`}>
                <p className={`font-medium ${isSwiss ? 'text-black text-lg' : 'text-gray-600'}`}>
                  {magnet.footer}
                </p>
                <button 
                   onClick={onOpenForm}
                   className={`px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 ${
                    isSwiss ? 'bg-black text-white hover:bg-emerald-500 hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' :
                    isFriendly ? 'bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 hover:-translate-y-1' :
                    'bg-stone-900 text-white rounded-full hover:bg-stone-700'
                   }`}
                >
                   Book 15-Min Demo <ArrowRight size={14} />
                </button>
             </div>
          </div>
       </div>
    </section>
  );
};


// ==========================================
// UI LIBRARY 1: ORGANIC GLASSMORPHISM (Luxury)
// ==========================================

const LuxuryButton: React.FC<{ children?: React.ReactNode; primary?: boolean; onClick?: () => void }> = ({ children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`
    relative px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-out border w-full sm:w-auto
    ${primary 
      ? 'bg-[#1C1917] text-[#F5F5F4] border-[#1C1917] hover:bg-transparent hover:text-[#1C1917]' 
      : 'bg-transparent border-[#1C1917]/20 text-[#1C1917] hover:border-[#1C1917]'}
  `}>
    {children}
  </button>
);

const LuxuryCard: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white border border-stone-100 p-8 md:p-12 transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/20 ${className}`}>
    {children}
  </div>
);

const LuxuryChatUI: React.FC = () => (
  <div className="relative mx-auto w-full max-w-sm z-10 animate-fade-in-up">
    {/* Decorative Elements */}
    
    <div className="bg-white border border-[#1C1917]/10 p-1 shadow-2xl shadow-stone-300/30">
      <div className="bg-[#FAFAF9] h-[400px] md:h-[500px] flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#1C1917]/5 flex items-center justify-between bg-white/50 backdrop-blur-sm">
           <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-serif tracking-widest text-[#78716C] uppercase">Concierge Active</span>
           </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 p-6 space-y-6 overflow-hidden">
           <div className="flex gap-4">
              <div className="w-8 h-8 bg-white border border-[#E7E5E4] flex items-center justify-center shrink-0 text-[#78716C]">
                 <Mic size={14} />
              </div>
              <div className="bg-white p-4 border border-[#E7E5E4] max-w-[85%] text-sm text-[#44403C] leading-relaxed font-serif italic">
                 "Good morning. I see you're looking for a consultation. Would you prefer this Thursday or Friday?"
              </div>
           </div>

           <div className="flex gap-4 flex-row-reverse">
              <div className="bg-[#1C1917] p-4 max-w-[85%] text-sm text-[#F5F5F4] leading-relaxed">
                 "Friday morning works best."
              </div>
           </div>

           <div className="flex gap-4">
               <div className="w-8 h-8 bg-white border border-[#E7E5E4] flex items-center justify-center shrink-0 text-[#78716C]">
                 <Mic size={14} />
              </div>
              <div className="bg-white p-4 border border-[#E7E5E4] max-w-[85%]">
                 <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#F5F5F4]">
                    <Calendar className="w-3 h-3 text-[#57534E]" />
                    <span className="text-[10px] font-bold text-[#57534E] uppercase tracking-wider">Booked</span>
                 </div>
                 <p className="text-sm text-[#44403C] leading-relaxed font-serif italic">"Perfect. Friday at 10:00 AM is confirmed. I've sent a calendar invite."</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// UI LIBRARY 2: NEO-BRUTALISM (Swiss)
// ==========================================

const SwissButton: React.FC<{ children?: React.ReactNode; primary?: boolean; onClick?: () => void }> = ({ children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`
    px-8 py-4 font-bold uppercase tracking-tight text-sm border-2 border-black transition-all duration-200
    ${primary 
      ? 'bg-emerald-500 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
      : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}
  `}>
    {children}
  </button>
);

const DealBar: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="w-full bg-black text-emerald-400 border-y-2 border-black py-6 text-center">
     <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        {items.map((item, i) => (
           <div key={i} className="flex items-center gap-4">
               <span className="text-xl font-black uppercase tracking-tight">{item}</span>
               {i !== items.length - 1 && <span className="hidden md:block w-2 h-2 bg-emerald-500 rotate-45" />}
           </div>
        ))}
     </div>
  </div>
);

const SwissBrowser: React.FC = () => (
  <div className="w-full bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <div className="h-10 border-b-2 border-black flex items-center px-4 gap-3 bg-[#F0F0F0]">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full border border-black bg-white" />
        <div className="w-3 h-3 rounded-full border border-black bg-white" />
      </div>
      <div className="flex-1 bg-white border border-black h-6 mx-4"></div>
    </div>
    <div className="p-8 bg-grid-pattern min-h-[300px] relative flex items-end justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="relative z-10 w-full flex items-end justify-between gap-4 h-[200px] px-8">
            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-500 border-2 border-black hover:bg-black transition-colors" style={{ height: `${h}%` }}></div>
            ))}
        </div>
        
        {/* Floating Tag */}
        <div className="absolute top-8 right-8 bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
            <span className="font-bold uppercase text-xs">ROI +400%</span>
        </div>
    </div>
  </div>
);


// ==========================================
// UI LIBRARY 3: FRIENDLY AGENT (Productivity SaaS)
// ==========================================
// Concept: Clean, dense, structured. Linear/Notion vibes but less empty space.

const AgentButton: React.FC<{ children?: React.ReactNode; primary?: boolean; onClick?: () => void }> = ({ children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`
    relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border
    ${primary 
      ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 shadow-sm' 
      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'}
  `}>
    <div className="flex items-center gap-2">
      {children}
    </div>
  </button>
);

const WorkflowCard: React.FC = () => (
  <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
     {/* Fake Browser Header */}
     <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
           <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
           <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="ml-4 px-3 py-1 bg-white rounded text-[10px] text-slate-400 font-medium border border-slate-200 flex items-center gap-2">
           <Lock size={8} /> atn-agent-dashboard.app
        </div>
     </div>
     
     <div className="p-6 grid gap-6">
        {/* Active Agents Row */}
        <div className="flex items-center justify-between">
           <div className="text-sm font-bold text-slate-900">Active Workflows</div>
           <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Systems Operational
           </div>
        </div>

        {/* Workflow Visual */}
        <div className="grid grid-cols-3 gap-4">
           {/* Step 1 */}
           <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 flex flex-col gap-3 relative">
              <div className="absolute top-1/2 -right-3 w-4 h-[2px] bg-slate-200 z-10 hidden md:block" />
              <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 shadow-sm">
                 <Mail size={16} />
              </div>
              <div>
                 <div className="text-xs font-bold text-slate-700">Trigger: New Email</div>
                 <div className="text-[10px] text-slate-500 mt-1">gmail/inbox</div>
              </div>
           </div>

           {/* Step 2 */}
           <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50/50 flex flex-col gap-3 relative ring-1 ring-indigo-100">
              <div className="absolute top-1/2 -right-3 w-4 h-[2px] bg-slate-200 z-10 hidden md:block" />
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-indigo-200">
                 <Sparkles size={16} />
              </div>
              <div>
                 <div className="text-xs font-bold text-indigo-900">AI Agent Processing</div>
                 <div className="text-[10px] text-indigo-600 mt-1">Analyzing intent...</div>
              </div>
           </div>

           {/* Step 3 */}
           <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 flex flex-col gap-3">
              <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 shadow-sm">
                 <Database size={16} />
              </div>
              <div>
                 <div className="text-xs font-bold text-slate-700">Action: Update CRM</div>
                 <div className="text-[10px] text-slate-500 mt-1">hubspot/contacts</div>
              </div>
           </div>
        </div>

        {/* Activity Feed */}
        <div className="border-t border-slate-100 pt-4 mt-2">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Live Log</div>
           <div className="space-y-2">
              {[
                { time: "Now", msg: "Drafted reply to 'Partnership Inquiry'", icon: Mail },
                { time: "2m ago", msg: "Found 3 verified emails for 'CEO'", icon: Search },
                { time: "5m ago", msg: "Updated deal stage to 'Negotiation'", icon: ArrowUpRight }
              ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-xs p-2 hover:bg-slate-50 rounded transition-colors">
                    <span className="text-slate-400 w-10 shrink-0 tabular-nums">{item.time}</span>
                    <item.icon size={12} className="text-indigo-500 shrink-0" />
                    <span className="text-slate-600 truncate">{item.msg}</span>
                 </div>
              ))}
           </div>
        </div>
     </div>
  </div>
);


// ==========================================
// LAYOUT IMPLEMENTATIONS
// ==========================================

// --- LAYOUT 1: LUXURY SOFT (Receptionist) ---
const LuxurySoftLayout: React.FC<LayoutProps> = ({ content, onBack, onOpenForm }) => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1C1917] font-sans selection:bg-[#1C1917] selection:text-[#FDFCF8]">
      {/* Navbar - Sharper borders */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-xl border-b border-[#1C1917]/5 h-20 flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
        <button onClick={onBack} className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#57534E] hover:text-[#1C1917] transition-colors group font-medium">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back
        </button>
        <span className="font-serif text-2xl tracking-tight text-[#1C1917] font-medium hidden sm:block">ATN.</span>
        <LuxuryButton primary onClick={onOpenForm}>Inquire</LuxuryButton>
      </nav>

      {/* Hero - More editorial */}
      <section className="pt-32 pb-12 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center border-b border-[#1C1917]/5">
        <div className="order-2 lg:order-1 space-y-8 lg:space-y-12 animate-fade-in-up">
           <div className="inline-flex items-center gap-3 border border-[#1C1917]/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#57534E]">{content.hero.badge}</span>
           </div>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1C1917] leading-[0.95] tracking-tight">
             {content.hero.headline.split('. ')[0]}.<br/>
             <span className="text-stone-400 italic">{content.hero.headline.split('. ')[1]}</span>
           </h1>
           
           <div className="flex flex-col gap-8 border-l border-[#1C1917]/10 pl-6 lg:pl-8">
               <p className="text-base lg:text-lg text-[#57534E] leading-relaxed max-w-md font-light">
                 {content.hero.subhead}
               </p>
               <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <LuxuryButton primary onClick={onOpenForm}>{content.hero.primaryCta}</LuxuryButton>
                  <button onClick={onOpenForm} className="text-xs font-bold uppercase tracking-[0.2em] text-[#1C1917] border-b border-[#1C1917] pb-1 hover:text-[#57534E] hover:border-[#57534E] transition-colors">
                     {content.hero.secondaryCta}
                  </button>
               </div>
           </div>
        </div>
        
        {/* Chat UI Container - sharp geometric float */}
        <div className="order-1 lg:order-2 flex justify-center relative lg:justify-end mt-12 lg:mt-0">
           <div className="relative z-10 w-full max-w-md">
               <LuxuryChatUI />
           </div>
           {/* Sharp geometric accent */}
           <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-24 h-24 lg:w-40 lg:h-40 border border-[#1C1917]/10 z-0" />
           <div className="absolute top-6 right-6 lg:top-10 lg:right-10 w-full h-full border border-[#1C1917]/5 z-0" />
        </div>
      </section>

      {/* Social Proof (Guarantee) - Clean strip */}
      <section className="py-12 border-b border-[#1C1917]/5 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-[10px] font-bold text-[#A8A29E] uppercase tracking-[0.2em] shrink-0 text-center md:text-left w-full md:w-auto">{content.socialProof.label}</p>
           <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-16 w-full md:w-auto">
             {content.socialProof.logos.map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 bg-stone-50 md:bg-transparent px-3 py-2 md:p-0 rounded-lg md:rounded-none">
                  <ShieldCheck className="w-4 h-4 text-[#A8A29E]" strokeWidth={1} />
                  <span className="text-xs md:text-sm font-serif italic text-[#1C1917]">{item}</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Problem Section - Editorial List Layout (Sharper) */}
      <section className="py-16 lg:py-32 px-6 max-w-[1400px] mx-auto">
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
             <div className="lg:col-span-4 lg:sticky lg:top-32 self-start h-fit">
                 <h2 className="text-3xl lg:text-5xl font-serif text-[#1C1917] leading-tight mb-6">{content.problem.headline}</h2>
                 <p className="text-[#57534E] font-light leading-relaxed mb-8">{content.problem.subhead}</p>
                 <div className="w-12 h-[1px] bg-[#1C1917]" />
             </div>
             
             <div className="lg:col-span-8 grid gap-0 border-t border-[#1C1917]/10">
                {content.problem.cards.map((card, i) => {
                   const Icon = IconMap[card.icon];
                   return (
                     <div key={i} className="group py-8 lg:py-12 border-b border-[#1C1917]/10 flex gap-4 lg:gap-8 items-start hover:bg-white lg:hover:px-8 lg:-mx-8 transition-all duration-500 cursor-default">
                        <span className="text-xs font-serif italic text-stone-300 mt-1">0{i+1}</span>
                        <div className="flex-1">
                           <div className="flex items-center gap-3 lg:gap-4 mb-3">
                               <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#1C1917]" strokeWidth={1} />
                               <h3 className="text-xl lg:text-2xl font-serif text-[#1C1917] italic">{card.title}</h3>
                           </div>
                           <p className="text-[#57534E] leading-relaxed font-light max-w-lg text-sm lg:text-base">{card.desc}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hidden lg:flex">
                            <ArrowRight className="w-4 h-4 text-[#1C1917]" />
                        </div>
                     </div>
                   )
                })}
             </div>
         </div>
      </section>

      {/* Solution Section - High Contrast Dark Mode */}
      <section className="bg-[#100F0E] text-[#F5F5F4] py-20 lg:py-32 px-6 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 border-b border-white/10 pb-12">
                <div className="max-w-2xl">
                    <span className="text-xs font-bold text-[#A8A29E] uppercase tracking-[0.2em] mb-4 block">The Solution</span>
                    <h2 className="text-4xl lg:text-7xl font-serif leading-[0.95]">{content.solution.headline}</h2>
                </div>
                <p className="text-[#A8A29E] max-w-xs font-light leading-relaxed mt-8 md:mt-0 text-left">
                    {content.solution.subhead}
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
               {content.solution.features.map((feature, i) => {
                  const Icon = IconMap[feature.icon];
                  return (
                    <div key={i} className="bg-[#100F0E] p-8 lg:p-12 hover:bg-[#1C1917] transition-colors duration-500 group">
                       <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-10 text-white/80 group-hover:border-white/60 group-hover:text-white transition-all">
                          <Icon size={20} strokeWidth={1} />
                       </div>
                       <h3 className="text-2xl font-serif italic mb-4 text-white">{feature.title}</h3>
                       <p className="text-[#78716C] leading-relaxed font-light text-sm">{feature.desc}</p>
                    </div>
                  )
               })}
            </div>
         </div>
      </section>

      {/* LEAD MAGNET SECTION */}
      {content.leadMagnet && (
         <LeadMagnetSection 
           magnet={content.leadMagnet} 
           onOpenForm={onOpenForm} 
           styleVariant="luxury"
         />
      )}

      {/* CTA - Minimalist & Bold */}
      <section className="py-24 lg:py-40 px-6 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-7xl font-serif text-[#1C1917] mb-12 leading-[0.95] tracking-tight">
               {content.cta.headline.split(' ').slice(0, 3).join(' ')}<br/>
               <span className="italic text-stone-400">{content.cta.headline.split(' ').slice(3).join(' ')}</span>
            </h2>
            <p className="text-lg lg:text-xl text-[#57534E] mb-12 font-light max-w-xl mx-auto">{content.cta.subhead}</p>
            <LuxuryButton primary onClick={onOpenForm}>{content.cta.button}</LuxuryButton>
         </div>
      </section>
    </div>
  );
};


// --- LAYOUT 2: SWISS GRID (Web Strategy) ---
const SwissGridLayout: React.FC<LayoutProps> = ({ content, onBack, onOpenForm, onOpenPortfolio }) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white border-b-2 border-black h-20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 border-2 border-transparent hover:border-black transition-all"><ArrowLeft className="w-6 h-6" /></button>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase truncate">ATN AUTOMATIONS</span>
        </div>
        <div className="hidden sm:block">
            <SwissButton onClick={onOpenForm}>{content.hero.primaryCta}</SwissButton>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 border-b-2 border-black">
         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 px-6 pb-20">
             <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-widest mb-10 w-fit transform -rotate-1">
                   {content.hero.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] uppercase break-words">
                   {content.hero.headline}
                </h1>
                <p className="text-xl md:text-2xl font-bold leading-tight max-w-xl mb-12 border-l-4 border-emerald-500 pl-6">
                   {content.hero.subhead}
                </p>
                <div className="flex flex-wrap gap-6">
                   <SwissButton primary onClick={onOpenForm}>{content.hero.primaryCta}</SwissButton>
                   <SwissButton onClick={onOpenPortfolio}>{content.hero.secondaryCta}</SwissButton>
                </div>
             </div>
             <div className="lg:col-span-5 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                <SwissBrowser />
             </div>
         </div>
      </header>

      {/* Deal Bar (Replaces Marquee) */}
      <DealBar items={content.socialProof.logos} />

      {/* Problem Grid */}
      <section className="grid md:grid-cols-3 border-b-2 border-black">
         <div className="md:col-span-1 p-12 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black bg-black text-white flex flex-col justify-between">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9]">{content.problem.headline}</h2>
            <p className="text-lg font-bold opacity-80 mt-8">{content.problem.subhead}</p>
         </div>
         <div className="md:col-span-2 grid sm:grid-cols-2 bg-grid-pattern">
            {content.problem.cards.map((card, i) => {
               const Icon = IconMap[card.icon];
               return (
                  <div key={i} className={`p-12 border-black ${i % 2 === 0 ? 'md:border-r-2' : ''} ${i < 2 ? 'border-b-2' : ''} bg-white hover:bg-emerald-500 transition-colors group cursor-crosshair border-b-2 md:border-b-0`}>
                     <Icon className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                     <h3 className="text-2xl font-black uppercase mb-4 leading-none">{card.title}</h3>
                     <p className="text-base font-bold text-gray-600 group-hover:text-black">{card.desc}</p>
                  </div>
               )
            })}
         </div>
      </section>

      {/* Solution List */}
      <section className="max-w-[1600px] mx-auto px-6 py-20 md:py-32">
         <div className="mb-20 border-b-4 border-black pb-6 inline-block">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{content.solution.headline}</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-12">
            {content.solution.features.map((feature, i) => {
               const Icon = IconMap[feature.icon];
               return (
                  <div key={i} className="flex flex-col h-full justify-between group">
                     <div>
                        <div className="w-20 h-20 bg-emerald-500 border-2 border-black flex items-center justify-center text-black mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                           <Icon size={40} strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-black uppercase mb-6 leading-none">{feature.title}</h3>
                        <p className="text-xl font-medium text-gray-800 leading-snug">{feature.desc}</p>
                     </div>
                     <div className="mt-12 h-2 w-full bg-gray-200 group-hover:bg-emerald-500 transition-colors" />
                  </div>
               )
            })}
         </div>
      </section>

      {/* LEAD MAGNET */}
      {content.leadMagnet && (
         <LeadMagnetSection 
           magnet={content.leadMagnet} 
           onOpenForm={onOpenForm} 
           styleVariant="swiss"
         />
      )}

      {/* CTA */}
      <section className="bg-emerald-500 text-black py-24 md:py-40 px-6 text-center border-t-2 border-black">
         <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 leading-[0.9] tracking-tighter">{content.cta.headline}</h2>
         <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">{content.cta.subhead}</p>
         <SwissButton onClick={onOpenForm}>{content.cta.button}</SwissButton>
      </section>
    </div>
  );
};


// --- LAYOUT 3: FRIENDLY AGENT (AI Agents) ---
const FriendlyAgentLayout: React.FC<LayoutProps> = ({ content, onBack, onOpenForm }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans">
      
      {/* Texture Background */}
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 h-16 flex items-center justify-between px-6 transition-all">
        <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-3.5 h-3.5" /> ATN.
        </button>
        <div className="flex gap-4">
             <AgentButton primary onClick={onOpenForm}>Get Agent</AgentButton>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Hero Section - Split Layout */}
        <header className="py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-bold uppercase tracking-wider mb-8 shadow-sm">
                    <Sparkles size={12} />
                    {content.hero.badge}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.05]">
                    {content.hero.headline}
                </h1>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-10">
                    {content.hero.subhead}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <AgentButton primary onClick={onOpenForm}>{content.hero.primaryCta}</AgentButton>
                    <AgentButton onClick={onOpenForm}>{content.hero.secondaryCta}</AgentButton>
                </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
               <WorkflowCard />
            </div>
        </header>

        {/* Social Proof (Trust/Benefits) - Integrated Strip */}
        <div className="border-y border-slate-200 py-10 mb-24 bg-slate-50/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">{content.socialProof.label}</span>
                <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full md:w-auto">
                {content.socialProof.logos.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Problems Section - Bento Grid */}
        <section className="mb-32">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.problem.headline}</h2>
                <p className="text-slate-500 max-w-xl">{content.problem.subhead}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {content.problem.cards.map((card, i) => {
                   const Icon = IconMap[card.icon];
                   return (
                       <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 group">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                              <Icon size={20} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                       </div>
                   )
                })}
            </div>
        </section>

        {/* Solution Section - Sidebar Layout */}
        <section className="mb-32 grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                    <span className="text-indigo-600 font-bold text-sm tracking-wide mb-2 block">WORKFLOWS</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">{content.solution.headline}</h2>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        {content.solution.subhead}
                    </p>
                    <div className="hidden lg:block">
                        <AgentButton onClick={onOpenForm}>View Capabilities</AgentButton>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-8 space-y-4">
                {content.solution.features.map((feature, i) => {
                    const Icon = IconMap[feature.icon];
                    return (
                        <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex gap-6 items-start">
                             <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                 <Icon size={24} />
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                 <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                             </div>
                        </div>
                    )
                })}
                <div className="lg:hidden mt-8">
                    <AgentButton onClick={onOpenForm}>View Capabilities</AgentButton>
                </div>
            </div>
        </section>

        {/* NEW CUSTOM AGENT SECTION */}
        <section className="mb-32">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
                
                {/* Dynamic Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-50/80 via-purple-50/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000" />
                
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        <Cpu size={12} />
                        Enterprise Solutions
                    </div>
                    
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                          Need a Custom <br/>
                          <span className="text-indigo-600">Intelligence Hub?</span>
                      </h2>
                      <p className="text-lg text-slate-500 leading-relaxed">
                          For complex operations, we engineer bespoke AI swarms that unify your legacy software, connect disparate APIs, and act as the "Central Nervous System" for your entire enterprise.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {[
                          { icon: Terminal, label: "Legacy Integrations" },
                          { icon: GitCommit, label: "Multi-Step Workflows" },
                          { icon: Database, label: "Unified Data Hub" },
                          { icon: ShieldCheck, label: "On-Prem Deployment" }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
                                  <item.icon size={14} />
                                </div>
                                {item.label}
                           </div>
                        ))}
                    </div>

                    <div className="pt-4">
                         <button 
                            onClick={onOpenForm}
                            className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            Discuss Custom Build
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Hub Visual */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                         {/* Orbit Rings */}
                         <div className="absolute inset-0 border border-slate-100 rounded-full animate-[spin_60s_linear_infinite]" />
                         <div className="absolute inset-12 border border-slate-100 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                         <div className="absolute inset-24 border border-slate-100 rounded-full" />
                         
                         {/* Center Core */}
                         <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-indigo-50 flex items-center justify-center z-20">
                             <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                                <Bot size={40} />
                             </div>
                             <div className="absolute -bottom-6 px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                                CORE SYSTEM
                             </div>
                         </div>

                         {/* Floating Satellites */}
                         {[
                           { icon: Database, color: "text-blue-500", label: "SQL" }, 
                           { icon: Globe, color: "text-emerald-500", label: "API" },
                           { icon: Mail, color: "text-orange-500", label: "SMTP" },
                           { icon: Server, color: "text-purple-500", label: "ERP" }
                         ].map((item, i) => (
                           <div key={i} 
                                className="absolute w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center z-10 hover:scale-110 transition-transform cursor-default"
                                style={{ 
                                  top: i === 0 ? '0' : i === 1 ? '50%' : i === 2 ? '100%' : '50%',
                                  left: i === 0 ? '50%' : i === 1 ? '100%' : i === 2 ? '50%' : '0%',
                                  transform: 'translate(-50%, -50%)'
                                }}
                           >
                               <item.icon size={20} className={item.color} />
                           </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>

        {/* LEAD MAGNET */}
        {content.leadMagnet && (
           <LeadMagnetSection 
             magnet={content.leadMagnet} 
             onOpenForm={onOpenForm} 
             styleVariant="friendly"
           />
        )}

        {/* CTA - Card Style */}
        <section className="mb-20">
            <div className="bg-[#1E1B4B] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-50%] left-[20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-50%] right-[20%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
                </div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{content.cta.headline}</h2>
                    <p className="text-indigo-200 text-lg mb-10">{content.cta.subhead}</p>
                    <button 
                        onClick={onOpenForm}
                        className="bg-white text-[#1E1B4B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
                    >
                        {content.cta.button}
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
        
        {/* Simple Footer */}
        <footer className="border-t border-slate-200 py-12 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ATN Automations. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

const LandingPage: React.FC<LandingPageProps> = ({ prompt, onBack }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const content = generateContent(prompt);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = content.seo.title;
  }, [content]);

  const renderLayout = () => {
    const layoutProps = {
      content,
      onBack,
      onOpenForm: () => setIsFormOpen(true),
      onOpenPortfolio: () => setIsPortfolioOpen(true)
    };

    switch (content.layoutType) {
      case 'luxury-soft':
        return <LuxurySoftLayout {...layoutProps} />;
      case 'swiss-grid':
        return <SwissGridLayout {...layoutProps} />;
      case 'friendly-agent':
      default:
        return <FriendlyAgentLayout {...layoutProps} />;
    }
  };

  return (
    <>
      {renderLayout()}
      <ServiceForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        layoutType={content.layoutType}
        serviceName={prompt.title}
      />
      <PortfolioOverlay 
        isOpen={isPortfolioOpen} 
        onClose={() => setIsPortfolioOpen(false)} 
      />
    </>
  );
};

export default LandingPage;