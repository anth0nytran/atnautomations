import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Loader2, Sparkles, ChevronDown } from 'lucide-react';

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  layoutType?: 'luxury-soft' | 'swiss-grid' | 'friendly-agent';
  serviceName?: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ isOpen, onClose, layoutType = 'luxury-soft', serviceName }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: serviceName || 'General Inquiry',
    budget: '',
    details: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setFormData(prev => ({ ...prev, serviceInterest: serviceName || 'General Inquiry' }));
    }
  }, [isOpen, serviceName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getStyles = () => {
    switch (layoutType) {
      case 'luxury-soft':
        return {
          overlay: "bg-[#292524]/20 backdrop-blur-sm",
          container: "bg-[#FDFCF8] border border-[#E7E5E4] rounded-[2rem] shadow-2xl font-serif max-w-lg",
          header: "text-[#292524] font-serif italic text-3xl mb-2",
          subhead: "text-[#78716C] font-sans text-sm font-light mb-6",
          input: "w-full bg-transparent border-b border-[#D6D3D1] py-3 text-[#44403C] placeholder-[#A8A29E] focus:border-[#292524] focus:outline-none transition-colors font-sans text-sm appearance-none",
          select: "w-full bg-transparent border-b border-[#D6D3D1] py-3 text-[#44403C] focus:border-[#292524] focus:outline-none transition-colors font-sans text-sm appearance-none cursor-pointer",
          label: "block text-xs uppercase tracking-widest text-[#A8A29E] mb-1 mt-5 font-sans font-bold",
          button: "w-full mt-8 bg-[#292524] text-[#F9F8F6] py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#44403C] transition-colors flex items-center justify-center gap-2",
          close: "text-[#78716C] hover:text-[#292524] transition-colors p-2",
          successIcon: "text-[#292524]"
        };
      case 'swiss-grid':
        return {
          overlay: "bg-white/90 backdrop-blur-none",
          container: "bg-white border-2 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-xl font-sans",
          header: "text-black font-black uppercase text-4xl tracking-tighter mb-2 leading-[0.9]",
          subhead: "text-black font-medium text-lg mb-6 border-l-4 border-emerald-500 pl-4",
          input: "w-full bg-[#F0F0F0] border-2 border-black p-4 text-black font-bold placeholder-gray-400 focus:bg-emerald-100 focus:outline-none transition-colors text-lg rounded-none",
          select: "w-full bg-[#F0F0F0] border-2 border-black p-4 text-black font-bold focus:bg-emerald-100 focus:outline-none transition-colors text-lg rounded-none appearance-none cursor-pointer",
          label: "block text-sm font-black uppercase text-black mb-2 mt-5",
          button: "w-full mt-8 bg-emerald-500 border-2 border-black text-black py-5 text-xl font-black uppercase tracking-tight hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2",
          close: "border-2 border-black bg-white hover:bg-black hover:text-white transition-colors p-2",
          successIcon: "text-emerald-500"
        };
      case 'friendly-agent':
        return {
          overlay: "bg-indigo-50/80 backdrop-blur-md",
          container: "bg-white border border-indigo-100 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] rounded-[2rem] max-w-lg font-sans",
          header: "text-slate-900 font-bold text-3xl mb-2 tracking-tight",
          subhead: "text-slate-500 text-base mb-6",
          input: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all text-sm",
          select: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all text-sm appearance-none cursor-pointer",
          label: "block text-xs font-semibold uppercase tracking-wider text-indigo-900/60 mb-2 mt-5",
          button: "w-full mt-8 bg-indigo-600 text-white py-4 rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all flex items-center justify-center gap-2",
          close: "bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all p-2",
          successIcon: "text-indigo-600"
        };
      default:
        return {};
    }
  };

  const styles = getStyles() as any;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in-up ${styles.overlay}`}>
      <div className={`w-full relative max-h-[95vh] overflow-y-auto ${styles.container}`}>
        
        {layoutType === 'friendly-agent' && (
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
             <Sparkles className="text-indigo-500 w-24 h-24" />
          </div>
        )}

        <div className="p-8 md:p-12 relative z-10">
          <button onClick={onClose} className={`absolute top-6 right-6 ${styles.close}`}>
             <X size={24} strokeWidth={layoutType === 'swiss-grid' ? 3 : 2} />
          </button>

          {step === 'form' ? (
            <>
              <h2 className={styles.header}>
                {layoutType === 'swiss-grid' ? "LET'S BUILD." : (serviceName ? `Inquire about ${serviceName}` : "Let's Talk Strategy")}
              </h2>
              <p className={styles.subhead}>
                {layoutType === 'luxury-soft' && "Tailored solutions for your business. Share your vision below."}
                {layoutType === 'swiss-grid' && "Stop losing leads. Start scaling revenue. Fill this out."}
                {layoutType === 'friendly-agent' && "Tell us what you want to automate. We'll handle the rest."}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={styles.label}>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      className={styles.input} 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className={styles.label}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      className={styles.input} 
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={styles.label}>Service Interest</label>
                    <div className="relative">
                      <select 
                        name="serviceInterest"
                        className={styles.select}
                        value={formData.serviceInterest}
                        onChange={handleChange}
                      >
                        <option value="AI Receptionist">AI Receptionist</option>
                        <option value="Custom Websites + Lead Gen">Custom Websites + Lead Gen</option>
                        <option value="Custom AI Agents & Workflows">Custom AI Agents & Workflows</option>
                        <option value="General Inquiry">General Inquiry / Other</option>
                      </select>
                      <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 pointer-events-none opacity-50" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className={styles.label}>Budget Range</label>
                    <div className="relative">
                      <select 
                        name="budget"
                        className={styles.select}
                        value={formData.budget}
                        onChange={handleChange}
                      >
                         <option value="" disabled>Select...</option>
                         <option value="Under $1k">Under $1k</option>
                         <option value="$1k - $5k">$1k - $5k</option>
                         <option value="$5k - $15k">$5k - $15k</option>
                         <option value="$15k+">$15k+</option>
                      </select>
                      <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 pointer-events-none opacity-50" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={styles.label}>
                     Tell us about your specific needs
                  </label>
                  <textarea 
                    name="details"
                    rows={3} 
                    className={styles.input} 
                    placeholder="E.g., I need a website that automatically books appointments and syncs with my CRM..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className={styles.button} disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      {layoutType === 'luxury-soft' && "Request Strategy Call"}
                      {layoutType === 'swiss-grid' && "GET AUDIT"}
                      {layoutType === 'friendly-agent' && "Start Hiring Agents"}
                      {layoutType !== 'luxury-soft' && <ArrowRight size={16} />}
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
               <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border-2 ${layoutType === 'swiss-grid' ? 'border-black bg-emerald-500' : (layoutType === 'friendly-agent' ? 'border-indigo-100 bg-indigo-50' : 'bg-[#F5F5F4]')}`}>
                  <Check className={`w-8 h-8 ${styles.successIcon}`} strokeWidth={3} />
               </div>
               <h3 className={styles.header}>
                 {layoutType === 'swiss-grid' ? "RECEIVED." : "Received"}
               </h3>
               <p className={styles.subhead}>
                 We'll review your requirements and be in touch shortly to schedule your strategy call.
               </p>
               <button onClick={onClose} className="text-sm underline opacity-50 hover:opacity-100">
                 Close
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;