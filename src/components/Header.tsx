import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-card backdrop-blur"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="hidden bg-forest text-forest-foreground/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p>{site.description.slice(0, 74)}…</p>
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-gold-soft"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.contact.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" aria-label={`${site.companyName} — Inicio`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-forest data-[status=active]:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" className="hidden sm:inline-flex">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-md border border-border text-forest transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegación móvil" className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: link.to === "/" }}
                    className="block border-b border-border/70 py-3.5 text-base font-semibold text-foreground/80 data-[status=active]:text-forest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" size="lg" className="mt-5 w-full">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
