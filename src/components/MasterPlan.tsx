import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { project } from "../data/project";
import { Divider } from "./Ornaments";
import { Reveal } from "./Reveal";

export function MasterPlan() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="masterplan"
      className="px-6 py-[52px]"
      style={{ background: "linear-gradient(180deg, #DCEFFA 0%, transparent 30%)" }}
    >
      <Reveal>
        <Divider className="mt-0" />
      </Reveal>
      <Reveal className="mb-7 text-center">
        <div className="eyebrow">The Layout</div>
        <h2 className="section-title">Master Plan</h2>
        <p className="section-sub">
          {project.plotCount} thoughtfully arranged plots around a central park
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-hidden rounded-[18px] border border-gold bg-white shadow-plate">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full"
            aria-label="View full master plan detail"
          >
            <picture>
              <source srcSet={project.assets.masterPlanWebp} type="image/webp" />
              <img
                src={project.assets.masterPlan}
                alt="Varam Classic Garden master plan / site layout"
                className="block w-full"
                loading="lazy"
              />
            </picture>
          </button>
          <div className="flex items-center justify-between gap-2.5 border-t border-brown-soft/[0.14] bg-cream px-4 py-3.5">
            <span className="text-[11px] text-brown-soft">
              Tap to view full plot &amp; dimension details
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="whitespace-nowrap rounded-full border border-gold px-3.5 py-2 font-display text-[10px] uppercase tracking-[0.14em] text-gold-deep"
            >
              View Detail
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#140a06]/95 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-[18px] top-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/30 bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <picture>
              <source srcSet={project.assets.layoutDetailWebp} type="image/webp" />
              <img
                src={project.assets.layoutDetail}
                alt="Varam Classic Garden full layout with plot dimensions"
                className="max-h-[88vh] rounded-[10px] object-contain"
              />
            </picture>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
