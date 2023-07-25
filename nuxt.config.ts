// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper', ['@pinia/nuxt', {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  }]],
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
          src: '/js/app.js'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
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
  imports: {
    dirs: ['stores']
  },
  css: ['@/assets/scss/app.scss'],
  runtimeConfig: {
    app: {
      apiWebUrl: process.env.API_WEB_URL, appUrl: process.env.APP_URL
    }
  },
  devtools: { enabled: true }
})
