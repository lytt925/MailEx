/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo Paaji 2', 'cursive'],
        'sans': ['Noto Sans TC', 'sans-serif'],
      },
      colors: {
        backup: {
          'grey': '#F5F1ED',
          'dark-brown': '#8b4513',
          'light-brown': '#F5DEB3',
          'light-yellow': '#fefae0',
          'light-green': '#ccd5ae',
          'white': '#fffaf0',
        },
        app: {
          'grey': '#F5F1ED',
          'dark-brown': '#000000',
          'primary': '#f5b53d', // HSV(39°, 75%, 96%)
          'secondary': '#f5cc7f',
          'pale-primary': '#f5eddf',
          'light-green': '#ccd5ae',
          'white': '#fffaf0',
        }
      },
      screens: {
        '2xs': '375px',
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')],
}
