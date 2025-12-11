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
        headline: "Never lose another client to a missed call.",
        subhead: "Your AI Receptionist answers instantly, sounds human, qualifies every caller, and books straight into your calendar—24/7, without burning out your staff.",
        primaryCta: "Get a 15-Min Demo",
        secondaryCta: "Hear a Sample Call",
      },
      socialProof: {
        label: "THE 'ZERO-RISK' PROMISE",
        logos: ["Pays For Itself With 1 Saved Booking", "Try It Risk-Free For 30 Days", "No Contracts. Cancel Anytime."]
      },
      problem: {
        headline: "Every Unanswered Call Is a Customer You Handed to a Competitor.",
        subhead: "If your phone is ringing and no one picks up within seconds, you’re paying to generate leads you never even speak to.",
        cards: [
          { icon: "phone-off", title: "The Silent Revenue Leak", desc: "People don’t leave voicemails—they tap the next result on Google. Every ring without an answer is lost revenue." },
          { icon: "clock", title: "Leads Don't Wait for 9-5", desc: "40% of inquiries happen after hours. If you aren't answering instantly, you're invisible." },
          { icon: "user-x", title: "The 'On Hold' Problem", desc: "Long holds or rushed staff damage trust before a client ever meets you. Give them VIP treatment, instantly." }
        ]
      },
      solution: {
        headline: "The Perfect Employee",
        subhead: "Never sick, never late, always polite. Answering every single call with your best sales script.",
        features: [
          { icon: "mic", title: "Indistinguishable from Human", desc: "Mirrors your brand tone, handles common questions, and uses natural pauses and empathy—no 'robot voice'." },
          { icon: "calendar-check", title: "Books Directly to Calendar", desc: "Connects to your scheduling tool so calls become confirmed bookings, reschedules, or waitlist fills in real time." },
          { icon: "shield-check", title: "Filters the Noise", desc: "Routes VIP or complex calls to your team, blocks spam, and captures clean lead data for follow-up." }
        ]
      },
      leadMagnet: {
        title: "Missed Call Revenue Calculator",
        subtitle: "See how much cash you're leaving on the table every month.",
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
          { step: "01", title: "We Learn", desc: "You share pricing, FAQs, and booking rules. We mirror your best receptionist." },
          { step: "02", title: "We Wire", desc: "We connect to your phone system and calendar. No new hardware required." },
          { step: "03", title: "We Launch", desc: "Watch your calendar fill up automatically while you sleep." }
        ]
      },
      cta: {
        headline: "Turn Your Phone Into a 24/7 Booking Machine.",
        subhead: "If one saved booking pays for the system, every call after that is pure upside.",
        button: "Schedule My Demo"
      },
      seo: {
        title: "AI Receptionist for Local Business | 24/7 Automated Answering",
        description: "Stop losing revenue to missed calls. Our AI Receptionist answers 24/7, sounds human, qualifies callers, and books directly into your calendar."
      }
    };
  }

  // PROMPT 2: WEB STRATEGY (Swiss Grid - Agency/Architect Vibe)
  if (prompt.id === 'prompt-2') {
    return {
      layoutType: 'swiss-grid',
      hero: {
        badge: "Revenue-First Design",
        headline: "Your Website Should Be a Salesperson, Not a Brochure.",
        subhead: "We rebuild your site into a fast, conversion-first sales engine wired to capture leads, follow up instantly, and show you exactly what’s working.",
        primaryCta: "Claim Free Audit",
        secondaryCta: "See Live Systems",
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
          { step: "01", title: "Audit", desc: "We review your current site, funnels, and numbers." },
          { step: "02", title: "Rebuild", desc: "We redesign the site and wire in the lead engine." },
          { step: "03", title: "Optimize", desc: "We track performance and iterate on copy, CTAs, and offers." }
        ]
      },
      cta: {
        headline: "If Your Website Isn't Bringing Qualified Leads, It's Broken.",
        subhead: "Let’s run a blunt, numbers-first audit and map exactly what to fix.",
        button: "Book Conversion Audit"
      },
      seo: {
        title: "Conversion-Focused Websites & Lead Gen Systems | ATN Automations",
        description: "Turn your website into a 24/7 sales engine. We design high-converting websites with built-in lead capture, instant follow-up, and clear ROI tracking."
      }
    };
  }

  // PROMPT 3: AI AGENTS (Friendly Productivity - Magical/Clean)
  return {
    layoutType: 'friendly-agent',
    hero: {
      badge: "Business Autopilot",
      headline: "Buy Back Your Time with AI Staff That Never Sleep.",
      subhead: "We deploy AI agents that handle email, data entry, research, and follow-up so you can focus on decisions and growth—not busywork.",
      primaryCta: "Map Opportunities",
      secondaryCta: "See Workflows",
    },
    socialProof: {
      label: "THE EFFICIENCY GUARANTEE",
      logos: ["Save 20+ Hours/Month Guaranteed", "Full Setup Included ($997 Value)", "60-Day Money-Back Protection"]
    },
    problem: {
      headline: "You Became Your Own Bottleneck.",
      subhead: "Your calendar is full, but your brain is stuck in admin. You don't need to work harder—you need digital workers.",
      cards: [
        { icon: "layers", title: "Email Overload", desc: "Waking up to 50 unread messages and losing your best thinking hours just clearing the deck." },
        { icon: "file-text", title: "Data Drudgery", desc: "Copy-pasting info from spreadsheets to CRMs. It's boring, prone to error, and a waste of life." },
        { icon: "alert-triangle", title: "The Follow-Up Fail", desc: "Leads dying on the vine because you simply forgot to send that second or third email." }
      ]
    },
    solution: {
      headline: "Your New Digital Workforce",
      subhead: "Give each boring task to an agent that loves doing it.",
      features: [
        { icon: "cpu", title: "The Inbox Manager", desc: "Drafts replies, tags priority messages, and schedules calls. You approve or edit in seconds." },
        { icon: "git-commit", title: "The Data Bridge", desc: "Moves info between forms, sheets, and CRMs without typos or delays. No more manual entry." },
        { icon: "lock", title: "The Researcher", desc: "Gathers leads, competitor intel, or market signals into clear, snackable summaries every morning." }
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
        { step: "01", title: "Identify", desc: "We identify the 1–3 tasks stealing the most time." },
        { step: "02", title: "Deploy", desc: "We launch your agents, watch how they perform, and refine." },
        { step: "03", title: "Freedom", desc: "You get your evenings back." }
      ]
    },
    cta: {
      headline: "Ready to Clone Your Best Self into Software?",
      subhead: "Start with one agent, one painful workflow, and a simple goal: free up your next 10 hours.",
      button: "Hire My First Agent"
    },
    seo: {
      title: "AI Agents for Business | Automate Admin, Data & Research",
      description: "Deploy AI agents that handle email, data entry, research, and follow-up. ATN Automations designs custom AI workflows with human-in-the-loop control."
    }
  };
};