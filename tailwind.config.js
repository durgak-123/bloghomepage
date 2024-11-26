/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bluecolour": "#F4f6f8",
        "gradientColour" : 'linear-gradient(283.63deg, #052D20 0%, #0C583D 80.93%)',
        'text-content-heading': '#0C1620',
        'text-content-title': '#1E2D3E',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 68px 19px 0px rgba(140, 69, 251, 0.00), 0px 44px 18px 0px rgba(140, 69, 251, 0.03), 0px 25px 15px 0px rgba(140, 69, 251, 0.08), 0px 11px 11px 0px rgba(140, 69, 251, 0.11), 0px 3px 6px 0px rgba(140, 69, 251, 0.14)',
      },
      boxShadow: {
        custom: '0px 1px 0px 0px rgba(222, 229, 236, 0.24), 0px 3px 4px 0px rgba(12, 22, 32, 0.03)',
      },
     

    },
  },
  plugins: [],
};
