import { Play, X } from "lucide-react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";

const VIDEO_URL = "https://www.youtube.com/embed/z0REqfpfhFI?autoplay=1&rel=0";

export function VideoButton() {
  const open = () => {
    const host = document.createElement("div");
    host.dataset.videoModal = "true";
    document.body.appendChild(host);
    document.body.style.overflow = "hidden";

    const close = () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      host.remove();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Video sobre el aguaymanto"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar video"
          className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
        >
          <X className="size-6" aria-hidden="true" />
        </button>
        <div className="aspect-video w-full max-h-full max-w-[1600px] overflow-hidden rounded-xl shadow-lift">
          <iframe
            src={VIDEO_URL}
            title="Video sobre el aguaymanto"
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>,
      host,
    );
  };

  return (
    <Button type="button" onClick={open} size="lg" variant="onDark">
      <Play className="size-4" aria-hidden="true" />
      Ver video
    </Button>
  );
}

