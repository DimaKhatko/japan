import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "japan_soldout_modal_seen";
const FORM_ID = "contact";
const INSTAGRAM_URL = "https://www.instagram.com/point_camp";
const TELEGRAM_URL = "https://t.me/pointcamp";

/**
 * Sold-out announcement. Auto-opens 4s after load, once per visitor
 * (localStorage flag). Built on the project's radix Dialog so focus-trap,
 * Esc, backdrop click, focus return, scroll lock and aria wiring come for free;
 * the content uses a fade-only animation (no zoom) per spec.
 */
export function SoldOutModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    const timer = window.setTimeout(() => setOpen(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  const markSeen = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage can throw (private mode, blocked storage) — ignore */
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) markSeen();
  };

  const goToWaitlist = () => {
    handleOpenChange(false);
    document.getElementById(FORM_ID)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[calc(100%-40px)] max-w-[380px] -translate-x-1/2 -translate-y-1/2",
            "overflow-hidden rounded-3xl border border-border bg-card text-ink shadow-card duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          )}
        >
          {/* Seigaiha (wave) band — quiet texture behind the heading, brand red at low opacity */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-20 text-primary/15"
          >
            <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <pattern id="soldout-seigaiha" width="44" height="22" patternUnits="userSpaceOnUse">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M-22,22 A22,22 0 0 1 22,22" />
                    <path d="M0,22 A22,22 0 0 1 44,22" />
                    <path d="M22,22 A22,22 0 0 1 66,22" />
                    <path d="M-14,22 A14,14 0 0 1 14,22" />
                    <path d="M8,22 A14,14 0 0 1 36,22" />
                    <path d="M30,22 A14,14 0 0 1 58,22" />
                    <path d="M-6,22 A6,6 0 0 1 6,22" />
                    <path d="M16,22 A6,6 0 0 1 28,22" />
                    <path d="M38,22 A6,6 0 0 1 50,22" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#soldout-seigaiha)" />
            </svg>
          </div>

          <DialogPrimitive.Close
            className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Закрити"
          >
            <X className="h-4 w-4" />
          </DialogPrimitive.Close>

          <div className="relative px-6 pb-6 pt-12">
            <DialogTitle className="font-display text-2xl font-black text-ink">
              Осінню групу закрито
            </DialogTitle>

            <DialogDescription asChild>
              <div className="mt-3 space-y-3 text-sm text-ink/70">
                <p>
                  Усі місця на подорож 21–30 жовтня заброньовані. Навесні їдемо двома групами —
                  наприкінці березня та на початку квітня.
                </p>
                <p>Стеж за анонсами — там ми першими відкриваємо набір.</p>
              </div>
            </DialogDescription>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button asChild>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
              <Button asChild>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
            </div>

            <div className="mt-4 text-center">
              <Button variant="link" onClick={goToWaitlist} className="h-auto p-0 text-sm">
                Записатися в лист очікування
              </Button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
