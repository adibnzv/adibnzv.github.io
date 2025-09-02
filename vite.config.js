import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// dev = '/', build = '/personal-website/'  (change the repo name if needed)
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/adibnzv.github.io/' : '/',
}))