import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered fade-up reveal, mirroring the site-wide entrance
 * animation used across every section. Wrap any block that should
 * animate in as the visitor scrolls to it.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ duration: 0.9, ease: [0.16, 0.84, 0.44, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
