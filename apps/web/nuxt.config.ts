export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: 'app',

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css']
})
