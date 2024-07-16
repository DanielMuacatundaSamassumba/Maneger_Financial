/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        background:"#121214",
        main_color:"#202024",
         second_color:"#00875F",
          border_color:"#847D7D"
       }
    },
  },
  plugins: [],
}