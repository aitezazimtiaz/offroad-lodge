import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        heading: {
          DEFAULT: "hsl(var(--heading))",
          foreground: "hsl(var(--heading-foreground))",
        },
        subheading: {
          DEFAULT: "hsl(var(--subheading))",
          foreground: "hsl(var(--subheading-foreground))",
        },
        titleheading: {
          DEFAULT: "hsl(var(--titleheading))",
          foreground: "hsl(var(--titleheading-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
