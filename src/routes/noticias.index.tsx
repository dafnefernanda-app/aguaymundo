import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { NewsCard } from "@/components/cards";
import { noticias } from "@/data/news";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto, mercado y producción responsable.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Noticias de la empresa y contenidos sobre agricultura y aguaymanto peruano.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  const categorias = Array.from(new Set(noticias.map((n) => n.category)));

  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        description="Publicaciones sobre nuestra empresa, el cultivo del aguaymanto y el mercado. Los contenidos actuales son de ejemplo y pueden editarse o eliminarse."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Blog corporativo" title="Últimas publicaciones" />
          <ul className="mt-6 flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <li
                key={cat}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-forest"
              >
                {cat}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia, i) => (
              <NewsCard key={noticia.slug} noticia={noticia} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
