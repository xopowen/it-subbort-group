import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily:{
        main:'"Neue Machina", sans-serif',
        second:'"Gilroy", sans-serif',
        third:'"TT Norms", sans-serif'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      gap:{
        "clamp-30-80":"clamp(30px,4.1vw,80px)"
      },
      height:{
        "clamp-30-112":"clamp(60px,11vw,112px)"
      },
      width:{
        "fill-vw":"100vw",
        "clamp-30-112":"clamp(60px,11vw,112px)"
      },
      margin:{
        "clamp-15-5-96":"clamp(15px,5vw,96px)",
        "clamp-15-5-40":"clamp(15px,5vw,40px)"
      },
      padding:{
        "clamp-30-80":"clamp(30px,4.1vw,80px)",
        "clamp-15-5-40":"clamp(15px,5vw,40px)"
      },
      fontSize:{
        'clamp40-11-112':"clamp(40px,11vw,112px)"
      },
      borderRadius:{
        '70':'70px'
      }
    },
  },
  plugins: [],
};
export default config;
