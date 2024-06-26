import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-gray": "#e3e3e3",
      },
      borderWidth: {
        "1": "1px",
      },
      maxWidth: {
        default: "720px",
      },
      height: {
        layout: "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
export default config;
