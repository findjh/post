export default {
  description: '2020_广州_程序员',
  base: '/post/',
  themeConfig: {
    siteTitle: "记录工作与生活.",
    logo: "/logo.jpeg",
    socialLinks: [
      { icon: "github", link: "https://github.com/findjh" }
    ],
    nav: [
      { text: "文章", link: "/articles/vue/pina和vuex" },
      { text: "算法", link: "/leetCode/冒泡" },
    ],
    sidebar: {
      "/articles": [
        {
          text: "vue",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/vue/pina和vuex",
            },
          ],
        },
        {
          text: "webpack",
          items: [
            {
              text: "环境变量",
              link: "/articles/webpack/环境变量",
            },
          ],
        },
        {
          text: "组件工程师",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
      ],
      "/leetCode":[
        {
          text: "排序",
          items: [
            {
              text: "冒泡",
              link: "/leetCode/冒泡",
            },
          ],
        },
      ]
    }
  },
}