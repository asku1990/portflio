import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Selected work highlighting product design, engineering, and polish.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button
                    key={`${project.title}-${link.label}-${link.href}`}
                    variant="outline"
                    asChild
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
