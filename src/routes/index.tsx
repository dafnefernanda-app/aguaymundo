import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { HeroSlider } from "@/components/HeroSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { NewsCard, ProductCard, ServiceCard } from "@/components/cards";
import { MayoristasCTA, PorQueElegirnos } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { productos } from "@/data/products";
import { servicios } from "@/data/services";
import { noticias } from "@/data/news";
import campo from "@/assets/hero-campo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Venta y producción de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor y atención a restaurantes, tiendas, distribuidores y empresas. Solicita tu cotización.",
      },
      { property: "og:title", content: "Aguaymanto Perú | Aguaymanto peruano de calidad" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco seleccionado, presentaciones comerciales y atención a clientes mayoristas en el Perú.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Sobre nosotros"
              title="Comprometidos con la calidad del aguaymanto peruano"
              description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Reveal delay={120}>
              <Button asChild variant="forest" size="lg" className="mt-8">
                <Link to="/quienes-somos">
                  Conoce quiénes somos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={100} className="relative">
            <img
              src={campo}
              alt="Campo peruano con cultivo de aguaymanto al atardecer"
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-gold px-6 py-5 shadow-lift sm:block">
              <p className="font-display text-2xl text-gold-foreground">100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-foreground/80">
                Origen peruano
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Nuestros productos"
              title="Aguaymanto seleccionado para cada tipo de cliente"
            />
            <Reveal delay={80}>
              <Button asChild variant="quiet">
                <Link to="/productos">Ver todos los productos</Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="Nuestros servicios"
            title="Acompañamos cada pedido, del primer contacto a la entrega"
            description="Servicios pensados para clientes particulares, negocios gastronómicos, tiendas y distribuidores."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasCTA />
      <PorQueElegirnos />

      {/* Galería */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Galería"
            title="Nuestro trabajo, del campo al producto final"
            description="Campos, plantaciones, cosecha, selección, empaque y producto listo para el cliente."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Noticias y actualidad" title="Novedades de la empresa" />
            <Reveal delay={80}>
              <Button asChild variant="quiet">
                <Link to="/noticias">Ver todas las noticias</Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia, i) => (
              <NewsCard key={noticia.slug} noticia={noticia} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Respuestas a las consultas más comunes"
            description="Si necesitas información adicional, escríbenos por WhatsApp o desde la página de contacto."
          />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
