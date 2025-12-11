import { LandingPagePrompt } from '../types';

export interface GeneratedContent {
  layoutType: 'luxury-soft' | 'swiss-grid' | 'friendly-agent';
  hero: {
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    badge: string;
  };
  socialProof: {
    label: string;
    logos: string[]; // Now used for Guarantees/Offers
  };
  problem: {
    headline: string;
    subhead: string;
    cards: Array<{ title: string; desc: string; icon: string }>;
  };
  solution: {
    headline: string;
    subhead: string;
    features: Array<{ title: string; desc: string; icon: string }>;
  };
  leadMagnet: {
    title: string;
    subtitle: string;
    type: 'calculator' | 'checklist' | 'roi';
    data: {
      inputs?: Array<{ label: string; defaultValue: number; prefix?: string }>; // Calculator/ROI
      items?: string[]; // Checklist
      resultLabel?: string;
    };
    footer: string;
  };
  howItWorks: {
    headline: string;
    steps: Array<{ step: string; title: string; desc: string }>;
  };
  cta: {
    headline: string;
    subhead: string;
    button: string;
  };
  seo: {
    title: string;
    description: string;
  }
}

export const generateContent = (prompt: LandingPagePrompt): GeneratedContent => {
  
  // PROMPT 1: AI RECEPTIONIST (Luxury Boutique - Warm/Serif)
  if (prompt.id === 'prompt-1') {
    return {
      layoutType: 'luxury-soft',
      hero: {
        badge: "Revenue Protection System",
        headline: "Stop Losing Money to Missed Calls.",
        subhead: "62% of calls to local businesses go unanswered. Our AI Receptionist answers 24/7, books appointments directly into your calendar, and sounds so human your clients won't know the difference.",
        primaryCta: "Start Converting Callers",
        secondaryCta: "Hear It In Action",
      },
      socialProof: {
        label: "THE 'ZERO-RISK' PROMISE",
        logos: ["Pays For Itself With 1 Saved Booking", "Try It Risk-Free For 30 Days", "No Contracts. Cancel Anytime."]
      },
      problem: {
        headline: "Your Front Desk Has a Capacity Limit. We Don't.",
        subhead: "In the service business, a missed call is a missed paycheck. Callers don't leave voicemails—they call your competitor.",
        cards: [
          { icon: "phone-off", title: "The Silent Revenue Killer", desc: "Every time your line rings out or hits voicemail, you lose a potential high-value client to the next business on Google." },
          { icon: "clock", title: "Leads Don't Wait for 9-5", desc: "40% of booking inquiries happen evenings and weekends. If you aren't answering instantly, you're invisible." },
          { icon: "user-x", title: "The 'On Hold' Problem", desc: "Forcing new clients to wait on hold destroys trust before they even speak to you. Give them VIP treatment, instantly." }
        ]
      },
      solution: {
        headline: "The Perfect Employee",
        subhead: "Never sick, never late, always polite. Answering every single call with your best sales script.",
        features: [
          { icon: "mic", title: "Indistinguishable from Human", desc: "Engineered with natural pauses, breath, and empathy. It handles complex questions without sounding robotic." },
          { icon: "calendar-check", title: "Books Directly to Calendar", desc: "It navigates your schedule (Jane, Mindbody, Clio, G-Cal) to fill open slots with qualified appointments." },
          { icon: "shield-check", title: "Filters the Noise", desc: "Politely screens out spam and robocalls so your staff only deals with paying customers." }
        ]
      },
      leadMagnet: {
        title: "Missed Call Revenue Calculator",
        subtitle: "Estimate how much cash you're leaving on the table every month.",
        type: 'calculator',
        data: {
          inputs: [
            { label: "Avg. Customer Value", defaultValue: 150, prefix: "$" },
            { label: "Missed Calls / Week", defaultValue: 5 }
          ],
          resultLabel: "Potential Monthly Loss"
        },
        footer: "Want us to map this for your business? Book a 15-min demo."
      },
      howItWorks: {
        headline: "Live in 24 Hours",
        steps: [
          { step: "01", title: "Onboarding", desc: "We upload your pricing, FAQs, and scheduling rules." },
          { step: "02", title: "Forwarding", desc: "You set up simple call forwarding. Zero hardware required." },
          { step: "03", title: "Profit", desc: "Watch your calendar fill up automatically." }
        ]
      },
      cta: {
        headline: "Your Phone Should Be Making Money.",
        subhead: "Join the businesses offering true 24/7 service. No contracts, straightforward ROI.",
        button: "Get Your AI Receptionist"
      },
      seo: {
        title: "AI Receptionist | 24/7 Automated Answering Service for Local Business",
        description: "Stop losing missed calls. Our AI Receptionist answers 24/7, qualifies leads, and books appointments directly to your calendar. Indistinguishable from human."
      }
    };
  }

  // PROMPT 2: WEB STRATEGY (Swiss Grid - Agency/Architect Vibe)
  if (prompt.id === 'prompt-2') {
    return {
      layoutType: 'swiss-grid',
      hero: {
        badge: "Revenue-First Design",
        headline: "We Build Sales Engines, Not Just Websites.",
        subhead: "Most websites are pretty brochures that cost you money. We build 24/7 sales systems that capture leads, automate follow-up, and actually print revenue.",
        primaryCta: "Claim Free Audit",
        secondaryCta: "See Our Results",
      },
      socialProof: {
        label: "EXCLUSIVE FOUNDER OFFER",
        logos: ["Free $1,500 Revenue Audit", "Guaranteed Lead Increase", "We Don't Win Unless You Win"]
      },
      problem: {
        headline: "Is Your Website a Leaky Bucket?",
        subhead: "Traffic means nothing if it doesn't convert. Stop letting potential customers leave without buying.",
        cards: [
          { icon: "eye-off", title: "The 'Contact Us' Black Hole", desc: "Forms that go nowhere. No auto-reply, no text alert, no speed-to-lead. You're burning cash on ads for nothing." },
          { icon: "activity", title: "Flying Blind", desc: "You have no idea where your leads come from or which ones close. You can't scale what you can't measure." },
          { icon: "anchor", title: "Slow & Security Risks", desc: "Wordpress plugins breaking, slow load times losing mobile visitors, and constant maintenance headaches." }
        ]
      },
      solution: {
        headline: "The Growth System",
        subhead: "A unified machine for Traffic → Capture → Nurture → Sale.",
        features: [
          { icon: "layout", title: "High-Conversion Architecture", desc: "Minimalist design psychology that guides visitors inevitably to the 'Book' or 'Buy' button." },
          { icon: "zap", title: "Speed-to-Lead Automation", desc: "Leads are texted to your phone instantly. An automated SMS reaches out to them in under 2 minutes." },
          { icon: "bar-chart-2", title: "ROI Dashboards", desc: "Simple weekly reports showing exactly how much money your website generated. No vanity metrics." }
        ]
      },
      leadMagnet: {
        title: "5-Minute Conversion Audit",
        subtitle: "Check your current site against our high-performance standard.",
        type: 'checklist',
        data: {
          items: [
            "Site loads in under 3 seconds on mobile",
            "Clear CTA visible without scrolling",
            "Automated text response to form fills",
            "Social proof / Reviews on home page",
            "Analytics tracking properly installed"
          ]
        },
        footer: "Want us to map this for your business? Book a 15-min demo."
      },
      howItWorks: {
        headline: "The Upgrade",
        steps: [
          { step: "01", title: "Audit", desc: "We identify where you're losing money." },
          { step: "02", title: "Build", desc: "We deploy the high-conversion framework." },
          { step: "03", title: "Scale", desc: "We turn on the automation pipes." }
        ]
      },
      cta: {
        headline: "Turn Your Website Into an Asset.",
        subhead: "If your website isn't bringing you new business every week, it's broken. Let us fix it.",
        button: "Audit My Website"
      },
      seo: {
        title: "High-Conversion Web Design & Lead Automation Systems",
        description: "Transform your website into a 24/7 sales machine. We build high-performance sites integrated with automated lead capture and follow-up systems."
      }
    };
  }

  // PROMPT 3: AI AGENTS (Friendly Productivity - Magical/Clean)
  return {
    layoutType: 'friendly-agent',
    hero: {
      badge: "Business Autopilot",
      headline: "Run Your Business. Don't Let It Run You.",
      subhead: "Delegate repetitive admin, data entry, and research to intelligent AI workers. They work 24/7, cost $0/hour, and never complain.",
      primaryCta: "Hire Your AI Staff",
      secondaryCta: "See The Magic",
    },
    socialProof: {
      label: "THE EFFICIENCY GUARANTEE",
      logos: ["Save 20+ Hours/Month Guaranteed", "Full Setup Included ($997 Value)", "60-Day Money-Back Protection"]
    },
    problem: {
      headline: "You Didn't Start a Business to Do Paperwork.",
      subhead: "Your time is worth $500/hr. Why are you spending it on $15/hr tasks?",
      cards: [
        { icon: "layers", title: "Email Overload", desc: "Waking up to 50 unread messages and spending your best energy just clearing the deck." },
        { icon: "file-text", title: "Data Drudgery", desc: "Copy-pasting info from spreadsheets to CRMs. It's boring, prone to error, and a waste of life." },
        { icon: "alert-triangle", title: "The Follow-Up Fail", desc: "Leads dying on the vine because you simply forgot to send that second or third email." }
      ]
    },
    solution: {
      headline: "Your New Digital Workforce",
      subhead: "Invisible employees that handle the boring stuff so you can focus on growth.",
      features: [
        { icon: "cpu", title: "The Inbox Manager", desc: "Drafts replies, sorts priority emails, and handles scheduling negotiation automatically." },
        { icon: "git-commit", title: "The Data Bridge", desc: "Instantly syncs data between your apps (e.g. Typeform → Slack → HubSpot). No more manual entry." },
        { icon: "lock", title: "The Researcher", desc: "Scours the web for competitor info, leads, or news and delivers a summarized report every morning." }
      ]
    },
    leadMagnet: {
      title: "Workflow ROI Scorecard",
      subtitle: "Find the automation low-hanging fruit in your daily operations.",
      type: 'roi',
      data: {
        inputs: [
          { label: "Hours on Email / Week", defaultValue: 5 },
          { label: "Hours on Data Entry / Week", defaultValue: 3 },
          { label: "Hours on Scheduling / Week", defaultValue: 2 }
        ],
        resultLabel: "Potential Hours Saved / Month"
      },
      footer: "Want us to map this for your business? Book a 15-min demo."
    },
    howItWorks: {
      headline: "Simple Setup",
      steps: [
        { step: "01", title: "Identify", desc: "Tell us what task you hate the most." },
        { step: "02", title: "Deploy", desc: "We plug the AI agent into your existing tools." },
        { step: "03", title: "Freedom", desc: "You get your evenings back." }
      ]
    },
    cta: {
      headline: "Ready to clone yourself?",
      subhead: "Scale your output without increasing your payroll. It's not science fiction, it's competitive advantage.",
      button: "Start Automating Now"
    },
    seo: {
      title: "AI Agents for Business | Automate Admin, Data & Research",
      description: "Hire digital workers to handle repetitive tasks. Our AI agents manage emails, data entry, and research 24/7. Scale your business without adding headcount."
    }
  };
};