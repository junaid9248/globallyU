import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      //Whenever we visit /api it should be prefixed by target value
      "/api":{
        target:"http://localhost:5170/"
      }
    }
  }
})
