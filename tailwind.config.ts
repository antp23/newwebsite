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
        imperial: "#212E3E",
        persian: "#0064A5",
        cerulean: "#00ACE6",
        body: "#3A4A5A",
        surface: "#F4F6F8",
        border: "#D0D8E0",
        lightblue: "#E8F4FC",
        danger: "#8B0000",
        success: "#1A6B3A",
      },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "72px",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h1: ["52px", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h2: ["36px", { lineHeight: "1.15" }],
        h3: ["26px", { lineHeight: "1.2" }],
        "body-lg": ["18px", { lineHeight: "1.7" }],
        body: ["16px", { lineHeight: "1.65" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      spacing: {
        "18": "144px",
        "20": "160px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "16px",
        sm: "4px",
        btn: "6px",
      },
      maxWidth: {
        content: "1200px",
        copy: "680px",
      },
    },
  },
  plugins: [],
};
export default config;
