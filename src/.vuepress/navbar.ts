import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: '语言',
    children:
        [
            {
                text: '编程',
                children:
                    [
                        { text: 'C', link: 'https://code.iglooblog.top/c/1.html' },
                        { text: 'Js', link: '/js/' }
                    ]
            },
            {
                text: '标记',
                children:
                    [
                        { text: 'HTML', link: 'https://code.iglooblog.top/html/1.html' }
                    ]
            },
        ],
},
//多个条目
{
    text: '数学',
    children: [
        { text: '政治', link: 'politics' },
        { text: '初中数学', link: 'Math/middle_school/1.md' }
    ],
},
{
    text: '关于',
    link: '/about',
},

// 字符串 - 页面文件路径
// '/Guide/README.md',
]);
