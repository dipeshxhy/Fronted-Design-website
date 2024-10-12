/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
primary:"#E82037",
// secondary:"",
      },
     container:{
      center:true,
      padding:{
        default: '1rem',
        sm: '3rem',
      
      }
     }
      
    }
  },
  plugins: [],
}