import type { Metadata } from "next";
import { HubTemplate } from "@/components/hub-template";
import {
  AppWindow, ShieldCheck, Boxes, LayoutGrid, Database, Code2, Palette,
  MessagesSquare, Server, KeyRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Software Licensing",
  description:
    "Business applications, security, virtualization, and developer tools — KOV advises, licenses, and deploys the right software with the best commercial terms.",
};

export default function SoftwarePage() {
  return (
    <HubTemplate
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Software" }]}
      eyebrow="Software"
      title="The right software, licensed the smart way."
      intro="From business applications to security and developer tooling — we help you choose, license, and deploy software with the best commercial terms and a clean rollout."
      primary={{ label: "Get Licensing Advice", href: "/contact/" }}
      secondary={{ label: "Explore Solutions", href: "/solutions/" }}
      sections={[
        {
          eyebrow: "Browse software",
          title: "Categories we license & deploy",
          intro: "Publisher-agnostic advice, competitive licensing, and hands-on deployment.",
          accent: "cobalt",
          items: [
            { title: "Business Applications", desc: "ERP, CRM, HCM, SCM, and finance suites.", href: "/software/business-applications/", icon: LayoutGrid },
            { title: "Security", desc: "Endpoint, firewall, email security, identity, and SIEM.", href: "/software/security/", icon: ShieldCheck },
            { title: "Virtualization", desc: "Hypervisors, VDI, and container platforms.", href: "/software/virtualization/", icon: Boxes },
            { title: "Operating Systems", desc: "Server and desktop OS licensing and management.", href: "/software/operating-systems/", icon: Server },
            { title: "Data & Databases", desc: "Databases, warehousing, and analytics platforms.", href: "/software/data-databases/", icon: Database },
            { title: "Dev & Web", desc: "IDEs, developer tools, and web platforms.", href: "/software/development/", icon: Code2 },
            { title: "Graphics & Design", desc: "Creative and design software for every team.", href: "/software/graphics-design/", icon: Palette },
            { title: "Communication", desc: "Collaboration, messaging, and conferencing suites.", href: "/software/communication/", icon: MessagesSquare },
            { title: "Productivity & Apps", desc: "Everyday business apps and utilities.", href: "/software/business-applications/", icon: AppWindow },
            { title: "Licensing & Subscriptions", desc: "Renewals, true-ups, and subscription optimization.", href: "/software/licensing/", icon: KeyRound },
          ],
        },
      ]}
      cta={{
        title: "Overpaying on software?",
        subtitle: "We'll review your licensing estate and find the savings — no obligation.",
        cta: "Book a Licensing Review",
      }}
    />
  );
}
