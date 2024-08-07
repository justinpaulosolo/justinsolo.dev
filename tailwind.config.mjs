import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "672px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["IBMPlexSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
