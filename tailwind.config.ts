import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#142B4A",
          "navy-dark": "#0B192C",
          "navy-light": "#203D5E",
          teal: "#159B9A",
          "teal-dark": "#0D7B7A",
          "teal-light": "#EAF7F6",
          amber: "#F59E0B",
          surface: "#F5F8FA",
          card: "#FFFFFF",
          text: "#263445",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(20, 43, 74, 0.04), 0 1px 3px rgba(20, 43, 74, 0.06)",
        card: "0 4px 20px -2px rgba(20, 43, 74, 0.06), 0 2px 6px -1px rgba(20, 43, 74, 0.04)",
        "card-hover": "0 14px 30px -4px rgba(20, 43, 74, 0.12), 0 6px 12px -2px rgba(21, 155, 154, 0.08)",
        glow: "0 0 25px -5px rgba(21, 155, 154, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
