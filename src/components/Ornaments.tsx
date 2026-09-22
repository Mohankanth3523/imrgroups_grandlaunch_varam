import { motion } from "framer-motion";
import { project } from "../data/project";

/** Thin gold flourish with a small diamond, used to punctuate sections. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <span className="line" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gold">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className="line" />
    </div>
  );
}

/** Circular IMR Groups logo badge used at the top of the hero. */
export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-[76px] w-[76px] overflow-hidden rounded-full ${className}`}
      style={{
        boxShadow:
          "0 8px 24px -8px rgba(11,48,73,0.35), 0 0 0 1px rgba(28,163,224,0.35)",
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <img src={project.assets.logo} alt="IMR Groups" className="block h-full w-full object-cover" />
    </motion.div>
  );
}

/** Smaller circular logo badge used above the closing invitation wordmark. */
export function LogoBadgeSmall({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-14 w-14 overflow-hidden rounded-full ${className}`}
      style={{
        boxShadow:
          "0 8px 20px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(28,163,224,0.4)",
      }}
    >
      <img src={project.assets.logo} alt="IMR Groups" className="block h-full w-full object-cover" />
    </div>
  );
}

/** Hand-drawn botanical line-art corner ornament (single leaf sprig). */
export function CornerLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      className={`pointer-events-none absolute h-28 w-28 text-gold/55 ${className}`}
    >
      <path d="M6 6 C 30 8, 45 20, 48 45 M6 6 C 8 30, 20 45, 45 48 M14 14 C 22 16, 28 22, 30 30" />
      <circle cx="6" cy="6" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Soft falling gold petals used behind the hero copy. */
export function FallingPetals({ count = 10 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 9 + Math.random() * 7,
    delay: Math.random() * 10,
    opacity: 0.3 + Math.random() * 0.35,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute -top-[5%] h-[9px] w-[9px] rounded-tl-full rounded-br-full"
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            backgroundImage: "linear-gradient(135deg, #5FCBF5, #1CA3E0)",
          }}
          animate={{ y: ["0vh", "115vh"], rotate: [0, 300], opacity: [p.opacity, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
