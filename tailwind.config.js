const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.njk'
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rad: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          shade: 'var(--shade)',
          background: 'var(--background)'
        },
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
       '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      'lessgiant': '10rem',
      'giant': '14rem',
      'notgiant': '6rem',
     }, 
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      orange: colors.orange,
      blue: {
        '100': '#bbeeff',
        '200': '#00aaff',
        '300': '#0088ff',
        '400': '#0033ff',
        '500': '#0000ff',
        '600': '#0000bb',
        '700': '#0000aa',
        '800': '#000088',
        '900': '#000066',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-text-fill-stroke')()
  ], // if we add forms, do it here
}
