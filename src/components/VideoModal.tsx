import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";

const VIDEO_URL = "https://www.youtube.com/embed/z0REqfpfhFI?autoplay=1&rel=0";

export function VideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} size="lg" variant="onDark">
        <Play className="size-4" aria-hidden="true" />
        Ver video
      </Button>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="Video sobre el aguaymanto"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar video"
                className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
              <div
                className="aspect-video max-h-full w-full max-w-[1600px] overflow-hidden rounded-xl shadow-lift"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={VIDEO_URL}
                  title="Video sobre el aguaymanto"
                  className="size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
