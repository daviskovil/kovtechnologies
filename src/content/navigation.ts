import type { LucideIcon } from "lucide-react";
import {
  Monitor, Router, HardDrive, Printer, MonitorSmartphone, Keyboard, Phone,
  BatteryCharging, Building2, ScanLine, LayoutGrid, ShieldCheck, Boxes, Server,
  Database, Code2, Palette, MessagesSquare, AppWindow, KeyRound, BrainCircuit,
  Cloud, Workflow, Laptop, ServerCog, Layers, Lightbulb, Users, ShoppingCart,
} from "lucide-react";

export type MenuItem = { title: string; href: string; icon?: LucideIcon };
export type MenuColumn = { heading?: string; items: MenuItem[] };
export type NavEntry = {
  label: string;
  href: string;
  align?: "left" | "right";
  mega?: MenuColumn[];
};

export const NAV: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "Hardware",
    href: "/hardware/",
    mega: [
      {
        items: [
          { title: "Computers", href: "/hardware/computers/", icon: Monitor },
          { title: "Networking", href: "/hardware/networking/", icon: Router },
          { title: "Storage & Backup", href: "/hardware/storage/", icon: HardDrive },
          { title: "Printers & Supplies", href: "/hardware/printers-supplies/", icon: Printer },
          { title: "Monitors & Displays", href: "/hardware/monitors-displays/", icon: MonitorSmartphone },
        ],
      },
      {
        items: [
          { title: "Accessories", href: "/hardware/accessories/", icon: Keyboard },
          { title: "Phones & Video", href: "/hardware/phones-video/", icon: Phone },
          { title: "Power & UPS", href: "/hardware/power-ups/", icon: BatteryCharging },
          { title: "Office Equipment", href: "/hardware/office-equipment/", icon: Building2 },
          { title: "Point of Sale", href: "/hardware/point-of-sale/", icon: ScanLine },
        ],
      },
    ],
  },
  {
    label: "Software",
    href: "/software/",
    mega: [
      {
        items: [
          { title: "Business Applications", href: "/software/business-applications/", icon: LayoutGrid },
          { title: "Security", href: "/software/security/", icon: ShieldCheck },
          { title: "Virtualization", href: "/software/virtualization/", icon: Boxes },
          { title: "Operating Systems", href: "/software/operating-systems/", icon: Server },
          { title: "Data & Databases", href: "/software/data-databases/", icon: Database },
        ],
      },
      {
        items: [
          { title: "Dev & Web", href: "/software/development/", icon: Code2 },
          { title: "Graphics & Design", href: "/software/graphics-design/", icon: Palette },
          { title: "Communication", href: "/software/communication/", icon: MessagesSquare },
          { title: "Productivity & Apps", href: "/software/business-applications/", icon: AppWindow },
          { title: "Licensing", href: "/software/licensing/", icon: KeyRound },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/",
    mega: [
      {
        items: [
          { title: "AI & Data", href: "/solutions/ai-data/", icon: BrainCircuit },
          { title: "Cloud & Infrastructure", href: "/solutions/cloud-infrastructure/", icon: Cloud },
          { title: "Digital Enablement", href: "/solutions/digital-enablement/", icon: Workflow },
          { title: "Workplace Modernization", href: "/solutions/workplace-modernization/", icon: Laptop },
          { title: "Security & Continuity", href: "/solutions/security-continuity/", icon: ShieldCheck },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    align: "right",
    mega: [
      {
        heading: "Platform Services",
        items: [
          { title: "SAP", href: "/platform-services/sap/", icon: Boxes },
          { title: "Oracle", href: "/platform-services/oracle/", icon: Database },
          { title: "Workday", href: "/platform-services/workday/", icon: Users },
          { title: "Salesforce", href: "/platform-services/salesforce/", icon: Cloud },
          { title: "Microsoft Dynamics", href: "/platform-services/microsoft-dynamics/", icon: LayoutGrid },
          { title: "ServiceNow", href: "/platform-services/servicenow/", icon: Workflow },
          { title: "Shopify", href: "/platform-services/shopify-back-office-support/", icon: ShoppingCart },
        ],
      },
      {
        heading: "Horizontal Services",
        items: [
          { title: "Cybersecurity", href: "/services/cybersecurity/", icon: ShieldCheck },
          { title: "Managed Services", href: "/services/managed-services/", icon: ServerCog },
          { title: "Infrastructure", href: "/services/infrastructure/", icon: Layers },
          { title: "Advisory & Consulting", href: "/services/advisory/", icon: Lightbulb },
          { title: "Application Services", href: "/services/application-services/", icon: AppWindow },
          { title: "Talent Orchestration", href: "/services/talent-orchestration/", icon: Users },
          { title: "Procurement & Renewals", href: "/services/procurement/", icon: ShoppingCart },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
