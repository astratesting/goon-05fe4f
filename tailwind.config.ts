import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#bae6fd",
        mint: "#a7f3d0",
        sand: "#fde68a",
        "soft-white": "#f8fafc",
        ink: "#1e293b",
        "ink-light": "#475569",
      },
      fontFamily: {
        heading: ["Geist", "sans-serif"],
        accent: ["Lora", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
