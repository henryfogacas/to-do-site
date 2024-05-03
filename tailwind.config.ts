import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       sans: ['var(--font-family-montserrat)', 'sans-serif'],
      },
      colors: {
        "btn-primary": "#FF5945",
        "row-primary": "#EDEEF0",
        "primary": "#EA394E",
        "secondary": "#0DA8FF",
        "tertiary": "#01E66F",
      },
      spacing: {
        '10px': '10px',
        '16px': '16px',
        '50px': '50px',
        '270px': '270px',
      },
    },
  },
  plugins: [],
};
export default config;
