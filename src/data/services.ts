export type Servicio = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const servicios: Servicio[] = [
  {
    id: "venta",
    icon: "ShoppingBasket",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    id: "venta-mayorista",
    icon: "Boxes",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
  },
  {
    id: "restaurantes",
    icon: "ChefHat",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    id: "tiendas",
    icon: "Store",
    title: "Atención a tiendas y distribuidores",
    description:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    id: "pedidos-personalizados",
    icon: "PackageCheck",
    title: "Pedidos personalizados",
    description:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    id: "asesoria",
    icon: "Headset",
    title: "Asesoría comercial",
    description:
      "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
];
