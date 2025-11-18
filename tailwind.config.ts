import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};

export default config;
