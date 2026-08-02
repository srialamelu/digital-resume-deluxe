import { useState, type FormEvent } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
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
      toast.success("Thank you — your message has been sent.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please email me directly instead.");
    }
  }

  const field =
    "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-gold/60";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      intro="Open to Business Analyst and Data Analyst roles, available to relocate and able to join immediately."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="surface-card flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-5 text-gold" />
            <span className="text-sm">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="surface-card flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5 text-gold" />
            <span className="text-sm">{profile.phone}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-card flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="size-5 text-gold" />
            <span className="text-sm">linkedin.com/in/srialamelumangai</span>
          </a>
        </div>

        <form onSubmit={onSubmit} className="surface-card rounded-2xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs tracking-[0.18em] text-gold uppercase">
                Name
              </label>
              <input id="name" name="name" required className={`${field} mt-2`} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs tracking-[0.18em] text-gold uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`${field} mt-2`}
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="text-xs tracking-[0.18em] text-gold uppercase">
              Subject
            </label>
            <input id="subject" name="subject" className={`${field} mt-2`} placeholder="How can I help?" />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-xs tracking-[0.18em] text-gold uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${field} mt-2 resize-none`}
              placeholder="Tell me about the role or project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
