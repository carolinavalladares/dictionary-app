/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        backgroundPrimary: "var(--background-primary)",
        bodyBg: "var(--background-secondary)",
        componentColor200: "var(--components-gray-200)",
        componentColor300: "var(--components-gray-300)",
        componentsColor400: "var(--components-gray-400)",
        accentColor: "var(--accent-color)",
      },
      textColor: {
        textColor: "var(--text-color)",
        textSubtitle: "var(--text-subtitle)",
        textAccent: "var(--accent-color)",
        componentColor200: "var(--components-gray-200)",
        componentColor300: "var(--components-gray-300)",
        componentsColor400: "var(--components-gray-400)",
      },

      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sansSerif: ["Lato", "sans-serif"],
        monospace: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
