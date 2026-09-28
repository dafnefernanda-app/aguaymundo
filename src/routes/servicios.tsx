import { createFileRoute } from "@tanstack/react-router";

import { MayoristasCTA, PageHero, PorQueElegirnos } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/cards";
import { servicios } from "@/data/services";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta mayorista de aguaymanto en Perú" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Atención a restaurantes, tiendas, distribuidores y empresas que requieren aguaymanto peruano.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        description="Desde una compra puntual hasta un abastecimiento recurrente para tu negocio, con acompañamiento en cada pedido."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Qué ofrecemos"
            title="Servicios para clientes particulares y empresas"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasCTA />
      <PorQueElegirnos />
    </>
  );
}
