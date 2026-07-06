import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import {
  ArrowRight, Boxes, ShieldCheck, ServerCog, Lightbulb, AppWindow, Users, ShoppingCart, Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services — Platform & Horizontal Delivery",
  description:
    "From enterprise platform integration (SAP, Oracle, Workday, Salesforce) to vendor-agnostic cybersecurity, managed services, and staffing — KOV delivers the services that keep your technology running.",
};

const PLATFORM = [
  { title: "SAP", desc: "S/4HANA, SuccessFactors, Ariba, Fiori, BTP, Basis & staffing.", href: "/platform-services/sap/" },
  { title: "Oracle", desc: "Fusion Cloud, NetSuite, EBS, and database services.", href: "/platform-services/oracle/" },
  { title: "Workday", desc: "HCM, Financials, Adaptive Planning & integrations.", href: "/platform-services/workday/" },
  { title: "Salesforce", desc: "Sales, Service & Marketing Cloud implementation and CPQ.", href: "/platform-services/salesforce/" },
  { title: "ServiceNow", desc: "ITSM, ITOM, and HR Service Delivery.", href: "/platform-services/servicenow/" },
];

const HORIZONTAL = [
  { icon: ShieldCheck, title: "Cybersecurity", desc: "MDR/SOC, penetration testing, GRC & compliance, IAM, security staffing.", href: "/services/cybersecurity/" },
  { icon: ServerCog, title: "Managed Services", desc: "Managed IT, NOC, helpdesk, and endpoint management around the clock.", href: "/services/managed-services/" },
  { icon: Layers, title: "Infrastructure Services", desc: "Data center, network, and cloud operations engineering.", href: "/services/infrastructure/" },
  { icon: Lightbulb, title: "Advisory & Consulting", desc: "IT strategy, digital transformation, and architecture reviews.", href: "/services/advisory/" },
  { icon: AppWindow, title: "Application Services", desc: "Custom development, QA, and ongoing application maintenance.", href: "/services/application-services/" },
  { icon: Users, title: "Talent Orchestration", desc: "Contract, permanent, and offshore delivery pods & RPO.", href: "/services/talent-orchestration/" },
  { icon: ShoppingCart, title: "Procurement & Renewals", desc: "eProcurement, custom catalogs, warranty and renewal management.", href: "/services/procurement/" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Services
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              Services that keep your technology moving.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              We deliver two complementary families of service: deep, vendor-specific{" "}
              <strong className="text-cobalt">Platform Services</strong> for the enterprise systems you
              run, and vendor-agnostic{" "}
              <strong className="text-cobalt">Horizontal Services</strong> that secure, manage, and
              scale everything else.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact/" variant="cta" withArrow>Talk to an Expert</Button>
              <Button href="/platform-services/" variant="outline">Platform Services</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Platform Services */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Platform Services"
            title="Integrators for your enterprise platforms"
            intro="When your business runs on SAP, Oracle, Workday, Salesforce, or ServiceNow, you need specialists who know the platform end to end — implementation, migration, integration, and staffing."
            align="left"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt">
                  <Boxes className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-cobalt">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-flame">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Horizontal Services */}
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Horizontal Services"
            title="Vendor-agnostic services for the whole estate"
            intro="Capabilities we deliver regardless of the technology underneath — the services that secure, run, and grow your organization."
            align="left"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HORIZONTAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-flame-50 text-flame">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-cobalt">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.desc}</p>
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
