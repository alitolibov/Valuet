/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        gradient: ['linear-gradient(0.32deg, rgba(28, 35, 64, 0) -5.79%, #1C0F54 114.59%)'],
        bg: ['radial-gradient(46.41% 73.99% at 46.63% 48.05%, #20135C 0%, #140739 92.82%)'],
        textBg: ['linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)'],
        balance:['linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)'],
        logBg: ['radial-gradient(63.88% 129.61% at 25.55% 31.91%, #20135C 0%, #140739 92.82%)'],
        loginBg: ['linear-gradient(180deg, #1E1156 0%, rgba(28, 35, 64, 0) 100%)'],
        btnBg: ['linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%)'],
        btnBg2: ['linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)']
      },
      dropShadow: {
        aside: ['0px -5px 25px rgba(0, 3, 32, 0.5)'],
        loginShadow: ['0px 25px 25px rgba(0, 3, 32, 0.5)']
      },
      borderRadius: {
        asideRadius: ['8px 0px 0px 8px']
      },
      boxShadow: {
        inpShadow: ['0px 4px 20px rgba(3, 16, 52, 0.5)']
      }
    },
  },
  plugins: [],
}