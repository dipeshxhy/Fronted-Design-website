/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
         
        },
        center: true,
      
      }
    },
  },
  plugins: [],
}

