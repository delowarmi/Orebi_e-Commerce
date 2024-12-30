/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': '#767676',
        'navHColor': '#262626',
        'subnavColor': '#F5F5F3',
        'arrowColor': '#979797',
        'InfoColor': '#6D6D6D',
      },
      fontFamily: {
          'dm': ['DM Sans'], 
        },  
        backgroundImage: {
          'bannerImg': "url('../src/assets/banner.png')",
          
        },
        maxWidth: {
          'laptopContainer': '978px',
          'tapletContainer': '748px',
          'androidContainer': '556px',
          'mobileContainer': '310px',
        },
        Width:{
          'LogoW': '30%',
          'MenuW': '70%',
          'CatW': '20%',
          'SearchW': '70%',
          'UserW': '20%',
          
        },
    
    screens: {
      'laptop': {'min': '992px', 'max': '1199.98px',},
      // => @media (min-width: 992px) { ... }

      'taplet': {'min': '768px', 'max': '991.98px',},
      // => @media (min-width: 768px) { ... }

      'android': {'min': '576px', 'max': '767.98px',},
      // => @media (min-width: 576px) { ... }

      'mobile': {'min': '320px', 'max': '575.98px',},
      // => @media (min-width: 320px) { ... }
    },
    }
  },
  plugins: [],
}

