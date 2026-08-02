import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/profile";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation"
      intro="Listed from most recent."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.school} className="surface-card rounded-2xl p-7">
            <GraduationCap className="size-6 text-gold" />
            <h3 className="font-display mt-5 text-2xl">{e.school}</h3>
            <p className="mt-1 text-sm font-semibold text-foreground/90">{e.degree}</p>
            <p className="mt-2 text-sm text-gold">{e.period}</p>
            <p className="text-sm text-muted-foreground">{e.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
