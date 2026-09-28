import campo from "@/assets/hero-campo.jpg";
import fruta from "@/assets/hero-fruta.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";

/** Noticias de ejemplo — editables o eliminables. */
export type Noticia = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  content: string[];
};

export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-12",
    dateLabel: "12 de agosto de 2026",
    author: "[AUTOR]",
    excerpt:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para los productores peruanos.",
    image: campo,
    alt: "Campo de aguaymanto en un valle andino al atardecer",
    content: [
      "El aguaymanto es uno de los frutos andinos que ha logrado captar la atención de compradores dentro y fuera del país. Su sabor característico y su versatilidad en la gastronomía lo han convertido en un producto atractivo para distintos tipos de clientes.",
      "Desde nuestra empresa acompañamos ese interés con un trabajo enfocado en la selección del fruto y en la atención comercial, buscando que cada cliente reciba un producto con una presentación adecuada.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por la nota real de la empresa.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-04",
    dateLabel: "4 de julio de 2026",
    author: "[AUTOR]",
    excerpt:
      "Un recorrido por las etapas del cultivo y el cuidado que requiere el fruto hasta la cosecha.",
    image: cosecha,
    alt: "Manos cosechando aguaymanto en jabas durante la mañana",
    content: [
      "El cultivo del aguaymanto requiere atención en cada etapa: preparación del terreno, manejo de la planta, seguimiento del cultivo y cosecha en el momento adecuado.",
      "El cuidado durante la cosecha y el manejo posterior influyen directamente en la presentación del fruto que llega al cliente.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por la nota real de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-06-18",
    dateLabel: "18 de junio de 2026",
    author: "[AUTOR]",
    excerpt:
      "Trabajamos en procesos que nos permitan sostener la calidad del producto y una relación cercana con nuestros clientes.",
    image: fruta,
    alt: "Aguaymanto fresco seleccionado en primer plano",
    content: [
      "La calidad no depende de una sola etapa: se construye en el campo, en la selección, en el empaque y en la atención al cliente.",
      "Por eso orientamos nuestros esfuerzos a fortalecer los procesos internos y a mantener una comunicación clara con quienes confían en nosotros.",
      "Este contenido es un texto de ejemplo y puede reemplazarse por la nota real de la empresa.",
    ],
  },
];

export const getNoticia = (slug: string) => noticias.find((n) => n.slug === slug);
