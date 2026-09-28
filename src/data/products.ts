import fresco from "@/assets/hero-fruta.jpg";
import empaque from "@/assets/producto-empaque.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";

export type Producto = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  presentacion: string;
  peso: string;
  disponibilidad: string;
  precio: string;
  caracteristicas: string[];
};

export const productos: Producto[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: fresco,
    alt: "Aguaymanto fresco con cáliz abierto en canasta de fibra natural",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "Según campaña",
    precio: "[PRECIO A CONSULTAR]",
    caracteristicas: ["Selección manual", "Color uniforme", "Manejo en frío según pedido"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: empaque,
    alt: "Cajas y envases comerciales de aguaymanto listos para distribución",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN COMERCIAL]",
    peso: "[PESO POR CAJA]",
    disponibilidad: "Sujeta a volumen",
    precio: "[PRECIO A CONSULTAR]",
    caracteristicas: ["Pedidos por volumen", "Empaque para transporte", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: cosecha,
    alt: "Cosecha de aguaymanto seleccionada en campo peruano",
    cta: "Consultar presentación",
    presentacion: "A definir con el cliente",
    peso: "A definir",
    disponibilidad: "Según requerimiento",
    precio: "[PRECIO A CONSULTAR]",
    caracteristicas: ["Requerimientos específicos", "Evaluación caso por caso", "Asesoría comercial"],
  },
];
