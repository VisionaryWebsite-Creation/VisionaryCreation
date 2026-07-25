import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the built assets resolve correctly whether the site
  // is served from a domain root or a subfolder (e.g. GitHub Pages
  // project sites like username.github.io/repo-name/).
  base: "./",
})
