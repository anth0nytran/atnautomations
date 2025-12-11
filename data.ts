import { LandingPagePrompt } from './types';

export const PROMPTS: LandingPagePrompt[] = [
  {
    id: "prompt-1",
    title: "AI Receptionist",
    role: "Service Provider",
    primary_goal: "A 24/7 dedicated voice agent that answers instantly, qualifies leads with human-like empathy, and books appointments directly into your calendar.",
    target_audience: [
      "local service businesses",
      "clinics",
      "salons",
      "law firms",
      "real estate teams",
      "home services"
    ],
    positioning: "Luxury, minimal, trustworthy. The product feels like a quiet upgrade to the business, not a noisy AI gimmick.",
    brand_style: {
      theme: "Apple-inspired minimalism",
      tone: "confident, calm, premium, practical",
      visuals: "clean grids, generous whitespace, soft depth, subtle gradients, crisp typography, device mockups",
      design_keywords: [
        "minimal",
        "luxury",
        "professional",
        "high-contrast clarity",
        "micro-interactions",
        "quiet animations"
      ]
    },
    core_pain_points_to_target: [
      "missed calls = lost revenue",
      "staff burnout from constant interruptions",
      "after-hours leads disappearing",
      "no-shows and scheduling chaos",
      "inconsistent customer experience"
    ],
    primary_value_props: [
      "24/7 answering with human-like brand tone",
      "instant booking + rescheduling",
      "automatic lead capture with tags",
      "no-show reduction via confirmations",
      "handoff to staff when needed"
    ],
    page_structure: [
      "Hero with one-line promise, short subcopy, single dominant CTA",
      "Social proof strip (logos/metrics/testimonials)",
      "Problem-to-solution narrative (before/after)",
      "Feature blocks mapped to outcomes",
      "Short product demo section (animated flow of a call → booking → confirmation)",
      "Use cases by industry",
      "Security & reliability",
      "Pricing teaser or 'starting at' anchor (optional)",
      "FAQ with objections",
      "Final CTA section"
    ],
    copy_requirements: {
      headline_style: "short, benefit-led, aspirational but concrete",
      voice: "avoid hype and buzzword stacking",
      use_persuasion: [
        "loss aversion (missed calls)",
        "social proof",
        "risk reversal",
        "specificity",
        "contrast (manual vs automated)"
      ],
      include_microcopy: [
        "privacy reassurance near forms",
        "what happens after booking a demo",
        "setup time expectations (kept vague but confident)"
      ]
    },
    cta_strategy: {
      primary_cta: "Book a demo",
      secondary_cta: "See how it works",
      cta_placement: [
        "hero",
        "after problem section",
        "after demo section",
        "final section",
        "sticky header button"
      ]
    },
    animation_requirements: [
      "subtle hero gradient motion or light shimmer",
      "scroll-triggered fade/translate for sections",
      "micro-interactions on buttons and cards",
      "optional Lottie or SVG line animation showing call → AI → calendar booking"
    ],
    seo_requirements: {
      primary_keywords: [
        "AI receptionist",
        "virtual receptionist",
        "24/7 appointment booking",
        "automated scheduling",
        "AI phone agent"
      ],
      secondary_keywords: [
        "Google Calendar booking AI",
        "salon receptionist automation",
        "clinic appointment automation",
        "reduce missed calls"
      ],
      on_page: [
        "one H1 only",
        "keyword-rich H2s tied to benefits",
        "schema markup for Product and FAQ",
        "fast load, optimized images, lazy loading",
        "meta title and meta description",
        "internal link placeholders"
      ]
    },
    trust_builders: [
      "short real-world metrics (use realistic placeholders)",
      "testimonials written with specificity",
      "security posture summary",
      "integration icons (Google Calendar, SMS, email, CRM)",
      "clear 'human override' reassurance"
    ],
    technical_output: {
      format: "single-page landing layout",
      preferred_stack: "React or Next.js with Tailwind",
      accessibility: "WCAG-friendly contrast, keyboard focus, reduced-motion option",
      performance: "limit heavy video; use optimized compressed assets"
    },
    deliverables: [
      "final landing page copy",
      "section-by-section layout plan",
      "component list",
      "SEO meta + schema draft",
      "animation notes",
      "A/B test ideas for hero headline and CTA"
    ]
  },
  {
    id: "prompt-2",
    title: "Custom Websites + Lead Gen",
    role: "Service Provider",
    primary_goal: "High-performance digital infrastructure. We build elegant websites connected to ruthless lead capture automation engines.",
    target_audience: [
      "local businesses without high-converting sites",
      "service providers with inconsistent lead flows",
      "founders who want a 'hands-off' lead system"
    ],
    positioning: "A calm, high-status partner that ships elegant sites and installs a predictable lead engine.",
    brand_style: {
      theme: "modern Apple minimal",
      tone: "strategic, outcomes-first, understated confidence",
      visuals: "monochrome base, refined accent color, clean icons, elegant charts, glassy cards, subtle shadows"
    },
    core_pain_points_to_target: [
      "websites that look fine but don’t convert",
      "leads falling through cracks",
      "slow follow-up killing close rate",
      "no visibility into what’s working",
      "tools that don’t talk to each other"
    ],
    primary_value_props: [
      "conversion-first website architecture",
      "automated lead capture across forms, chat, SMS",
      "instant alerts + smart routing",
      "simple dashboards and weekly insights",
      "low-maintenance systems that scale"
    ],
    page_structure: [
      "Hero with promise of measurable lift",
      "Proof bar with quantified outcomes placeholders",
      "3-step system: Attract → Capture → Convert",
      "Website upgrade section (design, speed, trust)",
      "Automation upgrade section (routing, follow-up, CRM sync)",
      "Case-study style narrative with short metrics",
      "Offer stack and simple packages",
      "FAQ addressing price and ROI",
      "Final CTA"
    ],
    copy_requirements: {
      headline_style: "results-driven, not generic agency talk",
      avoid: [
        "overly technical jargon",
        "vague claims without placeholders"
      ],
      use_persuasion: [
        "clarity over cleverness",
        "authority framing",
        "cost of inaction",
        "time-to-value",
        "risk reversal"
      ]
    },
    cta_strategy: {
      primary_cta: "Book a strategy call",
      secondary_cta: "Get a free conversion audit",
      lead_magnet: "Optional audit checklist PDF or short form"
    },
    animation_requirements: [
      "scroll-activated section reveals",
      "animated metrics counters (subtle)",
      "simple line animation showing lead flow",
      "hover states that feel 'hardware-polished'"
    ],
    seo_requirements: {
      primary_keywords: [
        "conversion web design",
        "lead generation website",
        "website automation",
        "CRM lead routing",
        "local business website"
      ],
      secondary_keywords: [
        "automated follow up",
        "high converting landing page",
        "small business lead automation"
      ],
      on_page: [
        "one H1",
        "benefit-led H2s",
        "LocalBusiness or ProfessionalService schema (if relevant)",
        "FAQ schema",
        "fast Core Web Vitals targets",
        "image alt text strategy"
      ]
    },
    trust_builders: [
      "before/after snapshots (as placeholders)",
      "testimonials that mention speed, clarity, results",
      "process transparency",
      "timeline overview",
      "tool stack icons"
    ],
    technical_output: {
      format: "single-page landing",
      preferred_stack: "Vite React + Tailwind or Next.js",
      accessibility: "reduced motion support, semantic headings",
      performance: "no heavy background video; use lightweight motion"
    },
    deliverables: [
      "full copy",
      "wireframe-level section blueprint",
      "SEO meta title/description",
      "schema JSON-LD draft",
      "A/B test variants for hero offer",
      "suggested analytics events"
    ]
  },
  {
    id: "prompt-3",
    title: "Custom AI Agents & Workflows",
    role: "Service Provider",
    primary_goal: "Deploy intelligent digital workers to handle repetitive tasks. Delegate work to AI just like you would to a human assistant.",
    target_audience: [
      "business owners drowning in admin",
      "teams that need more hands on deck",
      "founders who hate paperwork"
    ],
    positioning: "Simple, magical, efficient. Not a 'complex system', but a helpful digital team member.",
    brand_style: {
      theme: "Friendly Productivity Magic",
      tone: "helpful, clear, optimistic, simple",
      visuals: "clean white backgrounds, soft colorful gradients (purple/indigo), rounded cards, playful 3D icons, sparkles"
    },
    core_pain_points_to_target: [
      "doing the same email replies 50x a day",
      "copy-pasting data between tabs",
      "forgetting to follow up",
      "feeling overwhelmed by 'busy work'"
    ],
    primary_value_props: [
      "instant task delegation",
      "agents that learn your preferences",
      "connects to your existing apps (Gmail, Slack)",
      "works 24/7 without complaining",
      "simple setup"
    ],
    page_structure: [
      "Hero with 'Your New Digital Workforce' promise",
      "Visual showing tasks flowing from 'To-Do' to 'Done' magically",
      "Meet your Agents (Email Agent, Data Agent, Research Agent)",
      "How it feels (Relief/Freedom)",
      "Simple pricing per agent",
      "FAQ",
      "Final CTA"
    ],
    copy_requirements: {
      headline_style: "friendly and empowering",
      explain_simply: [
        "it's like hiring a super-fast intern",
        "no code required from you",
        "set it and forget it"
      ],
      use_persuasion: [
        "freedom from drudgery",
        "ease of use",
        "immediate time savings"
      ]
    },
    cta_strategy: {
      primary_cta: "Hire Your First Agent",
      secondary_cta: "See Examples",
      qualification: "What task do you hate most?"
    },
    animation_requirements: [
      "floating elements",
      "soft pulsing glows",
      "cards sliding into 'done' pile"
    ],
    seo_requirements: {
      primary_keywords: [
        "AI agents for business",
        "digital workers",
        "automate admin tasks",
        "AI assistants"
      ],
      secondary_keywords: [
        "productivity automation",
        "virtual assistant alternative"
      ],
      on_page: [
        "friendly H1",
        "clear use case H2s",
        "fast load times"
      ]
    },
    trust_builders: [
      "simple 'human in the loop' toggle",
      "privacy first guarantee",
      "cancel anytime"
    ],
    technical_output: {
      format: "single-page landing",
      preferred_stack: "React + Tailwind",
      accessibility: "high contrast text, readable fonts",
      performance: "lightweight vectors"
    },
    deliverables: [
      "copy",
      "layout",
      "agent persona descriptions"
    ]
  }
];