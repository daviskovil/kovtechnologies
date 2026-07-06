import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { HeroIllustration } from "@/components/hero-illustration";
import { Cpu, Code2, Cloud, ShieldCheck, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: Cpu, title: "Hardware", desc: "Procurement of computers, networking, storage, and everything in between.", href: "/hardware/" },
  { icon: Code2, title: "Software", desc: "Licensing and deployment across business apps, security, and infrastructure.", href: "/software/" },
  { icon: Cloud, title: "Solutions", desc: "Outcome-driven programs — AI & data, cloud, and workplace modernization.", href: "/solutions/" },
  { icon: ShieldCheck, title: "Services", desc: "Platform integration, managed services, cybersecurity, and staffing.", href: "/services/" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero (placeholder — production homepage design lives on the current site) */}
      <section className="hero-gradient">
        <Container className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> End-to-end technology partner
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] text-cobalt sm:text-5xl lg:text-6xl">
              Your Single Partner For IT Hardware, Software, And Services.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Empowering organizations with end-to-end technology — from procurement to
              implementation, managed services, and offshore delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact/" variant="cta" withArrow>Let&apos;s Talk</Button>
              <Button href="/services/" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <HeroIllustration />
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-cobalt">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
