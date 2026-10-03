export const siteMetadata = {
  title: "Donato Hernández | AI Automation & Backend Developer",
  description:
    "AI automation and backend developer building workflow automations, system integrations, and AI-powered products with n8n, Node.js, Supabase, OpenAI, and Gemini.",
  url: "https://donatohernandez.dev",
  ogImage: "/opengraph-image",
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
  title: "AI Automation · Backend Systems · Systems Integration",
  tagline: "I turn manual workflows into reliable, AI-powered systems.",
  subtext:
    "I design backend services, workflow automations, and real-time AI experiences using Node.js, TypeScript, Python, n8n, Supabase, OpenAI, Gemini, and Google Cloud.",
  cta: {
    primary: { label: "View Projects", href: "#work" },
    secondary: { label: "Let's Connect", href: "#contact" },
  },
  social: [
    { label: "GitHub", icon: "github", href: "https://github.com/Donatohernandez", download: false },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/manuel-donato-hernandez/", download: false },
    { label: "Download CV", icon: "cv", href: "/Manuel-Donato-Hernandez-CV.pdf", download: true },
  ],
};

export const about = {
  narrative:
    "I build systems that replace repetitive, error-prone work with reliable workflows. My experience ranges from automating accounts receivable for a real business with n8n, Supabase, and Telegram, to developing real-time voice AI with Gemini Live and an AI-powered iOS product deployed to TestFlight. I care about understanding the process first, designing the data and rules behind it, and shipping a solution people can actually use.",
  capabilities: [
    { label: "AI Automation", icon: "bot" },
    { label: "Workflow Architecture", icon: "workflow" },
    { label: "Systems Integration", icon: "integration" },
    { label: "Backend Engineering", icon: "server" },
    { label: "Data Architecture", icon: "database" },
    { label: "Cloud Deployment", icon: "cloud" },
  ],
  quote:
    "Understand the process. Design the system. Automate what matters.",
};

export const projects = [
  {
    id: "materiales-san-rafael",
    name: "Materiales San Rafael",
    icon: "truck",
    role: ["AI Automation Developer", "Backend & Data", "Systems Integration"],
    painPoint:
      "Customer credit and accounts receivable were tracked through handwritten notes, making balances difficult to update, verify, and audit.",
    description:
      "A mobile-first workflow automation system for a family-owned building materials business. It digitizes customer credit, payments, balances, and account history while keeping the financial logic centralized and auditable.",
    status: { label: "Active · Client Project", variant: "live" as const },
    technical: [
      "Supabase and PostgreSQL as the financial source of truth",
      "Self-hosted n8n workflows for business logic, validation, and integrations",
      "Telegram Bot API as a mobile operational interface for the team",
      "Relational data model for customers, credit transactions, payments, balances, and account history",
      "Integrity and audit rules for modifications, cancellations, and financial traceability",
    ],
    impact: [
      "Automated 4 core accounts-receivable processes: customer registration, credit entries, payments, and balance inquiries",
      "Replaced manual balance calculations with consistent database-driven updates",
      "Validated financial logic through 5 charge, payment, and cancellation scenarios",
      "Preserved a traceable history for every account movement",
    ],
    proof:
      "I can map a real business process, design its data and rules, and turn it into a practical automation used from mobile devices.",
    live: "#",
    liveLabel: "Case Study Coming Soon",
    comingSoon: true,
    media: [] as { src: string; alt: string; caption: string; width: number; height: number }[],
  },
  {
    id: "pitchpilot",
    name: "PitchPilot AI",
    icon: "mic",
    role: ["Full-Stack Developer", "Backend Engineer", "Co-founder"],
    painPoint:
      "Founders practice pitches without real-time, role-specific feedback.",
    description:
      "Real-time AI pitch practice platform that simulates specific audiences (investors, teachers, clients) via bidirectional voice conversation powered by Google Gemini Live API.",
    status: { label: "Project Complete", variant: "shipped" as const },
    technical: [
      "Backend: Node.js + TypeScript, WebSockets as audio proxy between browser and Gemini Live API",
      "Deployed on Google Cloud Run, frontend on Vercel",
      "Built phase monitoring system to detect AI failure points, drastically reducing system crashes",
      "Transformed audio sessions into detailed written reports with performance metrics",
    ],
    impact: [
      "Reduced perceived latency between turns by approximately 35% by optimizing voice activity detection and audio streaming",
      "Reduced session interruptions from 4 to 0 during a two-day test period with 60 users",
      "Post-session reports with business advice and action plans",
      "Successfully migrated infrastructure from shared to personal GCP account",
    ],
    proof:
      "I can build and deploy real-time AI systems with voice streaming, session orchestration, and cloud infrastructure.",
    github: "#",
    live: "#",
    liveLabel: "Try PitchPilot",
    comingSoon: true,
    media: [
      {
        src: "/projects/pitchpilot/simulacion-enfocado.webp",
        alt: "PitchPilot practice session with eye contact detected",
        caption: "The session evaluates the pitch in real time while the user maintains eye contact.",
        width: 1600,
        height: 841,
      },
      {
        src: "/projects/pitchpilot/simulacion-distraccion.webp",
        alt: "PitchPilot detecting a distraction during a live simulation",
        caption: "The system detects distractions during practice and includes them in the final feedback.",
        width: 1600,
        height: 841,
      },
      {
        src: "/projects/pitchpilot/reporte-completo.webp",
        alt: "Performance report generated after a PitchPilot session",
        caption: "Each session ends with metrics, findings, and concrete actions for the next pitch.",
        width: 973,
        height: 1600,
      },
    ],
  },
  {
    id: "zaaby",
    name: "Zaaby App",
    icon: "sparkles",
    role: ["Full-Stack Developer", "Backend Architect", "Co-founder"],
    painPoint:
      "People save valuable content from social media but rarely turn it into action.",
    description:
      "An AI-powered iOS productivity app that transforms saved links and personal ideas into summaries, structured takeaways, and actionable next steps.",
    status: { label: "Advanced MVP · TestFlight", variant: "live" as const },
    technical: [
      "React Native, Expo, and TypeScript for the iOS application",
      "Supabase with PostgreSQL, Row Level Security, Auth, Storage, and Edge Functions",
      "OpenAI GPT-4.1-mini pipeline for summaries, tags, and action items",
      "OAuth 2.0 and JWT-based authentication with Apple and Google flows",
      "RevenueCat subscriptions and EAS Build deployment to TestFlight",
    ],
    impact: [
      "Built approximately 80% of the product from architecture through beta deployment",
      "Turned unstructured content into consistent, actionable AI output",
      "Coordinated TestFlight beta testing with 10 users",
      "Integrated frontend, backend, data, authentication, AI, and subscription services",
    ],
    proof:
      "I can architect and deliver an AI-powered mobile product across frontend, backend, data, authentication, subscriptions, and deployment.",
    live: "https://zaaby.app/",
    liveLabel: "Visit Landing Page",
    media: [
      {
        src: "/projects/zaaby/biblioteca.webp",
        alt: "Zaaby saved-content library with filters, statuses, and suggested actions",
        caption: "An organized library with filters, progress states, and direct access to suggested actions.",
        width: 1290,
        height: 2796,
      },
      {
        src: "/projects/zaaby/detalle-acciones.webp",
        alt: "Zaaby content detail with an AI summary, tags, and action items",
        caption: "AI-generated summaries, tags, and next steps turn saved content into something actionable.",
        width: 1290,
        height: 2796,
      },
      {
        src: "/projects/zaaby/metricas.webp",
        alt: "Zaaby insights dashboard with progress, completed actions, and categories",
        caption: "A progress dashboard tracks useful content, completed actions, and performance by category.",
        width: 1290,
        height: 2796,
      },
    ],
  },
];

