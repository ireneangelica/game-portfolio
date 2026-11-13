import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site works from any folder (GitHub Pages subpath included)
export default defineConfig({ base: './', plugins: [react()] })
