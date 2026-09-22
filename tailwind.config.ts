import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Matches the hand-authored artifact's own breakpoint: the invitation
        // card is capped at 480px, so hero type needs to switch from
        // viewport-relative sizing to a fixed size well before Tailwind's
        // default `sm` (640px) — otherwise it overflows the card on any
        // viewport between ~480px and 640px (a resized browser window, a
        // small tablet in portrait, etc).
        xs: "400px",
      },
      colors: {
        ivory: {
          DEFAULT: "#F5FAFC",
          soft: "#EAF4FA",
        },
        cream: "#FFFFFF",
        blush: "#DCEFFA",
        gold: {
          deep: "#0B6FA3",
          DEFAULT: "#1CA3E0",
          light: "#5FCBF5",
          pale: "#BFE6F7",
        },
        brown: {
          DEFAULT: "#0B3049",
          soft: "#23506B",
        },
        maroon: "#0E3F5C",
        ink: "#081E2E",
      },
      fontFamily: {
        display: ["'Cinzel'", "serif"],
        script: ["'Cormorant Garamond'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      maxWidth: {
        app: "480px",
      },
      boxShadow: {
        plate: "0 20px 60px -20px rgba(11,48,73,0.35)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "250% 50%" },
        },
        floaty: {
          "0%, 100%": { transform: "translate(-50%,0)", opacity: "0.7" },
          "50%": { transform: "translate(-50%,8px)", opacity: "1" },
        },
        ripple: {
          "0%": { transform: "translate(-50%,-50%) scale(0.4)", opacity: "0.9" },
          "100%": { transform: "translate(-50%,-50%) scale(2.6)", opacity: "0" },
        },
        fall: {
          to: { transform: "translateY(115vh) rotate(300deg)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        floaty: "floaty 2.6s ease-in-out infinite",
        ripple: "ripple 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
