/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA2313',
        secondary: '#9F0E09',
        danger: '#e74c3c',
      },
      fontFamily: {
       'montserrat': ['Montserrat','sans-serif'],
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}