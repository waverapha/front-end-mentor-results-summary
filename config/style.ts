export const css = ["@/assets/styles/reset.scss", "@/assets/styles/_fonts.scss"]

export const viteCSS = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/main.scss";',
      }
    }
  }
}