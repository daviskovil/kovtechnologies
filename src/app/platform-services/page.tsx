import type { Metadata } from "next";
import { HubTemplate } from "@/components/hub-template";
import { Boxes, Database, Users, Cloud, LayoutGrid, Workflow, ShoppingCart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Services — Enterprise Platform Integrators",
  description:
    "KOV is your implementation, integration, and staffing partner for SAP, Oracle, Workday, Salesforce, ServiceNow, and Shopify — deep expertise across the platforms your business runs on.",
};

export default function PlatformServicesPage() {
  return (
    <HubTemplate
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Platform Services" }]}
      eyebrow="Platform Services"
      title="Integrators for the platforms you run on."
      intro="When your business depends on a major enterprise platform, you need specialists who know it end to end — implementation, migration, integration, support, and staffing."
      primary={{ label: "Talk to a Specialist", href: "/contact/" }}
      secondary={{ label: "Horizontal Services", href: "/services/" }}
      sections={[
        {
          eyebrow: "Platforms",
          title: "Enterprise platforms we specialize in",
          intro: "Certified expertise and delivery pods for each platform's full lifecycle.",
          accent: "cobalt",
          items: [
            { title: "SAP", desc: "S/4HANA, SuccessFactors, Ariba, Fiori, Basis, and staffing.", href: "/platform-services/sap/", icon: Boxes },
            { title: "Oracle", desc: "Fusion Cloud, NetSuite, EBS, and database services.", href: "/platform-services/oracle/", icon: Database },
            { title: "Workday", desc: "HCM, Financials, Adaptive Planning, and integrations.", href: "/platform-services/workday/", icon: Users },
            { title: "Salesforce", desc: "Sales, Service & Marketing Cloud, and CPQ.", href: "/platform-services/salesforce/", icon: Cloud },
            { title: "Microsoft Dynamics", desc: "Dynamics 365 ERP and CRM implementation.", href: "/platform-services/microsoft-dynamics/", icon: LayoutGrid },
            { title: "ServiceNow", desc: "ITSM, ITOM, and HR Service Delivery.", href: "/platform-services/servicenow/", icon: Workflow },
            { title: "Shopify", desc: "Storefront builds and back-office support.", href: "/platform-services/shopify-back-office-support/", icon: ShoppingCart },
          ],
        },
        {
          eyebrow: "Cross-platform",
          title: "Platform-agnostic enterprise services",
          intro: "Where the right answer spans vendors, we bring independent expertise across CRM, marketing, and ERP.",
          accent: "flame",
          tone: "mist",
          items: [
            { title: "CRM, Sales & Marketing Automation", desc: "Salesforce, HubSpot & Dynamics — unified and automated.", href: "/platform-services/crm-sales-and-marketing-automation/", icon: TrendingUp },
            { title: "ERP & Enterprise Systems", desc: "Vendor-independent ERP selection and delivery.", href: "/platform-services/erp-and-enterprise-systems/", icon: Boxes },
          ],
        },
      ]}
      cta={{
        title: "Planning a platform project?",
        subtitle: "From a single integration to a full implementation — let's scope it together.",
        cta: "Talk to a Specialist",
      }}
    />
  );
}
