import path from 'node:path'
import { defineConfig } from '@farmfe/core'
import farmPostcssPlugin from '@farmfe/js-plugin-postcss'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  vitePlugins: [Vue(), VueJsx()],
  plugins: [farmPostcssPlugin()],
  compilation: {
    resolve: {
      alias: {
        '@/': path.resolve(process.cwd(), 'src')
      }
    },
    persistentCache: false
  },
  publicDir: 'public'
})
