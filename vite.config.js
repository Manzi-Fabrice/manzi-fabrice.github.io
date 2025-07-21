import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: './',  // <-- This is critical for GitHub Pages!
  plugins: [eslint()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
