// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: 'compile'
  }),

  integrations: [mdx(), alpinejs()],
  image: {
    layout: 'constrained'
  }
})
