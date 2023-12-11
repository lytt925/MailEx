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
        app: {
          'grey': '#F5F1ED',
          'content': 'rgb(var(--content-rgb) / 1)',
          'primary': 'rgb(var(--primary-rgb) / 1)',
          'primary-light': 'rgb(var(--secondary-rgb) / 1)',
          'pale-primary': '#f5eddf',
          'light-green': '#ccd5ae',
          'white': '#fffaf0',
        },
        backup: {
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
      },
      backgroundImage: theme => ({
        'note-pattern': `linear-gradient(to right, white 1px, transparent 1px),
                         linear-gradient(to left, white 1px, transparent 1px),
                         repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px)`
      }),
      lineHeight: {
        'custom': '31px'
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')],
}
