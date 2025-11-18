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
        serif4: "var(--font-source-serif4)",
      },
    },
  },
  plugins: [],
};

export default config;
