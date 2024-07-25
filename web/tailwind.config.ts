import type { Config } from "tailwindcss";
import { rose, zinc } from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: zinc,
        secondary: rose,
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "header-img": "url(/images/header.png)",
      },
      fontSize: {
        xxs: ".625rem",
      },
      keyframes: {
        slideUpAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideRightAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(-2px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideDownAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(-2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideLeftAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(2px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        floating: {
          from: {
            transform: "translateY(-.375rem)",
          },
          to: {
            transform: "translateY(.375rem)",
          },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        floating: "floating 2.5s alternate infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
