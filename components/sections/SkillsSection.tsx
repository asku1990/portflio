import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="text-muted-foreground">
            A snapshot of the tools and disciplines I work with daily.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category}>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
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
