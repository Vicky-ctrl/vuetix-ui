/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import postcssMixins from 'postcss-mixins'
import postcssRem from 'postcss-rem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 库的类型的声明
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: "vuetix-ui-lib",
      fileName: format => `vuetix-ui.${format}.js`
    },
    // 打包工具
    rollupOptions: {
      external: ["vue"],
      output: {
        //UMD 构建模式下，会为外部的依赖提供一个vue的全局变量
        globals: {
          vue: "vue",
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [postcssMixins, postcssRem]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  test: {
    environment: "happy-dom"
  }
})
