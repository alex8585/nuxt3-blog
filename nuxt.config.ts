import { defineNuxtConfig } from 'nuxt3'
import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
    ssr:false,
    nitro: {
    preset: 'server'
  },
  meta: {
    title: 'nuxt3 blog',
  },
  css: [
    '~/assets/styles/quasar.scss',
    '@quasar/extras/material-icons/material-icons.css'
  ],
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.scss',
      })
    ]
  }
});




