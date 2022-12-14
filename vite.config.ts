import { defineConfig, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( 
  ({command, mode}: ConfigEnv) => {
    const config = {
      plugins: [react()],
      server: {
        port: 2000,
        open: true,
      }
    }

    return config
  }
)
