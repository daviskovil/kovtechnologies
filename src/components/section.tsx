import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-flame" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl",
          dark ? "text-white" : "text-cobalt",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-cobalt-100" : "text-slate",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
