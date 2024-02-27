import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
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
  plugins: [],
} satisfies Config;
