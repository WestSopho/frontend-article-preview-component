/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
  ],
  theme: {  
    extend: {
      fontFamily:{
        "manrope": ["Manrope", "sans-serif"]
      },
      colors:{
        "48556A": "#48556A",
        "6E8098": "#6E8098",
        "9DAEC2": "#9DAEC2", 
        "ECF2F8": "#ECF2F8",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}