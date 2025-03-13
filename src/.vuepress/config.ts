import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress_site/",

  lang: "zh-CN",
  title: "疏星谒晨",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
