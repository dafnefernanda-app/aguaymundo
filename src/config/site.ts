/**
 * Configuración central del sitio.
 * Reemplaza los valores entre corchetes por los datos reales de la empresa.
 */

export const site = {
  companyName: "Aguaymanto Perú",
  legalName: "[NOMBRE DE LA EMPRESA]",
  tagline: "Calidad y compromiso desde el campo peruano.",
  description:
    "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymantoperu.lovable.app",
  contact: {
    whatsapp: "51999999999", // [WHATSAPP] solo dígitos, con código de país
    whatsappDisplay: "+51 999 999 999",
    phone: "+51 (0) 000 0000", // [TELÉFONO]
    email: "contacto@empresa.com", // [CORREO]
    address: "[DIRECCIÓN]", // calle, distrito
    city: "[CIUDAD], Perú",
    hours: "[HORARIO] — Lun a Sáb", // [HORARIO]
  },
  whatsappMessage:
    "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
