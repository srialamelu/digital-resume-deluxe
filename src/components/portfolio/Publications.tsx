import { ArrowUpRight, BookOpen, BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { publications, certifications } from "@/data/profile";

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Published research"
      intro="Peer-reviewed IEEE publications in unmanned aerial systems and control."
    >
      <div className="space-y-4">
        {publications.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-card group flex items-start gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
          >
            <BookOpen className="mt-1 size-5 shrink-0 text-gold" />
            <div className="flex-1">
              <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.author} · <span className="text-gold">{p.venue}</span> · {p.year}
              </p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Courses & certifications"
      intro="Professional development in analytics, business analysis and process automation. Each certificate can be verified on my LinkedIn profile."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-card group flex items-start gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
          >
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-gold" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-xs text-gold">
                Verify credential <ArrowUpRight className="size-3.5" />
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
