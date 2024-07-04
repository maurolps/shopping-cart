/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary-color))",
        call: "rgba(var(--call-to-action-color))",
        background: "rgba(var(--background-color))",
        foreground: "rgba(var(--foreground-color))",
        text: "rgba(var(--text-color))",
        "text-variant": "rgba(var(--text-variant-color))",
      },
      fontFamily: {
        revans: ["revans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
