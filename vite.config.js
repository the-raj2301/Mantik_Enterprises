import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Mantik_Enterprises/', // Ensure this matches the GitHub repository name
  plugins: [react()],
})
