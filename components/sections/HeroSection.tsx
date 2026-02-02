import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{hero.tagline}</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {hero.name} <span className="text-muted-foreground">· {hero.role}</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{hero.summary}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
