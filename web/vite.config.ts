import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
});
