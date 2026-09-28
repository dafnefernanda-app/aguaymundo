import { cn } from "@/lib/utils";

/** Logotipo provisional de texto. Reemplazar por [LOGO DE LA EMPRESA]. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-card"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M12 21c4.5 0 7.5-3 7.5-7.5C19.5 9 16.5 6 12 6s-7.5 3-7.5 7.5C4.5 18 7.5 21 12 21Z"
            fill="oklch(0.36 0.058 154 / 0.18)"
          />
          <path
            d="M12 6c2.2-2 5-2.6 7.4-2.2-.3 2.6-1.7 4.9-3.8 6.2M12 6C9.8 4 7 3.4 4.6 3.8c.3 2.6 1.7 4.9 3.8 6.2"
            stroke="oklch(0.3 0.05 154)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="14" r="4.6" stroke="oklch(0.3 0.05 154)" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[1.05rem] font-semibold tracking-tight",
            tone === "light" ? "text-forest-foreground" : "text-forest",
          )}
        >
          AGUAYMANTO PERÚ
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-semibold tracking-[0.2em]",
            tone === "light" ? "text-gold-soft" : "text-leaf",
          )}
        >
          PRODUCCIÓN Y COMERCIO
        </span>
      </span>
    </span>
  );
}
