import {
  Boxes, Users, ShoppingCart, LayoutGrid, Banknote, Package, Truck, Server,
  UserCog, Database, Cloud, BarChart3, ReceiptText, Webhook, PieChart,
  TrendingUp, Headset, Megaphone, Calculator, Workflow, LifeBuoy, Network,
  ShieldCheck, Code2,
} from "lucide-react";
import type { ServiceDetail } from "@/content/services";

/** Platform Services — vendor-specific practices, rendered with the shared ServiceDetail template. */
export const PLATFORMS: ServiceDetail[] = [
  // ─────────────────────────────────────────────────────────── SAP
  {
    slug: "sap",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "SAP Services",
    seoTitle: "SAP Services — Implementation, Migration, Integration & Staffing",
    metaDescription:
      "KOV SAP services: S/4HANA implementation, SuccessFactors, Ariba, Fiori, module rollouts, and SAP staffing — delivered by certified consultants. Book a call.",
    tagline:
      "Your end-to-end SAP partner — from S/4HANA strategy and implementation to module rollouts, integration, and on-demand SAP talent.",
    answer:
      "SAP services cover the planning, implementation, migration, integration, and support of SAP software — including S/4HANA, SuccessFactors, Ariba, and Fiori — delivered by certified consultants who also provide flexible SAP staffing.",
    overview: [
      "SAP runs the core of many enterprises, and getting it right demands specialists who know both the functional modules and the technical platform. KOV brings certified SAP consultants across implementation, migration, and support — with a flexible onshore/offshore model that keeps quality high and cost predictable.",
      "Whether you're moving to S/4HANA, rolling out a new module, integrating SAP with the rest of your estate, or simply need extra certified hands, we cover the full SAP lifecycle and can staff your team on demand.",
    ],
    stats: [
      { value: "20+", label: "SAP modules covered" },
      { value: "Certified", label: "Functional & technical consultants" },
      { value: "On/offshore", label: "Flexible delivery model" },
      { value: "24/7", label: "SAP support option" },
    ],
    capabilities: [
      { title: "S/4HANA Implementation", desc: "Greenfield, brownfield, and selective migration to S/4HANA.", icon: Boxes, href: "/platform-services/sap-s-4-hana-implementation/" },
      { title: "SuccessFactors", desc: "HXM suite implementation and optimization.", icon: Users, href: "/platform-services/sap-successfactors-implementation/" },
      { title: "SAP Ariba", desc: "Procurement and supplier collaboration on Ariba.", icon: ShoppingCart, href: "/platform-services/sap-ariba/" },
      { title: "SAP Fiori", desc: "Modern UX and Fiori app development.", icon: LayoutGrid, href: "/platform-services/sap-fiori/" },
      { title: "Finance & Controlling", desc: "FICO configuration, close, and reporting.", icon: Banknote, href: "/platform-services/sap-finance-and-controlling/" },
      { title: "Materials Management", desc: "MM procurement, inventory, and valuation.", icon: Package, href: "/platform-services/sap-materials-management/" },
      { title: "Supply Chain (EWM)", desc: "Extended Warehouse Management and logistics.", icon: Truck, href: "/platform-services/sap-extended-warehouse-management/" },
      { title: "Basis & Technical", desc: "Installation, upgrades, and system administration.", icon: Server, href: "/platform-services/sap-hybris/" },
      { title: "SAP Staffing", desc: "Contract, permanent, and flexi SAP resourcing.", icon: UserCog, href: "/platform-services/sap-contract-staffing/" },
    ],
    compare: {
      title: "Generalist SI vs KOV SAP practice",
      withLabel: "KOV SAP Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified SAP specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "Functional + technical + Basis", other: "Narrow module focus" },
        { aspect: "Delivery", kov: "Onshore + offshore blend", other: "Onshore only, costly" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "24/7 post-go-live", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Assess", desc: "We review your SAP landscape, goals, and readiness for change." },
      { title: "Design", desc: "We define the target solution, migration path, and rollout plan." },
      { title: "Implement", desc: "We configure, migrate, and integrate with tested cutovers." },
      { title: "Support", desc: "We provide hypercare and ongoing managed SAP support." },
    ],
    useCases: [
      "Migrating from SAP ECC to S/4HANA",
      "Rolling out a new SAP module or country",
      "Integrating SAP with cloud and third-party systems",
      "Augmenting your team with certified SAP consultants",
      "Providing ongoing SAP application support",
    ],
    faqs: [
      { q: "What SAP services does KOV provide?", a: "KOV covers the full SAP lifecycle — S/4HANA implementation and migration, module rollouts (SuccessFactors, Ariba, Fiori, FICO, MM, EWM and more), integration, Basis and technical services, and SAP staffing." },
      { q: "Do you help with S/4HANA migration?", a: "Yes. We handle greenfield, brownfield, and selective migrations to S/4HANA, choosing the path that best fits your landscape and appetite for change." },
      { q: "Can you provide SAP consultants to join our team?", a: "Yes. Alongside project delivery, we provide contract, permanent, and flexi SAP staffing so you can augment your internal team with certified specialists on demand." },
      { q: "Do you offer support after go-live?", a: "Yes. We provide hypercare immediately after go-live and ongoing managed SAP support, including 24/7 coverage for critical systems." },
      { q: "How do you keep SAP project costs down?", a: "Our blended onshore/offshore delivery model gives you certified expertise at a predictable, competitive cost without sacrificing quality." },
    ],
    related: [
      { title: "Oracle Services", href: "/platform-services/oracle/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
      { title: "Application Services", href: "/services/application-services/" },
    ],
    cta: {
      title: "Planning an SAP project?",
      subtitle: "Book a call with a certified SAP specialist to scope your migration, rollout, or staffing need.",
    },
  },

  // ─────────────────────────────────────────────────────────── Oracle
  {
    slug: "oracle",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "Oracle Services",
    seoTitle: "Oracle Services — Fusion Cloud, NetSuite, EBS & Database",
    metaDescription:
      "KOV Oracle services: Fusion Cloud ERP & HCM, NetSuite, E-Business Suite, Oracle Database, and OCI — implementation, migration, and support. Book a call.",
    tagline:
      "Certified Oracle expertise across Fusion Cloud, NetSuite, E-Business Suite, and Oracle Database — implemented, integrated, and supported end to end.",
    answer:
      "Oracle services cover the implementation, migration, integration, and support of Oracle applications and technology — including Fusion Cloud ERP and HCM, NetSuite, E-Business Suite, Oracle Database, and Oracle Cloud Infrastructure (OCI).",
    overview: [
      "Oracle's portfolio spans cloud applications, on-premise suites, database, and infrastructure — and few partners cover it all. KOV brings specialists across Fusion Cloud, NetSuite, EBS, and Oracle Database to implement, migrate, and run Oracle environments with confidence.",
      "From a NetSuite rollout for a fast-growing business to a complex EBS-to-Fusion migration for an enterprise, we align the solution to your processes, integrate it cleanly, and support it long term.",
    ],
    stats: [
      { value: "4+", label: "Oracle product families" },
      { value: "Certified", label: "Oracle consultants" },
      { value: "Cloud + on-prem", label: "Full coverage" },
      { value: "24/7", label: "Support option" },
    ],
    capabilities: [
      { title: "Oracle Fusion Cloud ERP", desc: "Implementation and optimization of Fusion Cloud financials and operations.", icon: Boxes },
      { title: "Oracle Fusion HCM", desc: "Cloud HR, payroll, and talent management on Fusion.", icon: Users },
      { title: "NetSuite", desc: "Implementation, customization, and support of NetSuite ERP.", icon: LayoutGrid },
      { title: "E-Business Suite", desc: "EBS support, upgrades, and migration to Fusion Cloud.", icon: Server },
      { title: "Oracle Database & Exadata", desc: "Database administration, tuning, and Exadata management.", icon: Database },
      { title: "Oracle Cloud Infrastructure", desc: "OCI architecture, migration, and managed operations.", icon: Cloud },
    ],
    compare: {
      title: "Generalist SI vs KOV Oracle practice",
      withLabel: "KOV Oracle Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified Oracle specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "Apps + database + OCI", other: "Apps only" },
        { aspect: "Delivery", kov: "Onshore + offshore blend", other: "Onshore only, costly" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "24/7 managed support", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Assess", desc: "We review your Oracle footprint, goals, and cloud readiness." },
      { title: "Design", desc: "We define the target solution and migration approach." },
      { title: "Implement", desc: "We configure, migrate, and integrate with minimal disruption." },
      { title: "Support", desc: "We provide hypercare and ongoing managed Oracle support." },
    ],
    useCases: [
      "Migrating E-Business Suite to Oracle Fusion Cloud",
      "Implementing NetSuite for a scaling business",
      "Optimizing and tuning Oracle Database or Exadata",
      "Moving Oracle workloads to OCI",
      "Augmenting your team with certified Oracle consultants",
    ],
    faqs: [
      { q: "What Oracle services does KOV provide?", a: "We cover Oracle Fusion Cloud ERP and HCM, NetSuite, E-Business Suite, Oracle Database and Exadata, and Oracle Cloud Infrastructure — spanning implementation, migration, integration, and support." },
      { q: "Can you migrate us from EBS to Fusion Cloud?", a: "Yes. EBS-to-Fusion migration is a core capability — we plan the path, redesign processes where beneficial, and migrate with tested cutovers to minimize disruption." },
      { q: "Do you support both Oracle applications and database?", a: "Yes. Unlike apps-only partners, we cover the full stack — Fusion and NetSuite applications, E-Business Suite, Oracle Database and Exadata, and OCI." },
      { q: "Can you provide Oracle consultants for our team?", a: "Yes. We provide contract and permanent Oracle staffing so you can augment your internal team with certified specialists on demand." },
      { q: "Do you offer ongoing Oracle support?", a: "Yes. We provide hypercare after go-live and ongoing managed support, with 24/7 coverage available for critical systems." },
    ],
    related: [
      { title: "SAP Services", href: "/platform-services/sap/" },
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Get more from your Oracle investment.",
      subtitle: "Book a call with a certified Oracle specialist to scope your project or migration.",
    },
  },

  // ─────────────────────────────────────────────────────────── Workday
  {
    slug: "workday",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "Workday Services",
    seoTitle: "Workday Services — HCM, Financials, Adaptive Planning & Integrations",
    metaDescription:
      "KOV Workday services: HCM, Financial Management, Adaptive Planning, payroll, and integrations — deployment, optimization, and support. Book a call.",
    tagline:
      "Deploy, optimize, and support Workday HCM and Financials — with the integrations, reporting, and adoption that make it deliver.",
    answer:
      "Workday services cover the deployment, optimization, integration, and support of Workday's cloud HCM and Financial Management suite, including payroll, Adaptive Planning, and custom integrations.",
    overview: [
      "Workday is a powerful unified platform for HR and finance, but value comes from a clean deployment and strong adoption. KOV brings Workday specialists to configure the suite to your processes, build the integrations you need, and drive the change that makes people actually use it.",
      "From an initial HCM deployment to Financials, Adaptive Planning, and ongoing optimization, we help you get the reporting, automation, and employee experience Workday promises.",
    ],
    stats: [
      { value: "HCM + Fins", label: "Full suite coverage" },
      { value: "Certified", label: "Workday consultants" },
      { value: "100%", label: "Integration-ready" },
      { value: "Post-live", label: "Optimization & support" },
    ],
    capabilities: [
      { title: "Workday HCM", desc: "Core HR, talent, and workforce management deployment.", icon: Users },
      { title: "Financial Management", desc: "Workday Financials configuration and rollout.", icon: Banknote },
      { title: "Adaptive Planning", desc: "Budgeting, forecasting, and workforce planning.", icon: BarChart3 },
      { title: "Payroll", desc: "Workday payroll setup, testing, and compliance.", icon: ReceiptText },
      { title: "Integrations", desc: "Workday Studio, EIB, and API integrations to your estate.", icon: Webhook },
      { title: "Reporting & Analytics", desc: "Custom reports, dashboards, and prism analytics.", icon: PieChart },
    ],
    compare: {
      title: "Generalist SI vs KOV Workday practice",
      withLabel: "KOV Workday Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified Workday specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "HCM + Financials + integrations", other: "HCM only" },
        { aspect: "Adoption", kov: "Change management included", other: "Config only" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "Post-live optimization", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Plan", desc: "We align Workday to your HR and finance processes and goals." },
      { title: "Configure", desc: "We deploy and configure modules with iterative testing." },
      { title: "Integrate", desc: "We connect Workday to payroll, benefits, and your systems." },
      { title: "Adopt & support", desc: "We drive adoption and provide ongoing optimization." },
    ],
    useCases: [
      "Deploying Workday HCM for the first time",
      "Adding Workday Financials or Adaptive Planning",
      "Building integrations between Workday and other systems",
      "Improving reporting, dashboards, and analytics",
      "Optimizing an existing Workday tenant post-go-live",
    ],
    faqs: [
      { q: "What Workday services does KOV provide?", a: "We cover Workday HCM and Financial Management deployment, Adaptive Planning, payroll, integrations, and reporting — plus ongoing optimization and support." },
      { q: "Do you build Workday integrations?", a: "Yes. We build integrations using Workday Studio, EIB, and APIs to connect Workday cleanly with payroll, benefits, and the rest of your estate." },
      { q: "Can you optimize an existing Workday tenant?", a: "Yes. Many clients engage us post-go-live to improve configuration, reporting, adoption, and automation in an existing Workday tenant." },
      { q: "Do you help with change management and adoption?", a: "Yes. Adoption is central to Workday value, so change management, training, and communications are part of how we deliver — not an afterthought." },
      { q: "Can you provide Workday consultants for our team?", a: "Yes. We offer contract and permanent Workday staffing to augment your team with certified specialists." },
    ],
    related: [
      { title: "SAP Services", href: "/platform-services/sap/" },
      { title: "Advisory & Consulting", href: "/services/advisory/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Make Workday deliver.",
      subtitle: "Book a call with a Workday specialist to scope your deployment, integration, or optimization.",
    },
  },

  // ─────────────────────────────────────────────────────────── Salesforce
  {
    slug: "salesforce",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "Salesforce Services",
    seoTitle: "Salesforce Services — Sales, Service, Marketing Cloud & CPQ",
    metaDescription:
      "KOV Salesforce services: Sales Cloud, Service Cloud, Marketing Cloud, Commerce, CPQ, and integrations — implementation, customization, and support. Book a call.",
    tagline:
      "Implement, customize, and integrate Salesforce across Sales, Service, and Marketing Cloud — configured for adoption and real revenue impact.",
    answer:
      "Salesforce services cover the implementation, customization, integration, and support of the Salesforce platform — including Sales Cloud, Service Cloud, Marketing Cloud, Commerce, and CPQ — to unify customer engagement and drive revenue.",
    overview: [
      "Salesforce can transform how you win and serve customers, but only when it's configured to your process and actually adopted by your teams. KOV brings certified Salesforce expertise across the core clouds to implement, customize, and integrate the platform for measurable results.",
      "From a first Sales Cloud rollout to a complex multi-cloud program with CPQ and integrations, we design for usability and adoption — so your CRM becomes a source of truth, not a data-entry chore.",
    ],
    stats: [
      { value: "Multi-cloud", label: "Sales, Service, Marketing" },
      { value: "Certified", label: "Salesforce consultants" },
      { value: "360°", label: "Customer view" },
      { value: "Adoption", label: "Focused delivery" },
    ],
    capabilities: [
      { title: "Sales Cloud", desc: "Pipeline, forecasting, and sales productivity on Sales Cloud.", icon: TrendingUp },
      { title: "Service Cloud", desc: "Case management, omnichannel, and self-service support.", icon: Headset },
      { title: "Marketing Cloud", desc: "Journeys, automation, and personalized campaigns.", icon: Megaphone },
      { title: "Commerce & Experience", desc: "Storefronts and customer portals on the platform.", icon: ShoppingCart },
      { title: "CPQ & Billing", desc: "Configure-price-quote and revenue automation.", icon: Calculator },
      { title: "Integration & Data", desc: "Integrations, MuleSoft, and Data Cloud unification.", icon: Webhook },
    ],
    compare: {
      title: "Generalist SI vs KOV Salesforce practice",
      withLabel: "KOV Salesforce Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified Salesforce specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "Multi-cloud + integration", other: "Single cloud" },
        { aspect: "Adoption", kov: "Designed for usability", other: "Config only" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "Managed admin & support", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Discover", desc: "We map your sales, service, and marketing processes and goals." },
      { title: "Design & build", desc: "We configure and customize Salesforce for usability." },
      { title: "Integrate", desc: "We connect Salesforce to your systems and unify data." },
      { title: "Adopt & support", desc: "We drive adoption and provide ongoing admin support." },
    ],
    useCases: [
      "Implementing Sales Cloud or Service Cloud",
      "Running multi-cloud programs across Sales, Service, and Marketing",
      "Setting up CPQ and revenue automation",
      "Integrating Salesforce with ERP and other systems",
      "Providing ongoing Salesforce admin and support",
    ],
    faqs: [
      { q: "What Salesforce services does KOV provide?", a: "We implement, customize, integrate, and support the Salesforce platform across Sales Cloud, Service Cloud, Marketing Cloud, Commerce, and CPQ — plus ongoing managed administration." },
      { q: "Do you integrate Salesforce with other systems?", a: "Yes. We build integrations — including MuleSoft and Data Cloud — to connect Salesforce with ERP, marketing, and other systems for a unified customer view." },
      { q: "Can you help improve adoption of our existing org?", a: "Yes. We frequently optimize existing Salesforce orgs for usability, data quality, automation, and adoption to unlock more value from your investment." },
      { q: "Do you provide ongoing Salesforce administration?", a: "Yes. We offer managed admin and support so your org stays healthy, secure, and continuously improved." },
      { q: "Can you provide Salesforce consultants for our team?", a: "Yes. We offer contract and permanent Salesforce staffing to augment your team with certified specialists." },
    ],
    related: [
      { title: "Microsoft Dynamics", href: "/platform-services/microsoft-dynamics/" },
      { title: "Application Services", href: "/services/application-services/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Turn Salesforce into revenue.",
      subtitle: "Book a call with a certified Salesforce specialist to scope your implementation or optimization.",
    },
  },

  // ─────────────────────────────────────────────────────────── Microsoft Dynamics
  {
    slug: "microsoft-dynamics",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "Microsoft Dynamics 365 Services",
    seoTitle: "Microsoft Dynamics 365 Services — Finance, Supply Chain, Sales & BC",
    metaDescription:
      "KOV Microsoft Dynamics 365 services: Finance, Supply Chain, Sales, Customer Service, Business Central, and Power Platform — implementation and support. Book a call.",
    tagline:
      "Implement and support Microsoft Dynamics 365 across Finance, Supply Chain, Sales, and Business Central — extended with the Power Platform.",
    answer:
      "Microsoft Dynamics 365 services cover the implementation, customization, integration, and support of the Dynamics 365 suite — including Finance, Supply Chain, Sales, Customer Service, and Business Central — often extended with the Microsoft Power Platform.",
    overview: [
      "Dynamics 365 unifies ERP and CRM on the Microsoft cloud, with deep ties to Microsoft 365, Azure, and the Power Platform. KOV brings Dynamics specialists to implement the right apps for your business and extend them with low-code where it adds value.",
      "From Business Central for a growing company to Finance and Supply Chain for an enterprise, we deliver Dynamics that fits your processes and connects seamlessly to the Microsoft tools your teams already use.",
    ],
    stats: [
      { value: "ERP + CRM", label: "Unified on Dynamics 365" },
      { value: "Certified", label: "Dynamics consultants" },
      { value: "Power Platform", label: "Low-code extension" },
      { value: "Azure", label: "Native integration" },
    ],
    capabilities: [
      { title: "Dynamics 365 Finance", desc: "Financial management, reporting, and compliance.", icon: Banknote },
      { title: "Supply Chain Management", desc: "Inventory, manufacturing, and warehouse operations.", icon: Truck },
      { title: "Dynamics 365 Sales", desc: "CRM, pipeline, and sales productivity.", icon: TrendingUp },
      { title: "Customer Service", desc: "Case management, omnichannel, and self-service.", icon: Headset },
      { title: "Business Central", desc: "All-in-one ERP for small and mid-sized businesses.", icon: Boxes },
      { title: "Power Platform", desc: "Power Apps, Automate, and BI to extend Dynamics.", icon: Workflow },
    ],
    compare: {
      title: "Generalist SI vs KOV Dynamics practice",
      withLabel: "KOV Dynamics Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified Dynamics specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "ERP + CRM + Power Platform", other: "Single app" },
        { aspect: "Integration", kov: "Native to M365 & Azure", other: "Bolt-on integrations" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "Managed support & enhancement", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Assess", desc: "We map your processes and select the right Dynamics apps." },
      { title: "Design & build", desc: "We configure and customize with iterative testing." },
      { title: "Integrate", desc: "We connect Dynamics to M365, Azure, and your systems." },
      { title: "Support", desc: "We provide managed support and continuous enhancement." },
    ],
    useCases: [
      "Implementing Business Central for a growing company",
      "Rolling out Dynamics 365 Finance and Supply Chain",
      "Deploying Dynamics 365 Sales and Customer Service",
      "Extending Dynamics with Power Apps and automation",
      "Integrating Dynamics with Microsoft 365 and Azure",
    ],
    faqs: [
      { q: "What Microsoft Dynamics services does KOV provide?", a: "We implement, customize, integrate, and support Dynamics 365 — Finance, Supply Chain, Sales, Customer Service, and Business Central — and extend it with the Power Platform." },
      { q: "What's the difference between Business Central and Finance & Supply Chain?", a: "Business Central is an all-in-one ERP suited to small and mid-sized businesses, while Dynamics 365 Finance and Supply Chain are enterprise-grade apps for larger, more complex operations. We help you choose the right fit." },
      { q: "Do you use the Power Platform to extend Dynamics?", a: "Yes. We use Power Apps, Power Automate, and Power BI to extend Dynamics with low-code apps, automation, and analytics where they add value." },
      { q: "Does Dynamics integrate with Microsoft 365 and Azure?", a: "Yes. Dynamics 365 is native to the Microsoft cloud, and we integrate it cleanly with Microsoft 365, Azure, and your other systems." },
      { q: "Can you provide Dynamics consultants for our team?", a: "Yes. We offer contract and permanent Dynamics staffing to augment your team with certified specialists." },
    ],
    related: [
      { title: "Salesforce Services", href: "/platform-services/salesforce/" },
      { title: "Software Licensing", href: "/software/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Unify ERP and CRM on Dynamics 365.",
      subtitle: "Book a call with a certified Dynamics specialist to scope your implementation.",
    },
  },

  // ─────────────────────────────────────────────────────────── ServiceNow
  {
    slug: "servicenow",
    category: "Platform Services",
    eyebrow: "Platform Service",
    title: "ServiceNow Services",
    seoTitle: "ServiceNow Services — ITSM, ITOM, HRSD & SecOps",
    metaDescription:
      "KOV ServiceNow services: ITSM, ITOM, HR Service Delivery, Security Operations, custom apps, and integrations — implementation and managed support. Book a call.",
    tagline:
      "Implement and scale ServiceNow across ITSM, ITOM, HR, and Security Operations — turning fragmented workflows into a single system of action.",
    answer:
      "ServiceNow services cover the implementation, customization, integration, and support of the ServiceNow platform — including IT Service Management (ITSM), IT Operations Management (ITOM), HR Service Delivery, and Security Operations — to digitize and automate enterprise workflows.",
    overview: [
      "ServiceNow has become the system of action for modern enterprises, connecting IT, HR, security, and the wider business on one workflow platform. KOV brings certified ServiceNow expertise to implement the right modules, automate the right processes, and keep the platform healthy as it scales.",
      "From an ITSM foundation to ITOM, HR Service Delivery, and SecOps, we design workflows that reduce manual effort and give leaders real visibility — then support and evolve the platform over time.",
    ],
    stats: [
      { value: "4+", label: "Core workflow modules" },
      { value: "Certified", label: "ServiceNow consultants" },
      { value: "Automation", label: "First delivery approach" },
      { value: "Managed", label: "Ongoing platform support" },
    ],
    capabilities: [
      { title: "IT Service Management", desc: "Incident, problem, change, and service catalog on ITSM.", icon: LifeBuoy },
      { title: "IT Operations Management", desc: "Discovery, service mapping, and event management.", icon: Network },
      { title: "HR Service Delivery", desc: "Employee service, cases, and onboarding workflows.", icon: Users },
      { title: "Security Operations", desc: "Security incident response and vulnerability response.", icon: ShieldCheck },
      { title: "App Engine & Custom Apps", desc: "Custom workflow apps built on the Now Platform.", icon: Code2 },
      { title: "Integration Hub", desc: "Integrations and automation across your estate.", icon: Webhook },
    ],
    compare: {
      title: "Generalist SI vs KOV ServiceNow practice",
      withLabel: "KOV ServiceNow Practice",
      withoutLabel: "Generalist integrator",
      rows: [
        { aspect: "Expertise", kov: "Certified ServiceNow specialists", other: "General consultants" },
        { aspect: "Coverage", kov: "ITSM + ITOM + HR + SecOps", other: "ITSM only" },
        { aspect: "Approach", kov: "Automation-first", other: "Lift-and-shift workflows" },
        { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
        { aspect: "Support", kov: "Managed platform support", other: "Hands off at go-live" },
      ],
    },
    process: [
      { title: "Assess", desc: "We map your workflows and prioritize modules by value." },
      { title: "Design & build", desc: "We configure ServiceNow with automation designed in." },
      { title: "Integrate", desc: "We connect ServiceNow to your tools via Integration Hub." },
      { title: "Support & scale", desc: "We manage the platform and expand it over time." },
    ],
    useCases: [
      "Standing up ITSM as a foundation",
      "Adding ITOM discovery and service mapping",
      "Rolling out HR Service Delivery",
      "Implementing Security Operations (SecOps)",
      "Building custom workflow apps on the Now Platform",
    ],
    faqs: [
      { q: "What ServiceNow services does KOV provide?", a: "We implement, customize, integrate, and support ServiceNow across ITSM, ITOM, HR Service Delivery, and Security Operations, plus custom app development and integrations." },
      { q: "Do you help with more than ITSM?", a: "Yes. Beyond ITSM we deliver ITOM, HR Service Delivery, Security Operations, and custom apps on the App Engine — treating ServiceNow as a platform, not a single tool." },
      { q: "Can you integrate ServiceNow with our other systems?", a: "Yes. We use Integration Hub and APIs to connect ServiceNow with your existing tools, automating workflows across the estate." },
      { q: "Do you provide ongoing ServiceNow support?", a: "Yes. We offer managed platform support to keep ServiceNow healthy, upgraded, and continuously improved." },
      { q: "Can you provide ServiceNow consultants for our team?", a: "Yes. We offer contract and permanent ServiceNow staffing to augment your team with certified specialists." },
    ],
    related: [
      { title: "Cybersecurity", href: "/services/cybersecurity/" },
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Make ServiceNow your system of action.",
      subtitle: "Book a call with a certified ServiceNow specialist to scope your platform roadmap.",
    },
  },
];

export function getPlatform(slug: string): ServiceDetail | undefined {
  return PLATFORMS.find((p) => p.slug === slug);
}
