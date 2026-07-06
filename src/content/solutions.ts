import {
  Sparkles, Database, BarChart3, Workflow, ShieldCheck, Cloud, Boxes, Layers,
  BadgeDollarSign, Activity, RefreshCw, Zap, Webhook, ShoppingCart, Code2,
  LayoutGrid, Laptop, MonitorSmartphone, MessagesSquare, KeyRound, Package,
  DatabaseBackup, LifeBuoy, ClipboardCheck, Radar, Infinity as InfinityIcon,
} from "lucide-react";
import type { ServiceDetail } from "@/content/services";

/** Solutions — outcome-driven programs, rendered with the shared ServiceDetail template. */
export const SOLUTIONS: ServiceDetail[] = [
  // ─────────────────────────────────────────────────────────── AI & Data
  {
    slug: "ai-data",
    category: "Solutions",
    eyebrow: "Solution",
    title: "AI & Data Solutions",
    seoTitle: "AI & Data Solutions — Generative AI, Analytics & Data Engineering",
    metaDescription:
      "KOV AI & Data solutions: generative AI, data engineering, analytics & BI, and MLOps to turn your data into automation and insight. Book a call.",
    tagline:
      "Turn data into decisions and automation — generative AI, analytics, and a modern data foundation, delivered as one program.",
    answer:
      "AI and data solutions combine data engineering, analytics, and artificial intelligence — including generative AI and machine learning — to help organizations unify their data, automate decisions, and generate insight that drives measurable business outcomes.",
    overview: [
      "AI is only as good as the data beneath it. KOV builds the full stack — a clean, governed data foundation, analytics that surface insight, and AI that automates and augments decisions — so you get value, not just experiments.",
      "From a first generative-AI use case to an enterprise analytics platform, we combine data engineering, MLOps, and pragmatic AI to deliver outcomes: faster decisions, automated work, and a data foundation you can trust.",
    ],
    stats: [
      { value: "End-to-end", label: "Data to AI" },
      { value: "Governed", label: "Trusted data foundation" },
      { value: "Generative AI", label: "Latest models" },
      { value: "MLOps", label: "Production-grade AI" },
    ],
    capabilities: [
      { title: "Generative AI", desc: "Copilots, assistants, and RAG on your own data.", icon: Sparkles },
      { title: "Data Engineering", desc: "Pipelines, warehousing, and a modern data platform.", icon: Database },
      { title: "Analytics & BI", desc: "Dashboards and self-service analytics that drive action.", icon: BarChart3 },
      { title: "Machine Learning & MLOps", desc: "Model development, deployment, and monitoring.", icon: Workflow },
      { title: "Data Governance", desc: "Quality, lineage, security, and compliance.", icon: ShieldCheck },
      { title: "Data Platform", desc: "Cloud data platforms and lakehouse architecture.", icon: Boxes },
    ],
    compare: {
      title: "Point tools & pilots vs KOV AI & Data program",
      withLabel: "KOV AI & Data",
      withoutLabel: "Ad-hoc pilots",
      rows: [
        { aspect: "Foundation", kov: "Governed data platform", other: "Siloed data" },
        { aspect: "AI", kov: "Production-grade (MLOps)", other: "Stuck in pilot" },
        { aspect: "Trust", kov: "Quality & governance built in", other: "Unreliable data" },
        { aspect: "Value", kov: "Tied to business outcomes", other: "Tech for tech's sake" },
        { aspect: "Scale", kov: "Repeatable and scalable", other: "One-off experiments" },
      ],
    },
    process: [
      { title: "Assess", desc: "We evaluate your data, use cases, and readiness." },
      { title: "Build the foundation", desc: "We stand up a governed, modern data platform." },
      { title: "Deliver use cases", desc: "We build analytics and AI use cases that create value." },
      { title: "Operate & scale", desc: "We run models in production and scale what works." },
    ],
    useCases: [
      "Deploying generative AI on your own data",
      "Building a modern cloud data platform",
      "Enabling self-service analytics and BI",
      "Putting machine-learning models into production",
      "Establishing data governance and quality",
    ],
    faqs: [
      { q: "What are AI and data solutions?", a: "They combine data engineering, analytics, and AI — including generative AI and machine learning — to unify data, automate decisions, and generate insight. KOV delivers the full stack, from data foundation to production AI." },
      { q: "Can we use generative AI on our own data?", a: "Yes. We build retrieval-augmented (RAG) assistants and copilots grounded in your own data, with the security and governance to keep it safe." },
      { q: "Do we need a data platform before doing AI?", a: "A clean, governed data foundation makes AI far more reliable. We often build the data platform and deliver AI use cases in parallel to show value early." },
      { q: "How do you get AI out of pilot and into production?", a: "We use MLOps — automated deployment, monitoring, and governance — so models run reliably in production rather than staying stuck as experiments." },
      { q: "How do you ensure data quality and governance?", a: "Governance is built in: data quality, lineage, access control, and compliance are part of the platform, not an afterthought." },
    ],
    related: [
      { title: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure/" },
      { title: "Application Services", href: "/services/application-services/" },
      { title: "Advisory & Consulting", href: "/services/advisory/" },
    ],
    cta: {
      title: "Ready to put your data to work?",
      subtitle: "Book a call to scope an AI or analytics use case and the data foundation to support it.",
    },
  },

  // ─────────────────────────────────────────────────────────── Cloud & Infrastructure
  {
    slug: "cloud-infrastructure",
    category: "Solutions",
    eyebrow: "Solution",
    title: "Cloud & Infrastructure Solutions",
    seoTitle: "Cloud & Infrastructure Solutions — Migration, DevOps & FinOps",
    metaDescription:
      "KOV Cloud & Infrastructure solutions: cloud migration, DevOps, Kubernetes, hybrid cloud, and FinOps for a scalable, cost-efficient foundation. Book a call.",
    tagline:
      "Modernize your foundation — cloud migration, DevOps, and FinOps that make infrastructure scalable, resilient, and cost-efficient.",
    answer:
      "Cloud and infrastructure solutions cover cloud migration, modernization, and operations — including DevOps, containers and Kubernetes, hybrid and multi-cloud architecture, and FinOps cost management — to build a scalable, resilient, cost-efficient technology foundation.",
    overview: [
      "The cloud only pays off with the right architecture and operating model. KOV migrates and modernizes your infrastructure, then runs it with DevOps automation and FinOps discipline so it scales on demand without runaway cost.",
      "From lift-and-shift migration to cloud-native re-architecture, DevOps pipelines, and Kubernetes, we build a foundation that ships faster, stays resilient, and keeps cloud spend under control.",
    ],
    stats: [
      { value: "3", label: "Clouds (AWS, Azure, GCP)" },
      { value: "20-40%", label: "Cloud cost savings" },
      { value: "DevOps", label: "Automated delivery" },
      { value: "99.99%", label: "Availability designs" },
    ],
    capabilities: [
      { title: "Cloud Migration", desc: "Assess, migrate, and modernize workloads to the cloud.", icon: Cloud },
      { title: "DevOps", desc: "CI/CD pipelines, infrastructure-as-code, and automation.", icon: InfinityIcon },
      { title: "Containers & Kubernetes", desc: "Container platforms and orchestration at scale.", icon: Boxes },
      { title: "Hybrid & Multi-cloud", desc: "Architecture spanning on-prem and multiple clouds.", icon: Layers },
      { title: "FinOps", desc: "Cloud cost visibility, right-sizing, and optimization.", icon: BadgeDollarSign },
      { title: "Site Reliability", desc: "Observability, resilience, and 24/7 operations.", icon: Activity },
    ],
    compare: {
      title: "Lift-and-shift only vs KOV cloud program",
      withLabel: "KOV Cloud & Infrastructure",
      withoutLabel: "Lift-and-shift only",
      rows: [
        { aspect: "Approach", kov: "Migrate + modernize", other: "Move as-is" },
        { aspect: "Delivery", kov: "DevOps & automation", other: "Manual, slow" },
        { aspect: "Cost", kov: "FinOps-optimized", other: "Runaway spend" },
        { aspect: "Resilience", kov: "Designed for HA/DR", other: "Fragile" },
        { aspect: "Operations", kov: "24/7 SRE", other: "Best effort" },
      ],
    },
    process: [
      { title: "Assess", desc: "We review workloads, cost, and cloud readiness." },
      { title: "Migrate & modernize", desc: "We migrate and re-architect for the cloud." },
      { title: "Automate", desc: "We add DevOps pipelines and infrastructure-as-code." },
      { title: "Optimize", desc: "We tune cost, performance, and resilience continuously." },
    ],
    useCases: [
      "Migrating on-premise workloads to the cloud",
      "Adopting DevOps and CI/CD",
      "Running containers and Kubernetes",
      "Reducing cloud spend with FinOps",
      "Building hybrid or multi-cloud architecture",
    ],
    faqs: [
      { q: "What are cloud and infrastructure solutions?", a: "They cover cloud migration, modernization, and operations — DevOps, containers and Kubernetes, hybrid/multi-cloud architecture, and FinOps — to build a scalable, resilient, cost-efficient foundation." },
      { q: "Should we migrate as-is or modernize?", a: "It depends on the workload. We often migrate quickly where it makes sense and modernize (re-architect) where it delivers more value — a pragmatic mix per application." },
      { q: "How much can FinOps save on cloud costs?", a: "FinOps commonly reduces cloud spend by 20–40% through right-sizing, reserved capacity, automated scheduling, and eliminating waste." },
      { q: "Do you support AWS, Azure, and GCP?", a: "Yes. We design and operate across AWS, Azure, and Google Cloud, as well as hybrid environments." },
      { q: "What is DevOps and do we need it?", a: "DevOps automates building, testing, and deploying software and infrastructure. It speeds delivery and improves reliability — valuable for almost any organization shipping software or running cloud workloads." },
    ],
    related: [
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      { title: "AI & Data", href: "/solutions/ai-data/" },
      { title: "Security & Continuity", href: "/solutions/security-continuity/" },
    ],
    cta: {
      title: "Modernize your cloud foundation.",
      subtitle: "Book a call to scope a migration, DevOps, or cloud cost-optimization program.",
    },
  },

  // ─────────────────────────────────────────────────────────── Digital Enablement
  {
    slug: "digital-enablement",
    category: "Solutions",
    eyebrow: "Solution",
    title: "Digital Enablement Solutions",
    seoTitle: "Digital Enablement Solutions — App Modernization, Low-Code & Integration",
    metaDescription:
      "KOV Digital Enablement solutions: application modernization, low-code, integration & APIs, and digital commerce to accelerate digital transformation. Book a call.",
    tagline:
      "Accelerate digital transformation — modernize applications, connect systems, and build new digital experiences that move at the speed of your business.",
    answer:
      "Digital enablement solutions help organizations transform digitally by modernizing legacy applications, adopting low-code development, integrating systems through APIs, and building digital commerce and customer experiences.",
    overview: [
      "Legacy systems and disconnected tools slow transformation to a crawl. KOV modernizes applications, connects your estate through APIs, and uses low-code to deliver new digital capabilities fast.",
      "From re-platforming a legacy app to building a new customer portal or automating a manual process, we help you move faster, integrate cleanly, and deliver the digital experiences customers and employees expect.",
    ],
    stats: [
      { value: "2x", label: "Faster delivery" },
      { value: "Low-code", label: "Rapid build" },
      { value: "API-first", label: "Connected estate" },
      { value: "Cloud-native", label: "Modern architecture" },
    ],
    capabilities: [
      { title: "Application Modernization", desc: "Refactor, re-platform, or re-architect legacy apps.", icon: RefreshCw },
      { title: "Low-Code Development", desc: "Rapid app delivery on low-code platforms.", icon: Zap },
      { title: "Integration & APIs", desc: "Connect systems and data with robust APIs.", icon: Webhook },
      { title: "Digital Commerce", desc: "Storefronts and digital customer experiences.", icon: ShoppingCart },
      { title: "Custom Development", desc: "Cloud-native web and mobile applications.", icon: Code2 },
      { title: "Process Automation", desc: "Automate manual workflows end to end.", icon: Workflow },
    ],
    compare: {
      title: "Legacy status quo vs KOV digital enablement",
      withLabel: "KOV Digital Enablement",
      withoutLabel: "Legacy status quo",
      rows: [
        { aspect: "Speed", kov: "Rapid, iterative delivery", other: "Slow, big-bang" },
        { aspect: "Integration", kov: "API-first, connected", other: "Siloed systems" },
        { aspect: "Architecture", kov: "Cloud-native", other: "Legacy, brittle" },
        { aspect: "Cost", kov: "Low-code efficiency", other: "Expensive custom builds" },
        { aspect: "Experience", kov: "Modern & user-centered", other: "Dated & clunky" },
      ],
    },
    process: [
      { title: "Discover", desc: "We map your applications, integrations, and goals." },
      { title: "Design", desc: "We define the target architecture and roadmap." },
      { title: "Build", desc: "We modernize, integrate, and build — often with low-code." },
      { title: "Evolve", desc: "We iterate and support as needs change." },
    ],
    useCases: [
      "Modernizing a costly legacy application",
      "Building apps fast with low-code",
      "Integrating disconnected systems via APIs",
      "Launching digital commerce or portals",
      "Automating manual business processes",
    ],
    faqs: [
      { q: "What is digital enablement?", a: "Digital enablement is the modernization and connection of applications and processes — through app modernization, low-code, integration/APIs, and digital experiences — to accelerate digital transformation." },
      { q: "What is application modernization?", a: "It's updating legacy applications — by refactoring, re-platforming, or re-architecting — so they're cheaper to run, easier to change, and ready for the cloud." },
      { q: "When should we use low-code?", a: "Low-code is ideal for building internal apps and workflows quickly and cost-effectively. We use it where it fits and custom development where it doesn't." },
      { q: "Why is integration important?", a: "APIs connect your systems so data flows cleanly and processes work end to end — the foundation of any digital transformation." },
      { q: "Can you build digital commerce experiences?", a: "Yes. We build storefronts, portals, and customer experiences, including on platforms like Shopify and SAP Commerce." },
    ],
    related: [
      { title: "Application Services", href: "/services/application-services/" },
      { title: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure/" },
      { title: "AI & Data", href: "/solutions/ai-data/" },
    ],
    cta: {
      title: "Accelerate your digital transformation.",
      subtitle: "Book a call to scope an app modernization, integration, or low-code initiative.",
    },
  },

  // ─────────────────────────────────────────────────────────── Workplace Modernization
  {
    slug: "workplace-modernization",
    category: "Solutions",
    eyebrow: "Solution",
    title: "Workplace Modernization Solutions",
    seoTitle: "Workplace Modernization — Microsoft 365, Endpoint & Collaboration",
    metaDescription:
      "KOV Workplace Modernization solutions: Microsoft 365, endpoint management, virtual desktops (VDI), collaboration, and identity for a secure modern workplace. Book a call.",
    tagline:
      "Give your people a secure, modern digital workplace — Microsoft 365, managed endpoints, virtual desktops, and collaboration that just works.",
    answer:
      "Workplace modernization solutions deliver a secure, productive digital workplace through Microsoft 365, endpoint and device management, virtual desktops (VDI), collaboration tools, and identity and access management.",
    overview: [
      "Hybrid work demands a workplace that's secure, productive, and easy to manage from anywhere. KOV modernizes the digital workplace — from Microsoft 365 and collaboration to managed endpoints and virtual desktops.",
      "We deploy and manage the tools your people use every day, secure them with modern identity and endpoint management, and take the operational burden off your team — so employees stay productive wherever they work.",
    ],
    stats: [
      { value: "Anywhere", label: "Secure hybrid work" },
      { value: "Managed", label: "Endpoints & devices" },
      { value: "Zero-trust", label: "Identity & access" },
      { value: "24/7", label: "Support option" },
    ],
    capabilities: [
      { title: "Microsoft 365", desc: "Deployment, migration, and management of M365.", icon: LayoutGrid },
      { title: "Endpoint Management", desc: "Provision, secure, and manage every device.", icon: Laptop },
      { title: "Virtual Desktops (VDI)", desc: "Secure desktops delivered from the cloud.", icon: MonitorSmartphone },
      { title: "Collaboration", desc: "Teams, intranet, and productivity tooling.", icon: MessagesSquare },
      { title: "Identity & Access", desc: "SSO, MFA, and zero-trust identity.", icon: KeyRound },
      { title: "Device Lifecycle", desc: "Procurement, deployment, and refresh.", icon: Package },
    ],
    compare: {
      title: "Unmanaged workplace vs KOV modern workplace",
      withLabel: "KOV Modern Workplace",
      withoutLabel: "Unmanaged / legacy",
      rows: [
        { aspect: "Access", kov: "Secure from anywhere", other: "Office-bound" },
        { aspect: "Devices", kov: "Managed & compliant", other: "Unmanaged, risky" },
        { aspect: "Identity", kov: "Zero-trust, MFA", other: "Passwords only" },
        { aspect: "Support", kov: "Proactive & 24/7", other: "Reactive" },
        { aspect: "Productivity", kov: "Modern collaboration", other: "Fragmented tools" },
      ],
    },
    process: [
      { title: "Assess", desc: "We review your workplace tools, devices, and security." },
      { title: "Design", desc: "We design a secure, modern workplace blueprint." },
      { title: "Deploy", desc: "We roll out M365, endpoints, and collaboration." },
      { title: "Manage", desc: "We manage and support the workplace day to day." },
    ],
    useCases: [
      "Migrating to or optimizing Microsoft 365",
      "Securing and managing employee devices",
      "Deploying virtual desktops for secure access",
      "Enabling hybrid and remote work",
      "Modernizing identity with SSO and MFA",
    ],
    faqs: [
      { q: "What is workplace modernization?", a: "It's the modernization of the digital workplace — Microsoft 365, endpoint and device management, virtual desktops, collaboration, and identity — to make hybrid work secure and productive." },
      { q: "Do you manage Microsoft 365 for us?", a: "Yes. We deploy, migrate, secure, and manage Microsoft 365, including Teams, SharePoint, and security configuration." },
      { q: "What is endpoint management?", a: "Endpoint management provisions, secures, and maintains laptops, desktops, and mobile devices centrally — keeping them compliant and up to date wherever they are." },
      { q: "What are virtual desktops (VDI)?", a: "VDI delivers secure desktops from the cloud or data center, so users access a controlled environment from any device — ideal for security and flexibility." },
      { q: "How do you secure remote work?", a: "We use zero-trust identity (SSO, MFA), managed and compliant endpoints, and secure access so people can work from anywhere without added risk." },
    ],
    related: [
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Security & Continuity", href: "/solutions/security-continuity/" },
      { title: "Hardware", href: "/hardware/" },
    ],
    cta: {
      title: "Modernize your digital workplace.",
      subtitle: "Book a call to scope a Microsoft 365, endpoint, or virtual-desktop program.",
    },
  },

  // ─────────────────────────────────────────────────────────── Security & Continuity (cybersecurity hub)
  {
    slug: "security-continuity",
    category: "Solutions",
    eyebrow: "Solution",
    title: "Security & Continuity Solutions",
    seoTitle: "Security & Continuity — Zero Trust, Disaster Recovery & Compliance",
    metaDescription:
      "KOV Security & Continuity solutions: zero trust, disaster recovery, business continuity, and compliance — keep your business secure and resilient. Book a call.",
    tagline:
      "Keep your business secure and running — zero-trust security, disaster recovery, and business continuity that protect you from threats and downtime alike.",
    answer:
      "Security and continuity solutions protect an organization from cyber threats and disruption through zero-trust security, disaster recovery, business continuity planning, and compliance — ensuring systems stay secure, available, and resilient.",
    overview: [
      "Security and continuity are two sides of resilience: keeping attackers out, and keeping the business running when something goes wrong. KOV brings both together into one program — protecting your data and ensuring you can recover fast from any disruption.",
      "This is our strategic security practice: we set the zero-trust strategy, disaster-recovery, and compliance direction, and deliver it with our full cybersecurity services and the security products in our software portfolio.",
    ],
    stats: [
      { value: "Zero-trust", label: "Security model" },
      { value: "24/7", label: "Monitoring & response" },
      { value: "Tested", label: "DR & recovery" },
      { value: "5+", label: "Compliance frameworks" },
    ],
    capabilities: [
      { title: "Zero-Trust Security", desc: "Identity, network, and endpoint zero-trust architecture.", icon: ShieldCheck },
      { title: "Threat Protection", desc: "24/7 detection and response across your estate.", icon: Radar },
      { title: "Disaster Recovery", desc: "DR strategy, replication, and tested recovery.", icon: DatabaseBackup },
      { title: "Business Continuity", desc: "BCP planning to keep operations running.", icon: LifeBuoy },
      { title: "Backup", desc: "Resilient, tested backup with clear recovery objectives.", icon: Package },
      { title: "Compliance", desc: "ISO 27001, SOC 2, HIPAA, PCI-DSS readiness.", icon: ClipboardCheck },
    ],
    compare: {
      title: "Reactive security vs KOV Security & Continuity",
      withLabel: "KOV Security & Continuity",
      withoutLabel: "Reactive / piecemeal",
      rows: [
        { aspect: "Model", kov: "Zero-trust by design", other: "Perimeter-only" },
        { aspect: "Detection", kov: "24/7 monitoring", other: "Find out too late" },
        { aspect: "Recovery", kov: "Tested DR & backup", other: "Untested, hope for best" },
        { aspect: "Continuity", kov: "Documented BCP", other: "No plan" },
        { aspect: "Compliance", kov: "Audit-ready", other: "Scramble at audit" },
      ],
    },
    process: [
      { title: "Assess", desc: "We baseline security posture, risk, and recovery readiness." },
      { title: "Design", desc: "We define zero-trust, DR, and continuity strategy." },
      { title: "Implement", desc: "We deploy controls, backup, and recovery capability." },
      { title: "Operate & test", desc: "We monitor 24/7 and regularly test recovery." },
    ],
    useCases: [
      "Adopting a zero-trust security model",
      "Building disaster recovery and backup",
      "Creating a business continuity plan",
      "Achieving and maintaining compliance",
      "Protecting against ransomware and outages",
    ],
    faqs: [
      { q: "What are security and continuity solutions?", a: "They protect against cyber threats and disruption through zero-trust security, disaster recovery, business continuity, and compliance — keeping systems secure, available, and resilient." },
      { q: "What is zero trust?", a: "Zero trust is a security model that verifies every user and device and grants least-privilege access, rather than trusting anything inside the network perimeter by default." },
      { q: "What's the difference between DR and business continuity?", a: "Disaster recovery restores IT systems after an incident; business continuity keeps the whole business operating. We deliver both as one resilience program." },
      { q: "How does this relate to your cybersecurity services?", a: "Security & Continuity is the strategy layer; our hands-on delivery lives in our cybersecurity services — MDR, testing, GRC, and more. Together they secure and sustain your business." },
      { q: "Which compliance frameworks do you support?", a: "We support readiness and audit for ISO 27001, SOC 2, GDPR, HIPAA, and PCI-DSS, among others." },
    ],
    related: [
      { title: "Cybersecurity Services", href: "/services/cybersecurity/" },
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
    ],
    cta: {
      title: "Make your business secure and resilient.",
      subtitle: "Book a call for a security and continuity review across threats and downtime.",
    },
  },
];

export function getSolution(slug: string): ServiceDetail | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
