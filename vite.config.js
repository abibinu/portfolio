import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          threejs: ['three'],
          reactthree: ['@react-three/fiber', '@react-three/drei'],
          ui: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
  },
})
