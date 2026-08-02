import { useState, type FormEvent } from "react";
import { Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/profile";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(profile.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus("sent");
      toast.success("Thank you — I'll send my resume shortly.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please email me directly instead.");
    }
  }

  const field =
    "w-full rounded-md border border-input bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60";
  const label = "text-xs font-semibold tracking-[0.16em] text-foreground/70 uppercase";

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="hero-surface border-t border-border py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="eyebrow">For recruiters</p>
            <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
              Request my full resume
            </h2>
            <div className="gold-rule mt-5 h-px w-24" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Share a few details and I'll send the complete resume, including detailed project
              metrics and references, straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            action={profile.formspree}
            method="POST"
            className="surface-card rounded-2xl p-7 sm:p-8"
          >
            <div>
              <label htmlFor="name" className={label}>
                Full name *
              </label>
              <input id="name" name="name" required className={`${field} mt-2`} placeholder="Jane Doe" />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className={label}>
                Professional email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`${field} mt-2`}
                placeholder="jane@company.com"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="company" className={label}>
                Company / Organisation
              </label>
              <input id="company" name="company" className={`${field} mt-2`} placeholder="Optional" />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 w-full rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Request sent" : "Request Resume"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-gold-soft uppercase">Contact</p>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Hiring for a Business Analyst, Analyst or Team Lead role? Let's talk.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Available immediately and open to relocation. Happy to walk through dashboards, KPI
            frameworks and delivery metrics from any of the programmes above.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
