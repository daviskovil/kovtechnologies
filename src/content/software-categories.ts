import {
  LayoutGrid, Boxes, Users, TrendingUp, Truck, Banknote, ShieldCheck, Lock,
  Mail, KeyRound, Radar, DatabaseBackup, Server, Layers, Cloud, Cpu, Workflow,
  Laptop, Terminal, Settings, Database, BarChart3, PieChart, Code2, Globe,
  Webhook, GitBranch, Bug, Palette, Image, Video, Box, PenTool, MessagesSquare,
  Building2, Share2, ClipboardCheck, RefreshCw, CalendarClock, BadgeDollarSign,
  Infinity as InfinityIcon,
} from "lucide-react";
import type { ServiceDetail, Capability, Faq, Related } from "@/content/services";

const STATS = [
  { value: "Independent", label: "Publisher-agnostic advice" },
  { value: "Best", label: "Commercial terms" },
  { value: "Right-sized", label: "License optimization" },
  { value: "Managed", label: "Deploy & renew" },
];
const PROCESS = [
  { title: "Assess", desc: "We review your needs, users, and existing licenses." },
  { title: "Recommend & license", desc: "We recommend the right software at the best terms." },
  { title: "Deploy", desc: "We deploy, configure, and integrate the software." },
  { title: "Optimize & renew", desc: "We manage renewals and optimize licensing over time." },
];
const compareFor = () => ({
  title: "Buying direct vs KOV software",
  withLabel: "KOV Software",
  withoutLabel: "Buying direct",
  rows: [
    { aspect: "Advice", kov: "Publisher-independent", other: "Sales-led" },
    { aspect: "Pricing", kov: "Optimized terms", other: "List price" },
    { aspect: "Licensing", kov: "Right-sized", other: "Over-licensed" },
    { aspect: "Deployment", kov: "Managed rollout", other: "DIY" },
    { aspect: "Renewals", kov: "Proactively managed", other: "Missed / blind auto-renew" },
  ],
});

type Input = {
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
};

function cat(x: Input): ServiceDetail {
  const lower = x.title.toLowerCase();
  return {
    slug: x.slug,
    category: "Software",
    eyebrow: "Software",
    title: x.title,
    seoTitle: x.seoTitle,
    metaDescription: x.metaDescription,
    tagline: x.tagline,
    answer: x.answer,
    overview: x.overview,
    stats: STATS,
    capabilities: x.capabilities,
    compare: compareFor(),
    process: PROCESS,
    useCases: x.useCases,
    faqs: x.faqs,
    related: x.related,
    cta: {
      title: `Need ${lower}?`,
      subtitle: `Get licensing advice and we'll recommend, license, and deploy the right ${lower}.`,
    },
    ctaLabel: "Get Licensing Advice",
    overviewHeading: "What we license",
    capabilitiesTitle: "What's covered",
    capabilitiesIntro: `The ${lower} we advise on, license, and deploy — with the best commercial terms.`,
  };
}

const LICENSING: Related = { title: "Licensing & Subscriptions", href: "/software/licensing/" };

