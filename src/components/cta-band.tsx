import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Start the conversation with us",
  subtitle = "Tell us what you're trying to achieve — we'll map the hardware, software, and services to get you there.",
  cta = "Schedule a Meeting",
  href = "/contact/",
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="bg-mist py-16">
      <Container>
        <div className="section-dark relative overflow-hidden rounded-3xl px-8 py-12 sm:px-14 sm:py-14">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
              <p className="mt-3 text-cobalt-100">{subtitle}</p>
            </div>
            <Button href={href} variant="cta" withArrow className="shrink-0">
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
