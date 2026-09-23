export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Card / SEO summary */
  longDescription?: string;
  highlights?: string[];
  company?: string;
  period?: string;
  tags: string[];
  gradient: string;
  href?: string;
  /** Optional cover art (local `/projects/…` or remote URL) */
  coverImage?: string;
};

export type PortfolioRow = {
  id: string;
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
};

export const profile = {
  name: "Sweta Kumari",
  tagline: "Senior Frontend Engineer · 8+ Years",
  headline: "React, Vue & micro frontends for products that scale.",
  bio: "Hi, I'm Sweta — a frontend developer with a background in web design and a passion for software. I explore where the physical and digital world meet to enable new experiences.",
  location: "Almere, Netherlands",
  email: "kumarisweta297@gmail.com",
  linkedin: "https://www.linkedin.com/in/sweta-kumari-frontend-developer/",
  github: "https://github.com/kumarisweta297",
  cvUrl: "https://swetakumari.my.canva.site/",
  website: "https://swetakumari.my.canva.site/",
  focus: "React · Vue · TypeScript · Micro frontends · AI",
};

/** Home hero — browse CTA, not a project detail page */
export const heroFeatured: PortfolioItem = {
  id: "featured-intro",
  title: "Senior Frontend Engineer",
  subtitle: `${profile.tagline} · ${profile.location}`,
  description: profile.bio,
  tags: ["React.js", "Vue.js", "TypeScript", "Next.js", "Micro Frontends", "AI" ],
  gradient: "from-red-950 via-rose-900 to-black",
  href: "#sample-work",
};

/** Dedicated AI highlight — featured project id must exist in sample-work */
export const aiWork = {
  sectionTitle: "AI Work",
  headline: "Building developer tools with Gemini & modern React",
  summary:
    "I combine product UX with LLM APIs to ship assistants that are fast, readable, and safe to run in production — from prompt design to deployed Next.js apps on Vercel.",
  featuredProjectId: "dev-ai-agent",
  practices: [
    "Google Gemini API integration & chat UX",
    "Next.js App Router · React · TypeScript",
    "Secure env handling & production deploy (Vercel)",
    "AI-assisted engineering in embedded & enterprise UI",
  ],
};

