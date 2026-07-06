import type { Metadata } from "next";
import { HubTemplate } from "@/components/hub-template";
import {
  Boxes, Users, ShoppingCart, LayoutGrid, Server, Banknote, Package,
  Truck, UserCog,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SAP Services — Implementation, Migration & Staffing",
  description:
    "End-to-end SAP services: S/4HANA implementation, SuccessFactors, Ariba, Fiori, module rollouts, and SAP staffing — delivered by certified consultants.",
};

export default function SapPage() {
  return (
    <HubTemplate
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Platform Services", href: "/platform-services/" },
        { label: "SAP" },
      ]}
      eyebrow="Platform Services · SAP"
      title="Your SAP partner, from strategy to support."
      intro="We plan, implement, migrate, and run SAP for enterprises — combining certified functional and technical consultants with a flexible offshore delivery model and staffing on demand."
      primary={{ label: "Talk to an SAP Expert", href: "/contact/" }}
      secondary={{ label: "All Platform Services", href: "/platform-services/" }}
      sections={[
        {
          eyebrow: "Implementation & modules",
          title: "SAP capabilities we deliver",
          intro: "Full-lifecycle services across the SAP suite — implementation, rollout, and optimization.",
          accent: "cobalt",
          items: [
            { title: "S/4HANA Implementation", desc: "Greenfield, brownfield, and selective migration to S/4HANA.", href: "/platform-services/sap-s-4-hana-implementation/", icon: Boxes },
            { title: "SuccessFactors", desc: "HXM suite implementation and optimization.", href: "/platform-services/sap-successfactors-implementation/", icon: Users },
            { title: "SAP Ariba", desc: "Procurement and supplier collaboration on Ariba.", href: "/platform-services/sap-ariba/", icon: ShoppingCart },
            { title: "SAP Fiori", desc: "Modern UX and Fiori app development.", href: "/platform-services/sap-fiori/", icon: LayoutGrid },
            { title: "Finance & Controlling", desc: "FICO configuration, close, and reporting.", href: "/platform-services/sap-finance-and-controlling/", icon: Banknote },
            { title: "Materials Management", desc: "MM procurement, inventory, and valuation.", href: "/platform-services/sap-materials-management/", icon: Package },
            { title: "Supply Chain (EWM)", desc: "Extended Warehouse Management and logistics.", href: "/platform-services/sap-extended-warehouse-management/", icon: Truck },
            { title: "SAP Basis & Technical", desc: "Installation, upgrades, and system administration.", href: "/platform-services/sap-hybris/", icon: Server },
            { title: "SAP Staffing", desc: "Contract, permanent, and flexi SAP resourcing.", href: "/platform-services/sap-contract-staffing/", icon: UserCog },
          ],
        },
      ]}
      cta={{
        title: "Ready to move your SAP forward?",
        subtitle: "Whether it's a migration, a new module, or extra hands — we can help.",
        cta: "Talk to an SAP Expert",
      }}
    />
  );
}
