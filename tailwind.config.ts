import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0e1a",
          secondary: "#0d1529",
          tertiary: "#111a33",
        },
        accent: {
          blue: "#0ea5e9",
          deep: "#1e3a5f",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(14, 165, 233, 0.35)",
        "glow-lg": "0 0 40px rgba(14, 165, 233, 0.45)",
        "glow-cyan": "0 0 24px rgba(34, 211, 238, 0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), transparent 60%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "grid-move": "gridMove 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.65)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
