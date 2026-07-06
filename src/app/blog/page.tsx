import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { POSTS_BY_DATE } from "@/content/blog";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights on SAP, enterprise technology, cloud, cybersecurity, and IT talent from the KOV Technologies team.",
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Insights
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              The KOV Technologies Blog
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Practical perspectives on SAP, enterprise technology, cloud, cybersecurity, and building
              high-performing IT teams.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS_BY_DATE.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 font-semibold",
                      p.category === "Technology" ? "bg-cobalt-50 text-cobalt" : "bg-flame-50 text-flame",
                    )}
                  >
                    {p.category}
                  </span>
                  <span className="text-slate">{fmtDate(p.date)}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-cobalt">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate">
                    <Clock className="h-3.5 w-3.5" /> {p.readMins} min read
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-flame">
                    Read <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
