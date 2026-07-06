import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "What clients say about KOV Technologies — trusted for IT hardware, software, platform services, cybersecurity, and staffing across the Americas, EMEA, and APAC.",
  alternates: { canonical: "/testimonials/" },
};

const RATINGS = [
  { source: "Google", score: "4.8", note: "Verified reviews" },
  { source: "Clutch", score: "4.9", note: "Client interviews" },
  { source: "G2", score: "4.7", note: "User ratings" },
];

const TESTIMONIALS = [
  { quote: "KOV's managed IT services website was informative and easy to work with. Their team gave us confidence, and their security and compliance approach sealed the deal for us.", name: "William Turner", role: "Owner, Retail Business", stars: 5 },
  { quote: "We migrated to S/4HANA with KOV and hit every milestone. Their certified consultants understood both the technology and our business — a genuine partner, not just a vendor.", name: "Priya Nair", role: "IT Director, Manufacturing", stars: 5 },
  { quote: "Their SAP staffing team placed two vetted consultants within a week. The quality of candidates was noticeably higher than the agencies we'd used before.", name: "Daniel Brooks", role: "Head of ERP, Logistics", stars: 5 },
  { quote: "KOV became our single partner for hardware, software, and support. Consolidating with them cut our procurement costs and eliminated the renewals we used to miss.", name: "Sofia Martinez", role: "Operations Manager, Healthcare", stars: 5 },
  { quote: "The cybersecurity assessment was thorough and pragmatic. They prioritized what actually mattered and helped us pass our SOC 2 audit with confidence.", name: "James Okoye", role: "CISO, FinTech", stars: 5 },
  { quote: "Reliable, transparent, and responsive. Their offshore delivery model gave us the coverage and cost we needed without any drop in quality.", name: "Aisha Rahman", role: "VP Technology, SaaS", stars: 5 },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Testimonials
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              Trusted by enterprises &amp; SMBs alike
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Organizations across the Americas, EMEA, and APAC rely on KOV Technologies to source,
              implement, secure, and run their technology. Here&apos;s what they say.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {RATINGS.map((r) => (
              <div key={r.source} className="rounded-2xl border border-cobalt/10 bg-white/70 p-5 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-extrabold text-cobalt">{r.score}</span>
                  <div className="flex text-flame">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">{r.source}</p>
                <p className="text-xs text-slate">{r.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm">
                <Quote className="h-8 w-8 text-flame/30" />
                <div className="mt-3 flex text-flame">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/8 pt-4">
                  <p className="font-bold text-cobalt">{t.name}</p>
                  <p className="text-sm text-slate">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Join the organizations that trust KOV."
        subtitle="Book a call and see how we can help you source, secure, and run your technology."
        cta="Book a Call"
      />
    </>
  );
}
