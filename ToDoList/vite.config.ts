import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
