import { rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import WindiCSS from 'vite-plugin-windicss';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync('dist-electron', { recursive: true, force: true });

  const isServe = command === 'serve';
  const isBuild = command === 'build';

  return {
    plugins: [
      vue(),
      vueJsx(),
      electron([
        {
          // Main-Process entry file of the Electron App.
          entry: 'electron/main/index.ts',
          onstart(options) {
            console.log('[startup] Electron App');
            options.startup();
          },
          vite: {
            resolve: {
              alias: {
                '#': join(__dirname, 'electron/main'),
              },
            },
            build: {
              sourcemap: isServe,
              minify: isBuild,
              outDir: 'dist-electron/main',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        {
          entry: 'electron/preload/index.ts',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
            // instead of restarting the entire Electron App.
            options.reload();
          },
          vite: {
            build: {
              sourcemap: isServe ? 'inline' : undefined, // #332
              minify: isBuild,
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
      ]),
      // Use Node.js API in the Renderer-process
      renderer(),
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      WindiCSS(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 4396,
    },
    clearScreen: false,
  };
});
