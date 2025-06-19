import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/shuveloperpage",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        404: "404.html", // 404.html도 빌드에 포함
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
