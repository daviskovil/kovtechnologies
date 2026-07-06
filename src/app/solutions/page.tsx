import type { Metadata } from "next";
import { HubTemplate } from "@/components/hub-template";
import { BrainCircuit, Cloud, Workflow, Laptop, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Solutions — Outcome-Driven Programs",
  description:
    "AI & data, cloud & infrastructure, digital enablement, workplace modernization, and security & continuity — KOV solutions turn technology into business outcomes.",
};

export default function SolutionsPage() {
  return (
    <HubTemplate
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      eyebrow="Solutions"
      title="Technology, aligned to business outcomes."
      intro="Our solutions bring hardware, software, and services together into programs that modernize how you work — secure, scalable, and measurable from day one."
      primary={{ label: "Discuss Your Goals", href: "/contact/" }}
      secondary={{ label: "Browse Services", href: "/services/" }}
      sections={[
        {
          eyebrow: "Solution areas",
          title: "Where we drive transformation",
          intro: "Each solution area combines advisory, implementation, and managed delivery.",
          accent: "cobalt",
          items: [
            { title: "AI & Data", desc: "Generative AI, data engineering, analytics & BI, and MLOps.", href: "/solutions/ai-data/", icon: BrainCircuit },
            { title: "Cloud & Infrastructure", desc: "Cloud migration, DevOps, Kubernetes, hybrid cloud, and FinOps.", href: "/solutions/cloud-infrastructure/", icon: Cloud },
            { title: "Digital Enablement", desc: "App modernization, low-code, integration/APIs, and digital commerce.", href: "/solutions/digital-enablement/", icon: Workflow },
            { title: "Workplace Modernization", desc: "Microsoft 365, endpoint management, VDI, and collaboration.", href: "/solutions/workplace-modernization/", icon: Laptop },
            { title: "Security & Continuity", desc: "Zero trust, disaster recovery, business continuity, and compliance.", href: "/solutions/security-continuity/", icon: ShieldCheck },
          ],
        },
      ]}
      cta={{
        title: "Have a transformation in mind?",
        subtitle: "Bring us the outcome you want — we'll shape the roadmap to get there.",
        cta: "Discuss Your Goals",
      }}
    />
  );
}
