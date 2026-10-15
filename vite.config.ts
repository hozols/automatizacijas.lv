import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Handle client-side routing for SPA
  build: {
    // The HTML is prerendered, so the first paint must not wait for JavaScript.
    // Without modulepreload the CSS gets the connection first and the app hydrates after.
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo }) {
          // React (and Vite's own preload helper, a virtual module every dynamic import needs)
          // get their own chunk so no vendor chunk can swallow them.
          if (id.includes('vite/preload-helper')) return 'react';
          if (/node_modules\/(react|react-dom|scheduler|@babel\/runtime)\//.test(id)) return 'react';
          // Everything that is only reachable through the WebGL stack (three, r3f, drei and
          // their transitive deps such as maath, troika, meshline) goes to the lazy three chunk.
          // Anything imported by ordinary app code stays out, so the chunk never lands in the
          // critical path.
          const seen = new Set<string>();
          const threeOnly = (moduleId: string): boolean => {
            if (/node_modules\/(three|@react-three|three-stdlib)\//.test(moduleId)) return true;
            if (!moduleId.includes('node_modules/')) return false;
            if (seen.has(moduleId)) return true;
            seen.add(moduleId);
            const info = getModuleInfo(moduleId);
            const importers = [...(info?.importers ?? []), ...(info?.dynamicImporters ?? [])];
            return importers.length > 0 && importers.every(threeOnly);
          };
          if (threeOnly(id)) return 'three';
          return undefined;
        },
      },
    },
  },
}));
