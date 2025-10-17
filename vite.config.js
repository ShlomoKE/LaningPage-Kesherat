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
        'about-us': resolve(__dirname, 'about-us.html')
      }
    }
  }
})

