/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
   
      },
      colors : {
        'backgreen': '#00483C',
        'tablegreen': '#195A50',
      },
      opacity: {
        '30': '0.3',
      },
      fontSize: {
        'xxs': '.5rem',
      },
    },
  },
  plugins: [],
}
