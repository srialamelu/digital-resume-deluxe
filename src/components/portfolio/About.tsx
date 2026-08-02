import { Section } from "./Section";
import { skills } from "@/data/profile";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bridge between engineering detail and business clarity">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Business Analyst with over six years of international experience across
            aerospace, global retail and professional services. My work sits where operational
            complexity meets decision-making: I take fragmented data from engineering systems,
            ERP platforms and project trackers, and turn it into reporting that leadership teams
            can act on with confidence.
          </p>
          <p>
            At GE Aerospace, through Genpact in Cardiff, I supported New Product Introduction and
            repair industrialisation programmes end to end across the UK, US and Europe. I built
            the KPI dashboards and automated reporting workflows that gave three regional
            leadership teams a single, trusted source of truth, and helped deliver 88 projects
            against an annual target of 84. Earlier, at Tata Consultancy Services for Nielsen, I
            owned retail analytics reporting for a portfolio of more than fifty FMCG brands,
            maintaining SQL and ETL processes that global clients relied on daily.
          </p>
          <p>
            My MSc in Data Analytics from Aston University and BTech in Aerospace Engineering from
            SASTRA University allow me to speak both languages fluently — technical enough to
            interrogate the data, commercial enough to explain what it means. Colleagues tend to
            describe me as calm, dependable and precise, and I take particular care to keep
            stakeholders across time zones informed well before issues become costly.
          </p>
          <p className="text-foreground/90">
            I am currently open to Business Analyst and Data Analyst opportunities, available to
            relocate and able to join immediately.
          </p>
        </div>

        <div className="surface-card rounded-2xl p-7">
          <h3 className="font-display text-2xl">Core capabilities</h3>
          <div className="mt-6 space-y-6">
            {skills.map((s) => (
              <div key={s.group}>
                <p className="text-xs tracking-[0.18em] text-gold uppercase">{s.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
