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
        "btn-primary": "#FF5945",
        "row-primary": "#EDEEF0",
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
