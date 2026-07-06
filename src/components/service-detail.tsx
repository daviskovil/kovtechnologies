import Link from "next/link";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import type { ServiceDetail as Service } from "@/content/services";

const SITE = "https://kovtechnologies.com";

type Base = { label: string; href: string; path: string };
const DEFAULT_BASE: Base = { label: "Services", href: "/services/", path: "/services" };

export function ServiceDetail({ service: s, base = DEFAULT_BASE }: { service: Service; base?: Base }) {
  const url = `${SITE}${base.path}/${s.slug}/`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      serviceType: s.title,
      description: s.answer,
      url,
      provider: {
        "@type": "Organization",
        name: "KOV Technologies",
        url: SITE,
      },
      areaServed: ["United States", "Worldwide"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: base.label, item: `${SITE}${base.href}` },
        { "@type": "ListItem", position: 3, name: s.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="hero-gradient">
        <Container className="py-16 lg:py-20">
          <nav className="mb-6 text-sm text-slate">
            <Link href="/" className="hover:text-cobalt">Home</Link>
            <span className="mx-2 text-ink/30">/</span>
            <Link href={base.href} className="hover:text-cobalt">{base.label}</Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-cobalt">{s.title}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> {s.eyebrow}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">{s.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">{s.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact/" variant="cta" withArrow>{s.ctaLabel ?? "Book a Call"}</Button>
              <Button href={base.href} variant="outline">All {base.label}</Button>
            </div>
          </div>

          {/* quick stat chips */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {s.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border border-cobalt/10 bg-white/70 px-5 py-4 backdrop-blur">
                <p className="font-display text-2xl font-extrabold text-cobalt">{st.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate">{st.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview + AEO answer box */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Overview
            </span>
            <h2 className="text-2xl font-bold text-cobalt sm:text-3xl">
              {s.overviewHeading ?? `What are ${s.title.toLowerCase()}?`}
            </h2>

            <div className="mt-6 rounded-2xl border border-cobalt/10 bg-mist p-6">
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-flame">
                <Sparkles className="h-4 w-4" /> Quick answer
              </div>
              <p className="text-lg font-medium leading-relaxed text-ink">{s.answer}</p>
            </div>

            <div className="mt-6 space-y-5">
              {s.overview.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate">{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="section-dark py-16">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-4">
            {s.stats.map((st) => (
              <div key={st.label}>
                <p className="font-display text-4xl font-extrabold text-white">{st.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-cobalt-100">{st.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title={s.capabilitiesTitle ?? "Capabilities"}
            intro={s.capabilitiesIntro ?? `Everything you get with KOV ${s.title.toLowerCase()} — delivered as one accountable service.`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.capabilities.map((c) => {
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-flame-50 text-flame">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-cobalt">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{c.desc}</p>
                  {c.href && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                      Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  )}
                </>
              );
              return c.href ? (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={c.title}
                  className="flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="The difference" title={s.compare.title} />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="px-6 py-5" />
                  <th className="bg-cobalt-50/60 px-6 py-5 font-bold text-cobalt">{s.compare.withLabel}</th>
                  <th className="px-6 py-5 font-semibold text-slate">{s.compare.withoutLabel}</th>
                </tr>
              </thead>
              <tbody>
                {s.compare.rows.map((r) => (
                  <tr key={r.aspect} className="border-b border-ink/8 last:border-0">
                    <td className="px-6 py-4 font-semibold text-ink">{r.aspect}</td>
                    <td className="bg-cobalt-50/40 px-6 py-4 text-ink">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                        <span>{r.kov}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" />
                        <span>{r.other}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="How it works" title="A clear path to value" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-ink/8 bg-white p-7 shadow-sm">
                <span className="font-display text-3xl font-extrabold text-flame">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-cobalt">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="bg-mist py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading eyebrow="Who it's for" title="Common scenarios we solve" align="left" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {s.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 rounded-xl border border-ink/8 bg-white p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame-50 text-flame">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {s.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-semibold text-cobalt">{f.q}</span>
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalt-50 text-cobalt transition group-open:rotate-45">
                      <span className="text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {s.related.length > 0 && (
        <section className="bg-mist py-20">
          <Container>
            <h2 className="text-2xl font-bold text-cobalt">Related services</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {s.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="font-bold text-cobalt">{r.title}</span>
                  <ArrowRight className="h-5 w-5 text-flame transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand title={s.cta.title} subtitle={s.cta.subtitle} cta={s.ctaLabel ?? "Book a Call"} />
    </>
  );
}
