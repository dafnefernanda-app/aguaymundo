import { createFileRoute } from "@tanstack/react-router";

import { CalidadSection, MayoristasCTA, PageHero } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/cards";
import { productos } from "@/data/products";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto fresco, presentaciones para distribución y opciones especiales según requerimiento y disponibilidad.",
      },
      { property: "og:title", content: "Nuestros productos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco seleccionado, presentaciones para distribuidores y opciones especiales para empresas.",
      },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto fresco y presentaciones comerciales"
        description="Trabajamos distintas presentaciones para clientes particulares, negocios gastronómicos, tiendas y distribuidores. Los datos entre corchetes se completan con la información definitiva de la empresa."
      />

      <section id="catalogo" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Catálogo"
            title="Elige la presentación que mejor se adapta a tu negocio"
            description="Cada producto puede ampliarse luego con fotografías adicionales, ficha técnica y precios."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <CalidadSection />
      <MayoristasCTA />
    </>
  );
}
