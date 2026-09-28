import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";

import { Logo } from "./Logo";
import { navLinks, site, whatsappLink } from "@/config/site";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "TikTok", href: site.social.tiktok, Icon: Music2 },
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-foreground/75">
            {site.legalName} — {site.tagline}
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-forest-foreground/25 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="eyebrow text-gold-soft">Enlaces</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-forest-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-gold-soft">Información</h3>
          <ul className="mt-5 space-y-4 text-sm text-forest-foreground/80">
            <li>
              <a href={whatsappLink()} className="flex items-start gap-3 hover:text-gold-soft" target="_blank" rel="noreferrer">
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-gold-soft">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 hover:text-gold-soft">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.address}, {site.contact.city}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contact.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-soft">Consultas comerciales</h3>
          <p className="mt-5 text-sm leading-relaxed text-forest-foreground/80">
            Atendemos consultas de restaurantes, tiendas, distribuidores y empresas que requieren
            aguaymanto.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold-soft"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-forest-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.legalName}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidad" className="hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
