/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       // Vite
    "./src/**/*.{js,ts,jsx,tsx}", // React files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#ffffff",
        },
        sidebar: {
          DEFAULT: "#1e293b", // slate-800
          foreground: "#cbd5e1", // slate-300
          border: "#334155", // slate-700
          accent: "#3b82f6", // blue-500
          "accent-foreground": "#ffffff",
        },
      },
    },
  },
  plugins: [],
}
