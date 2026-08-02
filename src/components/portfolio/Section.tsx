import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">{title}</h2>
        <div className="gold-rule mt-5 h-px w-24 opacity-80" />
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
