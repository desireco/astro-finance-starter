import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  output: "static",

  integrations: [
    mdx(),
  ],

  vite: {
    plugins: [
      mkcert(),
      tailwindcss()
    ],
    server: {
      https: true,
    },
  }
})
