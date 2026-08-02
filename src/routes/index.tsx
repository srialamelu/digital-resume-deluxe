import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Publications, Certifications } from "@/components/portfolio/Publications";
import { Contact } from "@/components/portfolio/Contact";
import { profile } from "@/data/profile";

const title = "Srialamelumangai Mathivanan — Business Analyst";
const description =
  "Business Analyst with 6+ years across aerospace and retail analytics in the UK, US, Europe and India. Power BI, SQL, SAP, Spotfire and Smartsheet.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.title} · Thanjavur, India</p>
        </div>
      </footer>
    </div>
  );
}
