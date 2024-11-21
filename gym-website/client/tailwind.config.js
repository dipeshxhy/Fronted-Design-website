/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  
  theme: {
    extend: {
      colors:{
        primary:"#FE9808",
        secondary:"#FFF5CD"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
         
        }
      },
      fontFamily:{
        sans:"Oxygen",
        serif:"Roboto",
        mono:"Source Code Pro",
        heading:"Montserrat",
        body:"Ubantu",
        
      }
    
    },
  },
  plugins: [],
}