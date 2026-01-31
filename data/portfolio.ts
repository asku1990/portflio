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

export type Project = {
  title: string;
  projectType: "Personal" | "Company";
  description: string;
  tags: string[];
  image: string;
  links: Link[];
};

export type SkillGroup = {
  category: string;
  items: string[];
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
  skills: SkillGroup[];
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
      "Full-stack developer with experience building cross-platform prototypes and web apps using React, React Native, and Node.js. Recently worked at BeyondOS across multiple company projects, including a gaming CMS built with the CMS team, focusing on user experience and helping the CMS team maintain game content.",
    location: "Oulu, Finland",
    availability:
      "Available immediately and open to new opportunities in web and mobile development.",
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
      "I started in electrical engineering and spent over a decade in construction logistics before pivoting into software development in 2021. I graduated from Oulu University of Applied Sciences (OAMK) in 03/2025 while working in software roles.",
      "At Monidor, I built cross-platform prototypes for iOS and Android using React Native and Expo, including configuration and remote monitoring apps. My thesis focused on push notifications in cross-platform development.",
      "I recently worked at BeyondOS across multiple company projects, collaborating with the CMS team on a gaming CMS to improve user experience and support content maintenance, and am now actively seeking a new role.",
    ],
    highlights: [
      {
        label: "Most recent role",
        value: "Full-stack Developer at BeyondOS (ended Jan 2026)",
      },
      {
        label: "Education",
        value: "BEng in Information Technology, OAMK (03/2025)",
      },
      {
        label: "Focus",
        value: "Cross-platform apps with React Native and Expo",
      },
      { label: "Thesis", value: "Push notifications in cross-platform apps" },
    ],
  },
  projects: [
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
      title: "Gaming CMS Content Tools",
      projectType: "Company",
      description:
        "Collaborated with the CMS team to improve the user experience for maintaining game content, focusing on content workflows and reliable updates.",
      tags: ["CMS", "Content Workflows", "UX", "Tailwind CSS", "shadcn/ui"],
      image: "/window.svg",
      links: [{ label: "Details on request", href: "#contact" }],
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
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MySQL",
        "PostgreSQL",
        "Prisma",
        "Drizzle",
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
        "Vercel",
        "Heroku",
        "Visual Studio Code",
        "OpenAI Codex CLI",
        "Cursor IDE",
        "Xcode",
        "Android Studio",
        "GitHub",
        "Bitbucket",
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
    title: "Contact",
    description: "Actively searching for a new role. Open to full-time roles and collaboration.",
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
