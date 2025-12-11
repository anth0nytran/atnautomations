import React, { useEffect, useState } from 'react';
import { PROMPTS } from '../data';
import { ArrowRight, Mic, Layout, ArrowUpRight, Play, Globe, Sparkles, Bot, ShoppingBag, Home, Calendar, MapPin, MousePointer, CreditCard, MessageSquare, ChevronRight, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import ServiceForm from '../components/ServiceForm';

interface DashboardProps {
  onSelectPrompt: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectPrompt }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // SEO Meta Injection
  useEffect(() => {
    document.title = "ATN Automations | Scale Revenue & Automate Operations";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "ATN Automations builds intelligent systems that help service businesses capture more leads, answer every call, and automate operations.");
  }, []);

  const ECOSYSTEM = [
    { 
      name: "T&J Nails", 
      type: "Voice Receptionist", 
      stat: "+40% Bookings", 
      url: "https://tjnailskaty.com",
      color: "bg-rose-50",
      icon: Calendar,
      renderVisual: () => (
        <div className="w-48 bg-white rounded-xl shadow-lg border border-rose-100 p-4 space-y-3 transform group-hover:scale-105 transition-transform duration-500">
           <div className="flex justify-between items-center mb-2">
              <div className="h-2 w-16 bg-rose-100 rounded-full" />
              <div className="h-4 w-4 bg-rose-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">1</div>
           </div>
           <div className="space-y-2">
              <div className="h-8 w-full bg-rose-50 rounded-lg border border-rose-100 flex items-center px-3 gap-2">
                 <div className="h-3 w-3 rounded-full bg-rose-200" />
                 <div className="h-1.5 w-12 bg-rose-200 rounded-full" />
              </div>
              <div className="h-8 w-full bg-rose-500 rounded-lg shadow-md flex items-center px-3 gap-2 justify-between">
                 <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/50" />
                    <div className="h-1.5 w-12 bg-white rounded-full" />
                 </div>
                 <div className="text-[8px] font-bold text-white uppercase">Booked</div>
              </div>
              <div className="h-8 w-full bg-rose-50 rounded-lg border border-rose-100 opacity-50" />
           </div>
        </div>
      )
    },
    { 
      name: "Tomi Jewelry", 
      type: "E-Commerce AI", 
      stat: "3.5x ROAS", 
      url: "https://tomijewelry.com",
      color: "bg-stone-50",
      icon: ShoppingBag,
      renderVisual: () => (
        <div className="w-40 bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
           <div className="aspect-[4/5] bg-stone-100 relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-shimmer" />
           </div>
           <div className="p-3">
              <div className="h-2 w-16 bg-stone-200 rounded-full mb-2" />
              <div className="flex justify-between items-center">
                 <div className="h-2 w-8 bg-stone-300 rounded-full" />
                 <div className="h-6 w-6 bg-stone-900 rounded-full flex items-center justify-center">
                    <CreditCard size={10} className="text-white" />
                 </div>
              </div>
           </div>
        </div>
      )
    },
    { 
      name: "BeCreatives", 
      type: "Interactive Portfolio", 
      stat: "High-Ticket Leads", 
      url: "https://becreativesco.com",
      color: "bg-indigo-50",
      icon: Layout,
      renderVisual: () => (
        <div className="w-48 grid grid-cols-2 gap-2 transform group-hover:rotate-2 transition-transform duration-500">
           <div className="h-24 bg-white rounded-lg shadow-sm border border-indigo-100" />
           <div className="h-24 bg-indigo-500 rounded-lg shadow-md flex items-center justify-center">
              <MousePointer className="text-white w-6 h-6" />
           </div>
           <div className="h-24 bg-indigo-100 rounded-lg shadow-sm" />
           <div className="h-24 bg-white rounded-lg shadow-sm border border-indigo-100" />
        </div>
      )
    },
    { 
      name: "Diamond Streets", 
      type: "Real Estate System", 
      stat: "$4.2M Pipeline", 
      url: "https://diamondstreetrealty.com",
      color: "bg-sky-50",
      icon: Home,
      renderVisual: () => (
        <div className="w-56 h-32 bg-sky-50 rounded-xl border border-sky-100 relative overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
           <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg border border-sky-100 flex items-center gap-2 animate-bounce-subtle">
                 <MapPin size={12} className="text-sky-500 fill-current" />
                 <span className="text-[10px] font-bold text-slate-800">$1,250,000</span>
              </div>
              <div className="w-0.5 h-6 bg-sky-500 mx-auto" />
              <div className="w-2 h-2 bg-sky-500 rounded-full mx-auto -mt-1 ring-4 ring-sky-500/20" />
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-slate-900 selection:bg-slate-300">
      
      {/* Contact Form Overlay */}
      <ServiceForm 
         isOpen={isFormOpen} 
         onClose={() => setIsFormOpen(false)} 
         layoutType="luxury-soft"
         serviceName=""
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center mix-blend-multiply bg-white/50 backdrop-blur-sm border-b border-slate-200/50">
         <span className="font-bold tracking-tighter text-xl">ATN.</span>
         <div className="flex items-center gap-6">
            <a href="mailto:contact@atnautomations.com" className="text-xs font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 hidden sm:block">
               Contact
            </a>
            <button 
               onClick={() => setIsFormOpen(true)}
               className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
               Book Strategy Call <ChevronRight size={14} />
            </button>
         </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <header className="mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white text-xs font-bold uppercase tracking-wider mb-6 text-slate-500">
             <Sparkles size={12} /> Bespoke Automation Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-8 text-slate-900">
            Scale Revenue.<br />
            <span className="text-slate-400">Automate Operations.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-6xl">
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              <span className="font-bold text-slate-900">ATN Automations</span> designs systems tailored to your specific needs. From AI receptionists to complex custom workflows, we build the engine your business runs on.
            </p>
            <div className="hidden md:block h-px flex-1 bg-slate-300 mx-8 mb-3" />
            <div className="flex flex-col items-end">
               <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Service_Menu_v2.1</span>
               <button onClick={() => setIsFormOpen(true)} className="text-sm font-bold border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                  Get a Custom Quote →
               </button>
            </div>
          </div>
        </header>

        {/* DECISION-FAST SELECTOR GRID */}
        <div className="grid lg:grid-cols-3 gap-6 h-auto lg:h-[650px] mb-32">
          
          {/* 1. AI RECEPTIONIST (Luxury Theme) */}
          <button 
            onClick={() => onSelectPrompt('prompt-1')}
            className="group relative flex flex-col p-8 bg-[#FDFCF8] rounded-[2rem] border border-[#E7E5E4] text-left transition-all duration-500 hover:shadow-2xl hover:shadow-[#D6D3D1]/50 hover:-translate-y-2 overflow-hidden"
          >
             {/* Background Texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20" />
             
             {/* Wrapper for consistent flex height */}
             <div className="relative z-10 h-full flex flex-col">
                {/* Pain Trigger (Top) - Enclosed box to prevent floating feel */}
                <div className="mb-6 p-6 bg-[#F5F5F4] rounded-xl border border-[#E7E5E4] w-full">
                    <div className="flex items-center gap-2 text-[#78716C] mb-3">
                        <AlertCircle size={14} />
                        <span className="text-xs font-bold uppercase tracking-widest">The Problem</span>
                    </div>
                    <h3 className="text-xl font-serif italic text-[#292524] leading-snug">
                    "I can't answer the phone 24/7."
                    </h3>
                </div>

                {/* Solution Body */}
                <div className="flex-1 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-[#E7E5E4] flex items-center justify-center mb-6 text-[#57534E] group-hover:scale-110 transition-transform duration-500">
                        <Mic strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                    
                    <h2 className="text-3xl font-serif text-[#292524] mb-3">The "Always-On" Receptionist</h2>
                    <p className="text-[#78716C] text-sm leading-relaxed mb-6 font-light">
                    A voice agent that sounds human, answers every call, and books appointments on your calendar. Even at 2 AM.
                    </p>

                    {/* Micro Proof */}
                    <div className="bg-[#E7E5E4]/30 rounded-lg p-3 mb-8 flex items-center gap-3">
                    <TrendingUp size={16} className="text-[#57534E]" />
                    <span className="text-xs font-bold text-[#57534E] uppercase tracking-wider">Never miss a client again</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between border-t border-[#E7E5E4] pt-4 mt-auto">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#292524]">Hear a Demo</span>
                    <div className="w-8 h-8 rounded-full bg-[#292524] text-[#FDFCF8] flex items-center justify-center group-hover:bg-[#57534E] transition-colors">
                        <ArrowRight size={14} />
                    </div>
                    </div>
                </div>
             </div>
          </button>


          {/* 2. WEBSITES + LEAD GEN (Swiss Theme) */}
          <button 
            onClick={() => onSelectPrompt('prompt-2')}
            className="group relative flex flex-col p-0 bg-white border-2 border-black text-left transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 overflow-hidden"
          >
             <div className="p-10 flex flex-col h-full relative z-10">
                {/* Pain Trigger */}
                <div className="mb-10 bg-black text-white p-4 -mx-10 -mt-10 border-b-2 border-black">
                   <div className="flex items-center gap-2 mb-1">
                      <AlertCircle size={14} className="text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-tight text-emerald-400">The Problem</span>
                   </div>
                   <h3 className="text-xl font-bold leading-tight">
                     "My website visitors aren't buying."
                   </h3>
                </div>

                {/* Solution Body */}
                <div className="flex-1 flex flex-col justify-end">
                   <div className="flex justify-between items-start mb-6">
                      <Globe className="w-10 h-10 text-black group-hover:animate-spin-slow" strokeWidth={1.5} />
                   </div>
                   
                   <h2 className="text-4xl font-black text-black mb-4 uppercase tracking-tighter leading-[0.9]">
                     The 24/7 Salesman
                   </h2>
                   <p className="text-black font-medium text-sm leading-snug border-l-4 border-emerald-400 pl-4 mb-6">
                     We turn your website into a sales engine. It captures leads and texts them instantly so you close more deals.
                   </p>

                   {/* Micro Proof */}
                   <div className="bg-emerald-100 border-2 border-black p-2 mb-8 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-xs font-black uppercase text-black">Instant Speed-to-Lead</span>
                   </div>

                   {/* CTA */}
                   <div className="w-full bg-black text-white py-4 px-6 font-bold uppercase text-sm flex justify-between items-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <span>See The Engine</span>
                      <ArrowRight className="w-5 h-5" />
                   </div>
                </div>
             </div>
             
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          </button>


          {/* 3. AI AGENTS (Friendly Theme) */}
          <button 
            onClick={() => onSelectPrompt('prompt-3')}
            className="group relative flex flex-col p-10 bg-white rounded-[2rem] border border-indigo-100 text-left transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.15)] hover:-translate-y-2 overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-100/50 via-purple-50/30 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="relative z-10 h-full flex flex-col">
                {/* Pain Trigger */}
                <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-white/80 transition-colors">
                   <div className="flex items-center gap-2 mb-1 text-indigo-500">
                      <Clock size={14} />
                      <span className="text-xs font-bold uppercase tracking-wide">The Problem</span>
                   </div>
                   <h3 className="text-lg font-semibold text-slate-700 leading-tight">
                     "I'm buried in busy work."
                   </h3>
                </div>

                {/* Solution Body */}
                <div className="flex-1 flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                       <Bot className="w-7 h-7 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Your Digital Staff</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      Hire intelligent AI workers to handle your email, data entry, and research. They work instantly and cost pennies.
                    </p>

                    {/* Micro Proof */}
                    <div className="flex items-center gap-3 mb-8">
                       <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 border border-white" />
                          <div className="w-6 h-6 rounded-full bg-purple-100 border border-white" />
                       </div>
                       <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">Save 20+ Hours / Week</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm bg-indigo-50 w-fit px-4 py-2 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <span>Meet Your Agents</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
             </div>
          </button>

        </div>

        {/* NEW SECTION: Proven in the Wild (Simple Grid) */}
        <section className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 pb-6 border-b border-slate-300">
             <div>
               <h2 className="text-4xl font-bold tracking-tighter text-slate-900">Proven in the Wild.</h2>
             </div>
             <p className="text-slate-500 font-medium text-sm">
               Real systems. Real revenue.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {ECOSYSTEM.map((project, i) => (
                <a 
                   key={i}
                   href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative h-[360px] bg-white rounded-3xl p-8 border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
                >
                   {/* Background Gradient */}
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${project.color}`} />
                   
                   {/* Main Content (Moves Up on Hover) */}
                   <div className="relative z-10 flex flex-col h-full justify-between transition-transform duration-500 group-hover:-translate-y-2">
                      <div>
                         <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform">
                            <project.icon size={20} />
                         </div>
                         <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1">{project.name}</h3>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{project.type}</p>
                      </div>

                      {/* Stat */}
                      <div className="text-4xl font-medium tracking-tighter text-slate-900 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-900 group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                         {project.stat}
                      </div>
                   </div>

                   {/* Slide-Up Reveal Layer */}
                   <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 flex flex-col">
                      {/* Visual Area */}
                      <div className={`flex-1 relative overflow-hidden flex items-center justify-center ${project.color}`}>
                         {project.renderVisual()}
                      </div>
                      
                      {/* CTA Area */}
                      <div className="p-4 bg-white border-t border-slate-100">
                         <div className="w-full bg-slate-900 text-white py-3 rounded-xl text-center font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                            View Live System <ArrowUpRight size={14} />
                         </div>
                      </div>
                   </div>
                </a>
             ))}
          </div>

        </section>

        {/* Footer / Trust */}
        <footer className="mt-32 border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-end opacity-50 hover:opacity-100 transition-opacity duration-500">
           <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">ATN Automations Inc.</p>
              <div className="flex gap-2">
                 <div className="w-2 h-2 bg-slate-300 rounded-full" />
                 <div className="w-2 h-2 bg-slate-300 rounded-full" />
                 <div className="w-2 h-2 bg-slate-300 rounded-full" />
              </div>
           </div>
           <div className="text-right mt-8 md:mt-0">
              <button onClick={() => setIsFormOpen(true)} className="text-sm font-bold text-slate-900 mb-2 hover:underline">Ready to build? Book a call.</button>
              <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} All Systems Operational.</p>
           </div>
        </footer>

      </main>
    </div>
  );
};

export default Dashboard;