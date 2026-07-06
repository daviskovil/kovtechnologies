import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "cta" | "indigo" | "outline" | "light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  cta: "bg-cta text-white shadow-lg shadow-flame/25 hover:brightness-105 hover:shadow-flame/40 uppercase",
  indigo: "bg-indigo-grad text-white shadow-md shadow-cobalt/20 hover:brightness-105",
  outline: "border border-cobalt/25 text-cobalt hover:bg-cobalt/5",
  light: "bg-white text-cobalt shadow-sm ring-1 ring-cobalt/10 hover:bg-mist",
  ghost: "text-cobalt hover:text-flame",
};

export function Button({
  href,
  variant = "cta",
  withArrow = false,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
