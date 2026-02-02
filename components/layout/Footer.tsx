import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {portfolioData.hero.name} · {portfolioData.hero.role} · {portfolioData.contact.location}
        </p>
        <p className="text-xs text-muted-foreground">
          © {year} {portfolioData.hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
