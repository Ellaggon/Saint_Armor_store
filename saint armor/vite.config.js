import Inspect from "vite-plugin-inspect";
import { resolve } from "path";
// import { defineConfig } from "vite";

export default ({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        categories: resolve(__dirname, "./src/categorias.html"),
        contacto: resolve(__dirname, "./src/contacto.html")
      }
    }
  }
});