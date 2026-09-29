import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web y de las consultas comerciales realizadas a través de él.",
      },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio y de las cotizaciones solicitadas.",
      },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Términos y condiciones" />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Este documento es un texto inicial editable. {site.legalName} deberá revisarlo y
            adaptarlo antes de su publicación definitiva.
          </p>
          <h2 className="pt-4 text-xl text-forest">Uso del sitio</h2>
          <p>
            La información publicada en este sitio tiene carácter informativo y comercial. Las
            imágenes son referenciales y no constituyen una oferta vinculante.
          </p>
          <h2 className="pt-4 text-xl text-forest">Cotizaciones y pedidos</h2>
          <p>
            Los precios, presentaciones y disponibilidad se confirman por escrito en cada cotización.
            Las condiciones de entrega se acuerdan con el cliente según el volumen y la ubicación.
          </p>
          <h2 className="pt-4 text-xl text-forest">Propiedad intelectual</h2>
          <p>
            Los contenidos, textos e imágenes del sitio pertenecen a {site.legalName}, salvo
            indicación contraria.
          </p>
          <h2 className="pt-4 text-xl text-forest">Contacto</h2>
          <p>Para cualquier consulta sobre estos términos, escríbenos a {site.contact.email}.</p>
        </div>
      </section>
    </>
  );
}
