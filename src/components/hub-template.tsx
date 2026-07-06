import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export type HubItem = { title: string; desc: string; href: string; icon?: LucideIcon };
export type HubSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: HubItem[];
  accent?: "cobalt" | "flame";
  tone?: "light" | "mist";
};
type Crumb = { label: string; href?: string };

export function HubTemplate({
  breadcrumb,
  eyebrow,
  title,
  intro,
  primary,
  secondary,
  sections,
  cta,
}: {
  breadcrumb?: Crumb[];
  eyebrow: string;
  title: string;
  intro: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  sections: HubSection[];
  cta?: { title?: string; subtitle?: string; cta?: string; href?: string };
}) {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          {breadcrumb && (
            <nav className="mb-6 text-sm text-slate">
              {breadcrumb.map((c, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2 text-ink/30">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-cobalt">{c.label}</Link>
                  ) : (
                    <span className="text-cobalt">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {eyebrow}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">{intro}</p>
            {(primary || secondary) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primary && (
                  <Button href={primary.href} variant="cta" withArrow>{primary.label}</Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="outline">{secondary.label}</Button>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      {sections.map((s, si) => (
        <section key={si} className={cn("py-20", s.tone === "mist" && "bg-mist")}>
          <Container>
            <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} align="left" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
                >
                  {it.icon && (
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                        s.accent === "flame" ? "bg-flame-50 text-flame" : "bg-cobalt-50 text-cobalt",
                      )}
                    >
                      <it.icon className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-5 text-lg font-bold text-cobalt">{it.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{it.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                    Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaBand {...(cta ?? {})} />
    </>
  );
}
