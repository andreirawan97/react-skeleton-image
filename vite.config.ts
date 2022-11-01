import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 6600,
    host: true,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "React Skeleton Image",
      // the proper extensions will be added
      fileName: "react-skeleton-image",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
