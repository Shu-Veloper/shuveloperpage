import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/shuveloperpage/",
  build: {
    outDir: "dist",
    // rollupOptions에서 404 제거
    rollupOptions: {
      input: {
        main: "index.html",
        // 404: "404.html", // 이 줄 제거
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
