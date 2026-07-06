import {
  Monitor, Laptop, Server, Cpu, Network, Router, ShieldCheck, Wifi, HardDrive,
  Database, Boxes, Printer, ScanLine, Tag, Tv, Video, Keyboard, Headphones,
  Camera, Plug, Cable, Phone, BatteryCharging, Zap, Building2, Package,
  CreditCard, MonitorSmartphone, Globe, Presentation,
} from "lucide-react";
import type { ServiceDetail, Capability, Faq, Related } from "@/content/services";

const STATS = [
  { value: "Trusted", label: "Vendor partners" },
  { value: "Negotiated", label: "Competitive pricing" },
  { value: "Warranty", label: "Managed & tracked" },
  { value: "Fast", label: "Config & delivery" },
];
const PROCESS = [
  { title: "Assess needs", desc: "We capture your specs, volumes, and standards." },
  { title: "Recommend & quote", desc: "We recommend the right products with a clear quote." },
  { title: "Procure & configure", desc: "We source, configure, and asset-tag ready to deploy." },
  { title: "Deliver & support", desc: "We deliver and manage warranty and renewals." },
];
const compareFor = () => ({
  title: "Ad-hoc buying vs KOV procurement",
  withLabel: "KOV Procurement",
  withoutLabel: "Ad-hoc buying",
  rows: [
    { aspect: "Pricing", kov: "Negotiated, transparent", other: "List price" },
    { aspect: "Suppliers", kov: "One consolidated partner", other: "Many, uncoordinated" },
    { aspect: "Warranty", kov: "Tracked & managed", other: "Missed renewals" },
    { aspect: "Configuration", kov: "Ready to deploy", other: "DIY setup" },
    { aspect: "Advice", kov: "Expert guidance", other: "On your own" },
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
    category: "Hardware",
    eyebrow: "Hardware",
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
      subtitle: `Request a quote and we'll spec, source, configure, and deliver the right ${lower}.`,
    },
    ctaLabel: "Request a Quote",
    overviewHeading: "What we supply",
    capabilitiesTitle: "What's covered",
    capabilitiesIntro: `The ${lower} we source, configure, and support — from a single unit to a full fleet.`,
  };
}

const PROCURE: Related = { title: "Procurement & Renewals", href: "/services/procurement/" };

