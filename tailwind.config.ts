import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          50: "#FDFBF7",
          100: "#F5EBDD",
          200: "#EBDAC3",
          300: "#D8BE9F",
          400: "#C29E74",
          500: "#A67C52", // Primary Kraft Brown
          600: "#8B623E",
          700: "#6B4423", // Deep Cardboard Brown
          800: "#4D2F17",
          900: "#321D0D",
        },
        charcoal: {
          50: "#2B2824",
          100: "#23201C",
          200: "#1C1916",
          300: "#181513",
          400: "#141210", // Primary Rich Black / Charcoal
          500: "#0F0E0D",
          900: "#0A0908",
        },
        paper: "#F5EBDD",
        cardboard: "#6B4423",
        amberAccent: {
          light: "#F7BE6D",
          DEFAULT: "#E8A33D", // Bright Amber accent
          dark: "#C98522",
          hover: "#D4922B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "Bebas Neue", "Impact", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "Inter", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "Noto Sans Devanagari", "sans-serif"],
      },
      backgroundImage: {
        "kraft-texture": "radial-gradient(#8B623E 0.75px, transparent 0.75px)",
        "charcoal-grid": "linear-gradient(to right, #1F1C18 1px, transparent 1px), linear-gradient(to bottom, #1F1C18 1px, transparent 1px)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

