import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { POSTS_BY_DATE, type BlogCategory } from "@/content/blog";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";

// Legacy WordPress category archives, preserved.
const CATEGORIES: Record<string, { title: string; category: BlogCategory; blurb: string }> = {
  technology: {
    title: "Technology",
    category: "Technology",
    blurb: "Insights on SAP, enterprise technology, cloud, AI, and digital transformation.",
  },
  blog: {
    title: "IT Staffing & Talent",
    category: "IT Staffing",
    blurb: "Perspectives on IT staffing, offshore delivery, and building high-performing teams.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CATEGORIES[slug];
  if (!c) return {};
  return {
    title: `${c.title} Articles`,
    description: c.blurb,
    alternates: { canonical: `/category/${slug}/` },
  };
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CATEGORIES[slug];
  if (!c) notFound();

  const posts = POSTS_BY_DATE.filter((p) => p.category === c.category);

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <nav className="mb-6 text-sm text-slate">
            <Link href="/" className="hover:text-cobalt">Home</Link>
            <span className="mx-2 text-ink/30">/</span>
            <Link href="/blog/" className="hover:text-cobalt">Blog</Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-cobalt">{c.title}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Category
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">{c.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">{c.blurb}</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className={cn("rounded-full px-3 py-1 font-semibold", p.category === "Technology" ? "bg-cobalt-50 text-cobalt" : "bg-flame-50 text-flame")}>
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
