import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "light" ? "text-gold-soft" : "text-leaf",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              tone === "light" ? "bg-gold-soft/60" : "bg-leaf/50",
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl leading-tight md:text-4xl",
          tone === "light" ? "text-forest-foreground" : "text-forest",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-forest-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
