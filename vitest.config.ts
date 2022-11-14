import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    // globals: true,
    watch: true,
    alias: {
      "@config": path.resolve(__dirname, "./src/config"),
      "@controllers": path.resolve(__dirname, "./src/controllers"),
      "@factories": path.resolve(__dirname, "./src/factories"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@middlewares": path.resolve(__dirname, "./src/middlewares"),
      "@repositories": path.resolve(__dirname, "./src/repositories"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
