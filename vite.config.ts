// vite.config.js
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@bfr/request",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["axios", "lodash-es"],
      output: {
        globals: {
          axios: "axios",
          "lodash-es": "_",
        },
      },
    },
  },
  plugins: [
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
    dts(),
  ],
});
