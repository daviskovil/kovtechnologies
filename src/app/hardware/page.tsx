import type { Metadata } from "next";
import { HubTemplate } from "@/components/hub-template";
import {
  Monitor, Router, HardDrive, Printer, MonitorSmartphone, Keyboard, Phone,
  BatteryCharging, Building2, ScanLine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Hardware Supply & Procurement",
  description:
    "From laptops and servers to networking, storage, and peripherals — KOV sources, configures, and delivers enterprise IT hardware with transparent pricing and warranty support.",
};

export default function HardwarePage() {
  return (
    <HubTemplate
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Hardware" }]}
      eyebrow="Hardware"
      title="Enterprise hardware, sourced and delivered."
      intro="One partner for every device your business runs on — computers, networking, storage, and peripherals — with competitive pricing, configuration, deployment, and warranty support."
      primary={{ label: "Request a Quote", href: "/contact/" }}
      secondary={{ label: "Talk to Sales", href: "/contact/" }}
      sections={[
        {
          eyebrow: "Browse hardware",
          title: "Categories we supply",
          intro: "Whether you need a single workstation or a full fleet, we handle sourcing to delivery.",
          accent: "cobalt",
          items: [
            { title: "Computers", desc: "Desktops, laptops, workstations, servers, and thin clients.", href: "/hardware/computers/", icon: Monitor },
            { title: "Networking", desc: "Switches, routers, firewalls, access points, and cabling.", href: "/hardware/networking/", icon: Router },
            { title: "Storage & Backup", desc: "SSD, HDD, NAS, SAN, and backup appliances.", href: "/hardware/storage/", icon: HardDrive },
            { title: "Printers & Supplies", desc: "Printers, scanners, toner, and consumables.", href: "/hardware/printers-supplies/", icon: Printer },
            { title: "Monitors & Displays", desc: "Monitors, digital signage, and projectors.", href: "/hardware/monitors-displays/", icon: MonitorSmartphone },
            { title: "Accessories", desc: "Keyboards, mice, docking stations, webcams, headsets.", href: "/hardware/accessories/", icon: Keyboard },
            { title: "Phones & Video", desc: "VoIP handsets, conferencing kit, and headsets.", href: "/hardware/phones-video/", icon: Phone },
            { title: "Power & UPS", desc: "Uninterruptible power supplies and PDUs.", href: "/hardware/power-ups/", icon: BatteryCharging },
            { title: "Office Equipment", desc: "Everyday hardware to keep teams productive.", href: "/hardware/office-equipment/", icon: Building2 },
            { title: "Point of Sale & Barcode", desc: "POS terminals, scanners, and label printers.", href: "/hardware/point-of-sale/", icon: ScanLine },
          ],
        },
      ]}
      cta={{
        title: "Need hardware at scale?",
        subtitle: "Tell us your specs and volumes — we'll return a configured quote with lead times.",
        cta: "Request a Quote",
      }}
    />
  );
}
