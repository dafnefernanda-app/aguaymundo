import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site, whatsappLink } from "@/config/site";

type ContactoSearch = { producto?: string };

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): ContactoSearch => ({
    producto: typeof search.producto === "string" ? search.producto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Escríbenos por WhatsApp, teléfono, correo o formulario para solicitar una cotización de aguaymanto fresco o al por mayor.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Consultas comerciales y cotizaciones de aguaymanto peruano.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  const datos = [
    {
      label: "WhatsApp",
      value: site.contact.whatsappDisplay,
      href: whatsappLink(),
      Icon: MessageCircle,
      external: true,
    },
    {
      label: "Teléfono",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    {
      label: "Correo electrónico",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      Icon: Mail,
    },
    {
      label: "Dirección",
      value: `${site.contact.address}, ${site.contact.city}`,
      Icon: MapPin,
    },
    { label: "Horario de atención", value: site.contact.hours, Icon: Clock },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Escríbenos o llámanos" />
            <ul className="mt-10 space-y-5">
              {datos.map(({ label, value, href, Icon, external }, i) => (
                <Reveal
                  as="li"
                  key={label}
                  delay={i * 60}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-leaf">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="mt-1 block font-display text-lg text-forest hover:text-leaf"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="mt-1 block font-display text-lg text-forest">{value}</span>
                    )}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle
              eyebrow="Formulario"
              title="Cuéntanos qué necesitas"
              description="Completa los datos y nuestro equipo te responderá con una propuesta."
            />
            <Reveal delay={100} className="mt-10">
              <ContactForm productoInicial={producto ?? ""} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
