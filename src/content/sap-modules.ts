import {
  Cog, Workflow, BarChart3, ShieldCheck, RefreshCw, Webhook, Database, Users,
  Banknote, Package, Truck, LayoutGrid, Factory, Warehouse, Wrench, FileText,
  ShoppingCart, Receipt, UserCog, UserCheck, Zap, PieChart,
} from "lucide-react";
import type { ServiceDetail, Capability, Faq, Related } from "@/content/services";

// Shared, consistent building blocks for the SAP service line.
const STATS = [
  { value: "Certified", label: "SAP consultants" },
  { value: "On/offshore", label: "Flexible delivery" },
  { value: "End-to-end", label: "Plan to support" },
  { value: "24/7", label: "Support option" },
];
const PROCESS = [
  { title: "Assess", desc: "We review your landscape, requirements, and readiness for change." },
  { title: "Design", desc: "We define the target solution and a clear implementation plan." },
  { title: "Implement", desc: "We configure, test, and deploy with controlled cutovers." },
  { title: "Support", desc: "We provide hypercare and ongoing managed SAP support." },
];
const compareFor = (title: string) => ({
  title: `Generalist consultant vs KOV ${title} specialists`,
  withLabel: "KOV SAP Practice",
  withoutLabel: "Generalist consultant",
  rows: [
    { aspect: "Expertise", kov: "Certified SAP specialists", other: "General consultants" },
    { aspect: "Delivery", kov: "Onshore + offshore blend", other: "Onshore only, costly" },
    { aspect: "Staffing", kov: "Can augment your team", other: "Project-only" },
    { aspect: "Support", kov: "24/7 post-go-live", other: "Hands off at go-live" },
    { aspect: "Cost", kov: "Predictable, competitive", other: "Premium day rates" },
  ],
});

type ModInput = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  answer: string;
  overview: [string, string];
  capabilities: Capability[];
  useCases: string[];
  faqs: Faq[];
  related: Related[];
  eyebrow?: string;
  cta?: { title: string; subtitle: string };
};

function mod(x: ModInput): ServiceDetail {
  return {
    slug: x.slug,
    category: "Platform Services",
    eyebrow: x.eyebrow ?? "SAP Module",
    title: x.title,
    seoTitle: x.seoTitle,
    metaDescription: x.metaDescription,
    tagline: x.tagline,
    answer: x.answer,
    overview: x.overview,
    stats: STATS,
    capabilities: x.capabilities,
    compare: compareFor(x.title),
    process: PROCESS,
    useCases: x.useCases,
    faqs: x.faqs,
    related: x.related,
    cta:
      x.cta ?? {
        title: `Planning a ${x.title} project?`,
        subtitle: `Book a call with a certified SAP specialist to scope your ${x.title} needs.`,
      },
  };
}

const SAP = { title: "SAP Services", href: "/platform-services/sap/" };
const STAFF = { title: "SAP Staffing", href: "/platform-services/sap-contract-staffing/" };

