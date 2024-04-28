import * as path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
