import { Mail, MapPin, Linkedin } from "lucide-react";
import { profile, stats } from "@/data/profile";
import portrait from "@/assets/sri-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <p className="eyebrow">Business Analyst · Data &amp; Insights</p>
          <h1 className="font-display mt-5 text-4xl leading-[1.08] sm:text-6xl">
            Srialamelumangai
            <br />
            Mathivanan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline} Six years across aerospace, global retail and consulting in the UK,
            US, Europe and India — building KPI frameworks, automated reporting and the alignment
            that keeps cross-continent programmes on schedule.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="rounded-md border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              View experience
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-gold" /> {profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${profile.email}`}>
              <Mail className="size-4 text-gold" /> {profile.email}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-foreground"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin className="size-4 text-gold" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="surface-card overflow-hidden rounded-2xl p-2">
            <img
              src={portrait}
              alt="Portrait of Srialamelumangai Mathivanan, Business Analyst"
              className="h-auto w-full rounded-xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-14 grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border px-0 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card px-6 py-7">
            <dt className="font-display text-3xl text-primary">{s.value}</dt>
            <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
