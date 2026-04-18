export const siteMetadata = {
  title: "Donato Hernández | Full-Stack Developer",
  description:
    "Mexico-based full-stack developer building production-ready apps with React Native, Node.js, and AI. Co-founder of Zaaby.",
  url: "https://donatohernandez.dev",
  ogImage: "/og-image.png",
};

export const nav = {
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Values", href: "#values" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  name: "Donato Hernández",
  title: "Full-Stack Developer · AI Integration · Backend Systems",
  tagline: "I build full-stack products that ship.",
  subtext:
    "Mexico-based developer building production-ready apps with React Native, Node.js, and AI. Currently co-founding Zaaby, an AI-powered iOS app transforming saved content into actionable insights.",
  cta: {
    primary: { label: "View Projects", href: "#work" },
    secondary: { label: "Let's Connect", href: "#contact" },
  },
  social: [
    { label: "GitHub", icon: "github", href: "https://github.com/Donatohernandez" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/manuel-donato-hernandez/" },
  ],
};

export const about = {
  narrative:
    "I started in logistics and systems administration — environments where downtime costs money and bad tooling costs more. That pushed me into building the tools myself: from a full-stack AI-powered iOS app shipped to the App Store, to real-time voice AI with sub-second latency running on Google Cloud. Right now I'm focused on remote roles where I can own the architecture and ship things that actually matter.",
  capabilities: [
    { label: "I build backend systems", icon: "server" },
    { label: "I integrate AI into products", icon: "brain" },
    { label: "I ship to production", icon: "rocket" },
    { label: "I architect data models", icon: "database" },
    { label: "I build mobile apps", icon: "smartphone" },
    { label: "I automate workflows", icon: "workflow" },
  ],
  quote:
    "What would this look like if it was simple, scalable, and actually shipped?",
};

export const projects = [
  {
    id: "zaaby",
    name: "Zaaby App",
    icon: "sparkles",
    role: ["Co-founder", "Backend Developer", "Architecture Lead"],
    painPoint:
      "People save great content from social media and never act on it.",
    description:
      "AI-powered iOS productivity app that transforms saved links into clean summaries, action items, and structured takeaways. Built for people who save content but want to actually do something with it.",
    status: { label: "MVP Ready · TestFlight · Launching on App Store", variant: "live" as const },
    technical: [
      "Full stack: React Native + Expo SDK 54, Supabase (PostgreSQL + Edge Functions in Deno), OpenAI GPT-4.1-mini, RevenueCat (3 subscription tiers)",
      "Designed AI link processing engine: metadata extraction → state transition logic → structured output",
      "Built onboarding flows with AI-driven personalization",
      "Managed full build pipeline: EAS Build → TestFlight → App Store",
      "Implemented RLS policies, GDPR/CCPA compliance, legal infrastructure",
    ],
    impact: [
      "Production-ready iOS app built from zero to TestFlight",
      "AI processing pipeline handling multiple content types (articles, videos, TikToks via oEmbed)",
      "Subscription system with 7-day free trial and 3 tiers",
      "Security audit completed, zero critical vulnerabilities",
    ],
    proof:
      "I can architect and ship a complete AI-powered mobile product: backend, data, payments, compliance, and deployment. Solo.",
    github: "#",
    live: "https://zaaby.app/",
    liveLabel: "Visit Landing Page",
  },
  {
    id: "pitchpilot",
    name: "PitchPilot AI",
    icon: "mic",
    role: ["Co-founder", "Full-Stack Developer"],
    painPoint:
      "Founders practice pitches without real-time, role-specific feedback.",
    description:
      "Real-time AI pitch practice platform that simulates specific audiences (investors, teachers, clients) via bidirectional voice conversation powered by Google Gemini Live API.",
    status: { label: "Shipped · March 2026", variant: "shipped" as const },
    technical: [
      "Backend: Node.js + TypeScript, WebSockets as audio proxy between browser and Gemini Live API",
      "Deployed on Google Cloud Run, frontend on Vercel",
      "Built phase monitoring system to detect AI failure points, drastically reducing system crashes",
      "Transformed audio sessions into detailed written reports with performance metrics",
    ],
    impact: [
      "Real-time bidirectional voice AI with sub-second latency",
      "Intelligent phase detection reducing failure rate significantly",
      "Post-session reports with business advice and action plans",
      "Successfully migrated infrastructure from shared to personal GCP account",
    ],
    proof:
      "I can build real-time, production-grade AI systems with complex infrastructure. Not just CRUD apps.",
    github: "#",
    live: "#",
    liveLabel: "Try PitchPilot",
    comingSoon: true,
  },
];

export const values = [
  {
    icon: "rocket",
    title: "Ship over perfect",
    body: "Working software beats perfect plans every time.",
  },
  {
    icon: "layers",
    title: "Systems over patches",
    body: "If a problem repeats, I build something to stop it.",
  },
  {
    icon: "bot",
    title: "AI as a tool, not a crutch",
    body: "I use AI to go faster, not to skip understanding.",
  },
  {
    icon: "code2",
    title: "Clarity in code",
    body: "Readable, maintainable code is a form of respect for your team.",
  },
  {
    icon: "wifi",
    title: "Remote-first mindset",
    body: "Async communication, documentation, ownership.",
  },
  {
    icon: "users",
    title: "Talent over location",
    body: "The best work happens when you hire for skill, not timezone.",
  },
];

export const skills = {
  columns: [
    {
      title: "Backend & Data",
      items: [
        "Node.js · TypeScript",
        "PostgreSQL · Supabase",
        "Edge Functions (Deno)",
        "REST APIs",
        "Data modeling & RLS",
      ],
    },
    {
      title: "Frontend & Mobile",
      items: [
        "React Native · Expo",
        "Next.js · React",
        "JavaScript · TypeScript",
        "EAS Build · TestFlight",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "OpenAI API (GPT-4.1-mini)",
        "Google Gemini Live API",
        "Prompt engineering",
        "AI workflow integration",
        "LLM API integration",
      ],
    },
  ],
  tools: [
    "Git",
    "GitHub",
    "Jira",
    "Supabase",
    "Vercel",
    "Google Cloud",
    "RevenueCat",
    "Figma",
    "Claude",
    "Windsurf",
  ],
  philosophy:
    "AI should accelerate understanding, not replace it. I use it to build faster, but I know why every line works.",
};

export const contact = {
  headline: "Let's Work Together",
  subtext:
    "If your team needs a developer who ships full-stack products, integrates AI thoughtfully, and works well async, let's talk.",
  hint: "I'm open to remote full-stack roles, especially teams building with AI.",
  email: "manueldonato9921@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuel-donato-hernandez/",
  whatsapp: "https://wa.me/526471229788",
  whatsappNumber: "+52 647 122 9788",
  emailLabel: "Email Me",
  linkedinLabel: "LinkedIn",
  whatsappLabel: "WhatsApp",
};
