import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing : {
        '29' : "120px"
      },
      colors : {
        'myprimary' : "#FF8500",
        'mygray' : "#4B4B4B",
        'myblack' : "#282828"
      },
      fontFamily : {
        "tajawal" : "var(--tajawal-font)"
      }
    },
    fontSize : {
      '2.5xl' : "32px"
    }
  },
  plugins: [],
};
export default config;
