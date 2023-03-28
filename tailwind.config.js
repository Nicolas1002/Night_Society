/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html",
  "./src/**/*.{html,js}",],
  
  theme: {
    extend: {
      colors:{
        body: '#ddd',
        sidebar: '#190f40',
        hoverside: '#571673'
      },

      height: {
        '150vh': '150vh',
      },

      boxShadow: {
        custom: '5px 5px 10px #999',
      },
      
    },
  },
  plugins: [],
}