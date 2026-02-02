export type Link = {
  label: string;
  href: string;
};

export type DownloadAction = {
  label: string;
  note: string;
};

export type Hero = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  ctaPrimary: Link;
  ctaSecondary: Link;
};

export type About = {
  title: string;
  paragraphs: string[];
  highlights: Array<{
    label: string;
    value: string;
  }>;
};

export type ProjectDetailsSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type ProjectDetailsMedia = {
  kind: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

export type ProjectDetails = {
  overview?: string;
  sections: ProjectDetailsSection[];
  media?: ProjectDetailsMedia[];
};

export type Project = {
  title: string;
  projectType: "Personal" | "Company";
  company?: string;
  description: string;
  tags: string[];
  image: string;
  links: Link[];
  details?: ProjectDetails;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Skills = {
  title: string;
  description: string;
  groups: SkillGroup[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Contact = {
  title: string;
  description: string;
  email: string;
  location: string;
  socials: Array<{
    label: string;
    href: string;
  }>;
};

export type CallToAction = {
  title: string;
  description: string;
  primary: Link;
  secondary: Link;
  download: DownloadAction;
};

export type PortfolioData = {
  hero: Hero;
  about: About;
  projects: Project[];
  skills: Skills;
  experience: Experience[];
  contact: Contact;
  cta: CallToAction;
};

export const portfolioData: PortfolioData = {
  hero: {
    name: "Aki-Petteri Kuivas",
    role: "Full-stack Developer",
    tagline: "Building cross-platform apps and reliable web systems.",
    summary:
      "Web-focused full-stack developer (Next.js, React) in Oulu, Finland. Open to web and mobile roles.",
    location: "Oulu, Finland",
    availability: "Available for web and mobile development roles.",
    ctaPrimary: {
      label: "View Projects",
      href: "#projects",
    },
    ctaSecondary: {
      label: "Get in touch",
      href: "#contact",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "My background includes electrical and automation engineering studies and over ten years in the construction product industry, before transitioning into software development in 2021. I graduated from Oulu University of Applied Sciences (OAMK) with a Bachelor of Engineering in 03/2025 while working in software development roles.",
      "At Monidor, I built cross-platform prototypes for iOS and Android using React Native and Expo, including configuration and remote monitoring applications. My thesis focused on push notifications in a cross-platform application: a prototype of a routing server and Android/iOS apps.",
      "Most recently, I worked at BeyondOS across multiple company projects, collaborating closely with the CMS team on a gaming content management system. My work focused on improving user experience.",
    ],
    highlights: [
      {
        label: "Most recent role",
        value: "Full-stack Developer at BeyondOS (Jan 2025 – Jan 2026)",
      },
      {
        label: "Education",
        value: "BEng in Information Technology, Oulu University of Applied Sciences (03/2025)",
      },
      {
        label: "Focus",
        value: "Web application development with Next.js and React.",
      },
      {
        label: "Thesis",
        value:
          "Push notifications in a cross-platform application: a prototype of a routing server and Android/iOS apps.",
      },
    ],
  },
  projects: [
    {
      title: "Gaming CMS Content Tools",
      projectType: "Company",
      company: "BeyondOS",
      description:
        "Collaborated with the CMS team to improve the user experience of maintaining game content, with a focus on clear workflows and reliable updates.",
      tags: [
        "CMS",
        "Content Workflows",
        "UX",
        "Tailwind CSS",
        "shadcn/ui",
        "Next.js",
        "TypeScript",
        "Prisma",
        "MySQL",
        "Postman",
        "AWS EC2",
        "AWS S3",
      ],
      image: "/window.svg",
      links: [{ label: "Contact", href: "#contact" }],
      details: {
        overview:
          "A case study on planning and delivering a solid CMS platform for game content, in close collaboration with the CMS team.",
        sections: [
          {
            heading: "Problem",
            body: "The existing gaming CMS no longer supported the evolving needs of the product or the CMS team. Content workflows were difficult to maintain, usability issues slowed down daily work, and the structure did not scale well as new content types and features were added. There was a clear need for a more flexible, maintainable, and user-friendly solution.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I took ownership of designing a new CMS from scratch, using the existing system as a reference to identify what worked and what needed improvement. This included planning structure, workflows, and UI patterns before implementation. I worked closely with another developer and the CMS team to understand real workflow requirements, iterate on ideas, and validate design decisions early. The goal was to improve usability and reliability without disrupting ongoing development.",
            bullets: [],
          },
          {
            heading: "Technical challenges & solutions",
            body: "Key challenges included redesigning content workflows, defining clearer data structures, and building an interface that remained intuitive while supporting complex content needs. We addressed these by simplifying UI patterns, improving validation and feedback, and aligning frontend and backend changes to support predictable and safe content updates. This required careful coordination between frontend components, backend APIs, and database models to ensure consistency across environments.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The new CMS design significantly improved usability and made content management more efficient for the CMS team. Workflows became clearer, maintenance became easier, and the system provided a stronger foundation for future development. This project demonstrates my ability to design systems from the ground up, collaborate closely with cross-functional teams, and deliver practical solutions in a production environment.",
            bullets: [],
          },
        ],
        media: [],
      },
    },
    {
      title: "Resume-and-CV Platform",
      projectType: "Personal",
      description:
        "A web-based resume platform built with React and Node.js/Express, backed by MySQL and JWT authentication. Includes sections for contact info, language skills, and recommendations, with admin pages for user management. Previously hosted on Heroku (currently offline).",
      tags: ["React", "Node.js", "Express", "MySQL", "JWT", "Heroku"],
      image: "/globe.svg",
      links: [
        {
          label: "Frontend Repo",
          href: "https://github.com/asku1990/resume_web",
        },
        {
          label: "Backend Repo",
          href: "https://github.com/asku1990/resume_server",
        },
      ],
    },
    {
      title: "Help Tool v1 (Car Management)",
      projectType: "Personal",
      description:
        "A car expenses tracker built with Next.js and Prisma, hosted on Vercel with a Neon PostgreSQL database. Tracks vehicles, fuel fill-ups, expenses, and L/100km + cost/km stats.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "Vercel",
      ],
      image: "/globe.svg",
      links: [{ label: "Repository", href: "https://github.com/asku1990/help-tool-v1" }],
    },
    {
      title: "Cross-Platform Prototypes",
      projectType: "Company",
      description:
        "Built iOS and Android prototypes from existing Java apps using React Native and Expo. Delivered configuration and remote monitoring apps and integrated push notifications via Node.js, FCM, and APNs.",
      tags: ["React Native", "Expo", "Node.js", "FCM", "APNs"],
      image: "/window.svg",
      links: [{ label: "Details on request", href: "#contact" }],
    },
    {
      title: "Portable Band Saw UI",
      projectType: "Company",
      description:
        "Designed and implemented part of a Raspberry Pi-based UI for a portable band saw using Python, Tkinter, and MQTT.",
      tags: ["Python", "Tkinter", "MQTT", "Raspberry Pi"],
      image: "/file.svg",
      links: [{ label: "Details on request", href: "#contact" }],
    },
  ],
  skills: {
    title: "Skills",
    description:
      "A snapshot of the tools and disciplines I work with daily, including AI-assisted development workflows.",
    groups: [
      {
        category: "Frontend",
        items: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "shadcn/ui",
          "TanStack Query",
          "React Native",
          "Expo",
        ],
      },
      {
        category: "Backend",
        items: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "MySQL",
          "Prisma",
          "Drizzle",
          "Supabase",
          "SQL",
          "JWT",
          "NextAuth",
        ],
      },
      {
        category: "Automation and IoT",
        items: ["Python", "Tkinter", "MQTT", "Raspberry Pi"],
      },
      {
        category: "Tooling",
        items: [
          "Git",
          "Docker",
          "AWS (EC2, S3)",
          "Postman",
          "Vercel",
          "Netlify",
          "Heroku",
          "Neon (PostgreSQL)",
          "GitHub",
          "Bitbucket",
          "Visual Studio Code",
          "Cursor IDE",
          "OpenAI Codex CLI",
          "Xcode",
          "Android Studio",
          "Notion",
          "Linear",
          "Jira",
        ],
      },
      {
        category: "Languages",
        items: ["Finnish (Native)", "English (Good)", "Swedish (Basic)"],
      },
    ],
  },
  experience: [
    {
      company: "BeyondOS",
      role: "Full-stack Developer",
      period: "Jan 2025 - Jan 2026",
      location: "Oulu / Hybrid",
      highlights: [
        "Contributed to a gaming CMS with the CMS team, focusing on user experience and content maintenance workflows.",
        "Delivered features across other company projects alongside the CMS work.",
        "Collaborated with a multinational team to design and ship user-focused features.",
      ],
    },
    {
      company: "Monidor Oy",
      role: "Trainee Software Developer",
      period: "Jun 2024 - Dec 2024",
      location: "Oulu",
      highlights: [
        "Developed iOS and Android prototypes from existing Java apps using React Native and Expo.",
        "Built configuration and remote monitoring apps and handled WiFi connectivity features.",
        "Integrated push notifications with a Node.js server using FCM configured for APNs.",
      ],
    },
    {
      company: "Takatalvi Ltd",
      role: "Trainee",
      period: "Feb 2024 - May 2024",
      location: "Oulu",
      highlights: [
        "Designed and implemented parts of a Raspberry Pi-based UI for a portable band saw.",
        "Worked with Python, Tkinter, PyQt, and MQTT for device communication.",
        "Documented UI work and collaborated on hardware and software integration.",
      ],
    },
  ],
  contact: {
    title: "Let's connect",
    description: "Open to new roles and collaborations. Oulu, Finland.",
    email: "aki@a.kesman.eu",
    location: "Oulu, Finland",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/akikuivas" },
      { label: "GitHub", href: "https://github.com/asku1990" },
    ],
  },
  cta: {
    title: "Let's build something useful.",
    description: "Open to roles in web, mobile, and cross-platform development.",
    primary: { label: "Email me", href: "mailto:aki@a.kesman.eu" },
    secondary: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akikuivas",
    },
    download: {
      label: "Download CV",
      note: "CV download is a future feature.",
    },
  },
};
