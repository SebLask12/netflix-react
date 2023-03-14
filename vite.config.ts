import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import eslint from 'vite-plugin-eslint';

const resolve = {
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: "local", // or "global"
      localsConvention: "camelCase", // or "dashes"
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/global-styles/variables.scss";
        `,
      },
    },
    postcss: {},
  },
  plugins: [react(), eslint()],
  resolve,
});