export const values = [
  {
    icon: "search",
    title: "Understand before automating",
    body: "I map the process, data, rules, and potential failure points before choosing the tools.",
  },
  {
    icon: "layers",
    title: "Systems over patches",
    body: "If a problem repeats, I build a reliable system to prevent it from happening again.",
  },
  {
    icon: "bot",
    title: "AI where it adds value",
    body: "Not every process needs AI. I use it when it improves decisions, speed, or the user experience.",
  },
  {
    icon: "shield",
    title: "Reliable by design",
    body: "Validation, traceability, security, and error handling are part of the architecture from the start.",
  },
  {
    icon: "trending",
    title: "Build, measure, improve",
    body: "I deliver working solutions, observe how they are used, and improve them with real-world results.",
  },
  {
    icon: "route",
    title: "End-to-end ownership",
    body: "I take projects from process analysis and architecture through integration, deployment, and continuous improvement.",
  },
];

export const skills = {
  columns: [
    {
      title: "AI & Automation",
      items: [
        "n8n · Workflow Automation",
        "OpenAI API · GPT-4.1-mini",
        "Google Gemini Live API",
        "Telegram Bot API",
        "Prompt & Output Design",
        "AI Systems Integration",
      ],
    },
    {
      title: "Backend & Integration",
      items: [
        "Node.js · TypeScript",
        "Python",
        "REST APIs · WebSockets",
        "OAuth 2.0 · JWT",
        "OpenAPI",
        "Systems Integration",
      ],
    },
    {
      title: "Data & Cloud",
      items: [
        "PostgreSQL · Supabase",
        "Data Modeling · RLS",
        "Edge Functions · Deno",
        "Google Cloud Run",
        "Docker · Containers",
        "CI/CD · Vercel",
      ],
    },
    {
      title: "Frontend & Mobile",
      items: [
        "React · Next.js",
        "React Native · Expo",
        "JavaScript · TypeScript",
        "EAS Build · TestFlight",
      ],
    },
  ],
  tools: [
    "n8n",
    "Node.js",
    "TypeScript",
    "Python",
    "Supabase",
    "PostgreSQL",
    "OpenAI",
    "Gemini",
    "Google Cloud",
    "Docker",
    "React Native",
    "Expo",
    "GitHub",
    "Vercel",
    "RevenueCat",
  ],
  philosophy:
    "AI should accelerate understanding, not replace it. I use it to build faster, but I know why every line works.",
};

export const contact = {
  headline: "Let's automate what slows your team down.",
  subtext:
    "I help teams replace repetitive workflows with reliable automation, connected systems, and AI-powered backend solutions.",
  hint: "Available for remote AI automation and backend opportunities.",
  email: "manueldonato9921@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuel-donato-hernandez/",
  whatsapp: "https://wa.me/526471229788",
  cv: "/Manuel-Donato-Hernandez-CV.pdf",
  emailLabel: "Start a Conversation",
  cvLabel: "Download CV",
  linkedinLabel: "LinkedIn",
  whatsappLabel: "WhatsApp",
  footer:
    "Building reliable systems and automations that solve real problems.",
};