/** Projects from https://swetakumari.my.canva.site/ — Sample Work + key domains */
export const rows: PortfolioRow[] = [
  {
    id: "sample-work",
    title: "Sample Work",
    subtitle: "Client programs and personal builds — select a title for the full case study.",
    items: [
      {
        id: "dev-ai-agent",
        title: "Developer AI Agent",
        subtitle: "React · Next.js · Gemini · Vercel",
        description:
          "Personal AI assistant for developers — chat UX powered by the Gemini API, built with Next.js and React, deployed on Vercel.",
        longDescription:
          "I designed and shipped a developer-focused AI agent as a modern web app using React.js and Next.js. The app integrates Google’s Gemini API for conversational responses, with a clean UI for prompts, streaming-style interactions, and production deployment on Vercel. It showcases full-stack frontend patterns, environment-safe API usage, and a live product anyone can try in the browser.",
        highlights: [
          "Next.js App Router and React components",
          "Gemini API integration for AI chat",
          "Production deploy on Vercel",
          "Developer-oriented prompt and chat experience",
        ],
        company: "Personal project",
        period: "2025",
        tags: ["Next.js", "Gemini", "Vercel"],
        gradient: "from-indigo-900 via-violet-950 to-black",
        href: "https://developer-ai-agent.vercel.app/",
        coverImage: "/projects/dev-ai-agent.svg",
      },
      {
        id: "wf-oas",
        title: "Digital Status Fulfillment",
        subtitle: "Wells Fargo · Online application status",
        description:
          "Customers check application status online with their existing Wells Fargo Online credentials — secure, guided fulfillment flow.",
        longDescription:
          "Wells Fargo digital status fulfillment lets applicants track progress online using their existing Wells Fargo Online username and password. I worked on the frontend experience that guides users through a clear, trustworthy status journey — emphasizing accessibility, responsive layout, and alignment with banking security expectations. The flow reduces support friction by surfacing application state in real time within the authenticated Wells Fargo ecosystem.",
        highlights: [
          "Authenticated status tracking for applicants",
          "Secure, guided fulfillment UX",
          "Responsive, accessible banking UI",
          "Integration with Wells Fargo Online identity",
        ],
        company: "Wells Fargo",
        tags: ["React", "Vue", "Accessibility", "Banking"],
        gradient: "from-amber-900 to-stone-950",
        href: "https://icomplete.wellsfargo.com/oas/status/enter",
        coverImage: "/projects/wf-oas.svg",
      },
      {
        id: "mitsubishi-store",
        title: "Mitsubishi Automobile Store",
        subtitle: "Global automotive retail experience",
        description:
          "Responsive automobile sites for multiple countries: API integration (GET/POST/PUT/DELETE), React Storybook, GraphQL, and close UX/BE collaboration.",
        longDescription:
          "The Automobile Store is available across multiple countries globally. I designed, developed, and helped relaunch responsive automobile websites for Mitsubishi Motors — collaborating with UX and backend teams on interactive applications. Responsibilities included REST API integration using GET, POST, PUT, and DELETE from React, React Storybook for UI documentation, GraphQL consumption, and Git-based source control. The goal was a scalable, performant storefront experience that matches brand standards in every locale.",
        highlights: [
          "Multi-country automobile retail sites",
          "React API integration (CRUD)",
          "React Storybook component library",
          "GraphQL and cross-functional UX/BE delivery",
        ],
        company: "Mitsubishi Motors",
        tags: ["React", "GraphQL", "Storybook"],
        gradient: "from-slate-800 to-black",
        coverImage: "/projects/mitsubishi-store.svg",
      },
      {
        id: "aami-insurance",
        title: "AAMI Home & Content Insurance",
        subtitle: "Publicis Sapient · Finance",
        description:
          "Home and contents insurance UX covering fire, theft, storms, and more — pixel-perfect UI from design, a11y standards, and performance-focused React.",
        longDescription:
          "AAMI Home and Contents Insurance combines building-only and contents-only coverage for events such as fire, theft, storms, and lightning — with repair or replacement support for property and belongings. At Publicis Sapient I implemented UI from design specs, built user-friendly flows to optimize conversion, applied web accessibility standards across browsers and devices, and delivered reusable React components. Modern stack work included React Hooks, Redux, HTML, CSS, and Bootstrap with measurable page-load improvements.",
        highlights: [
          "Insurance quote & content journeys",
          "WCAG-oriented accessible UI",
          "~20% page-load improvement focus",
          "Design–dev parity on components",
        ],
        company: "Publicis Sapient",
        tags: ["React", "Vue", "Redux", "A11y"],
        gradient: "from-violet-900 to-indigo-950",
        coverImage: "/projects/aami-insurance.svg",
      },
      {
        id: "sungrow-embedded",
        title: "Sungrow Embedded Energy UI",
        subtitle: "Lead Frontend · Sungrow Benelux",
        description:
          "Frontend for embedded energy systems using Vue.js, React, TypeScript, QML, and C++ — modern UI, performance, and AI-assisted engineering.",
        longDescription:
          "At Sungrow Benelux I lead frontend work for embedded energy systems — bridging industrial hardware and intuitive software. The stack spans Vue.js, React.js, TypeScript, QML, and C++ for device-facing interfaces. I focus on performance optimization, maintainable architecture, and modern UI patterns, including AI-assisted engineering workflows where they accelerate delivery without sacrificing quality.",
        highlights: [
          "Embedded energy & inverter ecosystems",
          "Vue.js,, TypeScript, QML, C++",
          "Performance tuning on constrained devices",
          "Lead frontend across Benelux programs",
        ],
        company: "Sungrow Benelux",
        period: "Apr 2023 – Nov 2025",
        tags: ["Vue", "TypeScript", "QML"],
        gradient: "from-emerald-900 to-teal-950",
        coverImage: "/projects/sungrow-embedded.svg",
      },
      {
        id: "retail-ecommerce",
        title: "Retail Insights E-Commerce",
        subtitle: "Web performance & conversion",
        description:
          "E-commerce web apps with measurable gains: ~20% faster page loads, higher conversion, and a front-end system that cut dev time ~15%.",
        longDescription:
          "At The Retail Insights I built and maintained e-commerce web applications with a focus on measurable business outcomes. Page load speeds improved by roughly 20%, which contributed to higher conversion rates. I led adoption of a new front-end development approach that reduced delivery time by about 15% while improving overall site performance by ~20%, partnering with stakeholders to keep releases on time and on budget.",
        highlights: [
          "E-commerce catalog & checkout flows",
          "~20% faster page loads",
          "~15% reduction in development time",
          "Conversion-focused performance work",
        ],
        company: "The Retail Insights",
        period: "Mar 2018 – Jul 2019",
        tags: ["React", "Redux", "RWD"],
        gradient: "from-cyan-900 to-blue-950",
        coverImage: "/projects/retail-ecommerce.svg",
      },
    ],
  },
  {
    id: "skills",
    title: "Skills & Proficiencies",
    items: [
      {
        id: "stack-fe",
        title: "React / Vue / Next.js",
        subtitle: "Micro frontends & SPAs",
        description:
          "React JS, Vue JS, Next.js, REST APIs, React Query, micro front-end applications, and Pinia/Redux state.",
        tags: ["Next.js", "React Query", "Pinia"],
        gradient: "from-sky-900 to-zinc-900",
      },
      {
        id: "stack-lang",
        title: "JavaScript & TypeScript",
        subtitle: "ES6+ & modern patterns",
        description: "JavaScript, TypeScript, ES6, React Hooks, and component-driven architecture.",
        tags: ["TypeScript", "ES6", "Hooks"],
        gradient: "from-blue-900 to-slate-900",
      },
      {
        id: "stack-ui",
        title: "UI & Responsive Web",
        subtitle: "HTML, CSS, Bootstrap",
        description: "UI development, responsive web design, Bootstrap grid, and media queries.",
        tags: ["HTML", "CSS", "Bootstrap"],
        gradient: "from-rose-900 to-black",
      },
      {
        id: "stack-test",
        title: "Testing & Quality",
        subtitle: "BDD, Jest, SonarQube",
        description:
          "BDD Cucumber with React, Jest & React Testing Library, BrowserStack, and SonarQube in Azure DevOps pipelines.",
        tags: ["Jest", "Cucumber", "SonarQube"],
        gradient: "from-orange-900 to-neutral-900",
      },
      {
        id: "stack-tools",
        title: "GraphQL, Git & CMS",
        subtitle: "Integration & delivery",
        description: "GraphQL, Git/GitHub, CMS integrations, and Mendix / QT QML where needed.",
        tags: ["GraphQL", "Git", "QML"],
        gradient: "from-fuchsia-900 to-purple-950",
      },
    ],
  },
  {
    id: "experience",
    title: "Experience & Education",
    items: [
      {
        id: "exp-sungrow",
        title: "Lead Frontend Developer",
        subtitle: "Sungrow Benelux",
        description:
          "Led frontend for embedded energy products — Vue, React, TypeScript, QML, and C++ on device-facing experiences.",
        longDescription:
          "Lead Frontend Developer at Sungrow Benelux building interfaces for embedded energy systems. Focus on performance on constrained hardware, maintainable architecture, and collaboration across firmware and design.",
        highlights: [
          "Embedded / inverter UI programs",
          "Vue, React, TypeScript, QML, C++",
          "Performance and UX on hardware targets",
        ],
        company: "Sungrow Benelux",
        period: "Apr 2023 – Nov 2025",
        tags: ["Energy", "Embedded"],
        gradient: "from-green-900 to-zinc-950",
      },
      {
        id: "exp-wf",
        title: "UI Developer — Wells Fargo",
        subtitle: "NTT DATA · Wells Fargo",
        description:
          "Frontend for banking micro apps: multilingual experiences, test automation, and Azure DevOps delivery with SonarQube quality gates.",
        longDescription:
          "UI Developer on the Wells Fargo program via NTT DATA. I build customer-facing micro front-end flows, support language translation, contribute to Cucumber/BrowserStack automation, and ship through CI/CD on Azure DevOps with SonarQube scanning.",
        highlights: [
          "Micro front-end development in agile squads",
          "Multilingual and accessible banking UI",
          "BDD automation and pipeline quality gates",
        ],
        company: "NTT DATA · Wells Fargo",
        period: "Dec 2025 – Present",
        tags: ["Wells Fargo", "Banking"],
        gradient: "from-red-950 to-black",
      },
      {
        id: "exp-ta",
        title: "Senior Frontend Developer",
        subtitle: "TA Digital · Omnicom · Dec 2021 – Mar 2023",
        description:
          "Relaunched responsive automotive sites; React API integration, Storybook, and GraphQL with UX and backend teams.",
        longDescription:
          "Senior Frontend Developer at TA Digital | Omnicom Media Group in the automobile domain. Delivered multi-market sites, REST integrations, component libraries in Storybook, and GraphQL-backed features.",
        highlights: [
          "Global automotive retail websites",
          "Storybook + GraphQL delivery",
          "Cross-functional UX and API work",
        ],
        company: "TA Digital · Omnicom",
        period: "Dec 2021 – Mar 2023",
        tags: ["Automobile", "GraphQL"],
        gradient: "from-gray-800 to-zinc-900",
      },
      {
        id: "exp-publicis",
        title: "Frontend Developer",
        subtitle: "Publicis Sapient · Aug 2019 – Feb 2021",
        description:
          "Finance and insurance UI from design specs — accessibility, reusable React, and measurable load-time improvements.",
        longDescription:
          "Frontend Developer at Publicis Sapient on finance/insurance programs including AAMI-style home and contents journeys. Partnered with design for pixel-accurate UI, WCAG-oriented patterns, and performance tuning.",
        highlights: [
          "Insurance and finance product UI",
          "Accessibility across browsers and devices",
          "Reusable, performance-minded components",
        ],
        company: "Publicis Sapient",
        period: "Aug 2019 – Feb 2021",
        tags: ["Insurance", "Finance"],
        gradient: "from-indigo-900 to-black",
      },
      {
        id: "exp-retail",
        title: "Frontend Developer",
        subtitle: "The Retail Insights · Mar 2018 – Jul 2019",
        description:
          "E-commerce SPAs with ~20% faster loads and stronger conversion through performance-focused front-end work.",
        longDescription:
          "Built and maintained e-commerce applications at The Retail Insights. Improved page speed and conversion, and helped roll out a front-end approach that reduced delivery time while keeping releases on schedule.",
        highlights: [
          "E-commerce catalog and checkout flows",
          "~20% page-load improvement",
          "Conversion-focused optimization",
        ],
        company: "The Retail Insights",
        period: "Mar 2018 – Jul 2019",
        tags: ["E-Commerce"],
        gradient: "from-teal-900 to-gray-950",
      },
      {
        id: "edu-be",
        title: "B.E. Computer Technology",
        subtitle: "Priyadarshini College of Engineering, Nagpur",
        description:
          "Bachelor of Engineering in Computer Technology — first class distinction (May 2016).",
        longDescription:
          "Priyadarshini College of Engineering, Nagpur. Bachelor of Engineering in Computer Technology with first class distinction, grounding in software engineering, networks, and computer science fundamentals.",
        highlights: [
          "B.E. Computer Technology",
          "First class distinction",
          "Graduated May 2016",
        ],
        company: "Priyadarshini College of Engineering, Nagpur",
        period: "May 2016",
        tags: ["Education"],
        gradient: "from-amber-950 to-stone-900",
      },
    ],
  },
];
