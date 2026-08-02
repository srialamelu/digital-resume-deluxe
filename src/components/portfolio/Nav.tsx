import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-tight">
          <span className="text-gradient-gold">S</span>
          <span className="text-foreground">. Mathivanan</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold transition-colors hover:bg-gold/10"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
