import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
  ],
  build: {
    outDir: 'dist-svelte',
    assetsDir: 'assets',
  },
  base: './', // Add this line to set the base path
  root: './', // Ensure the root is set correctly
})
