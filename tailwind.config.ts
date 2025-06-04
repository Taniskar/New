import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a1e3f",
          800: "#12305a",
        },
        "deep-purple": {
          900: "#3b0a45",
          800: "#5a0f5a",
        },
        slate: {
          900: "#1e293b",
          800: "#334155",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          600: "#475569",
        },
        teal: {
          500: "#14b8a6",
          600: "#0d9488",
        },
        orange: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        sans: ["Inter", "Space Grotesk", "IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
