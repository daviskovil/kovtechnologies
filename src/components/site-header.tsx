"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Hardware", href: "/hardware/" },
  { label: "Software", href: "/software/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Services", href: "/services/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo-mark.png" alt="KOV Technologies" width={44} height={44} priority />
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight text-cobalt">
          KOV
        </span>
        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.25em] text-flame">
          Technologies
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/80 transition hover:text-cobalt"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-grad px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cobalt/20 transition hover:brightness-105"
          >
            Schedule a Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6 text-cobalt" /> : <Menu className="h-6 w-6 text-cobalt" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-ink/5 bg-white transition-all",
          open ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-mist hover:text-cobalt"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-grad px-5 py-3 text-sm font-semibold text-white"
          >
            Schedule a Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
