import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
          <p className="text-muted-foreground">
            Formal education background supporting my transition into software development.
          </p>
        </div>
        <div className="grid gap-6">
          {education.map((entry) => (
            <Card key={`${entry.school}-${entry.period}`}>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold">{entry.school}</p>
                    <p className="text-sm text-muted-foreground">{entry.degree}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.period}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {entry.highlights.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
