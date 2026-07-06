import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import {
  ShieldCheck, Radar, Bug, ScrollText, KeyRound, UserCog, ArrowRight, Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Services — MDR, Pen Testing, GRC & IAM",
  description:
    "Managed detection & response, penetration testing, GRC & compliance, identity management, and security staffing. KOV keeps your systems secure, compliant, and resilient.",
};

const CAPABILITIES = [
  { icon: Radar, title: "Managed Detection & Response", desc: "24/7 SOC monitoring, threat hunting, and rapid incident response across your estate." },
  { icon: Bug, title: "Penetration Testing", desc: "Network, application, and cloud assessments that find weaknesses before attackers do." },
  { icon: ScrollText, title: "GRC & Compliance", desc: "Readiness and audit support for ISO 27001, SOC 2, GDPR, HIPAA, and PCI-DSS." },
  { icon: KeyRound, title: "Identity & Access", desc: "Zero-trust IAM, SSO, MFA, and privileged access management done right." },
  { icon: UserCog, title: "Security Staffing", desc: "Vetted security engineers and analysts embedded into your team, on demand." },
  { icon: ShieldCheck, title: "Security Advisory", desc: "vCISO guidance, architecture reviews, and a pragmatic roadmap to maturity." },
];

const STEPS = [
  { n: "01", t: "Assess", d: "We baseline your current posture, map assets, and quantify risk against a recognized framework." },
  { n: "02", t: "Harden", d: "We close gaps — controls, identity, endpoints, and cloud — prioritized by real-world impact." },
  { n: "03", t: "Monitor", d: "Our SOC watches around the clock, detecting and containing threats in minutes, not days." },
  { n: "04", t: "Evolve", d: "Continuous testing, reporting, and advisory keep you ahead of an evolving threat landscape." },
];

const OUTCOMES = [
  "Reduce breach risk with defense-in-depth",
  "Pass audits with documented, evidenced controls",
  "Cut mean-time-to-detect from days to minutes",
  "Extend your team with on-demand security talent",
];

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <nav className="mb-6 text-sm text-slate">
            <a href="/" className="hover:text-cobalt">Home</a>
            <span className="mx-2 text-ink/30">/</span>
            <a href="/services/" className="hover:text-cobalt">Services</a>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-cobalt">Cybersecurity</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Horizontal Services
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              Cybersecurity Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Threats don&apos;t care which vendor you run. Our vendor-agnostic security practice
              protects your people, data, and infrastructure — detecting, responding, and hardening
              across your entire technology estate.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact/" variant="cta" withArrow>Book a Security Review</Button>
              <Button href="/solutions/security-continuity/" variant="outline">Security &amp; Continuity</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="A complete security practice"
            intro="From round-the-clock monitoring to compliance and talent, we cover the full lifecycle of enterprise security."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-flame-50 text-flame">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-cobalt">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works (dark) */}
      <section className="section-dark py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A proven path to resilience"
            intro="A clear, repeatable engagement model that turns security from a worry into a managed program."
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/15 bg-white/5 p-7">
                <span className="font-display text-3xl font-extrabold text-flame">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cobalt-100">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why KOV"
                title="Security outcomes, not just tools"
                intro="We measure success by risk reduced and audits passed — with a delivery model that flexes to your budget."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {OUTCOMES.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame-50 text-flame">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-slate">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-ink/8 bg-mist p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { k: "24/7", v: "SOC monitoring" },
                  { k: "<15 min", v: "Threat response SLA" },
                  { k: "5+", v: "Compliance frameworks" },
                  { k: "100%", v: "Vetted security talent" },
                ].map((stat) => (
                  <div key={stat.v} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <p className="font-display text-3xl font-extrabold text-cobalt">{stat.k}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate">{stat.v}</p>
                  </div>
                ))}
              </div>
              <a
                href="/services/"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-flame"
              >
                See all services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Worried about your security posture?"
        subtitle="Get a no-obligation security review and a prioritized roadmap from our specialists."
        cta="Book a Security Review"
      />
    </>
  );
}
