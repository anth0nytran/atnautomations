## ATN Automations – AI-Powered Revenue & Ops Systems

ATN Automations builds **intelligent automation infrastructure for modern businesses** – from AI receptionists to high-conversion web systems and internal ops automation.

This repo contains the marketing site / landing system we use to prototype and ship those experiences quickly using React + TypeScript.

- **Company**: ATN Automations  
- **What we do**: AI Receptionists, high-conversion web systems, and internal AI workflows  
- **Who it’s for**: Agencies, service businesses, and teams that care about performance and clean implementation  

> **Want this running for your business?**  
> Visit our website (replace `YOUR_WEBSITE_URL` with your actual domain) or reach out at **contact@atnautomations.com**.

---

## 🔎 What This Repository Is

- **Production-ready landing/marketing system** for ATN Automations’ services  
- **Developer-friendly codebase** you can clone, extend, or adapt to your own automations  
- **Showcase** of how we structure UI, data, and content for AI-powered offers  

If you’re a developer evaluating us, this repo is meant to be **transparent, practical documentation** of how we build.

---

## 🧩 Core Concepts

- **Three opinionated service experiences** wired into one React app:
  - **AI Receptionist** (luxury theme)
  - **Custom Websites + Lead Gen** (Swiss-grid / brutalist theme)
  - **Custom AI Agents & Workflows** (modern SaaS theme)
- **JSON-driven content and layout config** so copy, sections, and themes are configurable without touching JSX
- **Clean separation** of:
  - `views/` (page-level layouts)
  - `components/` (reusable building blocks)
  - `data.ts` (service definitions)
  - `utils/contentGenerator.ts` (dynamic content / prompt logic)

This is the same structure we use when deploying automations for clients.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS (CDN) + hand-tuned layout utilities
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display, Fira Code
- **Hosting**: Vercel-ready (with `vercel.json` and static `dist/`)

---

## ⚙️ Running the Project Locally

**Prerequisite:** Node.js **20.x or higher**

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

Get your Gemini API key from `https://ai.google.dev/`.

### 3. Start the dev server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### 4. Build & preview production

```bash
# Build
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deploying (Vercel)

### Option 1 – Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel
```



### Option 2 – Vercel Dashboard

1. Push this repo to GitHub  
2. Import it in [Vercel](https://vercel.com)  
3. Build settings (auto-detected via `vercel.json`):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy


---

## 📁 Project Structure

```text
atn_automations/
├── components/           # Reusable React components
│   ├── PromptCard.tsx    # Service cards
│   └── ServiceForm.tsx   # Contact form + theme variants
├── views/                # Page-level views
│   ├── Dashboard.tsx     # Main "hub" landing
│   ├── LandingPage.tsx   # Service-specific landers
│   └── PromptDetail.tsx  # Detail view for each service
├── utils/
│   └── contentGenerator.ts  # Dynamic copy + prompt generation
├── types.ts              # TypeScript types
├── data.ts               # Service metadata + configuration
├── App.tsx               # Routing + app shell
├── index.tsx             # Entry point
├── index.css             # Global styling
├── vercel.json           # Vercel deployment config
└── vite.config.ts        # Vite configuration
```

---

## 🔐 Security & Performance Notes

- Dependencies checked for known vulnerabilities
- API keys are **never** committed; `.env*` is gitignored
- Production builds are optimized and minified
- Lighthouse-focused layout and asset strategy for fast initial load

---

## 🐛 Troubleshooting

### Node / build warnings

If you see Node version warnings, upgrade to at least **20.19.0**:

```bash
nvm install 20.19.0
nvm use 20.19.0
```

### Environment variables not working

Make sure your `.env.local` exists in the project root and contains:

```bash
GEMINI_API_KEY=your_actual_api_key
```

Then restart the dev server.

---

## 🤝 Work With ATN Automations

If you’re a developer or team lead and want **this kind of system deployed for your business**:

- Email: **contact@atnautomations.com**  
- Website: `YOUR_WEBSITE_URL` (swap this with your real site)  

We’re happy to talk about integrations, white-label builds, or deeper automation work beyond this marketing layer.

---

## 📝 License

Copyright © 2024 ATN Automations. All rights reserved.
