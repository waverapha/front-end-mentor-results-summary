// https://nuxt.com/docs/api/configuration/nuxt-config

import { css, viteCSS } from './config/style'

export default defineNuxtConfig({
  css,
  vite: {
    ...viteCSS
  }
})
