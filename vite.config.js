import react from '@vitejs/plugin-react'
import path from 'path'
import safeParser from 'postcss-safe-parser'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'

// Convert import.meta.url to __dirname equivalent
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@tailwind': path.resolve(__dirname, 'src/tailwind'),
      '@ts-default': path.resolve(__dirname, 'src/ts-default'),
      '@ts-tailwind': path.resolve(__dirname, 'src/ts-tailwind'),
    },
  },
  css: {
    postcss: {
      parser: safeParser,
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  assetsInclude: ['**/*.glb']
})