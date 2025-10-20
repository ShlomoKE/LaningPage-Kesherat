import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'kesherat-link': resolve(__dirname, 'kesherat-link.html'),
        'kesherat-link-es': resolve(__dirname, 'kesherat-link-es.html'),
        'other-projects': resolve(__dirname, 'other-projects.html'),
        'other-projects-es': resolve(__dirname, 'other-projects-es.html'),
        'about-us': resolve(__dirname, 'about-us.html'),
        'about-us-es': resolve(__dirname, 'about-us-es.html')
      }
    }
  }
})

