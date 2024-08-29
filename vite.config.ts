import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron/simple";
import electronRender from "vite-plugin-electron-renderer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: "electron/main.ts",
      },
      preload: {
        input: "electron/preload.ts",
      },
      // Optional: Use Node.js API in the Renderer process
      renderer: {},
    }),
    electronRender(),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
