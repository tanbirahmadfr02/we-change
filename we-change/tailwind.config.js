/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif']
      },
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'primary': 'rgba(212,66,52, 1)',
        'secondary': 'rgba(86,86,86, 1)',
        'primary-rgb':' rgba(0,0,0, 0.50)'
      },
      backgroundImage: {
        'banner': "url('assets/banner.jpg')",
      }
    },
   
  },
  plugins: [],
}