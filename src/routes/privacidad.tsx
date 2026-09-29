import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Política de privacidad sobre el tratamiento de los datos que los usuarios comparten al contactarnos.",
      },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Cómo tratamos los datos de contacto que recibimos a través del sitio.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de privacidad" />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Este documento es un texto inicial editable. {site.legalName} deberá revisarlo y
            adaptarlo a la normativa aplicable antes de su publicación definitiva.
          </p>
          <h2 className="pt-4 text-xl text-forest">Datos que recopilamos</h2>
          <p>
            Recopilamos únicamente los datos que el usuario nos proporciona de forma voluntaria a
            través del formulario de contacto o de los canales de comunicación indicados en el sitio:
            nombre, empresa, correo electrónico, teléfono, ciudad y el detalle de su consulta.
          </p>
          <h2 className="pt-4 text-xl text-forest">Finalidad</h2>
          <p>
            Los datos se utilizan para responder consultas comerciales, elaborar cotizaciones y dar
            seguimiento a la relación con el cliente.
          </p>
          <h2 className="pt-4 text-xl text-forest">Conservación y terceros</h2>
          <p>
            No comercializamos ni cedemos los datos a terceros con fines publicitarios. La
            información se conserva durante el tiempo necesario para atender la consulta.
          </p>
          <h2 className="pt-4 text-xl text-forest">Derechos del usuario</h2>
          <p>
            El usuario puede solicitar el acceso, la rectificación o la eliminación de sus datos
            escribiendo a {site.contact.email}.
          </p>
        </div>
      </section>
    </>
  );
}
