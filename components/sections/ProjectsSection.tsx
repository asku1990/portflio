"use client";

import { useState } from "react";
import Image from "next/image";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { portfolioData } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
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
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant="outline">{project.projectType}</Badge>
                  {project.company && <Badge variant="secondary">{project.company}</Badge>}
                </div>
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
                {project.details && (
                  <Button variant="outline" onClick={() => setDetailsProject(project)}>
                    Case study
                  </Button>
                )}
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

      <Dialog
        open={detailsProject !== null}
        onOpenChange={(open) => {
          if (!open) setDetailsProject(null);
        }}
      >
        <DialogContent
          className="max-h-[90vh] max-w-2xl overflow-y-auto sm:max-w-2xl"
          showCloseButton
        >
          {detailsProject?.details && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <DialogTitle>{detailsProject.title}</DialogTitle>
                  <Badge variant="outline">{detailsProject.projectType}</Badge>
                  {detailsProject.company && (
                    <Badge variant="secondary">{detailsProject.company}</Badge>
                  )}
                </div>
                <DialogDescription>{detailsProject.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2">
                {detailsProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {detailsProject.details.overview && (
                <p className="text-muted-foreground text-sm">{detailsProject.details.overview}</p>
              )}
              <div className="space-y-4">
                {detailsProject.details.sections.map((section) => (
                  <div key={section.heading} className="space-y-2">
                    <h4 className="font-semibold">{section.heading}</h4>
                    <p className="text-muted-foreground text-sm">{section.body}</p>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="text-muted-foreground list-inside list-disc text-sm">
                        {section.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              {detailsProject.details.media && detailsProject.details.media.length > 0 && (
                <div className="space-y-2">
                  {detailsProject.details.media.map((item, i) => (
                    <figure key={i} className="space-y-1">
                      {item.kind === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.alt ?? ""}
                          width={800}
                          height={450}
                          className="rounded-md border object-contain"
                          unoptimized
                        />
                      ) : (
                        <video src={item.src} controls className="rounded-md border w-full" />
                      )}
                      {item.caption && (
                        <figcaption className="text-muted-foreground text-xs">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
