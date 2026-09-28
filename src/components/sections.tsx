import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { atributosCalidad, mayoristaBeneficios, razones } from "@/data/company";

export function MayoristasCTA() {
  return (
    <section className="bg-gradient-forest py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <SectionTitle
          tone="light"
          eyebrow="Clientes mayoristas"
          title="¿Buscas un proveedor de aguaymanto?"
          description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
        />
        <Reveal delay={100} className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-8 backdrop-blur-sm">
          <ul className="space-y-4">
            {mayoristaBeneficios.map((item) => (
              <li key={item} className="flex items-center gap-3 text-forest-foreground">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="gold" size="lg" className="mt-8 w-full">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function PorQueElegirnos() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          align="center"
          eyebrow="Confianza"
          title="¿Por qué elegirnos?"
          description="Razones por las que empresas y clientes particulares confían en nuestro trabajo."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {razones.map((razon, i) => (
            <Reveal
              as="li"
              key={razon.title}
              delay={i * 70}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-forest text-forest-foreground">
                <Icon name={razon.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base text-forest">{razon.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{razon.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CalidadSection() {
  return (
    <section id="calidad" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Calidad"
          title="Calidad que se nota"
          description="Cuidamos los atributos que el cliente percibe al recibir el producto."
        />
        <ul className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {atributosCalidad.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="border-t border-border pt-5">
              <p className="font-display text-lg text-forest">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-forest py-20 md:py-28">
      <div
        className="absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow flex items-center gap-3 text-gold-soft">
          <span className="h-px w-10 bg-gold-soft/70" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] text-forest-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest-foreground/80 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
