import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hangman/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        update: 'src/updategame.ts',
        main: 'src/main.ts',
        index: 'index.html',
        game: 'game.html',
        medium: 'medium.html',
        hard: 'hard.html',
        menu: 'menu.html'
      },
    },
  },
});