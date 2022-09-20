/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        dark: "#1e293b",
        secondary: "#94a3b8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
