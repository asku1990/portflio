"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { hero } = portfolioData;
  const [activeId, setActiveId] = useState(navItems[0]?.href.replace("#", "") ?? "");

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setActiveId(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) {
          return;
        }
        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        setActiveId(mostVisible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          {hero.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href.replace("#", ""))}
              className={cn(
                "transition-colors hover:text-foreground",
                activeId === item.href.replace("#", "")
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground",
              )}
              aria-current={activeId === item.href.replace("#", "") ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm">
          <Link href="#contact" onClick={(event) => handleNavClick(event, "contact")}>
            Let's Talk
          </Link>
        </Button>
      </div>
    </header>
  );
}
