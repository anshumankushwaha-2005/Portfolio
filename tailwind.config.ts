import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Positive, bright, modern light background surfaces
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f8fafc",
          raised: "#f1f5f9",
          card: "#ffffff",
          border: "#e2e8f0",
          borderLight: "#edf2f7",
        },
        // Positive high-contrast, crystal clean typography
        text: {
          primary: "#0f172a",
          secondary: "#475569",
          muted: "#64748b",
          light: "#94a3b8",
        },
        // Positive, vibrant, energetic palette
        accent: {
          DEFAULT: "#4f46e5", // Vibrant Indigo
          light: "#6366f1",
          sky: "#0284c7",
          cyan: "#06b6d4",
          emerald: "#059669",
          green: "#10b981",
          amber: "#d97706",
          rose: "#e11d48",
          glow: "rgba(79, 70, 229, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "74rem",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,70,229,0.1), transparent)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 50%, rgba(255,255,255,0.4) 100%)",
        "positive-gradient":
          "linear-gradient(135deg, #4f46e5 0%, #0284c7 50%, #059669 100%)",
      },
      boxShadow: {
        glow: "0 4px 25px rgba(79,70,229,0.15), 0 0 50px rgba(6,182,212,0.08)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "card-hover":
          "0 20px 35px -5px rgba(79, 70, 229, 0.08), 0 10px 15px -5px rgba(15, 23, 42, 0.04)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionDuration: {
        "250": "250ms",
      },
    },
  },
  plugins: [],
};

export default config;
