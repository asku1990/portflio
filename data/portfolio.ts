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

export type Project = {
  title: string;
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
    name: "Your Name",
    role: "Frontend Engineer",
    tagline: "Building clean, fast, and accessible web experiences.",
    summary:
      "I design and ship thoughtful interfaces with strong UX foundations, reliable performance, and delightful interactions.",
    location: "Remote · Based in City, Country",
    availability: "Open to full-time roles and freelance projects.",
    ctaPrimary: {
      label: "View Projects",
      href: "#projects",
    },
    ctaSecondary: {
      label: "Get In Touch",
      href: "#contact",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "I am a frontend engineer with a focus on design systems, responsive UI, and performance optimization.",
      "I enjoy collaborating with product teams to turn complex requirements into simple, elegant user experiences.",
    ],
    highlights: [
      { label: "Years of experience", value: "5+" },
      { label: "Projects shipped", value: "20+" },
      { label: "Primary stack", value: "React · TypeScript · Next.js" },
    ],
  },
  projects: [
    {
      title: "Portfolio Redesign",
      description:
        "A modern, responsive portfolio with a focus on readability, motion, and fast load times.",
      tags: ["Next.js", "Tailwind CSS", "Motion"],
      image: "/globe.svg",
      links: [
        { label: "Live Demo", href: "https://example.com" },
        { label: "Case Study", href: "https://example.com" },
      ],
    },
    {
      title: "Analytics Dashboard",
      description:
        "A data-rich dashboard for monitoring key business metrics in real time.",
      tags: ["React", "TanStack Query", "Charts"],
      image: "/window.svg",
      links: [
        { label: "Live Demo", href: "https://example.com" },
        { label: "Repository", href: "https://github.com/your-handle" },
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "UI/UX",
      items: ["Design Systems", "Accessibility", "Responsive Design"],
    },
    {
      category: "Tooling",
      items: ["Storybook", "Vite", "ESLint", "Playwright"],
    },
  ],
  experience: [
    {
      company: "Studio One",
      role: "Senior Frontend Engineer",
      period: "2022 — Present",
      location: "Remote",
      highlights: [
        "Led a UI refresh that improved conversion by 18%.",
        "Built a design system used across 4 product lines.",
        "Reduced bundle size by 22% through targeted optimizations.",
      ],
    },
    {
      company: "Bright Labs",
      role: "Frontend Engineer",
      period: "2019 — 2022",
      location: "New York, NY",
      highlights: [
        "Shipped an enterprise dashboard used by 3,000+ users.",
        "Implemented accessibility improvements across core flows.",
      ],
    },
  ],
  contact: {
    title: "Contact",
    description:
      "Have a project in mind or want to collaborate? Let's talk.",
    email: "you@example.com",
    location: "City, Country",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
      { label: "GitHub", href: "https://github.com/your-handle" },
      { label: "Twitter", href: "https://twitter.com/your-handle" },
    ],
  },
  cta: {
    title: "Ready to build something great?",
    description: "Let's create a fast, polished, and accessible experience.",
    primary: { label: "Schedule a Call", href: "#contact" },
    secondary: { label: "Download CV", href: "#cv" },
  },
};
