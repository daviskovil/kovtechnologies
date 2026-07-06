"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { NAV } from "@/content/navigation";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo-mark.png" alt="KOV Technologies" width={44} height={44} priority />
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight text-cobalt">KOV</span>
        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.25em] text-flame">Technologies</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop nav + mega menu */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((entry) =>
            entry.mega ? (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setActive(entry.label)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={entry.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-ink/80 transition hover:text-cobalt"
                >
                  {entry.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition", active === entry.label && "rotate-180 text-cobalt")}
                  />
                </Link>

                {active === entry.label && (
                  <div className={cn("absolute top-full z-50 pt-3", entry.align === "right" ? "right-0" : "left-0")}>
                    <div className="flex gap-6 rounded-2xl border border-ink/8 bg-white p-5 shadow-xl shadow-cobalt/10">
                      {entry.mega.map((col, ci) => (
                        <div key={ci} className="min-w-56">
                          {col.heading && (
                            <p className="mb-2 px-3 text-[0.7rem] font-bold uppercase tracking-wider text-flame">
                              {col.heading}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {col.items.map((it) => (
                              <li key={it.href}>
                                <Link
                                  href={it.href}
                                  className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-mist"
                                >
                                  {it.icon && (
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt transition group-hover:bg-white">
                                      <it.icon className="h-4 w-4" />
                                    </span>
                                  )}
                                  <span className="text-sm font-medium text-ink/80 transition group-hover:text-cobalt">
                                    {it.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink/80 transition hover:text-cobalt"
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-grad px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cobalt/20 transition hover:brightness-105"
          >
            Schedule a Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-cobalt" /> : <Menu className="h-6 w-6 text-cobalt" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "border-t border-ink/5 bg-white lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((entry) =>
            entry.mega ? (
              <details key={entry.label} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80">
                  {entry.label}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="mb-1 ml-3 border-l border-ink/10 pl-3">
                  <Link href={entry.href} onClick={close} className="block rounded px-3 py-2 text-sm font-semibold text-cobalt">
                    All {entry.label}
                  </Link>
                  {entry.mega.flatMap((c) => c.items).map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={close}
                      className="block rounded px-3 py-2 text-sm text-ink/70 hover:text-cobalt"
                    >
                      {it.title}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={close}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-mist hover:text-cobalt"
              >
                {entry.label}
              </Link>
            ),
          )}
          <Link
            href="/contact/"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-grad px-5 py-3 text-sm font-semibold text-white"
          >
            Schedule a Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
