import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { project } from "../data/project";
import { CornerLeaf, Divider, FallingPetals, LogoBadge } from "./Ornaments";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 0.84, 0.44, 1] as const, delay },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-glow relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-7 py-12 text-center"
    >
      {/* Ornamental frame */}
      <div className="pointer-events-none absolute inset-[14px] border border-gold before:absolute before:inset-[6px] before:border before:border-gold/45" />
      <CornerLeaf className="left-3.5 top-3.5" />
      <CornerLeaf className="right-3.5 top-3.5 -scale-x-100" />
      <CornerLeaf className="bottom-3.5 left-3.5 -scale-y-100" />
      <CornerLeaf className="bottom-3.5 right-3.5 scale-[-1]" />

      <FallingPetals />

      <div className="relative z-10 flex flex-col items-center">
        <LogoBadge className="mb-2.5" />

        <motion.p
          className="hero-eyebrow-text font-script text-base italic text-brown-soft"
          custom={0.1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          You &amp; your family are cordially invited
        </motion.p>

        <motion.h1
          className="text-gold-shimmer mt-4 animate-shimmer font-display text-[15vw] font-bold leading-none tracking-[0.14em] xs:text-[58px]"
          custom={0.2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          GRAND
          <br />
          LAUNCH
        </motion.h1>

        <motion.div custom={0.2} initial="hidden" animate="show" variants={fadeUp}>
          <Divider />
        </motion.div>

        <motion.div
          className="border-y border-brown-soft/10 px-5 py-2.5 font-display text-[15px] tracking-[0.22em] text-gold-deep"
          custom={0.3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          27&nbsp;·&nbsp;SEPTEMBER&nbsp;·&nbsp;2026
        </motion.div>

        <motion.h2
          className="mt-6 font-display text-[11.2vw] font-semibold leading-[1.08] tracking-wide text-maroon xs:text-[42px]"
          custom={0.4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          VARAM
          <br />
          CLASSIC GARDEN
          <span className="mt-1.5 block font-script text-[0.42em] font-medium italic tracking-[0.14em] text-brown-soft">
            {project.tagline}
          </span>
        </motion.h2>

        <motion.div
          className="mt-5 text-[11px] uppercase tracking-[0.3em] text-brown-soft"
          custom={0.5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          Presented by
          <b className="mt-1.5 block font-display text-[19px] font-semibold tracking-[0.22em] text-brown">
            {project.developer.toUpperCase()}
          </b>
        </motion.div>
      </div>

      <motion.a
        href="#announcement"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 animate-floaty flex-col items-center gap-1.5 text-[9.5px] uppercase tracking-[0.28em] text-gold-deep"
        custom={0.7}
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <span>Unveil the Invitation</span>
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.6} />
      </motion.a>
    </section>
  );
}
