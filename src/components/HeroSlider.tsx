import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import campo from "@/assets/hero-campo.jpg";
import fruta from "@/assets/hero-fruta.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";
import { cn } from "@/lib/utils";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: campo,
    alt: "Cultivo de aguaymanto en un valle andino del Perú al amanecer",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: cosecha,
    alt: "Productores cosechando aguaymanto fresco en el campo",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    image: fruta,
    alt: "Aguaymanto fresco seleccionado, listo para su presentación comercial",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section
      aria-label="Presentación de la empresa"
      className="relative isolate h-[88vh] min-h-[560px] w-full overflow-hidden bg-forest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "size-full object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.24_0.04_154/0.92)_0%,oklch(0.24_0.04_154/0.66)_45%,oklch(0.24_0.04_154/0.25)_100%)]"
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 flex items-center gap-3 text-gold-soft">
            <span className="h-px w-10 bg-gold-soft/70" aria-hidden="true" />
            Producción y comercialización de aguaymanto
          </p>
          <h1
            key={`title-${index}`}
            className="animate-in fade-in slide-in-from-bottom-4 text-4xl leading-[1.08] text-forest-foreground duration-700 sm:text-5xl lg:text-6xl"
          >
            {slides[index].title}
          </h1>
          {slides[index].text ? (
            <p
              key={`text-${index}`}
              className="animate-in fade-in slide-in-from-bottom-3 mt-6 max-w-xl text-base leading-relaxed text-forest-foreground/85 duration-700 sm:text-lg"
            >
              {slides[index].text}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-3">
            {slides[index].actions.map((action) => (
              <Button key={action.label} asChild size="lg" variant={action.variant}>
                <Link to={action.to}>{action.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex gap-2.5" role="tablist" aria-label="Diapositivas">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "w-12 bg-gold" : "w-6 bg-forest-foreground/40 hover:bg-forest-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Diapositiva anterior"
              className="grid size-11 place-items-center rounded-full border border-forest-foreground/35 text-forest-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Diapositiva siguiente"
              className="grid size-11 place-items-center rounded-full border border-forest-foreground/35 text-forest-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
