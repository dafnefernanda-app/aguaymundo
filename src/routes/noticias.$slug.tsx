import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";

import { NewsCard } from "@/components/cards";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { getNoticia, noticias } from "@/data/news";
import { Gallery } from "@/components/Gallery";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.noticia.title} | Aguaymanto Perú` },
          { name: "description", content: loaderData.noticia.excerpt },
          { property: "og:title", content: loaderData.noticia.title },
          { property: "og:description", content: loaderData.noticia.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: NoticiaDetalle,
});

function NoticiaDetalle() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias.filter((n) => n.slug !== noticia.slug);

  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden bg-forest">
          <img
            src={noticia.image}
            alt={noticia.alt}
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
            <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-gold-soft">
              <span className="flex items-center gap-2">
                <Tag className="size-3.5" aria-hidden="true" />
                {noticia.category}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                <time dateTime={noticia.date}>{noticia.dateLabel}</time>
              </span>
              <span className="flex items-center gap-2">
                <User className="size-3.5" aria-hidden="true" />
                {noticia.author}
              </span>
            </p>
            <h1 className="mt-5 text-3xl leading-tight text-forest-foreground md:text-5xl">
              {noticia.title}
            </h1>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="border-l-2 border-gold pl-5 font-display text-lg leading-relaxed text-forest">
            {noticia.excerpt}
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {noticia.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl text-forest">Galería</h2>
            <div className="mt-6">
              <Gallery />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild variant="quiet">
              <Link to="/noticias">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Volver a noticias
              </Link>
            </Button>
            <Button asChild variant="gold">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Más contenido" title="Noticias relacionadas" />
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {relacionadas.map((n, i) => (
              <NewsCard key={n.slug} noticia={n} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
