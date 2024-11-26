import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// if import to AWS set  to "/" to solve 403 forbidden
  base: "/portfolio/"
  // base: "/"
})
