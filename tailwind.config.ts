module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/flowbite.{js,ts}'
  ],
  theme: {
    colors: {
      primary: '#4d8a53',
      secondary: '#282828',
      white: '#fff'
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      league: ['League Gothic', 'sans-serif']
    },
    extend: {
      spacing: {
        7.5: '1.875rem'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1200px'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      aspectRatio: {
        half: '2/1'
      }
    }
  }
}
