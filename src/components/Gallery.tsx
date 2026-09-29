import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "./Reveal";
import campo from "@/assets/hero-campo.jpg";
import fruta from "@/assets/hero-fruta.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";
import empaque from "@/assets/producto-empaque.jpg";
import { cn } from "@/lib/utils";

const images = [
  { src: campo, alt: "Plantación de aguaymanto en un valle andino", span: "md:col-span-2 md:row-span-2" },
  { src: fruta, alt: "Aguaymanto fresco en canasta de fibra natural", span: "" },
  { src: cosecha, alt: "Cosecha manual de aguaymanto en el campo", span: "" },
  { src: empaque, alt: "Producto empacado en envases comerciales", span: "md:col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, i) => (
          <Reveal
            key={image.alt}
            delay={i * 60}
            className={cn("overflow-hidden rounded-xl", image.span)}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group size-full cursor-zoom-in overflow-hidden"
              aria-label={`Ampliar imagen: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[open]!.alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[oklch(0.2_0.03_154/0.92)] p-6 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Cerrar imagen"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-forest-foreground/35 text-forest-foreground hover:bg-forest-foreground/15"
          >
            <X className="size-5" />
          </button>
          <img
            src={images[open]!.src}
            alt={images[open]!.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-lift"
          />
        </div>
      ) : null}
    </>
  );
}
