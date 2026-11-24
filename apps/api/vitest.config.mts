import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

// NestJS dependency injection relies on decorator metadata, which Vitest's default
// transformer (esbuild) does not emit. SWC does, so we compile tests with it.
export default defineConfig({
  plugins: [swc.vite()],
  test: { include: ['src/**/*.spec.ts'] },
});
