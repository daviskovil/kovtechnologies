import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about KOV Technologies — our IT hardware, software, and services, engagement models, platforms, delivery, and support.",
  alternates: { canonical: "/faq/" },
};

const GROUPS: { heading: string; faqs: { q: string; a: string }[] }[] = [
  {
    heading: "About KOV",
    faqs: [
      { q: "What does KOV Technologies do?", a: "KOV Technologies is a single partner for IT hardware, software, and services. We help organizations source technology, implement and integrate enterprise platforms, secure and manage their IT, and staff specialist talent — end to end." },
      { q: "Where is KOV located and which regions do you serve?", a: "We operate from offices in New York (USA) and Pune (India), and deliver across the Americas, EMEA, and APAC using a blended onshore/offshore model." },
      { q: "What size of company do you work with?", a: "We work with both mid-market enterprises and SMBs, as well as startups and government clients. Our flexible engagement models scale to the size and maturity of your organization." },
    ],
  },
  {
    heading: "Services",
    faqs: [
      { q: "What IT services do you offer?", a: "Our services span four pillars: Hardware (procurement), Software (licensing), Solutions (AI & data, cloud, workplace, security), and Services — including platform integration, cybersecurity, managed services, infrastructure, advisory, application services, and staffing." },
      { q: "Do you provide both hardware and software?", a: "Yes. We source and configure IT hardware and license and deploy software, and we can manage the full lifecycle including procurement, renewals, and asset management." },
      { q: "Can you manage our entire IT environment?", a: "Yes. Through our managed services, we can run your IT 24/7 — monitoring, helpdesk, endpoint management, patching, and backup — or co-manage alongside your internal team." },
    ],
  },
  {
    heading: "Platforms & staffing",
    faqs: [
      { q: "Which enterprise platforms do you specialize in?", a: "We are integrators and implementation partners for SAP, Oracle, Workday, Salesforce, Microsoft Dynamics, ServiceNow, and Shopify — covering implementation, migration, integration, and support." },
      { q: "Do you provide SAP services and staffing?", a: "Yes. We deliver the full SAP lifecycle — S/4HANA, SuccessFactors, Ariba, Fiori, and every major module — and provide SAP staffing on a permanent, contract, or flexi basis." },
      { q: "Can you provide specialists to join our team?", a: "Yes. Our talent orchestration service places vetted, certified specialists into your team on contract, permanent, or offshore-pod models, often within days." },
    ],
  },
  {
    heading: "Engagement & delivery",
    faqs: [
      { q: "How do engagements typically start?", a: "Most engagements begin with a short discovery call where we understand your goals and challenges, followed by a tailored proposal covering scope, approach, timeline, and pricing." },
      { q: "What engagement models do you offer?", a: "We offer project-based delivery, managed services (fixed monthly fee), staff augmentation, and flexible resourcing — so you can choose the model that fits each need." },
      { q: "How is pricing structured?", a: "Pricing depends on the engagement: fixed-price or time-and-materials for projects, a predictable monthly fee for managed services, and rate-based pricing for staffing. We're transparent about costs from the outset." },
      { q: "Do you offer offshore delivery?", a: "Yes. Our India-based delivery center provides cost-efficient offshore and follow-the-sun capacity, blended with onshore resources for the right balance of cost, quality, and coverage." },
      { q: "Do you provide 24/7 support?", a: "Yes. We offer 24/7 support and monitoring for managed-services and critical-system clients, with response times defined in your SLA." },
      { q: "How do you ensure security and compliance?", a: "Security is built into everything we deliver — least-privilege access, vetted staff, and documented controls. Our dedicated cybersecurity practice adds MDR, testing, GRC, and compliance support (ISO 27001, SOC 2, HIPAA, PCI-DSS)." },
    ],
  },
];

export default function FaqPage() {
  const allFaqs = GROUPS.flatMap((g) => g.faqs);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> FAQ
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Everything you need to know about working with KOV Technologies. Can&apos;t find your
              answer? <a href="/contact/" className="font-semibold text-flame hover:underline">Get in touch</a>.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {GROUPS.map((group) => (
              <div key={group.heading}>
                <h2 className="text-xl font-bold text-cobalt">{group.heading}</h2>
                <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {group.faqs.map((f) => (
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
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
