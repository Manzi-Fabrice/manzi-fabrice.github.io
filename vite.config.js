import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import autoprefixer from 'autoprefixer';
import faviconPlugin from "vite-plugin-favicon";

export default defineConfig({
  base: '/',  // <-- Add this line
  // plugins: [eslint(), faviconPlugin('public/favicon.png')],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
