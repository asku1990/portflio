export type Link = {
  label: string;
  href: string;
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
  additionalExperience?: {
    title: string;
    description: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
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

export type PortfolioData = {
  hero: Hero;
  about: About;
  projects: Project[];
  skills: Skills;
  education: Education[];
  experience: Experience[];
  contact: Contact;
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
      "I am a web-focused full-stack developer specializing in modern React and Next.js applications, with experience in cross-platform mobile development.",
      "Most recently, I worked at BeyondOS across multiple company projects, collaborating closely with the CMS team on a gaming content management system. My work focused on improving user experience, content workflows, and reliability while working with a distributed development team.",
      "At Monidor Oy, I built cross-platform prototypes for iOS and Android using React Native and Expo, including configuration and remote monitoring applications based on existing Java systems. My bachelor's thesis focused on push notifications in a cross-platform application, covering a prototype routing server and Android/iOS apps.",
      "My background includes electrical and automation engineering studies and over ten years in the construction product industry, before transitioning into software development in 2021. I graduated from Oulu University of Applied Sciences (OAMK) with a Bachelor of Engineering in Information Technology in 03/2025 while working in software development roles.",
      "My current focus is web application development with Next.js and React, complemented by backend experience with Node.js, SQL databases, and cloud-based deployments.",
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
      links: [],
      details: {
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
      title: "Cross-Platform Prototypes",
      projectType: "Company",
      company: "Monidor Oy",
      description:
        "Built iOS and Android prototypes from existing Java apps using React Native and Expo. Built custom native modules / platform integrations (Swift/Kotlin) when RN libraries were insufficient (incl. Wi-Fi-related functionality). Integrated push notifications via Node.js service + FCM configured for APNs.",
      tags: [
        "React Native",
        "Expo",
        "Node.js",
        "FCM",
        "APNs",
        "Xcode",
        "iOS Simulator",
        "Android Studio",
        "Android Simulator",
        "TestFlight",
        "App Store Connect",
      ],
      image: "/window.svg",
      links: [],
      details: {
        sections: [
          {
            heading: "Problem",
            body: "The existing Java application supported Android users only. An iOS prototype was needed to support configuration, remote monitoring, and push notifications without changing the existing backend.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I built an iOS application prototype using React Native and Expo. Although iOS was the primary target, the same codebase could also run on Android, allowing quick cross-platform validation.",
            bullets: [],
          },
          {
            heading: "Technical challenges & solutions",
            body: "The main challenge was replicating the existing Java application model for iOS and Android without changing the backend. This was solved by using React Native/Expo as the primary approach, building custom native modules / platform integrations (Swift/Kotlin) when RN libraries were insufficient (including Wi-Fi-related functionality), and introducing a Node.js service + FCM configured for APNs for push notifications.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The result was a working iOS prototype that extended the system to iOS users and validated a cross-platform approach using a single codebase.",
            bullets: [],
          },
        ],
        media: [],
      },
    },
    {
      title: "Beagle tietokanta",
      projectType: "Personal",
      description:
        "An in-progress modernization project for Suomen Beaglejärjestö - Finska Beagleklubben ry. The system maintains registry data for beagles in Finland, including shows, trials, and breeding-related data, and is being rebuilt into an easier-to-maintain Next.js + TypeScript + PostgreSQL platform.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "Better Auth",
        "Vercel",
        "Turborepo",
        "Vitest",
        "Playwright",
      ],
      image: "/globe.svg",
      links: [
        { label: "New Version Preview (In Development)", href: "https://beagle-db-v2.vercel.app/" },
        {
          label: "Legacy Version (Current Production)",
          href: "https://server2.dataseed.fi/~beaglejarjesto/tietokanta/",
        },
      ],
      details: {
        sections: [
          {
            heading: "Problem",
            body: "Suomen Beaglejärjestö - Finska Beagleklubben ry uses the database to maintain registered beagles in Finland and track important domain data such as show and trial results. Breeders also rely on it for pedigree and planning use cases such as inbreeding coefficient (sukusiitosaste) calculations. The legacy PHP/MariaDB implementation works but is difficult to maintain and extend safely.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I am designing and building a monorepo-based replacement with Next.js, TypeScript, shared contracts, and clear module boundaries across web, server, and DB packages. The target architecture supports public search, authenticated admin routes, incremental migration from the legacy data source, and deployment on Vercel with PostgreSQL on Neon.",
            bullets: [],
          },
          {
            heading: "Technical challenges & solutions",
            body: "Main challenges include mapping legacy MariaDB data into a cleaner PostgreSQL schema, preserving important dog/trial/show relationships, and implementing reliable search/filter behavior. I addressed this with Prisma-based schema modeling, import tooling for legacy data, typed API contracts, and feature-scoped implementation for predictable changes. Quality is supported with Vitest unit tests and Playwright end-to-end tests.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The project is under active development. Core architecture, search foundations, and admin-ready routing are in place. A public preview is available for testing search and browsing features, while admin/edit functionality is intentionally restricted. The long-term goal is a modern, reliable, and maintainable replacement for the current production system.",
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
      details: {
        sections: [
          {
            heading: "Problem",
            body: "Early in my studies, I wanted a way to showcase my skills, education, and experience in a structured and customizable format beyond a static CV.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I designed and built a full-stack web application to manage resume content, including contact information, language skills, and recommendations. The platform included basic admin functionality for content management and authentication, and was used as a learning and showcase project during my studies.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The project served as a practical full-stack learning experience and a foundation for understanding authentication, data modeling, and deployment. As my portfolio and experience evolved, maintaining a large custom resume platform was no longer necessary, and the project is now kept as a reference rather than an actively developed product.",
            bullets: [],
          },
        ],
        media: [],
      },
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
      details: {
        sections: [
          {
            heading: "Problem",
            body: "Managing expenses, maintenance, and fuel consumption across multiple family cars was fragmented and difficult to track consistently over time.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I designed and built a focused web application to centralize vehicle-related data, including expenses, fuel usage, and maintenance history. The application is used to track metrics such as L/100km, cost per kilometer, tire life, and oil changes, keeping all information in one place.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The result is a practical tool that helps monitor running costs and maintenance needs across multiple vehicles. The application provides a clear overview of car-related data and serves as a solid foundation for building additional, focused tools separately if needed.",
            bullets: [],
          },
        ],
        media: [],
      },
    },
    {
      title: "Portable Band Saw UI",
      projectType: "Company",
      company: "Takatalvi Oy",
      description:
        "Designed and implemented part of a Raspberry Pi-based UI for a portable band saw using Python, Tkinter, and MQTT.",
      tags: ["Python", "Tkinter", "MQTT", "Raspberry Pi"],
      image: "/file.svg",
      links: [],
      details: {
        sections: [
          {
            heading: "Problem",
            body: "Takatalvi Oy was developing a portable band saw that required a user interface and supporting software to run on Raspberry Pi devices with wireless communication. The work was in an early development phase.",
            bullets: [],
          },
          {
            heading: "Role & approach",
            body: "I designed and implemented the initial UI and software foundation using Python, targeting Raspberry Pi hardware. The focus was on establishing a clear structure and validating the technical approach for the device and its communication.",
            bullets: [],
          },
          {
            heading: "Technical challenges & solutions",
            body: "Key challenges included working with limited hardware resources and setting up wireless communication between components. These were addressed using a Python-based UI and MQTT for lightweight messaging.",
            bullets: [],
          },
          {
            heading: "Outcomes",
            body: "The result was a solid foundation for the device UI and software architecture. Further development was planned, but my involvement ended when I moved to a new position.",
            bullets: [],
          },
        ],
        media: [],
      },
    },
  ],
  skills: {
    title: "Skills",
    description:
      "A snapshot of the tools and disciplines I work with daily, including AI-assisted development workflows.",
    groups: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MySQL", "PostgreSQL", "Prisma", "Drizzle"],
      },
      {
        category: "Mobile",
        items: ["React Native", "Expo"],
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
          "Codex CLI",
          "ChatGPT",
          "Claude",
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
    additionalExperience: {
      title: "Additional experience",
      description:
        "Native iOS/Android integrations (Swift/Kotlin). PHP (maintenance and minor updates).",
    },
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
        "Built configuration and remote monitoring apps, including custom native integrations (Swift/Kotlin) when RN libraries were insufficient (incl. Wi-Fi-related functionality).",
        "Integrated push notifications with a Node.js service + FCM configured for APNs.",
        "Tested company hardware and products alongside the mobile applications during development.",
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
    {
      company: "Rudus Oy",
      role: "Customer Service Advisor (Palveluneuvoja)",
      period: "Jan 2022 - Jan 2025",
      location: "Northern Finland",
      highlights: [
        "Handled ready-mix concrete customer service, orders, and delivery scheduling.",
        "Coordinated drivers and deliveries to construction sites across Northern Finland.",
        "Managed delivery changes and exceptional situations via phone with customers and production teams.",
        "Supported aggregates customer service in the early phase, expanding logistics and material flow knowledge.",
        "On study leave for most of 2024 while completing my BEng in IT at Oulu UAS.",
      ],
    },
    {
      company: "MR-Pumppaus Oy",
      role: "Concrete Pump Truck Driver",
      period: "Feb 2011 - Jan 2022",
      location: "Finland / On-site",
      highlights: [
        "Pumped and transported ready-mixed concrete for construction projects across Finland.",
        "Worked in field operations nationwide and coordinated site-level execution with customers and teams.",
        "Maintained and repaired pumping equipment to keep operations safe and reliable.",
        "Served as Area Supervisor in Oulu and the Helsinki metropolitan area.",
      ],
    },
  ],
  education: [
    {
      school: "Oulu University of Applied Sciences",
      degree: "Degree Programme in Information Technology, Option of Software Development",
      period: "Jan 2021 - Mar 2025",
      highlights: [
        "Software Development",
        "Web Development",
        "REST APIs",
        "React Native",
        "Mobile Application Development",
        "Problem Solving",
        "Troubleshooting",
        "Teamwork",
        "Communication",
      ],
    },
    {
      school: "Ammattiopisto Lappia",
      degree:
        "Vocational Qualification in Electrical Engineering, Study Program in Automation Technology and Maintenance, Automation Assembler",
      period: "Aug 2006 - May 2009",
      highlights: [
        "Electrical installations and wiring",
        "Automation system maintenance",
        "Electrical components",
        "Digital control components",
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
};
