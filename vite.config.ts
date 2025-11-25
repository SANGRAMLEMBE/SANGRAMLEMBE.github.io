import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // THIS LINE: Sets the base URL for the build to use relative paths
  base: './', 
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));