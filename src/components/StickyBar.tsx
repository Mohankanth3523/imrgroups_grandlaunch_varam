import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { useState } from "react";
import { project } from "../data/project";

/** WhatsApp glyph (kept as inline SVG — not part of the Lucide set). */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.6.1-.7.8-.9 1-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4.2-.2.3-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8s2 3 4.7 4.2a8.5 8.5 0 0 0 1.6.6 3.8 3.8 0 0 0 1.7.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

/**
 * Persistent bottom action bar — Call / Directions / WhatsApp — that
 * slides in once the visitor scrolls past the hero, so the primary CTAs
 * are always one tap away on mobile.
 */
export function StickyBar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Sentinel that tracks whether the hero is still in view */}
      <motion.div
        className="pointer-events-none absolute left-0 w-full"
        style={{ top: "100svh", height: 1 }}
        onViewportEnter={() => setVisible(false)}
        onViewportLeave={() => setVisible(true)}
      />

      {/*
        IMPORTANT: horizontal centering (left-1/2 + -translate-x-1/2) lives
        on this plain, un-animated wrapper — never on the motion.div below.
        Framer Motion writes the `transform` CSS property directly as an
        inline style the moment it animates ANY of x/y/scale/rotate, which
        completely replaces Tailwind's translate utilities (they compose
        into that same `transform` property via CSS custom properties).
        Putting the slide animation and the centering translate on the same
        element means the animation silently deletes the centering the
        instant it starts — which is exactly why this bar used to hang off
        the right edge of the screen instead of staying centered. Splitting
        them onto two elements keeps both intact.
      */}
      <div className="fixed bottom-[calc(16px+env(safe-area-inset-bottom,0px))] left-1/2 z-50 w-[calc(100%-32px)] max-w-[calc(480px-32px)] -translate-x-1/2">
        <AnimatePresence>
          {visible && (
            <motion.div
              className="flex gap-2 rounded-full border border-gold/40 bg-brown/95 p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur"
              initial={{ y: "140%" }}
              animate={{ y: 0 }}
              exit={{ y: "140%" }}
              transition={{ duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <a
                href={project.contact.telHref}
                className="flex flex-1 flex-col items-center gap-1 rounded-full px-1 py-2.5 text-[8.5px] font-medium uppercase tracking-wide text-gold-pale active:scale-95"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                Call
              </a>
              <a
                href={project.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-1 rounded-full px-1 py-2.5 text-[8.5px] font-medium uppercase tracking-wide text-gold-pale active:scale-95"
              >
                <Navigation className="h-[18px] w-[18px]" strokeWidth={2} />
                Directions
              </a>
              <a
                href={project.whatsapp.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-1 rounded-full bg-gradient-to-br from-gold-deep to-gold px-1 py-2.5 text-[8.5px] font-medium uppercase tracking-wide text-brown active:scale-95"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export { WhatsAppIcon };
