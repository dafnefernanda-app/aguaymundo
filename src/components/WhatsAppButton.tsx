import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escribir por WhatsApp a ${site.companyName}`}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-leaf py-3 pl-3 pr-4 text-sm font-semibold text-forest-foreground shadow-lift transition-all duration-300 hover:bg-forest sm:bottom-7 sm:right-7"
    >
      <span className="grid size-9 place-items-center rounded-full bg-forest-foreground/15">
        <MessageCircle className="size-5" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline">¿Necesitas información?</span>
    </a>
  );
}
