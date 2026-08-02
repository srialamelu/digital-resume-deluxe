import { Mail, MapPin, Phone } from "lucide-react";
import { profile, stats } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="hero-surface relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(70% 60% at 50% 25%, black, transparent)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <p className="eyebrow">Business Analyst · Data & Insights</p>
        <h1 className="font-display mt-5 text-5xl leading-[1.05] sm:text-7xl">
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-gradient-gold">Mathivanan</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.tagline} Six years across aerospace, global retail and consulting in the UK,
          US, Europe and India — building KPI frameworks, automated reporting and the alignment
          that keeps cross-continent programmes on schedule.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-gold/50 hover:text-gold"
          >
            View experience
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-gold" /> {profile.location}
          </span>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${profile.email}`}>
            <Mail className="size-4 text-gold" /> {profile.email}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone className="size-4 text-gold" /> {profile.phone}
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card/80 px-6 py-7 backdrop-blur">
              <dt className="font-display text-3xl text-gradient-gold">{s.value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
