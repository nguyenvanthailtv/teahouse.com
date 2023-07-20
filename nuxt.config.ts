// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en-Us'
      },
      script: [
        {
          type: 'text/javascript',
          src: '/assets/js/app.js'
        }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['@/assets/scss/app.scss'],
  runtimeConfig: {
    app: {
      apiWebUrl: process.env.API_WEB_URL, appUrl: process.env.APP_URL
    }
  },
  devtools: { enabled: true }
})
