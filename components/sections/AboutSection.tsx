import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">{about.title}</h2>
          <div className="space-y-4 text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {about.highlights.map((highlight) => (
            <Card key={highlight.label}>
              <CardContent className="space-y-1 p-4">
                <p className="text-sm text-muted-foreground">{highlight.label}</p>
                <p className="text-lg font-semibold">{highlight.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
