import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";

import { PageHero, PorQueElegirnos } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ValueCard } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { compromisos, historia, mision, valores, vision } from "@/data/company";
import cosecha from "@/assets/hero-cosecha.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano, dedicada a la producción y comercialización de aguaymanto.",
      },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        description="Producimos y comercializamos aguaymanto, atendiendo a clientes particulares, restaurantes, tiendas, distribuidores y empresas que buscan un producto cuidado y una atención confiable."
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <img
              src={cosecha}
              alt="Productores seleccionando aguaymanto durante la cosecha"
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow="Nuestra empresa" title="Producto cuidado, atención cercana" />
            <Reveal delay={90} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción, comercialización y venta de
                aguaymanto. Nuestro trabajo se concentra en ofrecer un fruto seleccionado, con una
                presentación uniforme y un manejo cuidadoso en cada etapa.
              </p>
              <p>
                Atendemos a clientes particulares y también a negocios que requieren abastecimiento
                recurrente: restaurantes, hoteles, cafeterías, tiendas, distribuidores y empresas.
              </p>
              <p>
                Lo que nos diferencia es la combinación entre el cuidado del producto y una atención
                comercial cercana, que busca entender qué necesita cada cliente antes de proponer una
                presentación.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <Button asChild variant="gold" size="lg" className="mt-8">
                <Link to="/contacto">Solicitar cotización</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section id="nuestra-historia" className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Trayectoria"
            title="Nuestra historia"
            description="Estos textos son iniciales y serán reemplazados por la historia real de la empresa."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {historia.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 90}
                className="relative rounded-xl border border-border bg-card p-7 shadow-card"
              >
                <span className="font-display text-4xl text-gold">{item.step}</span>
                <h3 className="mt-3 text-lg text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <span
                  className="absolute inset-x-7 top-0 h-1 rounded-b bg-gradient-gold"
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 lg:grid-cols-2">
          <Reveal
            id="mision"
            className="rounded-2xl bg-gradient-forest p-10 text-forest-foreground shadow-lift"
          >
            <span className="grid size-14 place-items-center rounded-full bg-gold text-gold-foreground">
              <Target className="size-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl text-forest-foreground">Nuestra Misión</h2>
            <p className="mt-4 text-base leading-relaxed text-forest-foreground/85">{mision}</p>
          </Reveal>
          <Reveal
            id="vision"
            delay={100}
            className="rounded-2xl border border-border bg-card p-10 shadow-card"
          >
            <span className="grid size-14 place-items-center rounded-full bg-secondary text-leaf">
              <Compass className="size-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl text-forest">Nuestra Visión</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle align="center" eyebrow="Principios" title="Nuestros valores" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor, i) => (
              <ValueCard key={valor.title} icon={valor.icon} title={valor.title} text={valor.text} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Nuestro compromiso"
            title="Tres pilares guían nuestro trabajo"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {compromisos.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 80}
                className="border-t-2 border-gold pt-6"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-secondary text-leaf">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Galería" title="Campos, cosecha y producto" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <PorQueElegirnos />
    </>
  );
}
