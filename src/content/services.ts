import type { LucideIcon } from "lucide-react";
import {
  Activity, Headset, Laptop, RefreshCw, DatabaseBackup, BarChart3,
  ServerCog, Network, Cloud, Boxes, HardDrive,
  Compass, Layers, Workflow, ClipboardCheck, BadgeDollarSign, Briefcase,
  Code2, Bug, Wrench, Webhook, Infinity as InfinityIcon,
  UserCog, UserCheck, Users, Search, ShieldCheck, Zap,
  ShoppingCart, LayoutGrid, KeyRound, CalendarClock, Package, Handshake,
} from "lucide-react";

export type Faq = { q: string; a: string };
export type Stat = { value: string; label: string };
export type Capability = { title: string; desc: string; icon: LucideIcon };
export type Step = { title: string; desc: string };
export type CompareRow = { aspect: string; kov: string; other: string };
export type Related = { title: string; href: string };

export type ServiceDetail = {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  /** Concise AEO/GEO answer — a direct definition used in the answer box + JSON-LD. */
  answer: string;
  overview: string[];
  stats: Stat[];
  capabilities: Capability[];
  compare: { title: string; withLabel: string; withoutLabel: string; rows: CompareRow[] };
  process: Step[];
  useCases: string[];
  faqs: Faq[];
  related: Related[];
  cta: { title: string; subtitle: string };
};

