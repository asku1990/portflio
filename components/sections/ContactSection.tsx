import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            {contact.title}
          </h2>
          <p className="text-muted-foreground">{contact.description}</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Email:{" "}
              <Link
                href={`mailto:${contact.email}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {contact.email}
              </Link>
            </p>
            <p>Location: {contact.location}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {contact.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Quick message</p>
              <p className="text-sm text-muted-foreground">
                This form is a placeholder for future integrations.
              </p>
            </div>
            <div className="space-y-3">
              <Input placeholder="Your name" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="How can I help?" />
            </div>
            <Button type="button" className="w-full">
              Send message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
