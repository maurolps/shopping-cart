/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary-color))",
        background: "rgba(var(--background-color))",
        foreground: "rgba(var(--foreground-color))",
        text: "rgba(var(--text-color))",
        "text-variant": "rgba(var(--text-variant-color))",
      },
    },
  },
  plugins: [],
};
