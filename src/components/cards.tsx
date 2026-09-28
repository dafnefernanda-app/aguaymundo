import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import type { Producto } from "@/data/products";
import type { Servicio } from "@/data/services";
import type { Noticia } from "@/data/news";

export function ProductCard({ product, delay = 0 }: { product: Producto; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          width={1600}
          height={1200}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-forest">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <dl className="mt-5 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <div className="flex justify-between gap-4">
            <dt className="font-semibold text-forest">Presentación</dt>
            <dd className="text-right">{product.presentacion}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-semibold text-forest">Peso</dt>
            <dd className="text-right">{product.peso}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-semibold text-forest">Disponibilidad</dt>
            <dd className="text-right">{product.disponibilidad}</dd>
          </div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2">
          {product.caracteristicas.map((c) => (
            <li
              key={c}
              className="rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold text-forest"
            >
              {c}
            </li>
          ))}
        </ul>
        <Button asChild variant="quiet" className="mt-6 w-full">
          <Link to="/contacto" search={{ producto: product.name }}>
            {product.cta}
          </Link>
        </Button>
      </div>
    </Reveal>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Servicio; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      id={service.id}
      className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-lift"
    >
      <span className="grid size-12 place-items-center rounded-lg bg-secondary text-leaf transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-lg text-forest">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Link
        to="/contacto"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-forest"
      >
        Consultar
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </Reveal>
  );
}

export function ValueCard({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="grid size-11 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="mt-4 text-base text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </Reveal>
  );
}

export function NewsCard({ noticia, delay = 0 }: { noticia: Noticia; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={noticia.image}
          alt={noticia.alt}
          width={1600}
          height={1000}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold-foreground">
          {noticia.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          <time dateTime={noticia.date}>{noticia.dateLabel}</time>
        </p>
        <h3 className="mt-3 text-lg leading-snug text-forest">
          <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="hover:text-leaf">
            {noticia.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{noticia.excerpt}</p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-forest"
        >
          Leer más
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}
