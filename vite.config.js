import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/integral-data-systems-site/',
  plugins: [react()],
})