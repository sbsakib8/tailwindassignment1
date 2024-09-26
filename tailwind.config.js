/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#FAFAFA",
        primaryColorlight: "#ffffff",
        secondaryColor: '#F44335',
        countColor:'#00FF84',
        paragraphColor:'#181818',
        blackColor: '#000',
        greenColor:'#00FF84',
        paragraphHome: '072125',
        darkColor:'#000',
        darkColorlight:'#171717'
      },

      backgroundImage: {
        'hero-pattern': "url('/img/utc 1.png')",
        'footer-site': "url('/img/bg 2.png')",
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      plus: ["Plus Jakarta Sans", 'sans-serif'],
    }
  },
  plugins: [],
}