export const SERVICES: ServiceDetail[] = [
  // ─────────────────────────────────────────────────────────── Managed Services
  {
    slug: "managed-services",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Managed IT Services",
    seoTitle: "Managed IT Services — 24/7 Monitoring, Helpdesk & Support",
    metaDescription:
      "KOV Managed IT Services deliver 24/7 monitoring, helpdesk, endpoint management, patching, and backup with clear SLAs — reducing downtime and IT cost. Book a call.",
    tagline:
      "Offload the day-to-day running of your IT to a team that monitors, maintains, and supports it 24/7 — so your people focus on the business, not the tickets.",
    answer:
      "Managed IT services are an outsourcing model where a provider proactively monitors, manages, and supports an organization's IT systems for a predictable monthly fee, typically covering 24/7 monitoring, a service desk, endpoint management, patching, and backup under a defined SLA.",
    overview: [
      "Most IT teams spend their days firefighting — patching servers, chasing tickets, and reacting to outages — leaving little time for the projects that move the business forward. Managed services flip that model: KOV takes ownership of the routine, proactive work so issues are caught and fixed before your users ever notice.",
      "Every engagement is governed by a clear service-level agreement, transparent reporting, and a named delivery lead. You get enterprise-grade operations — monitoring, helpdesk, security hygiene, and backup — at a predictable monthly cost, with the flexibility to scale coverage up or down as you grow.",
    ],
    stats: [
      { value: "24/7", label: "Monitoring & support" },
      { value: "99.9%", label: "Uptime target" },
      { value: "<15 min", label: "Critical response SLA" },
      { value: "40%", label: "Typical IT cost reduction" },
    ],
    capabilities: [
      { title: "24/7 Monitoring", desc: "Continuous monitoring of servers, networks, and endpoints with automated alerting and self-healing.", icon: Activity },
      { title: "Service Desk & Helpdesk", desc: "Multi-channel support with tiered escalation and a single point of accountability.", icon: Headset },
      { title: "Endpoint Management", desc: "Provisioning, hardening, and lifecycle management for laptops, desktops, and mobile.", icon: Laptop },
      { title: "Patch & Update Management", desc: "Tested, scheduled patching that keeps systems secure without disrupting users.", icon: RefreshCw },
      { title: "Backup & Disaster Recovery", desc: "Automated backups, tested restores, and documented recovery objectives.", icon: DatabaseBackup },
      { title: "Reporting & SLAs", desc: "Transparent dashboards, monthly reviews, and measurable service-level commitments.", icon: BarChart3 },
    ],
    compare: {
      title: "In-house break/fix vs KOV Managed Services",
      withLabel: "KOV Managed Services",
      withoutLabel: "Traditional in-house / break-fix",
      rows: [
        { aspect: "Cost model", kov: "Predictable monthly fee", other: "Unbudgeted, spikes on every incident" },
        { aspect: "Approach", kov: "Proactive — issues caught early", other: "Reactive — fix after it breaks" },
        { aspect: "Coverage", kov: "24/7/365", other: "Business hours only" },
        { aspect: "Scalability", kov: "Scale up or down on demand", other: "Limited by headcount" },
        { aspect: "Accountability", kov: "SLA-backed with reporting", other: "Best-effort, hard to measure" },
      ],
    },
    process: [
      { title: "Assess & onboard", desc: "We audit your estate, document assets, and agree SLAs and escalation paths." },
      { title: "Stabilize", desc: "We deploy monitoring, close security gaps, and clear the backlog of known issues." },
      { title: "Operate", desc: "Our team runs day-to-day operations 24/7, resolving issues and maintaining systems." },
      { title: "Optimize", desc: "Regular reviews surface trends and improvements that reduce cost and risk over time." },
    ],
    useCases: [
      "Growing businesses without a full in-house IT team",
      "Organizations facing frequent downtime or slow ticket resolution",
      "Teams that want to shift internal staff from maintenance to strategic projects",
      "Companies needing after-hours or follow-the-sun coverage",
      "Businesses preparing for an audit that requires documented IT controls",
    ],
    faqs: [
      { q: "What is included in managed IT services?", a: "KOV managed services typically include 24/7 monitoring, a service desk, endpoint management, patching, backup and disaster recovery, security hygiene, and monthly reporting against agreed SLAs. Scope is tailored to your environment." },
      { q: "How much do managed IT services cost?", a: "Pricing is usually a fixed monthly fee based on the number of users, devices, and the coverage level you need. This predictable model typically reduces total IT cost by 30–40% versus reactive break-fix support." },
      { q: "Will managed services replace my internal IT team?", a: "Not necessarily. Many clients keep internal staff for strategic work while KOV handles day-to-day operations and after-hours coverage. We can fully manage IT or co-manage alongside your team." },
      { q: "How quickly do you respond to issues?", a: "Response times are defined in your SLA. Critical incidents are typically acknowledged in under 15 minutes, with 24/7 coverage for priority issues." },
      { q: "How do you keep our systems secure?", a: "Security is built in — patching, endpoint protection, access management, and backup are part of the standard service, and we can layer in our dedicated cybersecurity services for deeper protection." },
    ],
    related: [
      { title: "Cybersecurity", href: "/services/cybersecurity/" },
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      { title: "Application Services", href: "/services/application-services/" },
    ],
    cta: {
      title: "Ready to stop firefighting your IT?",
      subtitle: "Book a call and we'll assess your environment and design a managed-services plan around it.",
    },
  },

  // ─────────────────────────────────────────────────────────── Infrastructure
  {
    slug: "infrastructure",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Infrastructure Services",
    seoTitle: "IT Infrastructure Services — Data Center, Network & Cloud Ops",
    metaDescription:
      "KOV Infrastructure Services design, build, and operate data center, network, and cloud environments — resilient, secure, and automated. Book a call.",
    tagline:
      "Design, build, and run the foundation your applications depend on — data center, network, and cloud — engineered for resilience, performance, and scale.",
    answer:
      "IT infrastructure services cover the design, implementation, and ongoing operation of the core technology foundation — servers, storage, networks, and cloud platforms — that every application and business process runs on.",
    overview: [
      "Your applications are only as reliable as the infrastructure beneath them. KOV designs and operates resilient, secure, and automated environments across on-premise data centers, private cloud, and public cloud — so performance stays high and outages stay rare.",
      "From a single network refresh to a full hybrid-cloud build, our engineers bring architecture, implementation, and 24/7 operational discipline. We treat infrastructure as code, automate the repetitive, and monitor everything, giving you a foundation that scales with demand and recovers fast when things go wrong.",
    ],
    stats: [
      { value: "99.99%", label: "Availability designs" },
      { value: "24/7", label: "Infrastructure monitoring" },
      { value: "3", label: "Cloud platforms (AWS, Azure, GCP)" },
      { value: "50%", label: "Faster provisioning via automation" },
    ],
    capabilities: [
      { title: "Data Center Services", desc: "Design, migration, colocation, and management of physical and virtual data centers.", icon: ServerCog },
      { title: "Network Engineering", desc: "LAN, WAN, SD-WAN, and secure connectivity built for performance and uptime.", icon: Network },
      { title: "Cloud Operations", desc: "Provisioning, cost control, and day-2 operations across AWS, Azure, and GCP.", icon: Cloud },
      { title: "Virtualization", desc: "Hypervisor and container platforms that maximize utilization and flexibility.", icon: Boxes },
      { title: "Storage & Backup", desc: "Resilient storage, SAN/NAS, and backup architectures with tested recovery.", icon: HardDrive },
      { title: "Monitoring & Automation", desc: "Infrastructure-as-code, observability, and automated remediation at scale.", icon: Activity },
    ],
    compare: {
      title: "Ad-hoc infrastructure vs KOV-engineered infrastructure",
      withLabel: "KOV Infrastructure",
      withoutLabel: "Ad-hoc / unmanaged",
      rows: [
        { aspect: "Provisioning", kov: "Automated, infrastructure-as-code", other: "Manual, inconsistent" },
        { aspect: "Resilience", kov: "Designed for HA & DR", other: "Single points of failure" },
        { aspect: "Visibility", kov: "Full observability & alerting", other: "Blind spots until outage" },
        { aspect: "Cost", kov: "Right-sized & optimized", other: "Over-provisioned, wasteful" },
        { aspect: "Scaling", kov: "Elastic, on demand", other: "Slow, hardware-bound" },
      ],
    },
    process: [
      { title: "Assess & architect", desc: "We map current state and design a target architecture for resilience and cost." },
      { title: "Build & migrate", desc: "We implement and migrate workloads with minimal disruption and clear rollback plans." },
      { title: "Automate", desc: "We codify provisioning and monitoring so the environment is repeatable and observable." },
      { title: "Operate & optimize", desc: "We run and continuously tune the environment for performance and efficiency." },
    ],
    useCases: [
      "Migrating from on-premise to cloud or hybrid cloud",
      "Refreshing aging network or data-center hardware",
      "Reducing cloud spend through right-sizing and automation",
      "Building high-availability and disaster-recovery capability",
      "Standing up new environments quickly for growth or M&A",
    ],
    faqs: [
      { q: "What are IT infrastructure services?", a: "They cover the design, build, and operation of the core technology foundation — servers, storage, networking, and cloud — that applications and business processes rely on. KOV provides architecture, implementation, migration, and 24/7 operations." },
      { q: "Do you work with on-premise, cloud, or both?", a: "Both. We design and operate on-premise data centers, public cloud (AWS, Azure, GCP), and hybrid environments, choosing the right mix for your workloads, cost, and compliance needs." },
      { q: "Can you help reduce our cloud costs?", a: "Yes. Cloud cost optimization (FinOps) is a core part of what we do — right-sizing, reserved capacity, automated scheduling, and eliminating waste, which commonly cuts cloud spend by 20–40%." },
      { q: "How do you minimize downtime during migrations?", a: "We plan migrations in waves with tested rollback plans, run parallel where possible, and schedule cutovers during low-impact windows — keeping business disruption to a minimum." },
      { q: "Do you provide ongoing management after the build?", a: "Yes. We offer 24/7 monitoring and management as part of our managed services, so the infrastructure we build is also kept optimized, patched, and resilient over time." },
    ],
    related: [
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Cybersecurity", href: "/services/cybersecurity/" },
      { title: "Cloud & Infrastructure Solutions", href: "/solutions/cloud-infrastructure/" },
    ],
    cta: {
      title: "Build infrastructure you can rely on.",
      subtitle: "Book a call to review your current environment and map a resilient, cost-efficient target state.",
    },
  },

  // ─────────────────────────────────────────────────────────── Advisory
  {
    slug: "advisory",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Advisory & Consulting",
    seoTitle: "IT Advisory & Consulting — Strategy, Architecture & Transformation",
    metaDescription:
      "KOV IT advisory and consulting: technology strategy, enterprise architecture, digital transformation roadmaps, and vCIO/vCISO leadership. Book a call.",
    tagline:
      "Independent, pragmatic guidance that turns technology decisions into business results — from strategy and architecture to transformation roadmaps.",
    answer:
      "IT advisory and consulting is the practice of helping organizations make better technology decisions — defining strategy, designing architecture, and planning transformation — so that IT investment is aligned to measurable business outcomes.",
    overview: [
      "Technology choices are getting harder and more consequential. KOV advisory brings senior, vendor-independent expertise to help you set direction, avoid costly missteps, and prioritize the initiatives that will actually move the needle.",
      "Whether you need a fractional CIO/CISO, an architecture review, or a full digital-transformation roadmap, we combine hands-on delivery experience with a clear-eyed view of cost, risk, and return — leaving you with decisions you can defend and a plan you can execute.",
    ],
    stats: [
      { value: "20+", label: "Years leadership experience" },
      { value: "100%", label: "Vendor-independent advice" },
      { value: "3", label: "Regions of delivery experience" },
      { value: "1:1", label: "Named senior advisor" },
    ],
    capabilities: [
      { title: "IT Strategy", desc: "Align technology investment to business goals with a clear, prioritized roadmap.", icon: Compass },
      { title: "Enterprise Architecture", desc: "Target-state architecture and standards that reduce complexity and risk.", icon: Layers },
      { title: "Digital Transformation", desc: "Pragmatic transformation roadmaps sequenced for value and adoption.", icon: Workflow },
      { title: "Technology Assessments", desc: "Independent reviews of your estate, spend, and risk with actionable findings.", icon: ClipboardCheck },
      { title: "Cloud & Cost Advisory", desc: "Right-size cloud, optimize licensing, and control run-rate spend.", icon: BadgeDollarSign },
      { title: "vCIO / vCISO", desc: "Fractional executive leadership for strategy, governance, and security.", icon: Briefcase },
    ],
    compare: {
      title: "Product-led vendor vs KOV independent advisory",
      withLabel: "KOV Advisory",
      withoutLabel: "Product-led vendor",
      rows: [
        { aspect: "Objectivity", kov: "Vendor-independent", other: "Incentivized to sell product" },
        { aspect: "Focus", kov: "Business outcomes", other: "License & seat count" },
        { aspect: "Scope", kov: "Whole-estate view", other: "Their product only" },
        { aspect: "Deliverable", kov: "Executable roadmap", other: "Sales proposal" },
        { aspect: "Accountability", kov: "Advisor stays engaged", other: "Hands off after signature" },
      ],
    },
    process: [
      { title: "Discover", desc: "We understand your goals, constraints, and current-state technology and spend." },
      { title: "Analyze", desc: "We assess options against cost, risk, and business value — objectively." },
      { title: "Recommend", desc: "We deliver a clear, prioritized roadmap with a business case leaders can back." },
      { title: "Support delivery", desc: "We stay engaged to guide execution and course-correct as you deliver." },
    ],
    useCases: [
      "Setting a multi-year IT strategy or transformation roadmap",
      "Getting an independent second opinion before a major investment",
      "Filling a leadership gap with a fractional CIO or CISO",
      "Reducing complexity and cost across a sprawling technology estate",
      "Preparing for board or investor scrutiny of technology and risk",
    ],
    faqs: [
      { q: "What does an IT advisory consultant do?", a: "They provide independent guidance on technology strategy, architecture, and transformation — helping leaders decide what to invest in, how to sequence it, and how to manage cost and risk, all tied to business outcomes." },
      { q: "What is a vCIO or vCISO?", a: "A virtual CIO or CISO is a fractional executive who provides strategic technology or security leadership on a part-time or interim basis — ideal for organizations that need senior guidance without a full-time hire." },
      { q: "Is your advice tied to specific vendors?", a: "No. Our advisory is vendor-independent. We recommend what's right for your goals, cost, and risk — not what earns us a commission." },
      { q: "How do you measure the value of advisory work?", a: "Every engagement ties to measurable outcomes — reduced cost, lower risk, faster delivery, or new capability — captured in a business case you can hold us to." },
      { q: "Can you help execute the roadmap, not just write it?", a: "Yes. Because KOV also delivers hardware, software, and managed services, we can stay engaged through execution — or hand a clean plan to your team." },
    ],
    related: [
      { title: "Digital Enablement Solutions", href: "/solutions/digital-enablement/" },
      { title: "Cybersecurity", href: "/services/cybersecurity/" },
      { title: "Application Services", href: "/services/application-services/" },
    ],
    cta: {
      title: "Make your next technology decision with confidence.",
      subtitle: "Book a call with a senior KOV advisor to pressure-test your strategy — no product pitch.",
    },
  },

  // ─────────────────────────────────────────────────────────── Application Services
  {
    slug: "application-services",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Application Services",
    seoTitle: "Application Services — Development, QA, Integration & Support",
    metaDescription:
      "KOV Application Services: custom development, QA & testing, integration, modernization, and application maintenance & support with DevOps discipline. Book a call.",
    tagline:
      "Build, integrate, test, and maintain the applications your business runs on — with engineering discipline and DevOps automation from day one.",
    answer:
      "Application services cover the full software lifecycle — custom development, quality assurance, integration, modernization, and ongoing maintenance — delivered as a managed capability so applications stay reliable, secure, and up to date.",
    overview: [
      "Software is where your business logic lives, and it's never finished. KOV provides end-to-end application services — designing and building new applications, integrating them with the rest of your estate, testing rigorously, and keeping them healthy in production.",
      "We work in cross-functional pods with DevOps and QA built in, so you get faster releases, fewer defects, and applications that evolve with your business instead of quietly decaying into technical debt.",
    ],
    stats: [
      { value: "2x", label: "Faster release cadence" },
      { value: "70%", label: "Test automation coverage" },
      { value: "24/7", label: "Production support option" },
      { value: "100%", label: "Code review & CI/CD" },
    ],
    capabilities: [
      { title: "Custom Development", desc: "Web, mobile, and cloud-native applications built to your requirements.", icon: Code2 },
      { title: "QA & Testing", desc: "Manual and automated testing, from functional to performance and security.", icon: Bug },
      { title: "Maintenance & Support", desc: "Ongoing bug fixes, enhancements, and SLA-backed production support.", icon: Wrench },
      { title: "Application Modernization", desc: "Refactor, re-platform, or re-architect legacy apps for the cloud era.", icon: RefreshCw },
      { title: "Integration & APIs", desc: "Connect applications and data with robust, secure APIs and middleware.", icon: Webhook },
      { title: "DevOps & CI/CD", desc: "Automated pipelines, infrastructure-as-code, and continuous delivery.", icon: InfinityIcon },
    ],
    compare: {
      title: "Staff-only build vs KOV managed application services",
      withLabel: "KOV Application Services",
      withoutLabel: "Ad-hoc / staff-only build",
      rows: [
        { aspect: "Quality", kov: "QA & automated testing built in", other: "Testing an afterthought" },
        { aspect: "Delivery", kov: "CI/CD, frequent releases", other: "Manual, risky deployments" },
        { aspect: "Ownership", kov: "Full lifecycle managed", other: "Build then abandon" },
        { aspect: "Scalability", kov: "Elastic pod capacity", other: "Bottlenecked on individuals" },
        { aspect: "Tech debt", kov: "Actively managed down", other: "Accumulates silently" },
      ],
    },
    process: [
      { title: "Discovery & design", desc: "We define requirements, architecture, and a delivery plan with clear milestones." },
      { title: "Build & test", desc: "We develop in iterations with automated testing and continuous integration." },
      { title: "Release", desc: "We deploy through CI/CD pipelines with monitoring and rollback safety." },
      { title: "Run & evolve", desc: "We support in production and continuously enhance based on real usage." },
    ],
    useCases: [
      "Building a new customer-facing or internal application",
      "Modernizing a legacy application that's costly to maintain",
      "Integrating disconnected systems and data sources",
      "Adding QA automation and CI/CD to speed up releases",
      "Providing ongoing maintenance and support for existing apps",
    ],
    faqs: [
      { q: "What are application services?", a: "Application services span the full software lifecycle — development, QA, integration, modernization, and maintenance — delivered as a managed capability so your applications stay reliable, secure, and current." },
      { q: "Do you build new apps or maintain existing ones?", a: "Both. We build new web, mobile, and cloud-native applications, and we also take over maintenance, support, and modernization of existing applications." },
      { q: "What technologies do you work with?", a: "Our pods cover modern web and cloud stacks, mobile, APIs, and the major cloud platforms. We choose the stack that best fits your requirements and existing estate." },
      { q: "How do you ensure software quality?", a: "Quality is built in: code review, automated testing (often 70%+ coverage), CI/CD pipelines, and security scanning are standard, not optional extras." },
      { q: "Can you provide 24/7 production support?", a: "Yes. We offer SLA-backed application support, including optional 24/7 coverage for business-critical systems." },
    ],
    related: [
      { title: "Managed IT Services", href: "/services/managed-services/" },
      { title: "Advisory & Consulting", href: "/services/advisory/" },
      { title: "Talent Orchestration", href: "/services/talent-orchestration/" },
    ],
    cta: {
      title: "Ship better software, faster.",
      subtitle: "Book a call to scope your application build, modernization, or support engagement.",
    },
  },

  // ─────────────────────────────────────────────────────────── Talent Orchestration
  {
    slug: "talent-orchestration",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Talent Orchestration",
    seoTitle: "IT Staffing & Talent Orchestration — Contract, Permanent & Offshore",
    metaDescription:
      "KOV Talent Orchestration: vetted IT staffing across contract, permanent, offshore delivery pods, and RPO — the right skills, onboarded fast. Book a call.",
    tagline:
      "The right IT talent, at the right time, in the right model — contract, permanent, or offshore delivery pods — vetted and onboarded in days, not months.",
    answer:
      "Talent orchestration is a flexible IT staffing model that blends contract, permanent, and offshore resourcing — matching vetted specialists to a client's needs and scaling teams up or down as project demand changes.",
    overview: [
      "Demand for specialist IT skills consistently outpaces supply, and traditional hiring is too slow for the pace of modern projects. KOV gives you a single partner for every resourcing model — contract, permanent, offshore pods, and RPO — so you can add exactly the skills you need, exactly when you need them.",
      "Every candidate is rigorously vetted for technical depth and delivery track record, and we handle onboarding, compliance, and offboarding. The result is flexible capacity that flexes with your pipeline, without the cost and lead time of building it all in-house.",
    ],
    stats: [
      { value: "48 hrs", label: "First qualified profiles" },
      { value: "3-step", label: "Technical vetting process" },
      { value: "3", label: "Regions of talent supply" },
      { value: "100%", label: "Compliance-managed engagements" },
    ],
    capabilities: [
      { title: "Contract Staffing", desc: "Specialists embedded into your team for the duration of a project or need.", icon: UserCog },
      { title: "Permanent Placement", desc: "Rigorously screened candidates for long-term, full-time roles.", icon: UserCheck },
      { title: "Offshore Delivery Pods", desc: "Managed, cross-functional teams delivering from our offshore center.", icon: Users },
      { title: "Recruitment Process Outsourcing", desc: "We run part or all of your recruiting function at scale.", icon: Search },
      { title: "Vetting & Screening", desc: "Multi-stage technical and background screening for every candidate.", icon: ShieldCheck },
      { title: "Rapid Onboarding", desc: "Compliance, access, and setup handled so people contribute from day one.", icon: Zap },
    ],
    compare: {
      title: "Traditional hiring vs KOV Talent Orchestration",
      withLabel: "KOV Talent Orchestration",
      withoutLabel: "Traditional hiring",
      rows: [
        { aspect: "Speed", kov: "Profiles in 48 hours", other: "Weeks to months" },
        { aspect: "Flexibility", kov: "Scale up or down anytime", other: "Fixed headcount" },
        { aspect: "Models", kov: "Contract, permanent, offshore", other: "Permanent only" },
        { aspect: "Risk", kov: "Vetted, compliance-managed", other: "Hiring risk on you" },
        { aspect: "Cost", kov: "Pay for what you use", other: "Full loaded cost year-round" },
      ],
    },
    process: [
      { title: "Define", desc: "We capture the skills, seniority, model, and timeline you need." },
      { title: "Source & vet", desc: "We shortlist from our network and screen for technical and cultural fit." },
      { title: "Onboard", desc: "We handle compliance, contracts, and access so people start fast." },
      { title: "Manage & scale", desc: "We support the engagement and flex the team as your needs change." },
    ],
    useCases: [
      "Scaling a project team quickly without permanent headcount",
      "Filling a niche or hard-to-find specialist skill",
      "Standing up a managed offshore delivery pod",
      "Outsourcing high-volume recruiting via RPO",
      "Converting proven contractors to permanent hires",
    ],
    faqs: [
      { q: "What is talent orchestration?", a: "It's a flexible IT staffing approach that blends contract, permanent, and offshore models — matching vetted specialists to your needs and scaling teams up or down as demand changes, all through one partner." },
      { q: "How fast can you provide candidates?", a: "For most roles we share qualified profiles within 48 hours, drawing on our existing network of vetted specialists across multiple regions." },
      { q: "How do you vet candidates?", a: "Every candidate goes through a multi-stage process covering technical assessment, experience validation, and background screening before they reach your shortlist." },
      { q: "What is an offshore delivery pod?", a: "It's a managed, cross-functional team that delivers work from our offshore center — giving you dedicated capacity and cost efficiency while we handle management and compliance." },
      { q: "Can contractors convert to permanent employees?", a: "Yes. Contract-to-hire is a common path, letting you evaluate a specialist on real work before making a permanent offer." },
    ],
    related: [
      { title: "Application Services", href: "/services/application-services/" },
      { title: "Advisory & Consulting", href: "/services/advisory/" },
      { title: "SAP Platform Services", href: "/platform-services/sap/" },
    ],
    cta: {
      title: "Need the right people, fast?",
      subtitle: "Book a call and we'll share vetted profiles matched to your roles within 48 hours.",
    },
  },

  // ─────────────────────────────────────────────────────────── Procurement
  {
    slug: "procurement",
    category: "Horizontal Services",
    eyebrow: "Horizontal Service",
    title: "Procurement & Renewals",
    seoTitle: "IT Procurement & Renewals — Sourcing, eProcurement & Asset Management",
    metaDescription:
      "KOV IT Procurement & Renewals: hardware and software sourcing, eProcurement catalogs, license and warranty management, and asset tracking. Book a call.",
    tagline:
      "One partner to source, buy, and manage your IT hardware and software — with custom catalogs, transparent pricing, and renewals that never lapse.",
    answer:
      "IT procurement and renewals services manage the sourcing, purchasing, and lifecycle of an organization's technology — hardware, software licenses, warranties, and renewals — through streamlined catalogs and vendor management that reduce cost and administrative overhead.",
    overview: [
      "IT purchasing is often fragmented across vendors, spreadsheets, and forgotten renewal dates — quietly leaking budget and creating risk. KOV consolidates it into one managed procurement function with transparent pricing, custom catalogs, and proactive renewal management.",
      "We leverage vendor relationships to secure competitive pricing, standardize what your teams can order, and track every asset and license through its lifecycle — so nothing lapses unexpectedly and every dollar of technology spend is accounted for.",
    ],
    stats: [
      { value: "1", label: "Consolidated IT supplier" },
      { value: "15-25%", label: "Typical sourcing savings" },
      { value: "0", label: "Missed renewals target" },
      { value: "100%", label: "Asset & license visibility" },
    ],
    capabilities: [
      { title: "Hardware & Software Sourcing", desc: "Competitive sourcing of devices, licenses, and peripherals from trusted vendors.", icon: ShoppingCart },
      { title: "eProcurement & Custom Catalogs", desc: "Pre-approved catalogs that make ordering fast, controlled, and on-budget.", icon: LayoutGrid },
      { title: "License Management", desc: "Track entitlements, avoid over-licensing, and stay audit-ready.", icon: KeyRound },
      { title: "Warranty & Renewals", desc: "Proactive management so support contracts and renewals never lapse.", icon: CalendarClock },
      { title: "Asset Management", desc: "Full lifecycle tracking of every device from purchase to retirement.", icon: Package },
      { title: "Vendor Management", desc: "A single point of contact managing the vendors on your behalf.", icon: Handshake },
    ],
    compare: {
      title: "Fragmented buying vs KOV managed procurement",
      withLabel: "KOV Procurement",
      withoutLabel: "Fragmented / ad-hoc buying",
      rows: [
        { aspect: "Suppliers", kov: "One consolidated partner", other: "Many, uncoordinated" },
        { aspect: "Pricing", kov: "Negotiated, transparent", other: "List price, inconsistent" },
        { aspect: "Renewals", kov: "Proactively managed", other: "Missed, auto-renewed blind" },
        { aspect: "Visibility", kov: "Full asset & license tracking", other: "Spreadsheets & guesswork" },
        { aspect: "Control", kov: "Approved catalogs", other: "Uncontrolled maverick spend" },
      ],
    },
    process: [
      { title: "Baseline", desc: "We inventory current assets, licenses, contracts, and renewal dates." },
      { title: "Standardize", desc: "We build approved catalogs and consolidate vendors for better pricing." },
      { title: "Procure", desc: "We source and fulfill orders with transparent, negotiated pricing." },
      { title: "Manage lifecycle", desc: "We track assets and proactively manage every renewal and warranty." },
    ],
    useCases: [
      "Consolidating fragmented IT purchasing under one partner",
      "Eliminating missed or blind auto-renewals",
      "Gaining full visibility of assets and software licenses",
      "Standardizing what teams can order with approved catalogs",
      "Reducing hardware and software spend through better sourcing",
    ],
    faqs: [
      { q: "What do IT procurement services include?", a: "They include sourcing hardware and software, running eProcurement catalogs, managing licenses and warranties, tracking assets through their lifecycle, and managing vendors — all through a single partner." },
      { q: "How do you save us money on procurement?", a: "We consolidate spend, negotiate pricing through vendor relationships, standardize ordering to prevent maverick spend, and eliminate waste from over-licensing and missed renewals — typically saving 15–25%." },
      { q: "What is a custom procurement catalog?", a: "It's a pre-approved set of hardware and software your teams can order from, with agreed pricing and configurations — making purchasing fast and controlled while keeping spend on budget." },
      { q: "How do you make sure renewals aren't missed?", a: "We maintain a complete register of contracts, warranties, and licenses with their dates, and proactively manage renewals ahead of expiry so nothing lapses unexpectedly." },
      { q: "Can you manage our existing assets and licenses?", a: "Yes. We can take over asset and license management for your existing estate, giving you full visibility and audit-readiness from day one." },
    ],
    related: [
      { title: "Hardware", href: "/hardware/" },
      { title: "Software", href: "/software/" },
      { title: "Managed IT Services", href: "/services/managed-services/" },
    ],
    cta: {
      title: "Take control of your IT spend.",
      subtitle: "Book a call for a procurement review — we'll find the savings and the lapsed renewals.",
    },
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
