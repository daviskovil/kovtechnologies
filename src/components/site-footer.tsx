import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";

const COLS = [
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/about/" },
      { label: "The Team", href: "/about/#team" },
      { label: "Careers", href: "/careers/" },
      { label: "Case Studies", href: "/case-studies/" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Hardware", href: "/hardware/" },
      { label: "Software", href: "/software/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Services", href: "/services/" },
    ],
  },
  {
    heading: "Links",
    links: [
      { label: "Testimonials", href: "/testimonials/" },
      { label: "FAQs", href: "/faq/" },
      { label: "Blog", href: "/blog/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms/" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 bg-mist">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo-mark.png" alt="KOV Technologies" width={40} height={40} />
              <span className="leading-none">
                <span className="block font-display text-lg font-extrabold text-cobalt">KOV</span>
                <span className="block text-[0.55rem] font-bold uppercase tracking-[0.25em] text-flame">
                  Technologies
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
              Your single partner for IT hardware, software, and services — from procurement to
              implementation, managed services, and offshore delivery.
            </p>
            <a
              href="https://www.linkedin.com/"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-cobalt shadow-sm ring-1 ring-cobalt/10 transition hover:text-flame"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-cobalt">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate transition hover:text-cobalt">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-cobalt">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-slate">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <span>+1 (347) 516-8555</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <a href="mailto:info@kovtechnologies.com" className="hover:text-cobalt">
                  info@kovtechnologies.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <span>Franklin Ave, Garden City,<br />New York, NY 11530, US</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                <span>Deepmala Complex, Kokane<br />Chowk, Pune 411027, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-sm text-slate sm:flex-row">
          <p>© {new Date().getFullYear()} KOV Technologies. All rights reserved.</p>
          <p>Delivering across the Americas, EMEA &amp; APAC.</p>
        </div>
      </Container>
    </footer>
  );
}
