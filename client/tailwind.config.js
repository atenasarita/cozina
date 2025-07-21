/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cozina-maroon': '#4F060B',  
        'cozina-lightpink': '#FEB3D1',
        'cozina-darkpink': '#80013B',
        'cozina-cream': '#F8E1BF',
        'cozina-black': '#000000',
      },
      fontFamily: {
        'cozina-heading': ['Bowlby One', 'sans-serif'],
        'cozina-subheading': ['Lato', 'sans-serif'],
        'cozina-body': ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}