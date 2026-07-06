import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { POSTS, POSTS_BY_DATE, getPost } from "@/content/blog";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

// Only the known legacy post slugs render here; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS_BY_DATE.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <section className="hero-gradient">
        <Container className="py-16 lg:py-20">
          <nav className="mb-6 text-sm text-slate">
            <Link href="/" className="hover:text-cobalt">Home</Link>
            <span className="mx-2 text-ink/30">/</span>
            <Link href="/blog/" className="hover:text-cobalt">Blog</Link>
            <span className="mx-2 text-ink/30">/</span>
            <span className="text-cobalt">{post.category}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs">
              <span
                className={cn(
                  "rounded-full px-3 py-1 font-semibold",
                  post.category === "Technology" ? "bg-cobalt-50 text-cobalt" : "bg-flame-50 text-flame",
                )}
              >
                {post.category}
              </span>
              <span className="text-slate">{fmtDate(post.date)}</span>
              <span className="inline-flex items-center gap-1.5 text-slate">
                <Clock className="h-3.5 w-3.5" /> {post.readMins} min read
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-cobalt sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-ink">{post.excerpt}</p>
            <div className="mt-8 space-y-6">
              {post.body.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate">{para}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-ink/8 bg-mist p-6">
              <p className="text-sm text-slate">
                Want to put this into practice? KOV Technologies helps organizations plan, implement,
                and support enterprise technology end to end.
              </p>
              <Link href="/contact/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Link href="/blog/" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-flame">
              <ArrowLeft className="h-4 w-4" /> Back to all posts
            </Link>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-mist py-16">
          <Container>
            <h2 className="text-2xl font-bold text-cobalt">Related reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs text-slate">{fmtDate(p.date)}</span>
                  <h3 className="mt-2 flex-1 font-bold leading-snug text-cobalt">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                    Read <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </article>
  );
}