export const SOFTWARE_CATEGORIES: ServiceDetail[] = [
  cat({
    slug: "business-applications",
    title: "Business Applications",
    seoTitle: "Business Application Software — ERP, CRM, HCM & Finance",
    metaDescription:
      "KOV licenses and deploys business applications — ERP, CRM, HCM, SCM, and finance software — with independent advice and the best terms. Get licensing advice.",
    tagline: "ERP, CRM, HCM, and finance software — advised, licensed, and deployed to run your core business processes.",
    answer:
      "Business application software includes ERP, CRM, HCM, supply chain, and finance systems that KOV advises on, licenses, and deploys to run core business processes.",
    overview: [
      "Business applications run your most important processes, so choosing and licensing them well matters. KOV gives publisher-independent advice and secures the best commercial terms across the major suites.",
      "From ERP and CRM to HCM and finance, we license and deploy the applications your business runs on — and can integrate and support them through our platform and application services.",
    ],
    capabilities: [
      { title: "ERP", desc: "SAP, Oracle, Dynamics, NetSuite.", icon: Boxes },
      { title: "CRM", desc: "Salesforce, Dynamics, HubSpot.", icon: TrendingUp },
      { title: "HCM & HR", desc: "Workday, SuccessFactors, and more.", icon: Users },
      { title: "Supply Chain", desc: "SCM and logistics applications.", icon: Truck },
      { title: "Finance", desc: "Accounting and finance software.", icon: Banknote },
      { title: "Productivity Suites", desc: "Office and productivity software.", icon: LayoutGrid },
    ],
    useCases: [
      "Licensing ERP, CRM, or HCM software",
      "Getting independent software selection advice",
      "Optimizing business-application licensing",
      "Deploying and integrating core applications",
    ],
    faqs: [
      { q: "What business applications does KOV license?", a: "ERP, CRM, HCM, supply chain, finance, and productivity software from the major publishers — with independent advice on the right fit." },
      { q: "Do you help choose the right application?", a: "Yes. We give publisher-independent advice to help you select the best application for your needs, then license and deploy it." },
      { q: "Can you deploy and integrate the software?", a: "Yes. Our platform and application services teams implement and integrate business applications end to end." },
      { q: "Can you optimize our existing licenses?", a: "Yes. We review licensing to right-size and reduce cost, and manage renewals so nothing lapses." },
    ],
    related: [
      { title: "Platform Services", href: "/platform-services/" },
      { title: "Application Services", href: "/services/application-services/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "security",
    title: "Security Software",
    seoTitle: "Security Software — Endpoint, Firewall, Email & Identity",
    metaDescription:
      "KOV licenses and deploys security software — endpoint protection, firewalls, email security, identity, and SIEM — with expert advice. Get licensing advice.",
    tagline: "Endpoint, firewall, email, and identity software — the security tools that protect your estate.",
    answer:
      "Security software includes endpoint protection, firewalls, email security, identity and access management, and SIEM tools that KOV licenses, deploys, and can manage through its cybersecurity services.",
    overview: [
      "The right security tools are the foundation of a strong defense. KOV licenses and deploys endpoint, network, email, and identity security software from leading vendors.",
      "We advise on the right stack, secure the best terms, and can operate the tools for you through our cybersecurity and managed services.",
    ],
    capabilities: [
      { title: "Endpoint Protection", desc: "EDR/XDR and antivirus.", icon: ShieldCheck },
      { title: "Firewall & Network", desc: "Firewall and network security.", icon: Lock },
      { title: "Email Security", desc: "Anti-phishing and email defense.", icon: Mail },
      { title: "Identity & Access", desc: "IAM, SSO, and MFA.", icon: KeyRound },
      { title: "SIEM & Monitoring", desc: "SIEM and threat detection.", icon: Radar },
      { title: "Backup & Recovery", desc: "Backup and DR software.", icon: DatabaseBackup },
    ],
    useCases: [
      "Licensing endpoint or email security",
      "Deploying identity and access management",
      "Adding SIEM and threat detection",
      "Building a layered security stack",
    ],
    faqs: [
      { q: "What security software does KOV license?", a: "Endpoint protection (EDR/XDR), firewalls, email security, identity and access management, SIEM, and backup software from leading vendors." },
      { q: "Can you manage the security tools too?", a: "Yes. Through our cybersecurity and managed services we can operate endpoint, SIEM, and other tools 24/7." },
      { q: "Do you advise on the right security stack?", a: "Yes. We give independent advice on the tools that fit your risk, budget, and existing estate." },
      { q: "Can you help with compliance tooling?", a: "Yes. We license and deploy tools that support ISO 27001, SOC 2, and other compliance needs." },
    ],
    related: [
      { title: "Cybersecurity", href: "/services/cybersecurity/" },
      { title: "Security & Continuity", href: "/solutions/security-continuity/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "virtualization",
    title: "Virtualization",
    seoTitle: "Virtualization Software — Hypervisors, VDI & Containers",
    metaDescription:
      "KOV licenses and deploys virtualization software — hypervisors, VDI, containers, and HCI — to maximize utilization and flexibility. Get licensing advice.",
    tagline: "Hypervisors, VDI, and containers — virtualization software that maximizes utilization and flexibility.",
    answer:
      "Virtualization software includes hypervisors, virtual desktop (VDI), container platforms, and hyperconverged infrastructure that KOV licenses and deploys to maximize hardware utilization and flexibility.",
    overview: [
      "Virtualization gets more from your infrastructure and underpins the cloud. KOV licenses and deploys hypervisors, VDI, and container platforms sized to your workloads.",
      "From server virtualization to virtual desktops and containers, we advise on the right platform and secure the best licensing terms.",
    ],
    capabilities: [
      { title: "Hypervisors", desc: "Server virtualization platforms.", icon: Server },
      { title: "Virtual Desktops (VDI)", desc: "Desktop virtualization.", icon: Laptop },
      { title: "Containers", desc: "Container and Kubernetes platforms.", icon: Boxes },
      { title: "Hyperconverged", desc: "HCI software platforms.", icon: Layers },
      { title: "Cloud Virtualization", desc: "Cloud and hybrid virtualization.", icon: Cloud },
      { title: "Management", desc: "Virtualization management tools.", icon: Cpu },
    ],
    useCases: [
      "Licensing server virtualization",
      "Deploying virtual desktops (VDI)",
      "Adopting containers and Kubernetes",
      "Consolidating with hyperconverged infrastructure",
    ],
    faqs: [
      { q: "What virtualization software does KOV license?", a: "Hypervisors, VDI, container and Kubernetes platforms, hyperconverged infrastructure software, and management tools." },
      { q: "Can you deploy VDI for us?", a: "Yes. Our infrastructure and workplace teams deploy and manage virtual desktops end to end." },
      { q: "Do you support containers and Kubernetes?", a: "Yes. We license and help implement container platforms as part of our cloud and infrastructure solutions." },
      { q: "Can you optimize virtualization licensing?", a: "Yes. We right-size virtualization licensing to your actual usage to control cost." },
    ],
    related: [
      { title: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure/" },
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "operating-systems",
    title: "Operating Systems",
    seoTitle: "Operating System Software — Windows, Linux & Server OS",
    metaDescription:
      "KOV licenses Windows Server, Windows client, Linux, and macOS with management and deployment. Get licensing advice.",
    tagline: "Windows, Linux, and server OS — licensed, deployed, and managed across your estate.",
    answer:
      "Operating system software includes Windows Server and client, Linux distributions, and macOS that KOV licenses, deploys, and helps manage across servers and endpoints.",
    overview: [
      "Operating systems are the foundation every application runs on. KOV licenses server and desktop OS across Windows, Linux, and macOS and helps you deploy and manage them.",
      "We advise on the right licensing model, secure the best terms, and can manage patching and lifecycle through our managed services.",
    ],
    capabilities: [
      { title: "Windows Server", desc: "Server OS licensing.", icon: Server },
      { title: "Windows Client", desc: "Desktop OS licensing.", icon: Laptop },
      { title: "Linux", desc: "Enterprise Linux distributions.", icon: Terminal },
      { title: "macOS", desc: "Apple device management.", icon: Settings },
      { title: "Licensing Models", desc: "Volume and subscription licensing.", icon: KeyRound },
      { title: "OS Management", desc: "Patching and lifecycle.", icon: RefreshCw },
    ],
    useCases: [
      "Licensing Windows Server or client",
      "Standardizing on an OS across the estate",
      "Deploying enterprise Linux",
      "Managing OS patching and lifecycle",
    ],
    faqs: [
      { q: "What operating systems does KOV license?", a: "Windows Server and client, enterprise Linux distributions, and macOS — with advice on the right licensing model." },
      { q: "Can you manage OS patching?", a: "Yes. Through our managed services we handle OS patching and lifecycle across servers and endpoints." },
      { q: "Do you advise on licensing models?", a: "Yes. We help you choose between volume, subscription, and other licensing models to minimize cost." },
      { q: "Can you help with OS migration?", a: "Yes. Our infrastructure team can plan and execute OS upgrades and migrations." },
    ],
    related: [
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Virtualization", href: "/software/virtualization/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "data-databases",
    title: "Data & Databases",
    seoTitle: "Data & Database Software — Databases, Warehousing & Analytics",
    metaDescription:
      "KOV licenses and deploys database, data warehousing, analytics, and BI software with data governance. Get licensing advice.",
    tagline: "Databases, warehousing, and analytics software — the tools that turn data into insight.",
    answer:
      "Data and database software includes relational and cloud databases, data warehousing, analytics and BI tools, and data governance software that KOV licenses and deploys.",
    overview: [
      "Data is a core asset, and the right database and analytics software unlocks it. KOV licenses and deploys databases, warehousing, and BI tools from the major vendors.",
      "We advise on the right platform, secure the best terms, and can build the data foundation through our AI & Data solutions.",
    ],
    capabilities: [
      { title: "Databases", desc: "Relational and NoSQL databases.", icon: Database },
      { title: "Data Warehousing", desc: "Cloud data warehouses.", icon: Server },
      { title: "Analytics & BI", desc: "BI and analytics platforms.", icon: BarChart3 },
      { title: "ETL & Integration", desc: "Data pipelines and ETL tools.", icon: Workflow },
      { title: "Data Governance", desc: "Quality, catalog, and lineage.", icon: ShieldCheck },
      { title: "Cloud Data", desc: "Cloud data platforms.", icon: Cloud },
    ],
    useCases: [
      "Licensing databases or data warehouses",
      "Deploying BI and analytics tools",
      "Building data pipelines",
      "Adding data governance tooling",
    ],
    faqs: [
      { q: "What data software does KOV license?", a: "Relational and NoSQL databases, cloud data warehouses, BI and analytics platforms, ETL tools, and data governance software." },
      { q: "Can you build our data platform?", a: "Yes. Our AI & Data solutions team designs and builds modern data platforms end to end." },
      { q: "Do you license BI and analytics tools?", a: "Yes. We license and deploy leading BI and analytics platforms and can build the dashboards too." },
      { q: "Can you help with data governance?", a: "Yes. We license governance tooling and embed quality, catalog, and lineage into the data platform." },
    ],
    related: [
      { title: "AI & Data", href: "/solutions/ai-data/" },
      { title: "Application Services", href: "/services/application-services/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "development",
    title: "Dev & Web",
    seoTitle: "Developer & Web Software — IDEs, DevOps & API Tools",
    metaDescription:
      "KOV licenses developer and web software — IDEs, DevOps and CI/CD tools, version control, API and testing tools. Get licensing advice.",
    tagline: "IDEs, DevOps, and API tools — the software your engineers build with.",
    answer:
      "Developer and web software includes IDEs, DevOps and CI/CD tools, version control, API management, and testing tools that KOV licenses and deploys to equip engineering teams.",
    overview: [
      "Great engineering teams need great tools. KOV licenses IDEs, DevOps platforms, version control, and API and testing tools from the leading vendors.",
      "We advise on the right toolchain, secure the best terms, and can help implement DevOps through our cloud and application services.",
    ],
    capabilities: [
      { title: "IDEs & Editors", desc: "Developer environments and editors.", icon: Code2 },
      { title: "DevOps & CI/CD", desc: "Pipelines and automation tools.", icon: InfinityIcon },
      { title: "Version Control", desc: "Git and source control platforms.", icon: GitBranch },
      { title: "API Tools", desc: "API design and management.", icon: Webhook },
      { title: "Web Platforms", desc: "Web development platforms.", icon: Globe },
      { title: "Testing", desc: "Automated testing tools.", icon: Bug },
    ],
    useCases: [
      "Licensing IDEs and developer tools",
      "Adopting DevOps and CI/CD tooling",
      "Standardizing version control",
      "Adding API and testing tools",
    ],
    faqs: [
      { q: "What developer software does KOV license?", a: "IDEs, DevOps and CI/CD tools, version control, API management, web platforms, and testing tools." },
      { q: "Can you implement DevOps for us?", a: "Yes. Our cloud and application services teams implement DevOps pipelines and toolchains end to end." },
      { q: "Do you license for teams at scale?", a: "Yes. We license developer tools consistently across teams and manage renewals." },
      { q: "Can you advise on our toolchain?", a: "Yes. We give independent advice on the right developer toolchain for your stack and workflow." },
    ],
    related: [
      { title: "Application Services", href: "/services/application-services/" },
      { title: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "graphics-design",
    title: "Graphics & Design",
    seoTitle: "Graphics & Design Software — Creative, Video & CAD",
    metaDescription:
      "KOV licenses graphics and design software — creative suites, image and video editing, 3D and CAD, and UI/UX tools. Get licensing advice.",
    tagline: "Creative suites, video, and CAD — design software licensed and managed for your teams.",
    answer:
      "Graphics and design software includes creative suites, image and video editing, 3D and CAD, and UI/UX tools that KOV licenses and manages for design, marketing, and engineering teams.",
    overview: [
      "Design and creative teams rely on specialist software. KOV licenses creative suites, video editing, 3D and CAD, and UI/UX tools at the best terms.",
      "We manage licensing and renewals across your creative teams so they always have the tools they need without overspend.",
    ],
    capabilities: [
      { title: "Creative Suites", desc: "Design and creative software.", icon: Palette },
      { title: "Image Editing", desc: "Photo and image editing.", icon: Image },
      { title: "Video Editing", desc: "Video production software.", icon: Video },
      { title: "3D & CAD", desc: "3D modeling and CAD tools.", icon: Box },
      { title: "UI/UX Design", desc: "Interface and prototyping tools.", icon: PenTool },
      { title: "Asset Management", desc: "Digital asset management.", icon: LayoutGrid },
    ],
    useCases: [
      "Licensing creative suites for design teams",
      "Supplying video editing software",
      "Licensing 3D and CAD tools",
      "Managing creative software renewals",
    ],
    faqs: [
      { q: "What design software does KOV license?", a: "Creative suites, image and video editing, 3D and CAD, UI/UX design, and digital asset management tools." },
      { q: "Can you license for a whole design team?", a: "Yes. We license creative software across teams and manage seats and renewals centrally." },
      { q: "Do you license CAD and 3D tools?", a: "Yes. We license 3D modeling and CAD software for engineering and product teams." },
      { q: "Can you optimize creative licensing costs?", a: "Yes. We right-size seats and manage renewals to avoid paying for unused licenses." },
    ],
    related: [
      { title: "Business Applications", href: "/software/business-applications/" },
      { title: "Communication & Collaboration", href: "/software/communication/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "communication",
    title: "Communication & Collaboration",
    seoTitle: "Communication & Collaboration Software — Email, Chat & Meetings",
    metaDescription:
      "KOV licenses and deploys communication and collaboration software — email, team chat, video conferencing, intranet, and file sharing. Get licensing advice.",
    tagline: "Email, chat, and video — the collaboration software that keeps hybrid teams connected.",
    answer:
      "Communication and collaboration software includes email, team chat, video conferencing, intranet, file sharing, and project tools that KOV licenses, deploys, and manages.",
    overview: [
      "Hybrid work depends on great collaboration tools. KOV licenses and deploys email, chat, video, and file-sharing software so teams stay connected wherever they work.",
      "We advise on the right platform — including Microsoft 365 — secure the best terms, and manage deployment and adoption through our workplace solutions.",
    ],
    capabilities: [
      { title: "Email", desc: "Business email platforms.", icon: Mail },
      { title: "Team Chat", desc: "Chat and messaging tools.", icon: MessagesSquare },
      { title: "Video Conferencing", desc: "Meetings and webinars.", icon: Video },
      { title: "Intranet", desc: "Intranet and knowledge sharing.", icon: Building2 },
      { title: "File Sharing", desc: "Secure file sharing and storage.", icon: Share2 },
      { title: "Project Management", desc: "Project and task tools.", icon: ClipboardCheck },
    ],
    useCases: [
      "Licensing Microsoft 365 or collaboration suites",
      "Deploying team chat and video",
      "Setting up secure file sharing",
      "Rolling out project management tools",
    ],
    faqs: [
      { q: "What collaboration software does KOV license?", a: "Email, team chat, video conferencing, intranet, file sharing, and project management software — including Microsoft 365." },
      { q: "Do you deploy Microsoft 365?", a: "Yes. Our workplace modernization team deploys, migrates, and manages Microsoft 365 end to end." },
      { q: "Can you drive adoption of new tools?", a: "Yes. We include change management and training so teams actually adopt new collaboration tools." },
      { q: "Do you secure collaboration platforms?", a: "Yes. We configure security and compliance for collaboration platforms as part of deployment." },
    ],
    related: [
      { title: "Workplace Modernization", href: "/solutions/workplace-modernization/" },
      { title: "Phones & Video", href: "/hardware/phones-video/" },
      LICENSING,
    ],
  }),

  cat({
    slug: "licensing",
    title: "Licensing & Subscriptions",
    seoTitle: "Software Licensing & Subscription Management",
    metaDescription:
      "KOV manages software licensing and subscriptions — volume licensing, SaaS, renewals, license optimization, and software asset management (SAM). Get licensing advice.",
    tagline: "Volume licensing, subscriptions, and renewals — managed so you stay compliant and never overspend.",
    answer:
      "Software licensing and subscription management covers volume licensing, SaaS subscriptions, renewals, software asset management (SAM), and license optimization to keep organizations compliant and cost-efficient.",
    overview: [
      "Software licensing is complex and easy to overspend on. KOV manages your licensing and subscriptions end to end — right-sizing, renewals, and compliance.",
      "We consolidate publishers, negotiate terms, track entitlements, and manage renewals so you stay audit-ready and never pay for what you don't use.",
    ],
    capabilities: [
      { title: "Volume Licensing", desc: "Enterprise and volume agreements.", icon: KeyRound },
      { title: "SaaS Subscriptions", desc: "Cloud subscription management.", icon: RefreshCw },
      { title: "Renewals", desc: "Proactive renewal management.", icon: CalendarClock },
      { title: "Software Asset Mgmt", desc: "SAM and entitlement tracking.", icon: ClipboardCheck },
      { title: "Optimization", desc: "Right-sizing and cost reduction.", icon: BadgeDollarSign },
      { title: "Compliance", desc: "Audit-readiness and true-ups.", icon: BarChart3 },
    ],
    useCases: [
      "Consolidating software licensing",
      "Managing SaaS subscriptions",
      "Preventing missed renewals",
      "Reducing licensing costs and staying compliant",
    ],
    faqs: [
      { q: "What is software license management?", a: "It's managing your software licenses and subscriptions — volume licensing, SaaS, renewals, asset management, and optimization — to stay compliant and cost-efficient." },
      { q: "How do you reduce licensing costs?", a: "We right-size licenses to actual usage, consolidate publishers, negotiate terms, and eliminate unused or duplicate subscriptions." },
      { q: "Can you make sure renewals aren't missed?", a: "Yes. We track all licenses and subscriptions with their dates and manage renewals proactively." },
      { q: "Do you help with software audits?", a: "Yes. We track entitlements and keep you audit-ready, and manage true-ups when needed." },
    ],
    related: [
      { title: "Procurement & Renewals", href: "/services/procurement/" },
      { title: "Business Applications", href: "/software/business-applications/" },
      { title: "Security Software", href: "/software/security/" },
    ],
  }),
];

export function getSoftwareCategory(slug: string): ServiceDetail | undefined {
  return SOFTWARE_CATEGORIES.find((c) => c.slug === slug);
}
