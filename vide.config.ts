import { defineConfig } from 'vite';

export default defineConfig({
  base: '/01-ts-basics/',  
  root: 'src',              
  build: {
    outDir: '../dist',      
    emptyOutDir: true,
  },
});
