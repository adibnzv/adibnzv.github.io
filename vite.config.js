import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',          // user site must be root
  build: { outDir: 'docs' } // keep build output separate from source
})