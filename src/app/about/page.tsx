import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Globe2, HeartHandshake, Gauge, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About KOV Technologies",
  description:
    "KOV Technologies is your single partner for IT hardware, software, and services — with a management team that has delivered large IT projects across the Americas, EMEA, and APAC.",
};

const VALUES = [
  { icon: HeartHandshake, title: "Partnership first", desc: "We act as an extension of your team, not a transactional vendor — accountable to your outcomes." },
  { icon: Gauge, title: "Delivery that scales", desc: "Flexible engagement models, from project-based work to long-term managed services." },
  { icon: Globe2, title: "Global reach, local touch", desc: "On-ground presence with an offshore delivery model for speed, cost, and coverage." },
  { icon: ShieldCheck, title: "Secure by default", desc: "Security and compliance are built into everything we deliver, not bolted on later." },
];

const STATS = [
  { k: "3", v: "Regions served" },
  { k: "20+", v: "Years leadership experience" },
  { k: "50+", v: "Technologies covered" },
  { k: "24/7", v: "Support & delivery" },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> About Us
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              One partner for everything IT.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              KOV Technologies helps organizations modernize IT operations, secure their data, and
              scale — from sourcing the right hardware and software to implementing, managing, and
              supporting enterprise platforms through a dedicated offshore delivery model.
            </p>
            <div className="mt-8">
              <Button href="/contact/" variant="cta" withArrow>Work With Us</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="bg-dots aspect-[4/3] rounded-3xl ring-1 ring-cobalt/10" />
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Decades of enterprise delivery"
                align="left"
              />
              <p className="mt-6 leading-relaxed text-slate">
                Our management team has spent decades delivering large IT projects across the
                Americas, EMEA, and APAC. We started KOV to give growing enterprises and SMBs a
                single, trusted partner — one that can source a laptop fleet, stand up a cloud
                platform, secure the whole environment, and staff the experts to run it.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Today we combine local vendor relationships with an India-based delivery center to
                offer reliable service, transparent pricing, and long-term support for every
                customer — whether you need a single device or an end-to-end transformation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on how we work"
            intro="The principles that shape every engagement — and why enterprises and SMBs alike trust KOV."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-ink/8 bg-white p-7 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-cobalt">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats (dark) */}
      <section className="section-dark py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.v}>
                <p className="font-display text-4xl font-extrabold text-white">{s.k}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-cobalt-100">{s.v}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
