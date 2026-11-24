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
        exodus: {
          navy: "#0A122A",
          darkNavy: "#060A17",
          deepNavy: "#0D1836",
          purple: "#36164C",
          deepPurple: "#250E34",
          yellow: "#F9E900",
          gold: "#E5B869",
          red: "#D21F2B",
          blue: "#0875BD",
          cardDark: "#111A35",
          borderDark: "#1E294B",
          lightBg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(249, 233, 0, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
