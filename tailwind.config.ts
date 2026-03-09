import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eff6ff",
          100: "#dbeafe",
          700: "#1d4e89",
          800: "#153d69",
          900: "#0f2d4d"
        },
        tealish: "#0f766e"
      },
      boxShadow: {
        card: "0 3px 8px rgba(3, 30, 58, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