export const SAP_MODULES: ServiceDetail[] = [
  mod({
    slug: "sap-s-4-hana-implementation",
    title: "SAP S/4HANA Implementation",
    seoTitle: "SAP S/4HANA Implementation Services — Migration & Rollout",
    metaDescription:
      "KOV SAP S/4HANA implementation: greenfield, brownfield, and selective migration to S/4HANA with certified consultants and offshore delivery. Book a call.",
    tagline:
      "Move to SAP S/4HANA with confidence — greenfield, brownfield, or selective migration, delivered by certified consultants end to end.",
    answer:
      "SAP S/4HANA implementation is the project of deploying or migrating to SAP's next-generation ERP suite, delivered as greenfield (new build), brownfield (system conversion), or selective data transition, including process design, configuration, migration, and go-live support.",
    overview: [
      "S/4HANA is SAP's real-time, in-memory ERP, and moving to it is as much a business transformation as a technical upgrade. KOV plans and delivers the migration path that fits your landscape — simplifying custom code and adopting standard best practices along the way.",
      "From strategy and roadmap to configuration, data migration, testing, and hypercare, we run S/4HANA programs with a blended onshore/offshore team that keeps quality high and cost predictable.",
    ],
    capabilities: [
      { title: "Migration Strategy", desc: "Greenfield, brownfield, or selective transition assessment.", icon: Workflow },
      { title: "Process Design", desc: "Adopt SAP best-practice processes and a clean core.", icon: Cog },
      { title: "Data Migration", desc: "Cleanse, map, and migrate data with tested loads.", icon: Database },
      { title: "Custom Code Remediation", desc: "Simplify and adapt custom code for S/4HANA.", icon: RefreshCw },
      { title: "Integration", desc: "Connect S/4HANA to cloud and third-party systems.", icon: Webhook },
      { title: "Go-Live & Hypercare", desc: "Cutover management and post-go-live stabilization.", icon: ShieldCheck },
    ],
    useCases: [
      "Migrating from SAP ECC to S/4HANA",
      "Standing up a new S/4HANA greenfield build",
      "Simplifying a heavily customized ECC landscape",
      "Consolidating multiple ERPs onto S/4HANA",
      "Adding hypercare and support after go-live",
    ],
    faqs: [
      { q: "What is SAP S/4HANA implementation?", a: "It's the project of deploying or migrating to SAP's S/4HANA ERP — via greenfield, brownfield, or selective transition — covering process design, configuration, data migration, and go-live support." },
      { q: "What's the difference between greenfield and brownfield?", a: "Greenfield is a fresh S/4HANA build with redesigned processes; brownfield converts your existing ECC system in place. Selective transition blends both. We help you choose based on your goals and landscape." },
      { q: "How long does an S/4HANA migration take?", a: "It varies with scope and complexity — from a few months for a focused build to a year or more for a large, multi-entity landscape. We define a realistic timeline during assessment." },
      { q: "Do you support us after go-live?", a: "Yes. We provide hypercare immediately after go-live and ongoing managed SAP support, including 24/7 coverage for critical systems." },
    ],
    related: [SAP, { title: "SAP Finance & Controlling", href: "/platform-services/sap-finance-and-controlling/" }, STAFF],
  }),

  mod({
    slug: "sap-successfactors-implementation",
    title: "SAP SuccessFactors Implementation",
    seoTitle: "SAP SuccessFactors Implementation — HXM Suite Deployment",
    metaDescription:
      "KOV SAP SuccessFactors implementation: Employee Central, recruiting, performance, and payroll across the HXM suite. Certified consultants. Book a call.",
    tagline:
      "Deploy SAP SuccessFactors to modernize HR — from Employee Central to recruiting, performance, and payroll.",
    answer:
      "SAP SuccessFactors implementation is the deployment and configuration of SAP's cloud Human Experience Management (HXM) suite, including Employee Central, recruiting, onboarding, performance, learning, and payroll.",
    overview: [
      "SuccessFactors puts HR in the cloud with a connected suite spanning core HR to talent. KOV configures the modules you need to your processes and drives the adoption that makes the investment pay off.",
      "From a first Employee Central rollout to a full HXM program, we deliver with certified consultants, clean integrations, and change management built in.",
    ],
    capabilities: [
      { title: "Employee Central", desc: "Core HR system of record configuration.", icon: Users },
      { title: "Recruiting & Onboarding", desc: "Attract, hire, and onboard on SuccessFactors.", icon: UserCheck },
      { title: "Performance & Goals", desc: "Continuous performance and goal management.", icon: BarChart3 },
      { title: "Learning (LMS)", desc: "Learning management and compliance training.", icon: FileText },
      { title: "Payroll", desc: "Employee Central Payroll setup and compliance.", icon: Receipt },
      { title: "Integrations", desc: "Connect to finance, benefits, and third parties.", icon: Webhook },
    ],
    useCases: [
      "Replacing legacy HR systems with cloud HXM",
      "Deploying Employee Central as a system of record",
      "Adding recruiting, performance, or learning modules",
      "Implementing Employee Central Payroll",
      "Integrating SuccessFactors with your estate",
    ],
    faqs: [
      { q: "What is SAP SuccessFactors?", a: "SuccessFactors is SAP's cloud HXM suite covering core HR (Employee Central), recruiting, onboarding, performance, learning, and payroll — implemented and integrated by KOV." },
      { q: "Can we implement modules individually?", a: "Yes. Many clients start with Employee Central and add recruiting, performance, learning, or payroll over time. We phase the rollout to your priorities." },
      { q: "Do you handle change management?", a: "Yes. Adoption is central to HR transformation, so training, communications, and change management are part of how we deliver." },
      { q: "Can you integrate SuccessFactors with SAP S/4HANA?", a: "Yes. We build clean integrations between SuccessFactors and S/4HANA, payroll, benefits providers, and other systems." },
    ],
    related: [SAP, { title: "SAP Human Capital Management", href: "/platform-services/sap-human-capital-management/" }, STAFF],
  }),

  mod({
    slug: "sap-ariba",
    title: "SAP Ariba",
    seoTitle: "SAP Ariba Services — Procurement & Supplier Collaboration",
    metaDescription:
      "KOV SAP Ariba services: sourcing, procurement, supplier management, and Ariba Network integration. Certified consultants, offshore delivery. Book a call.",
    tagline:
      "Digitize procurement with SAP Ariba — sourcing, buying, and supplier collaboration on the world's largest business network.",
    answer:
      "SAP Ariba services cover the implementation and support of SAP's cloud procurement suite — sourcing, contracts, buying, invoicing, and supplier management — connected through the Ariba Network.",
    overview: [
      "Ariba turns fragmented procurement into a controlled, digital, supplier-connected process. KOV implements sourcing, procurement, and supplier management, and integrates Ariba cleanly with your ERP.",
      "From strategic sourcing to guided buying and invoicing, we deliver Ariba that reduces maverick spend and gives procurement full visibility and control.",
    ],
    capabilities: [
      { title: "Strategic Sourcing", desc: "Events, RFx, and sourcing on Ariba.", icon: ShoppingCart },
      { title: "Procurement & Buying", desc: "Guided buying and purchase requisitions.", icon: Package },
      { title: "Supplier Management", desc: "Onboarding, risk, and performance management.", icon: Users },
      { title: "Contracts", desc: "Contract lifecycle and compliance.", icon: FileText },
      { title: "Invoicing", desc: "Invoice automation and reconciliation.", icon: Receipt },
      { title: "Ariba Network & Integration", desc: "Ariba Network and ERP integration.", icon: Webhook },
    ],
    useCases: [
      "Digitizing sourcing and procurement",
      "Reducing maverick and off-contract spend",
      "Onboarding and managing suppliers at scale",
      "Automating invoicing and reconciliation",
      "Integrating Ariba with SAP ERP",
    ],
    faqs: [
      { q: "What is SAP Ariba?", a: "SAP Ariba is a cloud procurement suite for sourcing, buying, invoicing, and supplier management, connected via the Ariba Network. KOV implements, integrates, and supports it." },
      { q: "Does Ariba integrate with SAP ERP?", a: "Yes. We integrate Ariba with SAP S/4HANA and ECC so procurement, purchase orders, and invoices flow cleanly between systems." },
      { q: "Can Ariba reduce our procurement costs?", a: "Yes. By enforcing guided buying, contracts, and approvals, Ariba reduces maverick spend and improves negotiated savings." },
      { q: "Do you support the Ariba Network?", a: "Yes. We help onboard suppliers to the Ariba Network and manage collaboration, catalogs, and transactions." },
    ],
    related: [SAP, { title: "SAP Materials Management", href: "/platform-services/sap-materials-management/" }, STAFF],
  }),

  mod({
    slug: "sap-fiori",
    title: "SAP Fiori",
    seoTitle: "SAP Fiori Services — UX Design & App Development",
    metaDescription:
      "KOV SAP Fiori services: role-based UX, Fiori app development, and Fiori launchpad setup for a modern SAP experience. Book a call.",
    tagline:
      "Give SAP a modern, role-based experience with SAP Fiori — apps that work across desktop, tablet, and mobile.",
    answer:
      "SAP Fiori services cover the design and development of SAP's role-based user experience — building Fiori apps, configuring the Fiori launchpad, and modernizing SAP screens for usability across devices.",
    overview: [
      "Fiori replaces dense classic SAP screens with clean, task-focused apps that drive adoption and reduce errors. KOV designs and builds Fiori experiences tailored to your users' roles.",
      "From standard app activation to custom Fiori development and launchpad setup, we make SAP feel modern and intuitive on any device.",
    ],
    capabilities: [
      { title: "Fiori Launchpad", desc: "Launchpad setup, roles, and content.", icon: LayoutGrid },
      { title: "Standard App Activation", desc: "Activate and configure standard Fiori apps.", icon: Zap },
      { title: "Custom App Development", desc: "Custom Fiori/UI5 apps for your processes.", icon: Cog },
      { title: "UX Design", desc: "Role-based, user-centered experience design.", icon: Workflow },
      { title: "Mobile Enablement", desc: "Responsive apps across desktop and mobile.", icon: RefreshCw },
      { title: "Integration", desc: "OData services and backend integration.", icon: Webhook },
    ],
    useCases: [
      "Modernizing the SAP user experience",
      "Rolling out the Fiori launchpad",
      "Building custom Fiori/UI5 apps",
      "Enabling SAP access on mobile devices",
      "Improving adoption and reducing user errors",
    ],
    faqs: [
      { q: "What is SAP Fiori?", a: "SAP Fiori is SAP's design system and app framework that replaces classic screens with role-based, responsive apps. KOV designs, builds, and deploys Fiori experiences." },
      { q: "Can you build custom Fiori apps?", a: "Yes. We develop custom Fiori/UI5 apps tailored to your processes, in addition to activating and configuring standard apps." },
      { q: "Does Fiori work on mobile?", a: "Yes. Fiori apps are responsive and work across desktop, tablet, and mobile, and we can enable secure mobile access." },
      { q: "Do we need S/4HANA to use Fiori?", a: "Fiori is the standard UX for S/4HANA but also runs on ECC. We help you get the most from Fiori on your current release." },
    ],
    related: [SAP, { title: "SAP S/4HANA Implementation", href: "/platform-services/sap-s-4-hana-implementation/" }, STAFF],
  }),

  mod({
    slug: "sap-hybris",
    title: "SAP Hybris (Commerce)",
    seoTitle: "SAP Hybris / SAP Commerce Services — Implementation & Support",
    metaDescription:
      "KOV SAP Hybris (SAP Commerce Cloud) services: storefront development, catalog, and integration for B2B and B2C commerce. Book a call.",
    tagline:
      "Build and run enterprise commerce with SAP Hybris (SAP Commerce Cloud) — B2B and B2C storefronts integrated with your SAP core.",
    answer:
      "SAP Hybris services — now SAP Commerce Cloud — cover the implementation, customization, and support of SAP's enterprise commerce platform for B2B and B2C, including storefronts, catalog and order management, and integration with the SAP back end.",
    overview: [
      "SAP Hybris (SAP Commerce Cloud) powers complex, high-volume B2B and B2C commerce with deep ties to the SAP back office. KOV builds and supports commerce experiences that are fast, scalable, and integrated.",
      "From storefront and catalog to order management and ERP integration, we deliver commerce that connects the buying experience to real inventory, pricing, and fulfilment.",
    ],
    capabilities: [
      { title: "Storefront Development", desc: "B2B and B2C storefronts on SAP Commerce.", icon: ShoppingCart },
      { title: "Catalog & Product Content", desc: "Product content, catalog, and search.", icon: LayoutGrid },
      { title: "Order Management", desc: "Cart, checkout, and order orchestration.", icon: Package },
      { title: "Pricing & Promotions", desc: "Complex B2B pricing and promotions.", icon: BarChart3 },
      { title: "SAP Integration", desc: "Integrate commerce with the SAP back office.", icon: Webhook },
      { title: "Support & Optimization", desc: "Ongoing support and performance tuning.", icon: Wrench },
    ],
    useCases: [
      "Launching a B2B or B2C commerce storefront",
      "Migrating or upgrading SAP Commerce Cloud",
      "Integrating commerce with SAP ERP",
      "Handling complex B2B pricing and catalogs",
      "Optimizing commerce performance and conversion",
    ],
    faqs: [
      { q: "What is SAP Hybris?", a: "SAP Hybris, now SAP Commerce Cloud, is SAP's enterprise commerce platform for B2B and B2C. KOV implements, integrates, and supports storefronts and commerce operations." },
      { q: "Does SAP Commerce integrate with SAP ERP?", a: "Yes. We integrate SAP Commerce with S/4HANA and ECC so pricing, inventory, and orders stay consistent across commerce and the back office." },
      { q: "Do you handle B2B commerce complexity?", a: "Yes. We implement complex B2B pricing, catalogs, account hierarchies, and approval flows on SAP Commerce." },
      { q: "Can you support an existing Hybris store?", a: "Yes. We provide ongoing support, upgrades, and optimization for existing SAP Hybris / Commerce Cloud implementations." },
    ],
    related: [SAP, { title: "SAP Sales & Distribution", href: "/platform-services/sap-sales-and-distribution/" }, STAFF],
  }),

  mod({
    slug: "sap-crm",
    title: "SAP CRM",
    seoTitle: "SAP CRM Services — Customer Relationship Management",
    metaDescription:
      "KOV SAP CRM services: sales, service, and marketing on SAP CRM, plus migration to SAP C/4HANA. Certified consultants. Book a call.",
    tagline:
      "Manage customer relationships end to end with SAP CRM — sales, service, and marketing integrated with your SAP core.",
    answer:
      "SAP CRM services cover the implementation, customization, and support of SAP's customer relationship management solutions — spanning sales, service, and marketing — including migration paths to SAP Customer Experience (C/4HANA).",
    overview: [
      "SAP CRM connects customer-facing processes to the SAP back office, giving sales and service teams a complete customer view. KOV implements, optimizes, and supports SAP CRM and guides moves to the newer Customer Experience suite.",
      "From sales and service to interaction center and marketing, we deliver CRM that improves customer engagement while staying tightly integrated with your SAP data.",
    ],
    capabilities: [
      { title: "Sales", desc: "Opportunity, quotation, and order management.", icon: BarChart3 },
      { title: "Service", desc: "Service orders, contracts, and complaints.", icon: Wrench },
      { title: "Marketing", desc: "Campaigns, segmentation, and lead management.", icon: Workflow },
      { title: "Interaction Center", desc: "Contact center and multichannel service.", icon: Users },
      { title: "SAP Integration", desc: "Integrate CRM with ERP and analytics.", icon: Webhook },
      { title: "C/4HANA Migration", desc: "Path to SAP Customer Experience cloud.", icon: RefreshCw },
    ],
    useCases: [
      "Implementing SAP CRM for sales and service",
      "Running an SAP interaction center",
      "Integrating CRM with SAP ERP",
      "Migrating from SAP CRM to C/4HANA",
      "Improving customer engagement and visibility",
    ],
    faqs: [
      { q: "What is SAP CRM?", a: "SAP CRM is SAP's customer relationship management solution covering sales, service, and marketing, integrated with the SAP back office. KOV implements and supports it." },
      { q: "Should we migrate to SAP C/4HANA?", a: "Many organizations are moving from on-premise SAP CRM to the cloud SAP Customer Experience (C/4HANA) suite. We assess your situation and guide the migration." },
      { q: "Does SAP CRM integrate with ERP?", a: "Yes. We integrate SAP CRM with S/4HANA and ECC so customer, order, and service data stays consistent." },
      { q: "Can you support our existing SAP CRM?", a: "Yes. We provide ongoing support, enhancements, and optimization for existing SAP CRM implementations." },
    ],
    related: [SAP, { title: "SAP Sales & Distribution", href: "/platform-services/sap-sales-and-distribution/" }, STAFF],
  }),

  mod({
    slug: "sap-concur",
    title: "SAP Concur",
    seoTitle: "SAP Concur Services — Travel & Expense Management",
    metaDescription:
      "KOV SAP Concur services: expense, travel, and invoice management implementation and integration with SAP. Book a call.",
    tagline:
      "Automate travel, expense, and invoice management with SAP Concur — integrated with your SAP finance systems.",
    answer:
      "SAP Concur services cover the implementation and integration of SAP Concur's cloud solutions for travel, expense, and invoice management, connecting spend management to your SAP finance back office.",
    overview: [
      "Concur digitizes and automates employee spend — travel bookings, expense claims, and supplier invoices — with policy control and real-time visibility. KOV implements Concur and integrates it with your SAP finance systems.",
      "From expense and travel to invoice management, we configure Concur to your policies and connect it cleanly to SAP for automated, compliant spend management.",
    ],
    capabilities: [
      { title: "Expense Management", desc: "Automated expense capture and reimbursement.", icon: Receipt },
      { title: "Travel Management", desc: "Booking, policy, and travel spend control.", icon: Workflow },
      { title: "Invoice Management", desc: "Supplier invoice capture and approval.", icon: FileText },
      { title: "Policy & Compliance", desc: "Enforce spend policy and audit controls.", icon: ShieldCheck },
      { title: "SAP Integration", desc: "Integrate Concur with SAP finance.", icon: Webhook },
      { title: "Analytics", desc: "Spend visibility and reporting.", icon: BarChart3 },
    ],
    useCases: [
      "Automating employee expense management",
      "Controlling travel spend and policy",
      "Digitizing supplier invoice processing",
      "Integrating Concur with SAP finance",
      "Gaining visibility into total spend",
    ],
    faqs: [
      { q: "What is SAP Concur?", a: "SAP Concur is a cloud suite for travel, expense, and invoice management. KOV implements it and integrates it with your SAP finance systems." },
      { q: "Does Concur integrate with SAP?", a: "Yes. We integrate Concur with SAP S/4HANA and ECC so expense, travel, and invoice data flow into finance automatically." },
      { q: "Can Concur enforce our spend policy?", a: "Yes. Concur enforces travel and expense policy at the point of spend, with approval workflows and audit controls." },
      { q: "Do you support all three Concur products?", a: "Yes. We implement and support Concur Expense, Travel, and Invoice, individually or together." },
    ],
    related: [SAP, { title: "SAP Finance & Controlling", href: "/platform-services/sap-finance-and-controlling/" }, STAFF],
  }),

  mod({
    slug: "sap-finance-and-controlling",
    title: "SAP Finance & Controlling (FICO)",
    seoTitle: "SAP FICO Services — Finance & Controlling Implementation",
    metaDescription:
      "KOV SAP FICO services: financial accounting and controlling configuration, close, and reporting on S/4HANA and ECC. Book a call.",
    tagline:
      "Run finance on SAP with confidence — FICO configuration, financial close, and reporting delivered by certified consultants.",
    answer:
      "SAP FICO services cover the implementation and support of SAP Financial Accounting (FI) and Controlling (CO) — general ledger, accounts payable/receivable, asset accounting, cost and profit center accounting, and financial reporting.",
    overview: [
      "FICO is the financial heart of SAP, and getting it right underpins accurate reporting and a fast close. KOV configures FI and CO to your accounting and controlling requirements on S/4HANA or ECC.",
      "From general ledger and asset accounting to cost center and profitability analysis, we deliver a finance solution that closes faster and reports with confidence.",
    ],
    capabilities: [
      { title: "General Ledger", desc: "GL, AP, AR, and bank accounting.", icon: Banknote },
      { title: "Asset Accounting", desc: "Fixed asset lifecycle and depreciation.", icon: Package },
      { title: "Cost Accounting", desc: "Cost centers, internal orders, and allocations.", icon: BarChart3 },
      { title: "Profitability Analysis", desc: "CO-PA margin and profitability reporting.", icon: Workflow },
      { title: "Financial Close", desc: "Streamlined period-end and year-end close.", icon: RefreshCw },
      { title: "Reporting", desc: "Financial reporting and compliance.", icon: FileText },
    ],
    useCases: [
      "Implementing SAP FICO on S/4HANA",
      "Speeding up the financial close",
      "Configuring cost and profit center accounting",
      "Improving financial and management reporting",
      "Supporting and optimizing existing FICO",
    ],
    faqs: [
      { q: "What is SAP FICO?", a: "SAP FICO combines Financial Accounting (FI) and Controlling (CO) — general ledger, payables, receivables, assets, cost accounting, and reporting. KOV implements and supports it." },
      { q: "Does FICO change in S/4HANA?", a: "Yes. S/4HANA introduces the Universal Journal and merges FI and CO for real-time financials. We help you adopt the new model." },
      { q: "Can you help accelerate our close?", a: "Yes. We streamline period-end processes, automate reconciliations, and use SAP tools to shorten the financial close." },
      { q: "Do you support existing FICO systems?", a: "Yes. We provide enhancements, optimization, and managed support for existing SAP FICO implementations." },
    ],
    related: [SAP, { title: "SAP Treasury & Risk Management", href: "/platform-services/sap-treasury-and-risk-management/" }, STAFF],
  }),

  mod({
    slug: "sap-materials-management",
    title: "SAP Materials Management (MM)",
    seoTitle: "SAP MM Services — Materials Management & Procurement",
    metaDescription:
      "KOV SAP MM services: procurement, inventory management, and valuation on SAP S/4HANA and ECC. Certified consultants. Book a call.",
    tagline:
      "Optimize procurement and inventory with SAP Materials Management — from purchasing to goods receipt and valuation.",
    answer:
      "SAP MM (Materials Management) services cover the implementation and support of SAP's procurement and inventory functions — purchasing, material master, inventory management, invoice verification, and valuation.",
    overview: [
      "MM manages the flow of materials and procurement across the supply chain. KOV configures purchasing, inventory, and valuation to your processes for accurate stock and controlled buying.",
      "From material master and purchasing to goods movement and invoice verification, we deliver MM that keeps inventory accurate and procurement compliant.",
    ],
    capabilities: [
      { title: "Procurement", desc: "Purchase requisitions, orders, and contracts.", icon: ShoppingCart },
      { title: "Material Master", desc: "Material master data and governance.", icon: Database },
      { title: "Inventory Management", desc: "Goods movements and stock accuracy.", icon: Package },
      { title: "Invoice Verification", desc: "Logistics invoice verification (LIV).", icon: Receipt },
      { title: "Valuation", desc: "Material valuation and account determination.", icon: BarChart3 },
      { title: "Integration", desc: "Integrate with FI, SD, and WM/EWM.", icon: Webhook },
    ],
    useCases: [
      "Implementing SAP MM procurement",
      "Improving inventory and stock accuracy",
      "Streamlining purchase-to-pay",
      "Configuring invoice verification",
      "Integrating MM with finance and logistics",
    ],
    faqs: [
      { q: "What is SAP MM?", a: "SAP MM (Materials Management) handles procurement and inventory — purchasing, material master, goods movements, invoice verification, and valuation. KOV implements and supports it." },
      { q: "Does MM integrate with finance?", a: "Yes. MM is tightly integrated with FI for valuation and invoice verification, and with SD and warehouse management for the full logistics flow." },
      { q: "Can you improve our procurement processes?", a: "Yes. We streamline purchase-to-pay, enforce controls, and improve master data to reduce errors and cost." },
      { q: "Do you work on S/4HANA and ECC?", a: "Yes. We implement and support SAP MM on both S/4HANA and ECC and help with migration between them." },
    ],
    related: [SAP, { title: "SAP Ariba", href: "/platform-services/sap-ariba/" }, STAFF],
  }),

  mod({
    slug: "sap-supply-chain-management",
    title: "SAP Supply Chain Management (SCM)",
    seoTitle: "SAP SCM Services — Supply Chain Planning & Execution",
    metaDescription:
      "KOV SAP SCM services: supply chain planning and execution, including IBP and digital supply chain on SAP. Book a call.",
    tagline:
      "Plan and execute a resilient supply chain with SAP — from demand and supply planning to logistics execution.",
    answer:
      "SAP SCM services cover the implementation and support of SAP's supply chain solutions for planning and execution — including Integrated Business Planning (IBP) and the digital supply chain across demand, supply, manufacturing, and logistics.",
    overview: [
      "A resilient supply chain needs planning and execution working as one. KOV implements SAP's supply chain solutions to align demand, supply, inventory, and logistics on real-time data.",
      "From IBP planning to execution across manufacturing and logistics, we help you respond faster to disruption and improve service while controlling inventory.",
    ],
    capabilities: [
      { title: "Demand Planning", desc: "Statistical and collaborative demand planning.", icon: BarChart3 },
      { title: "Supply Planning", desc: "Supply, inventory, and response planning.", icon: Truck },
      { title: "Integrated Business Planning", desc: "SAP IBP for end-to-end planning.", icon: Workflow },
      { title: "Manufacturing", desc: "Production planning and execution integration.", icon: Factory },
      { title: "Logistics Execution", desc: "Warehouse and transportation execution.", icon: Warehouse },
      { title: "Analytics", desc: "Supply chain visibility and KPIs.", icon: PieChart},
    ],
    useCases: [
      "Implementing SAP IBP for planning",
      "Aligning demand and supply planning",
      "Improving inventory and service levels",
      "Integrating planning with execution",
      "Building supply chain visibility",
    ],
    faqs: [
      { q: "What is SAP SCM?", a: "SAP SCM covers supply chain planning and execution — including Integrated Business Planning (IBP) and the digital supply chain across demand, supply, manufacturing, and logistics. KOV implements and supports it." },
      { q: "What is SAP IBP?", a: "SAP Integrated Business Planning is SAP's cloud planning solution unifying demand, supply, and inventory planning with real-time analytics and scenario simulation." },
      { q: "Can you connect planning to execution?", a: "Yes. We integrate planning (IBP) with execution across manufacturing, warehouse, and transportation for an end-to-end supply chain." },
      { q: "Do you support existing supply chain systems?", a: "Yes. We enhance, optimize, and support existing SAP supply chain implementations." },
    ],
    related: [SAP, { title: "SAP Extended Warehouse Management", href: "/platform-services/sap-extended-warehouse-management/" }, STAFF],
  }),

  mod({
    slug: "sap-extended-warehouse-management",
    title: "SAP Extended Warehouse Management (EWM)",
    seoTitle: "SAP EWM Services — Extended Warehouse Management",
    metaDescription:
      "KOV SAP EWM services: warehouse design, automation, and labor management on SAP Extended Warehouse Management. Book a call.",
    tagline:
      "Run complex warehouses with precision using SAP EWM — automation, labor management, and real-time stock visibility.",
    answer:
      "SAP EWM (Extended Warehouse Management) services cover the implementation and support of SAP's advanced warehouse solution — inbound, outbound, and internal processes, automation, labor management, and yard management.",
    overview: [
      "EWM gives granular control over complex warehouse operations, down to the bin and handling unit. KOV designs and implements EWM to streamline fulfilment and support automation.",
      "From inbound and outbound processing to slotting, labor management, and automation integration, we deliver EWM that turns the warehouse into a competitive advantage.",
    ],
    capabilities: [
      { title: "Inbound Processing", desc: "Receiving, putaway, and quality inspection.", icon: Truck },
      { title: "Outbound Processing", desc: "Picking, packing, and shipping.", icon: Package },
      { title: "Internal Warehouse", desc: "Replenishment, slotting, and rearrangement.", icon: Warehouse },
      { title: "Labor Management", desc: "Workforce planning and performance.", icon: Users },
      { title: "Automation", desc: "MFS integration with conveyors and robotics.", icon: Cog },
      { title: "Yard Management", desc: "Dock, door, and yard operations.", icon: Workflow },
    ],
    useCases: [
      "Implementing SAP EWM for complex warehouses",
      "Migrating from WM to EWM",
      "Integrating warehouse automation",
      "Improving picking and fulfilment efficiency",
      "Adding labor management and slotting",
    ],
    faqs: [
      { q: "What is SAP EWM?", a: "SAP EWM (Extended Warehouse Management) is SAP's advanced warehouse solution for complex, high-volume operations, covering inbound, outbound, internal processes, automation, and labor management." },
      { q: "What's the difference between WM and EWM?", a: "EWM offers far more depth than classic WM — richer processes, automation integration, labor management, and real-time control. SAP is directing customers to EWM." },
      { q: "Can EWM integrate warehouse automation?", a: "Yes. EWM's Material Flow System integrates with conveyors, sorters, and robotics for automated warehouse operations." },
      { q: "Do you help migrate from WM to EWM?", a: "Yes. We plan and deliver migrations from classic WM to EWM with minimal disruption." },
    ],
    related: [SAP, { title: "SAP Supply Chain Management", href: "/platform-services/sap-supply-chain-management/" }, STAFF],
  }),

  mod({
    slug: "sap-human-capital-management",
    title: "SAP Human Capital Management (HCM)",
    seoTitle: "SAP HCM Services — Human Capital Management & Payroll",
    metaDescription:
      "KOV SAP HCM services: personnel administration, organizational management, payroll, and time management, plus SuccessFactors migration. Book a call.",
    tagline:
      "Manage your workforce on SAP HCM — personnel administration, payroll, and time — with a clear path to SuccessFactors.",
    answer:
      "SAP HCM (Human Capital Management) services cover the implementation and support of SAP's on-premise HR modules — personnel administration, organizational management, payroll, and time management — including migration paths to SuccessFactors.",
    overview: [
      "SAP HCM manages core HR and payroll for organizations running SAP on-premise. KOV supports and optimizes HCM and guides the transition to the cloud SuccessFactors suite where it makes sense.",
      "From personnel administration and org management to payroll and time, we keep HCM accurate and compliant while planning your cloud HR future.",
    ],
    capabilities: [
      { title: "Personnel Administration", desc: "Employee master data and actions.", icon: Users },
      { title: "Organizational Management", desc: "Org structure, positions, and reporting.", icon: LayoutGrid },
      { title: "Payroll", desc: "Payroll configuration and compliance.", icon: Receipt },
      { title: "Time Management", desc: "Time recording, evaluation, and absences.", icon: RefreshCw },
      { title: "Reporting", desc: "HR and payroll reporting.", icon: BarChart3 },
      { title: "SuccessFactors Migration", desc: "Path to cloud HXM.", icon: Workflow },
    ],
    useCases: [
      "Supporting and optimizing SAP HCM",
      "Configuring SAP payroll and time",
      "Improving organizational management",
      "Planning migration to SuccessFactors",
      "Maintaining HR compliance and reporting",
    ],
    faqs: [
      { q: "What is SAP HCM?", a: "SAP HCM (Human Capital Management) is SAP's on-premise HR suite covering personnel administration, organizational management, payroll, and time management. KOV supports and optimizes it." },
      { q: "Should we move from HCM to SuccessFactors?", a: "Many organizations are moving core HR to the cloud SuccessFactors suite while keeping payroll on-premise or in Employee Central Payroll. We help you plan the right path." },
      { q: "Do you support SAP payroll?", a: "Yes. We configure, support, and optimize SAP payroll and time management, including compliance updates." },
      { q: "Can you run HCM and SuccessFactors together?", a: "Yes. Hybrid HR landscapes are common, and we integrate SAP HCM with SuccessFactors during and after migration." },
    ],
    related: [SAP, { title: "SAP SuccessFactors Implementation", href: "/platform-services/sap-successfactors-implementation/" }, STAFF],
  }),

  mod({
    slug: "sap-business-intelligence",
    title: "SAP Business Intelligence (BI)",
    seoTitle: "SAP BI & Analytics Services — Reporting & Dashboards",
    metaDescription:
      "KOV SAP BI services: SAP BW, Analytics Cloud, and reporting to turn SAP data into insight. Book a call.",
    tagline:
      "Turn SAP data into insight with SAP Business Intelligence — data warehousing, reporting, and dashboards that drive decisions.",
    answer:
      "SAP BI (Business Intelligence) services cover data warehousing, reporting, and analytics on SAP — including SAP BW/4HANA and SAP Analytics Cloud — to consolidate data and deliver dashboards and self-service insight.",
    overview: [
      "Good decisions need trusted, well-modeled data. KOV builds SAP's analytics stack — from BW/4HANA data warehousing to Analytics Cloud dashboards — so leaders get insight, not just reports.",
      "From data modeling and ETL to interactive dashboards and planning, we deliver analytics that make SAP data useful across the business.",
    ],
    capabilities: [
      { title: "Data Warehousing", desc: "SAP BW/4HANA modeling and ETL.", icon: Database },
      { title: "SAP Analytics Cloud", desc: "Dashboards, stories, and planning.", icon: PieChart},
      { title: "Reporting", desc: "Operational and management reporting.", icon: FileText },
      { title: "Data Modeling", desc: "Semantic models and calculation views.", icon: Workflow },
      { title: "Self-Service BI", desc: "Governed self-service analytics.", icon: BarChart3 },
      { title: "Integration", desc: "Blend SAP and non-SAP data sources.", icon: Webhook },
    ],
    useCases: [
      "Building an SAP data warehouse (BW/4HANA)",
      "Deploying SAP Analytics Cloud dashboards",
      "Consolidating SAP and non-SAP data",
      "Enabling governed self-service BI",
      "Modernizing legacy SAP reporting",
    ],
    faqs: [
      { q: "What is SAP BI?", a: "SAP Business Intelligence covers data warehousing, reporting, and analytics on SAP — including SAP BW/4HANA and SAP Analytics Cloud. KOV designs and builds these solutions." },
      { q: "What is SAP Analytics Cloud?", a: "SAP Analytics Cloud (SAC) is SAP's cloud analytics tool combining BI, planning, and predictive analytics in one platform. We implement dashboards, stories, and planning models." },
      { q: "Can you combine SAP and non-SAP data?", a: "Yes. We model and blend data from SAP and non-SAP sources to give a single, trusted view for analytics." },
      { q: "Do you modernize legacy BW reporting?", a: "Yes. We migrate and modernize legacy BW and reporting onto BW/4HANA and SAP Analytics Cloud." },
    ],
    related: [SAP, { title: "SAP S/4HANA Implementation", href: "/platform-services/sap-s-4-hana-implementation/" }, STAFF],
  }),

  mod({
    slug: "sap-plant-maintenance",
    title: "SAP Plant Maintenance (PM)",
    seoTitle: "SAP PM Services — Plant Maintenance & Asset Management",
    metaDescription:
      "KOV SAP PM services: preventive and corrective maintenance, work orders, and asset management on SAP. Book a call.",
    tagline:
      "Maximize asset uptime with SAP Plant Maintenance — preventive, corrective, and predictive maintenance in one system.",
    answer:
      "SAP PM (Plant Maintenance) services cover the implementation and support of SAP's maintenance and asset management functions — technical objects, preventive and corrective maintenance, work orders, and maintenance planning.",
    overview: [
      "Unplanned downtime is expensive, and SAP PM helps you prevent it. KOV configures maintenance processes — from equipment master to preventive plans and work orders — to keep assets running.",
      "From breakdown maintenance to preventive and condition-based strategies, we deliver PM that improves reliability, safety, and maintenance cost control.",
    ],
    capabilities: [
      { title: "Technical Objects", desc: "Functional locations and equipment master.", icon: Cog },
      { title: "Preventive Maintenance", desc: "Maintenance plans and scheduling.", icon: RefreshCw },
      { title: "Corrective Maintenance", desc: "Breakdown notifications and work orders.", icon: Wrench },
      { title: "Work Order Management", desc: "Planning, scheduling, and confirmation.", icon: Workflow },
      { title: "Spare Parts", desc: "Integration with inventory for spares.", icon: Package },
      { title: "Analytics", desc: "Maintenance KPIs and reporting.", icon: BarChart3 },
    ],
    useCases: [
      "Implementing SAP PM for asset maintenance",
      "Setting up preventive maintenance plans",
      "Streamlining work order management",
      "Reducing unplanned downtime",
      "Integrating maintenance with inventory",
    ],
    faqs: [
      { q: "What is SAP PM?", a: "SAP PM (Plant Maintenance) manages maintenance and asset management — technical objects, preventive and corrective maintenance, work orders, and planning. KOV implements and supports it." },
      { q: "Can SAP PM support preventive maintenance?", a: "Yes. We configure time- and performance-based maintenance plans and condition-based strategies to prevent breakdowns." },
      { q: "Does PM integrate with inventory?", a: "Yes. PM integrates with MM for spare parts and with FI/CO for maintenance cost tracking." },
      { q: "Can we go mobile with maintenance?", a: "Yes. We enable mobile and Fiori-based maintenance execution so technicians work from any device." },
    ],
    related: [SAP, { title: "SAP Materials Management", href: "/platform-services/sap-materials-management/" }, STAFF],
  }),

  mod({
    slug: "sap-sales-and-distribution",
    title: "SAP Sales & Distribution (SD)",
    seoTitle: "SAP SD Services — Sales & Distribution Implementation",
    metaDescription:
      "KOV SAP SD services: order-to-cash, pricing, shipping, and billing on SAP S/4HANA and ECC. Book a call.",
    tagline:
      "Run order-to-cash on SAP Sales & Distribution — from quotation and pricing to shipping and billing.",
    answer:
      "SAP SD (Sales & Distribution) services cover the implementation and support of SAP's order-to-cash processes — sales orders, pricing, availability, shipping, and billing.",
    overview: [
      "SD drives the order-to-cash process that turns demand into revenue. KOV configures sales, pricing, delivery, and billing to your commercial processes for accurate, efficient fulfilment.",
      "From quotations and pricing to shipping and invoicing, we deliver SD that keeps order-to-cash fast, accurate, and integrated with finance and logistics.",
    ],
    capabilities: [
      { title: "Sales Orders", desc: "Quotations, orders, and contracts.", icon: FileText },
      { title: "Pricing", desc: "Condition-based pricing and discounts.", icon: BarChart3 },
      { title: "Availability Check", desc: "ATP and availability management.", icon: RefreshCw },
      { title: "Shipping", desc: "Delivery, picking, and goods issue.", icon: Truck },
      { title: "Billing", desc: "Invoicing and revenue recognition.", icon: Receipt },
      { title: "Integration", desc: "Integrate with MM, FI, and logistics.", icon: Webhook },
    ],
    useCases: [
      "Implementing SAP SD order-to-cash",
      "Configuring complex pricing",
      "Streamlining shipping and delivery",
      "Automating billing and invoicing",
      "Integrating SD with finance and logistics",
    ],
    faqs: [
      { q: "What is SAP SD?", a: "SAP SD (Sales & Distribution) handles order-to-cash — sales orders, pricing, availability, shipping, and billing. KOV implements and supports it." },
      { q: "Can SAP SD handle complex pricing?", a: "Yes. We configure condition-based pricing, discounts, rebates, and customer-specific pricing to match your commercial models." },
      { q: "Does SD integrate with other modules?", a: "Yes. SD integrates with MM for availability and logistics, and with FI for billing and revenue recognition." },
      { q: "Do you support S/4HANA SD?", a: "Yes. We implement and support SD on both S/4HANA and ECC and help with migration." },
    ],
    related: [SAP, { title: "SAP Materials Management", href: "/platform-services/sap-materials-management/" }, STAFF],
  }),

  mod({
    slug: "sap-production-planning",
    title: "SAP Production Planning (PP)",
    seoTitle: "SAP PP Services — Production Planning & Manufacturing",
    metaDescription:
      "KOV SAP PP services: production planning, MRP, and manufacturing execution on SAP for discrete and process industries. Book a call.",
    tagline:
      "Plan and control manufacturing with SAP Production Planning — MRP, scheduling, and shop-floor execution.",
    answer:
      "SAP PP (Production Planning) services cover the implementation and support of SAP's manufacturing functions — demand management, MRP, production orders, capacity planning, and shop-floor execution for discrete and process industries.",
    overview: [
      "SAP PP turns demand into a workable production plan and controls execution on the shop floor. KOV configures planning and manufacturing to your industry, whether discrete or process.",
      "From MRP and capacity planning to production orders and confirmations, we deliver PP that balances demand, capacity, and materials for efficient manufacturing.",
    ],
    capabilities: [
      { title: "Demand Management", desc: "Planned independent requirements and forecasting.", icon: BarChart3 },
      { title: "MRP", desc: "Material requirements planning and procurement.", icon: RefreshCw },
      { title: "Capacity Planning", desc: "Work center and capacity leveling.", icon: Factory },
      { title: "Production Orders", desc: "Order creation, release, and confirmation.", icon: Workflow },
      { title: "Shop-Floor Control", desc: "Execution, backflush, and reporting.", icon: Cog },
      { title: "Integration", desc: "Integrate with MM, QM, and costing.", icon: Webhook },
    ],
    useCases: [
      "Implementing SAP PP for manufacturing",
      "Configuring MRP and demand planning",
      "Improving capacity and shop-floor control",
      "Supporting discrete or process manufacturing",
      "Integrating production with materials and costing",
    ],
    faqs: [
      { q: "What is SAP PP?", a: "SAP PP (Production Planning) manages manufacturing — demand management, MRP, production orders, capacity planning, and shop-floor execution. KOV implements and supports it." },
      { q: "Does SAP PP support process industries?", a: "Yes. We implement PP for discrete manufacturing and PP-PI for process industries, tailored to your production model." },
      { q: "How does MRP work in SAP?", a: "MRP calculates material and production requirements from demand, generating planned orders and purchase requisitions. We configure it to your planning strategy." },
      { q: "Does PP integrate with other modules?", a: "Yes. PP integrates with MM for materials, QM for quality, and CO for production costing." },
    ],
    related: [SAP, { title: "SAP Supply Chain Management", href: "/platform-services/sap-supply-chain-management/" }, STAFF],
  }),

  mod({
    slug: "sap-treasury-and-risk-management",
    title: "SAP Treasury & Risk Management (TRM)",
    seoTitle: "SAP TRM Services — Treasury & Risk Management",
    metaDescription:
      "KOV SAP TRM services: cash and liquidity management, treasury, and financial risk on SAP S/4HANA. Book a call.",
    tagline:
      "Manage cash, liquidity, and financial risk with SAP Treasury & Risk Management — visibility and control over corporate finance.",
    answer:
      "SAP TRM (Treasury & Risk Management) services cover the implementation and support of SAP's treasury functions — cash and liquidity management, transaction management, and financial risk management.",
    overview: [
      "Treasury needs real-time visibility over cash, debt, and risk. KOV implements SAP TRM to centralize cash and liquidity management and control financial risk.",
      "From cash and liquidity to transaction and risk management, we deliver treasury that gives finance leaders control and confidence over corporate finances.",
    ],
    capabilities: [
      { title: "Cash Management", desc: "Cash position and forecasting.", icon: Banknote },
      { title: "Liquidity Planning", desc: "Liquidity forecasts and planning.", icon: BarChart3 },
      { title: "Transaction Management", desc: "Money market, FX, and securities.", icon: Workflow },
      { title: "Risk Management", desc: "Market and credit risk analysis.", icon: ShieldCheck },
      { title: "Bank Communication", desc: "Bank connectivity and payments.", icon: Webhook },
      { title: "Reporting", desc: "Treasury and risk reporting.", icon: FileText },
    ],
    useCases: [
      "Centralizing cash and liquidity management",
      "Implementing transaction management",
      "Managing FX and financial risk",
      "Automating bank communication and payments",
      "Improving treasury visibility and reporting",
    ],
    faqs: [
      { q: "What is SAP TRM?", a: "SAP TRM (Treasury & Risk Management) covers cash and liquidity management, transaction management, and financial risk management. KOV implements and supports it." },
      { q: "Does SAP TRM manage cash forecasting?", a: "Yes. We implement cash management and liquidity planning to give real-time cash position and forecasts." },
      { q: "Can SAP TRM handle FX and hedging?", a: "Yes. Transaction and risk management cover money market, FX, securities, and hedge management." },
      { q: "Does TRM integrate with banks?", a: "Yes. We set up bank communication (BCM) for secure connectivity, payments, and statements." },
    ],
    related: [SAP, { title: "SAP Finance & Controlling", href: "/platform-services/sap-finance-and-controlling/" }, STAFF],
  }),

  mod({
    slug: "sap-security-and-grc",
    title: "SAP Security & GRC",
    seoTitle: "SAP Security & GRC Services — Access Control & Compliance",
    metaDescription:
      "KOV SAP Security & GRC services: authorizations, access control, segregation of duties, and compliance on SAP. Book a call.",
    tagline:
      "Secure your SAP landscape and stay audit-ready with SAP Security & GRC — authorizations, access control, and compliance.",
    answer:
      "SAP Security & GRC services cover SAP authorizations and role design, access control, segregation of duties, and governance, risk, and compliance — securing the SAP landscape and keeping it audit-ready.",
    overview: [
      "SAP holds your most sensitive processes and data, so security and compliance are non-negotiable. KOV designs roles and authorizations, implements access controls, and manages segregation of duties across the landscape.",
      "From role redesign to SAP GRC Access Control and continuous compliance, we reduce access risk and keep your SAP systems audit-ready.",
    ],
    capabilities: [
      { title: "Role & Authorization Design", desc: "Clean role concepts and authorizations.", icon: ShieldCheck },
      { title: "Access Control", desc: "SAP GRC Access Control implementation.", icon: Workflow },
      { title: "Segregation of Duties", desc: "SoD analysis and risk remediation.", icon: RefreshCw },
      { title: "Emergency Access", desc: "Firefighter / privileged access management.", icon: Zap },
      { title: "Compliance", desc: "Audit support and continuous compliance.", icon: FileText },
      { title: "Security Monitoring", desc: "System security and threat monitoring.", icon: BarChart3 },
    ],
    useCases: [
      "Redesigning SAP roles and authorizations",
      "Implementing SAP GRC Access Control",
      "Remediating segregation-of-duties conflicts",
      "Managing emergency (firefighter) access",
      "Preparing for and passing SAP audits",
    ],
    faqs: [
      { q: "What is SAP GRC?", a: "SAP GRC (Governance, Risk, and Compliance) automates access control, segregation of duties, and compliance for SAP. KOV implements GRC and designs secure roles and authorizations." },
      { q: "What is segregation of duties (SoD)?", a: "SoD ensures no single user has conflicting access that could enable fraud or error. We analyze and remediate SoD conflicts and monitor them continuously." },
      { q: "Can you help us pass an SAP audit?", a: "Yes. We design clean roles, implement access controls, and provide the evidence and reporting auditors require." },
      { q: "Do you handle emergency access?", a: "Yes. We implement firefighter / privileged access with logging and review, so emergency access is controlled and auditable." },
    ],
    related: [SAP, { title: "Cybersecurity", href: "/services/cybersecurity/" }, STAFF],
  }),

  // ── SAP Staffing ──────────────────────────────────────────
  mod({
    slug: "sap-permanent-staffing",
    title: "SAP Permanent Staffing",
    eyebrow: "SAP Staffing",
    seoTitle: "SAP Permanent Staffing — Hire Certified SAP Professionals",
    metaDescription:
      "KOV SAP permanent staffing: recruit and place vetted, certified SAP professionals for long-term roles across every SAP module. Book a call.",
    tagline:
      "Hire the right SAP talent for the long term — vetted, certified professionals placed into permanent roles across every SAP module.",
    answer:
      "SAP permanent staffing is a recruitment service that sources, vets, and places full-time SAP professionals — functional and technical consultants, developers, and architects — into permanent roles within your organization.",
    overview: [
      "SAP skills are scarce and expensive to recruit for, and a wrong hire is costly. KOV's SAP recruiting practice sources and rigorously vets certified SAP professionals for your permanent roles.",
      "From functional consultants to ABAP developers and solution architects, we find candidates with the right skills and track record, and manage the process end to end.",
    ],
    capabilities: [
      { title: "Functional Consultants", desc: "FICO, MM, SD, HCM, and more.", icon: Users },
      { title: "Technical Consultants", desc: "ABAP, Basis, and integration.", icon: Cog },
      { title: "Solution Architects", desc: "S/4HANA and enterprise architects.", icon: Workflow },
      { title: "Rigorous Vetting", desc: "Technical and background screening.", icon: ShieldCheck },
      { title: "Market Insight", desc: "Salary benchmarking and market data.", icon: BarChart3 },
      { title: "End-to-End Process", desc: "Sourcing to offer management.", icon: UserCheck },
    ],
    useCases: [
      "Building a permanent in-house SAP team",
      "Filling a niche or hard-to-find SAP role",
      "Replacing a departing SAP specialist",
      "Scaling an SAP practice with permanent hires",
      "Converting proven contractors to permanent",
    ],
    faqs: [
      { q: "What is SAP permanent staffing?", a: "It's a recruitment service that sources, vets, and places full-time SAP professionals into permanent roles — functional and technical consultants, developers, and architects." },
      { q: "How do you vet SAP candidates?", a: "Every candidate is screened for SAP technical depth, certifications, project experience, and background before reaching your shortlist." },
      { q: "How fast can you fill a role?", a: "We share qualified profiles quickly by drawing on our existing SAP talent network, then manage the process through to offer." },
      { q: "Do you cover all SAP modules?", a: "Yes. We recruit across functional modules (FICO, MM, SD, HCM and more) and technical roles (ABAP, Basis, integration, architecture)." },
    ],
    related: [
      { title: "SAP Contract Staffing", href: "/platform-services/sap-contract-staffing/" },
      { title: "SAP Flexi Staffing", href: "/platform-services/sap-flexi-staffing/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Need a permanent SAP hire?",
      subtitle: "Book a call and we'll share vetted, certified SAP candidates matched to your role.",
    },
  }),

  mod({
    slug: "sap-flexi-staffing",
    title: "SAP Flexi Staffing",
    eyebrow: "SAP Staffing",
    seoTitle: "SAP Flexi Staffing — Flexible SAP Resourcing On Demand",
    metaDescription:
      "KOV SAP flexi staffing: scale SAP capacity up and down on demand with a flexible mix of contract and part-time certified consultants. Book a call.",
    tagline:
      "Scale SAP capacity up and down on demand — a flexible mix of certified consultants matched to your changing workload.",
    answer:
      "SAP flexi staffing is a flexible resourcing model that lets organizations scale SAP expertise up or down on demand — blending part-time, shared, and on-call certified consultants to match fluctuating project workloads.",
    overview: [
      "Not every SAP need justifies a full-time hire or a long contract. KOV's flexi staffing gives you certified SAP expertise on a flexible basis — the right skills, only when you need them.",
      "Whether it's part-time module support, on-call expertise, or shared resources across systems, we flex capacity to your workload so you pay for what you use.",
    ],
    capabilities: [
      { title: "Part-Time Consultants", desc: "Certified experts on a part-time basis.", icon: Users },
      { title: "On-Call Support", desc: "Expertise available when you need it.", icon: Zap },
      { title: "Shared Resources", desc: "Cost-efficient shared SAP capacity.", icon: RefreshCw },
      { title: "All SAP Skills", desc: "Functional and technical coverage.", icon: Cog },
      { title: "Rapid Availability", desc: "Fast access to vetted talent.", icon: UserCheck },
      { title: "Flexible Terms", desc: "Scale up or down with demand.", icon: Workflow },
    ],
    useCases: [
      "Covering fluctuating SAP workloads",
      "Adding part-time module expertise",
      "Providing on-call SAP support",
      "Bridging gaps between projects",
      "Controlling SAP resourcing cost",
    ],
    faqs: [
      { q: "What is SAP flexi staffing?", a: "It's a flexible resourcing model that lets you scale SAP expertise up or down on demand — blending part-time, shared, and on-call certified consultants to match your workload." },
      { q: "How is flexi different from contract staffing?", a: "Contract staffing places a consultant for a defined engagement; flexi staffing gives you flexible, often part-time or on-call access to expertise that scales with demand." },
      { q: "Can we get expertise for just a few days a week?", a: "Yes. Flexi staffing is ideal for part-time needs — a few days a week or on-call support — with certified SAP consultants." },
      { q: "Which SAP skills can you provide?", a: "The full range — functional modules and technical roles — matched to your specific, changing needs." },
    ],
    related: [
      { title: "SAP Contract Staffing", href: "/platform-services/sap-contract-staffing/" },
      { title: "SAP Permanent Staffing", href: "/platform-services/sap-permanent-staffing/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Need flexible SAP capacity?",
      subtitle: "Book a call to set up flexible SAP resourcing that scales with your workload.",
    },
  }),

  mod({
    slug: "sap-contract-staffing",
    title: "SAP Contract Staffing",
    eyebrow: "SAP Staffing",
    seoTitle: "SAP Contract Staffing — Certified SAP Contractors On Demand",
    metaDescription:
      "KOV SAP contract staffing: place vetted, certified SAP contractors into your project team, fast — across every module and technology. Book a call.",
    tagline:
      "Add certified SAP contractors to your project team, fast — vetted specialists embedded for the duration of your engagement.",
    answer:
      "SAP contract staffing places vetted, certified SAP contractors into a client's project team for the duration of a defined engagement — providing functional and technical expertise exactly when a project needs it.",
    overview: [
      "Projects rarely wait for permanent hiring. KOV's SAP contract staffing embeds certified specialists into your team fast, so implementations, rollouts, and upgrades stay on schedule.",
      "From functional consultants to ABAP developers and Basis administrators, we provide vetted contractors who integrate into your project and deliver from day one.",
    ],
    capabilities: [
      { title: "Functional Contractors", desc: "Module specialists for your project.", icon: Users },
      { title: "Technical Contractors", desc: "ABAP, Basis, and integration experts.", icon: Cog },
      { title: "Project Roles", desc: "PMs, leads, and architects on contract.", icon: Workflow },
      { title: "Fast Placement", desc: "Vetted profiles in days.", icon: Zap },
      { title: "Vetting", desc: "Technical and background screening.", icon: ShieldCheck },
      { title: "Compliance", desc: "Contracts and compliance managed.", icon: UserCog },
    ],
    useCases: [
      "Staffing an SAP implementation or rollout",
      "Adding a niche SAP skill for a project",
      "Covering a leave or resource gap",
      "Scaling a project team quickly",
      "Bringing in an SAP architect or PM on contract",
    ],
    faqs: [
      { q: "What is SAP contract staffing?", a: "It places vetted, certified SAP contractors into your project team for the duration of a defined engagement — functional and technical expertise exactly when you need it." },
      { q: "How quickly can you place a contractor?", a: "We share vetted profiles within days from our SAP talent network, and manage contracts and compliance so people start fast." },
      { q: "Do you cover all SAP roles?", a: "Yes. From functional module consultants to ABAP developers, Basis administrators, architects, and project managers." },
      { q: "Can contractors convert to permanent?", a: "Yes. Contract-to-hire is common — evaluate a specialist on real work before making a permanent offer." },
    ],
    related: [
      { title: "SAP Permanent Staffing", href: "/platform-services/sap-permanent-staffing/" },
      { title: "SAP Flexi Staffing", href: "/platform-services/sap-flexi-staffing/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Need SAP contractors, fast?",
      subtitle: "Book a call and we'll share vetted SAP contractors matched to your project.",
    },
  }),
];

export function getSapModule(slug: string): ServiceDetail | undefined {
  return SAP_MODULES.find((m) => m.slug === slug);
}
