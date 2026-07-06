"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const SERVICES = [
  "IT Hardware & Procurement",
  "Software & Licensing",
  "Solutions (AI, Cloud, Workplace)",
  "Platform Services (SAP, Oracle, Workday…)",
  "Cybersecurity",
  "Managed Services & Support",
  "Staffing & Offshore Delivery",
  "Something else",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" /> Contact
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-cobalt sm:text-5xl">
              Let&apos;s start the conversation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Tell us what you&apos;re trying to achieve — hardware, software, a platform project, or
              a fully managed service — and the right specialist will get back to you within one
              business day.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-cobalt">Get in touch</h2>
              <p className="mt-3 text-slate">
                Prefer to talk? Reach us directly — we operate across the Americas, EMEA, and APAC.
              </p>
              <ul className="mt-8 space-y-6">
                {[
                  { icon: Phone, label: "Call us", value: "+1 (347) 516-8555" },
                  { icon: Mail, label: "Email us", value: "info@kovtechnologies.com", href: "mailto:info@kovtechnologies.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri, 24/5 support for managed clients" },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-lg font-semibold text-cobalt hover:text-flame">{c.value}</a>
                      ) : (
                        <p className="text-lg font-semibold text-cobalt">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { city: "New York, USA", addr: "Franklin Ave, Garden City, NY 11530" },
                  { city: "Pune, India", addr: "Deepmala Complex, Kokane Chowk, 411027" },
                ].map((o) => (
                  <div key={o.city} className="rounded-2xl border border-ink/8 bg-mist p-5">
                    <div className="flex items-center gap-2 text-cobalt">
                      <MapPin className="h-4 w-4 text-flame" />
                      <span className="font-semibold">{o.city}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate">{o.addr}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-ink/8 bg-white p-8 shadow-sm sm:p-10">
              {sent ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-flame" />
                  <h3 className="mt-5 text-2xl font-bold text-cobalt">Thanks — we&apos;ve got it.</h3>
                  <p className="mt-3 max-w-sm text-slate">
                    A KOV specialist will reach out within one business day. In the meantime, feel
                    free to explore our services.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" name="company" />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <Label>What can we help with?</Label>
                    <select
                      name="service"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Tell us about your project</Label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
                      placeholder="A few lines on what you need…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-flame/25 transition hover:brightness-105"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-slate">
                    By submitting, you agree to be contacted about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-sm font-semibold text-cobalt">{children}</label>;
}

function Field({
  label, name, type = "text", required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}{required && <span className="text-flame"> *</span>}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
      />
    </div>
  );
}