export const HARDWARE_CATEGORIES: ServiceDetail[] = [
  cat({
    slug: "computers",
    title: "Computers",
    seoTitle: "Business Computers — Desktops, Laptops, Workstations & Servers",
    metaDescription:
      "KOV supplies business computers — desktops, laptops, workstations, servers, and thin clients — configured, asset-tagged, and delivered with warranty. Request a quote.",
    tagline: "Desktops, laptops, workstations, and servers — specced to your needs, configured, and delivered ready to work.",
    answer:
      "Business computers include desktops, laptops, workstations, servers, and thin clients that KOV sources, configures, asset-tags, and delivers with warranty and lifecycle support — from a single device to a full fleet.",
    overview: [
      "The right compute hardware, configured consistently, keeps your teams productive and your IT team sane. KOV sources business-grade desktops, laptops, workstations, and servers from trusted vendors at negotiated prices.",
      "We standardize configurations, asset-tag every device, and manage warranty and refresh — so procurement is fast, consistent, and fully accounted for.",
    ],
    capabilities: [
      { title: "Desktops", desc: "Business desktops for every role.", icon: Monitor },
      { title: "Laptops", desc: "Portable business-grade laptops.", icon: Laptop },
      { title: "Workstations", desc: "High-performance workstations.", icon: Cpu },
      { title: "Servers", desc: "Tower, rack, and blade servers.", icon: Server },
      { title: "Thin Clients", desc: "Secure, low-maintenance endpoints.", icon: MonitorSmartphone },
      { title: "Fleet Configuration", desc: "Standard images and asset tagging.", icon: Boxes },
    ],
    useCases: [
      "Refreshing a laptop or desktop fleet",
      "Standing up new servers or workstations",
      "Onboarding staff with ready-to-use devices",
      "Standardizing device configurations",
    ],
    faqs: [
      { q: "What computers can KOV supply?", a: "We supply business desktops, laptops, workstations, servers, and thin clients from leading vendors, configured and asset-tagged ready to deploy." },
      { q: "Can you configure devices before delivery?", a: "Yes. We apply your standard image, security settings, and asset tags so devices arrive ready to use." },
      { q: "Do the computers come with warranty?", a: "Yes. All hardware includes manufacturer warranty, and we track and manage renewals so nothing lapses." },
      { q: "Can you supply at fleet scale?", a: "Yes. From a single device to thousands, we handle sourcing, configuration, and staged delivery." },
    ],
    related: [
      { title: "Accessories", href: "/hardware/accessories/" },
      { title: "Monitors & Displays", href: "/hardware/monitors-displays/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "networking",
    title: "Networking",
    seoTitle: "Networking Hardware — Switches, Routers, Firewalls & Access Points",
    metaDescription:
      "KOV supplies networking hardware — switches, routers, firewalls, access points, and structured cabling — sourced, configured, and supported. Request a quote.",
    tagline: "Switches, routers, firewalls, and Wi-Fi — the connectivity backbone, sourced and configured for performance and uptime.",
    answer:
      "Networking hardware includes switches, routers, firewalls, wireless access points, and structured cabling that KOV sources, configures, and supports to build reliable, secure connectivity.",
    overview: [
      "Reliable networking underpins everything else. KOV sources enterprise switches, routers, firewalls, and access points from trusted vendors and configures them for performance and security.",
      "Whether refreshing a network or wiring a new office, we handle the hardware, configuration, and warranty so connectivity stays fast and dependable.",
    ],
    capabilities: [
      { title: "Switches", desc: "Managed and PoE network switches.", icon: Network },
      { title: "Routers", desc: "Enterprise and branch routers.", icon: Router },
      { title: "Firewalls", desc: "Next-gen firewalls and security appliances.", icon: ShieldCheck },
      { title: "Access Points", desc: "Enterprise Wi-Fi access points.", icon: Wifi },
      { title: "Structured Cabling", desc: "Cabling, patch panels, and racks.", icon: Cable },
      { title: "SD-WAN", desc: "SD-WAN appliances and connectivity.", icon: Globe },
    ],
    useCases: [
      "Refreshing switches, routers, or firewalls",
      "Deploying enterprise Wi-Fi",
      "Wiring a new office or site",
      "Securing the network perimeter",
    ],
    faqs: [
      { q: "What networking hardware does KOV supply?", a: "Switches, routers, firewalls, wireless access points, structured cabling, and SD-WAN appliances from leading networking vendors." },
      { q: "Can you configure the network hardware?", a: "Yes. We can pre-configure switches, routers, firewalls, and access points to your standards before delivery." },
      { q: "Do you supply enterprise Wi-Fi?", a: "Yes. We source and configure enterprise access points and controllers for reliable, secure wireless coverage." },
      { q: "Can you help design the network too?", a: "Yes. Our infrastructure services team can design the network and our procurement team supplies the hardware." },
    ],
    related: [
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      { title: "Storage & Backup", href: "/hardware/storage/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "storage",
    title: "Storage & Backup",
    seoTitle: "Storage & Backup Hardware — SSD, NAS, SAN & Backup Appliances",
    metaDescription:
      "KOV supplies storage and backup hardware — SSDs, HDDs, NAS, SAN, and backup appliances — sized and configured for performance and resilience. Request a quote.",
    tagline: "SSD, NAS, SAN, and backup appliances — resilient storage sized and configured for your data and recovery needs.",
    answer:
      "Storage and backup hardware includes SSDs, HDDs, NAS, SAN, and backup appliances that KOV sources and configures to give you fast, resilient storage with tested recovery.",
    overview: [
      "Data keeps growing, and storage needs to be fast, resilient, and recoverable. KOV sources the right storage and backup hardware and sizes it to your capacity and performance needs.",
      "From flash storage to NAS, SAN, and backup appliances, we supply and configure resilient storage with the backup and recovery to match.",
    ],
    capabilities: [
      { title: "SSD & Flash", desc: "High-performance flash storage.", icon: Zap },
      { title: "Hard Drives", desc: "Enterprise HDDs for capacity.", icon: HardDrive },
      { title: "NAS", desc: "Network-attached storage.", icon: Database },
      { title: "SAN", desc: "Storage area network arrays.", icon: Server },
      { title: "Backup Appliances", desc: "Purpose-built backup appliances.", icon: Boxes },
      { title: "External Drives", desc: "Portable and external storage.", icon: HardDrive },
    ],
    useCases: [
      "Expanding storage capacity",
      "Deploying NAS or SAN",
      "Building a resilient backup solution",
      "Refreshing aging storage hardware",
    ],
    faqs: [
      { q: "What storage hardware does KOV supply?", a: "SSDs, enterprise HDDs, NAS, SAN arrays, backup appliances, and external drives from leading storage vendors." },
      { q: "Can you help size our storage?", a: "Yes. We assess your capacity, performance, and resilience needs and recommend the right storage and backup hardware." },
      { q: "Do you supply backup solutions?", a: "Yes. We supply backup appliances and can pair them with our managed services for tested, monitored backup and recovery." },
      { q: "Can you support data migration?", a: "Yes. Our infrastructure services team can migrate data to new storage with minimal disruption." },
    ],
    related: [
      { title: "Infrastructure Services", href: "/services/infrastructure/" },
      { title: "Computers", href: "/hardware/computers/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "printers-supplies",
    title: "Printers & Supplies",
    seoTitle: "Printers & Supplies — Printers, Scanners, Toner & Ink",
    metaDescription:
      "KOV supplies printers, multifunction devices, scanners, and consumables — toner, ink, and supplies — with managed replenishment. Request a quote.",
    tagline: "Printers, scanners, and consumables — supplied with managed replenishment so you never run out.",
    answer:
      "Printers and supplies include printers, multifunction devices, scanners, and consumables such as toner and ink, which KOV supplies with optional managed replenishment.",
    overview: [
      "Printing is still essential, and running out of toner mid-deadline isn't an option. KOV supplies printers, multifunction devices, and scanners plus the consumables to keep them running.",
      "With managed replenishment, we track usage and restock supplies automatically — so print stays reliable and costs stay predictable.",
    ],
    capabilities: [
      { title: "Printers", desc: "Laser and inkjet business printers.", icon: Printer },
      { title: "Multifunction Devices", desc: "Print, scan, copy, and fax in one.", icon: Printer },
      { title: "Scanners", desc: "Document and high-volume scanners.", icon: ScanLine },
      { title: "Toner & Ink", desc: "Genuine consumables for every device.", icon: Tag },
      { title: "Labels & Media", desc: "Labels, paper, and print media.", icon: Package },
      { title: "Managed Replenishment", desc: "Automatic supplies restocking.", icon: Boxes },
    ],
    useCases: [
      "Supplying office printers and MFDs",
      "Setting up managed print supplies",
      "Deploying document scanners",
      "Controlling print and consumables cost",
    ],
    faqs: [
      { q: "What printing hardware does KOV supply?", a: "Business laser and inkjet printers, multifunction devices, scanners, and all associated consumables and media." },
      { q: "Do you offer managed print supplies?", a: "Yes. We can track usage and automatically replenish toner, ink, and media so you never run out." },
      { q: "Do you supply genuine consumables?", a: "Yes. We supply genuine manufacturer toner, ink, and media compatible with your devices." },
      { q: "Can you help reduce print costs?", a: "Yes. We standardize devices and supplies and manage replenishment to make print costs predictable and lower." },
    ],
    related: [
      { title: "Office Equipment", href: "/hardware/office-equipment/" },
      { title: "Accessories", href: "/hardware/accessories/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "monitors-displays",
    title: "Monitors & Displays",
    seoTitle: "Monitors & Displays — Business Monitors, Signage & Projectors",
    metaDescription:
      "KOV supplies monitors, ultrawide displays, digital signage, projectors, and video walls with mounts and setup. Request a quote.",
    tagline: "Monitors, signage, and projectors — the right displays for productivity, meeting rooms, and public spaces.",
    answer:
      "Monitors and displays include business monitors, ultrawide screens, digital signage, projectors, and video walls that KOV supplies with mounts and setup.",
    overview: [
      "The right displays boost productivity at the desk and communication in shared spaces. KOV supplies business monitors, signage, and projectors sized to the task.",
      "From dual-monitor desk setups to meeting-room displays and digital signage, we supply the screens, mounts, and accessories and can handle installation.",
    ],
    capabilities: [
      { title: "Monitors", desc: "Business and productivity monitors.", icon: Monitor },
      { title: "Ultrawide & Multi-monitor", desc: "Ultrawide and multi-screen setups.", icon: MonitorSmartphone },
      { title: "Digital Signage", desc: "Commercial signage displays.", icon: Tv },
      { title: "Projectors", desc: "Meeting-room and event projectors.", icon: Video },
      { title: "Video Walls", desc: "Large-format video wall displays.", icon: Presentation },
      { title: "Mounts & Stands", desc: "Mounts, arms, and stands.", icon: Boxes },
    ],
    useCases: [
      "Rolling out dual-monitor desk setups",
      "Equipping meeting rooms with displays",
      "Deploying digital signage",
      "Installing a video wall",
    ],
    faqs: [
      { q: "What displays does KOV supply?", a: "Business monitors, ultrawide and multi-monitor setups, digital signage, projectors, video walls, and the mounts to go with them." },
      { q: "Do you install displays and signage?", a: "Yes. We can supply and install monitors, signage, and video walls, including mounts and cabling." },
      { q: "Can you standardize monitors across the org?", a: "Yes. We help standardize on the right models and supply them consistently at negotiated pricing." },
      { q: "Do displays come with warranty?", a: "Yes. All displays include manufacturer warranty, tracked and managed by us." },
    ],
    related: [
      { title: "Computers", href: "/hardware/computers/" },
      { title: "Accessories", href: "/hardware/accessories/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "accessories",
    title: "Accessories",
    seoTitle: "Computer Accessories — Keyboards, Docks, Webcams & Headsets",
    metaDescription:
      "KOV supplies computer accessories — keyboards, mice, docking stations, webcams, headsets, cables, and adapters — for the modern workplace. Request a quote.",
    tagline: "Keyboards, docks, webcams, and headsets — the peripherals that complete every workstation.",
    answer:
      "Computer accessories include keyboards, mice, docking stations, webcams, headsets, cables, and adapters that KOV supplies to equip and standardize every workstation.",
    overview: [
      "The little things add up: the right peripherals make every workstation comfortable, productive, and meeting-ready. KOV supplies accessories to standardize and complete your setups.",
      "From keyboards and docks to webcams and headsets for hybrid work, we source quality peripherals at scale with consistent standards.",
    ],
    capabilities: [
      { title: "Keyboards & Mice", desc: "Wired and wireless input devices.", icon: Keyboard },
      { title: "Docking Stations", desc: "USB-C and Thunderbolt docks.", icon: Plug },
      { title: "Webcams", desc: "HD webcams for hybrid work.", icon: Camera },
      { title: "Headsets", desc: "Business and conferencing headsets.", icon: Headphones },
      { title: "Cables & Adapters", desc: "Cables, adapters, and connectors.", icon: Cable },
      { title: "Peripherals", desc: "Everyday workstation peripherals.", icon: Boxes },
    ],
    useCases: [
      "Standardizing workstation peripherals",
      "Equipping staff for hybrid work",
      "Rolling out docking stations",
      "Supplying headsets and webcams",
    ],
    faqs: [
      { q: "What accessories does KOV supply?", a: "Keyboards, mice, docking stations, webcams, headsets, cables, adapters, and other workstation peripherals." },
      { q: "Can you supply accessories at scale?", a: "Yes. We supply peripherals consistently across your organization at negotiated pricing." },
      { q: "Do you supply hybrid-work kit?", a: "Yes. Webcams, headsets, and docks for home and office setups are a common request we handle." },
      { q: "Can you bundle accessories with computers?", a: "Yes. We can bundle and pre-configure accessories with device orders for ready-to-use setups." },
    ],
    related: [
      { title: "Computers", href: "/hardware/computers/" },
      { title: "Phones & Video", href: "/hardware/phones-video/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "phones-video",
    title: "Phones & Video",
    seoTitle: "Phones & Video — VoIP, Conferencing & Room Systems",
    metaDescription:
      "KOV supplies VoIP phones, video conferencing kit, headsets, and meeting-room systems for modern communication. Request a quote.",
    tagline: "VoIP phones, conferencing kit, and room systems — communication hardware for the hybrid workplace.",
    answer:
      "Phones and video hardware includes VoIP phones, video conferencing equipment, headsets, webcams, and meeting-room systems that KOV supplies and can install.",
    overview: [
      "Hybrid work runs on great audio and video. KOV supplies VoIP phones, conferencing kit, and room systems so every meeting sounds and looks professional.",
      "From desk phones and headsets to full meeting-room video systems, we supply and install communication hardware that works with your collaboration platform.",
    ],
    capabilities: [
      { title: "VoIP Phones", desc: "Desk and cordless IP phones.", icon: Phone },
      { title: "Video Conferencing", desc: "Cameras, bars, and codecs.", icon: Video },
      { title: "Headsets", desc: "Wired and wireless headsets.", icon: Headphones },
      { title: "Webcams", desc: "HD and 4K webcams.", icon: Camera },
      { title: "Room Systems", desc: "Meeting-room video systems.", icon: Presentation },
      { title: "Speakerphones", desc: "Portable and room speakerphones.", icon: Boxes },
    ],
    useCases: [
      "Equipping meeting rooms for video",
      "Rolling out VoIP desk phones",
      "Supplying headsets for hybrid teams",
      "Standardizing conferencing kit",
    ],
    faqs: [
      { q: "What communication hardware does KOV supply?", a: "VoIP phones, video conferencing cameras and bars, headsets, webcams, meeting-room systems, and speakerphones." },
      { q: "Do you install meeting-room systems?", a: "Yes. We supply and install room video systems, including cameras, displays, and audio." },
      { q: "Does the kit work with Teams or Zoom?", a: "Yes. We supply certified devices for Microsoft Teams, Zoom, and other platforms." },
      { q: "Can you supply headsets at scale?", a: "Yes. We supply business and conferencing headsets consistently across your teams." },
    ],
    related: [
      { title: "Accessories", href: "/hardware/accessories/" },
      { title: "Workplace Modernization", href: "/solutions/workplace-modernization/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "power-ups",
    title: "Power & UPS",
    seoTitle: "Power & UPS — Uninterruptible Power Supplies & PDUs",
    metaDescription:
      "KOV supplies UPS systems, PDUs, surge protection, and batteries to keep critical hardware powered and protected. Request a quote.",
    tagline: "UPS systems, PDUs, and surge protection — keep critical hardware powered through outages.",
    answer:
      "Power and UPS hardware includes uninterruptible power supplies (UPS), power distribution units (PDUs), surge protection, and batteries that KOV supplies to protect critical equipment from power disruption.",
    overview: [
      "Power problems can take down critical systems in an instant. KOV supplies UPS systems, PDUs, and surge protection to keep servers, network gear, and workstations running.",
      "We size UPS and battery capacity to your load and runtime needs, and supply the PDUs and protection to keep your equipment safe.",
    ],
    capabilities: [
      { title: "UPS Systems", desc: "Line-interactive and online UPS.", icon: BatteryCharging },
      { title: "PDUs", desc: "Rack power distribution units.", icon: Plug },
      { title: "Surge Protection", desc: "Surge protectors and conditioners.", icon: ShieldCheck },
      { title: "Batteries", desc: "Replacement UPS batteries.", icon: Zap },
      { title: "Rack Power", desc: "Rack power and cabling.", icon: Boxes },
      { title: "Power Cables", desc: "Power cables and adapters.", icon: Cable },
    ],
    useCases: [
      "Protecting servers and network gear",
      "Adding UPS to critical workstations",
      "Refreshing UPS batteries",
      "Distributing power in racks",
    ],
    faqs: [
      { q: "What power hardware does KOV supply?", a: "UPS systems, PDUs, surge protection, replacement batteries, and rack power and cabling." },
      { q: "Can you size a UPS for us?", a: "Yes. We size UPS capacity and runtime to your load so critical systems stay up during outages." },
      { q: "Do you supply data-center power?", a: "Yes. We supply rack PDUs, UPS, and power cabling for data-center and server-room environments." },
      { q: "Can you supply replacement UPS batteries?", a: "Yes. We supply and can help schedule replacement batteries to keep UPS units reliable." },
    ],
    related: [
      { title: "Storage & Backup", href: "/hardware/storage/" },
      { title: "Networking", href: "/hardware/networking/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "office-equipment",
    title: "Office Equipment",
    seoTitle: "Office Equipment & Supplies — AV, Shredders & Workplace Tech",
    metaDescription:
      "KOV supplies office equipment — AV gear, shredders, presentation tech, and workplace hardware — for productive, well-equipped offices. Request a quote.",
    tagline: "AV gear, shredders, and workplace tech — the equipment that keeps an office running.",
    answer:
      "Office equipment includes AV and presentation gear, shredders, and other workplace hardware that KOV supplies to keep offices productive and well-equipped.",
    overview: [
      "Beyond computers, an office needs the equipment that supports daily work — AV for meetings, shredders for security, and presentation tech. KOV supplies it all through one partner.",
      "We source workplace equipment at negotiated pricing and can bundle it with your broader hardware and setup needs.",
    ],
    capabilities: [
      { title: "AV Equipment", desc: "Speakers, mics, and AV gear.", icon: Video },
      { title: "Presentation Tech", desc: "Interactive displays and boards.", icon: Presentation },
      { title: "Shredders", desc: "Secure document shredders.", icon: Building2 },
      { title: "Meeting-Room Tech", desc: "Room booking and AV kit.", icon: Monitor },
      { title: "Workplace Hardware", desc: "Everyday office hardware.", icon: Package },
      { title: "Supplies", desc: "Consumables and office supplies.", icon: Boxes },
    ],
    useCases: [
      "Equipping meeting and conference rooms",
      "Supplying secure shredders",
      "Fitting out a new office",
      "Standardizing workplace equipment",
    ],
    faqs: [
      { q: "What office equipment does KOV supply?", a: "AV and presentation gear, shredders, meeting-room technology, and general workplace hardware and supplies." },
      { q: "Can you fit out a new office?", a: "Yes. We can supply the full range of office and AV equipment for a new office or refurbishment." },
      { q: "Do you supply presentation and AV tech?", a: "Yes. Interactive displays, speakers, microphones, and AV kit for meeting spaces are all available." },
      { q: "Can you bundle this with computer orders?", a: "Yes. We consolidate office equipment with your IT hardware orders for one supplier and one invoice." },
    ],
    related: [
      { title: "Printers & Supplies", href: "/hardware/printers-supplies/" },
      { title: "Monitors & Displays", href: "/hardware/monitors-displays/" },
      PROCURE,
    ],
  }),

  cat({
    slug: "point-of-sale",
    title: "Point of Sale & Barcode",
    seoTitle: "Point of Sale & Barcode — POS Terminals, Scanners & Receipt Printers",
    metaDescription:
      "KOV supplies point-of-sale and barcode hardware — POS terminals, barcode scanners, receipt printers, cash drawers, and card readers. Request a quote.",
    tagline: "POS terminals, scanners, and receipt printers — the hardware behind retail and hospitality operations.",
    answer:
      "Point of sale and barcode hardware includes POS terminals, barcode scanners, receipt printers, cash drawers, and card readers that KOV supplies for retail, hospitality, and warehouse operations.",
    overview: [
      "Retail, hospitality, and warehouse operations run on reliable POS and barcode hardware. KOV supplies terminals, scanners, and peripherals built for the demands of the front line.",
      "From a single till to a multi-store rollout, we source and configure POS and barcode hardware and manage warranty and replacement.",
    ],
    capabilities: [
      { title: "POS Terminals", desc: "Fixed and mobile POS terminals.", icon: CreditCard },
      { title: "Barcode Scanners", desc: "Handheld and fixed scanners.", icon: ScanLine },
      { title: "Receipt Printers", desc: "Thermal receipt printers.", icon: Printer },
      { title: "Cash Drawers", desc: "Secure cash drawers.", icon: Boxes },
      { title: "Card Readers", desc: "Payment card readers.", icon: CreditCard },
      { title: "Label Printers", desc: "Barcode and label printers.", icon: Tag },
    ],
    useCases: [
      "Rolling out POS across stores",
      "Equipping a warehouse with scanners",
      "Replacing aging POS hardware",
      "Adding card readers and receipt printers",
    ],
    faqs: [
      { q: "What POS hardware does KOV supply?", a: "POS terminals, barcode scanners, receipt printers, cash drawers, card readers, and label printers for retail, hospitality, and warehousing." },
      { q: "Can you configure POS hardware?", a: "Yes. We can configure and stage POS and barcode hardware ready for deployment across sites." },
      { q: "Do you support multi-store rollouts?", a: "Yes. We handle sourcing, configuration, and staged delivery for multi-site POS rollouts." },
      { q: "Can you manage POS hardware replacement?", a: "Yes. We track warranty and manage replacement to keep front-line hardware running." },
    ],
    related: [
      { title: "Printers & Supplies", href: "/hardware/printers-supplies/" },
      { title: "Networking", href: "/hardware/networking/" },
      PROCURE,
    ],
  }),
];

export function getHardwareCategory(slug: string): ServiceDetail | undefined {
  return HARDWARE_CATEGORIES.find((c) => c.slug === slug);
}
