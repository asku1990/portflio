import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function CtaSection() {
  const { cta } = portfolioData;

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Card className="border-border/60 bg-muted/40">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                {cta.title}
              </h2>
              <p className="text-muted-foreground">{cta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={cta.primary.href}>{cta.primary.label}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
