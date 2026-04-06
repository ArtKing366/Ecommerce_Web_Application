import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // ЗАМЕНИ 'jsdom' на 'happy-dom'
    environment: 'happy-dom', 
    globals: true,
    setupFiles: './setupTests.js',
  }
});