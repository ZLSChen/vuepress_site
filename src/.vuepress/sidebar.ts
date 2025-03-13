import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  '/Math/middle_school': [
        {
            text: '知识点',
            //可折叠侧边栏
            collapsible: true,

            children: ["1","2",{
                  text: '数与式',
                  collapsible: true,
                  prefix: "1、数与式/",
                  children: ["1","1 copy"],
                },{
                  text: '目录3',
                  collapsible: true,
                  children: ["1","2"],
                }],
        },
        {
            text: '目录2',
            //可折叠侧边栏
            collapsible: true,

            children: ["3"],
        },
    ],

});
