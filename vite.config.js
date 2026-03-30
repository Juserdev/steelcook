import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/landing/main.ts',
        login: './system/login/index.html',
        dashboard: './system/dashboard/index.html',
        quotation: './system/quotation/index.html'
      }
    }
  },
})