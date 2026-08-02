import { Section } from "./Section";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've delivered"
      intro="Six years of business analysis, data analytics and project support across the UK, US, Europe and India — listed from most recent."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
        {experience.map((role) => (
          <li key={role.company + role.period} className="relative">
            <span className="gold-rule absolute -left-[31px] top-2 size-2.5 rounded-full sm:-left-[47px]" />
            <article className="surface-card rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl">{role.company}</h3>
                <span className="text-sm text-gold">{role.period}</span>
              </div>
              <p className="mt-1 text-sm font-semibold tracking-wide text-foreground/90">
                {role.role} · <span className="font-normal text-muted-foreground">{role.location}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold/80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {role.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] tracking-wide text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
