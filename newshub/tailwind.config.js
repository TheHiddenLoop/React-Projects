/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#1E293B",     
        secondary: "#64748B",  
        accent: "#DC2626",     
        background: "#d8dfe6",  
        text: "#111827",        
        hover: "#2e3239",      
        
      },
    },
  },
  plugins: [],
}
