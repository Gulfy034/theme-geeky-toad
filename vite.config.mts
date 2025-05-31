import { defineConfig } from "vite";
import { resolve } from "node:path"

export default defineConfig({
  plugins: [],
  publicDir: false,
  resolve: {
    alias: [
      {
        find: "@styles",
        replacement: resolve(__dirname, "src/styles")
      },
      {
        find: "@modules",
        replacement: resolve(__dirname, "src/modules")
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils")
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "src/constants")
      }
    ]
  },
  build: {
    minify: "terser",
    cssCodeSplit: true,
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      formats: ["iife"],
      entry: "./src/main.ts",
      name: "theme",
      fileName: () => "geeky_toad.js",
    },
  },
})
