import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
          <p className="text-muted-foreground">A quick overview of recent roles and impact.</p>
        </div>
        <div className="grid gap-6">
          {experience.map((role, index) => (
            <Card key={`${role.company}-${role.period}`}>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold">{role.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                </div>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {role.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
