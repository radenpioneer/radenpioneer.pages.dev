// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: cloudflare(),
  build: {
    client: './',
    server: './_worker.js'
  },
  image: {
    layout: 'constrained'
  }
})
