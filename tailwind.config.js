/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6A1B9A',
        secondary: '#9C27B0',
        textMain: "#67748E",
        homegray:"#21232F",
        homepink:"#FE53BB",
        homeblue:"#2E1371",
        homegreen:"#09FBD3",
        homeviolet:"#B6116B",
        aboutbannerFirst: "#2F1472",
        aboutbannerSecond: "#9D28B1",
        aboutgreen: "#09FBD3"
      },
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}
