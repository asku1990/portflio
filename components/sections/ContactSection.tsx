"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">{contact.title}</h2>
          <p className="text-muted-foreground">{contact.description}</p>
        </div>
        <Card className="max-w-2xl">
          <CardContent className="flex flex-wrap items-center gap-2 p-6">
            <Button asChild size="sm">
              <Link href={`mailto:${contact.email}`}>Email me</Link>
            </Button>
            <span className="text-muted-foreground/60 text-sm" aria-hidden>
              ·
            </span>
            {contact.socials.map((social) => (
              <Button key={social.href} asChild variant="outline" size="sm">
                <Link href={social.href} className="inline-flex items-center gap-1.5">
                  <SocialIcon label={social.label} href={social.href} />
                  {social.label}
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
