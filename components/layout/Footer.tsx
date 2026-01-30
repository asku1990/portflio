import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium">Your Name</p>
          <p className="text-sm text-muted-foreground">
            Frontend Engineer · {portfolioData.contact.location}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:gap-6">
          {portfolioData.contact.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
