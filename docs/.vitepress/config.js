export default {
  description: '2020_广州_程序员',
  base: '/post/',
  themeConfig: {
    siteTitle: "记录工作与生活",
    socialLinks: [
      { icon: "github", link: "https://github.com/findjh" }
    ],
    nav: [
      { text: "文章", link: "/articles/vue/pina和vuex" },
      { text: "算法", link: "/leetCode/冒泡" },
    ],
    sidebar: {
      //路由包含key时，该路由页面就会展示key对应的侧边栏
      "/articles": [
        {
          text: "杂",
          items: [
            {
              text: "文件上传",
              link: "/articles/杂/文件上传",
            },
            {
              text: "sku",
              link: "/articles/杂/sku",
            }, 
            {
              text: "非对称密钥的传输",
              link: "/articles/杂/非对称密钥的传输",
            },
            {
              text: "刮刮乐",
              link: "/articles/杂/刮刮乐",
            },
            {
              text: "new关键词",
              link: "/articles/杂/new",
            },
            {
              text: "nginx配置",
              link: "/articles/杂/nginx配置",
            },
          ],
        },
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
            {
              text: "tapable",
              link: "/articles/webpack/tapable",
            },
          ],
        },
        {
          text: "TypeScript",
          items: [
            {
              text: "any和unkown的区别",
              link: "/articles/TypeScript/any和unkown的区别",
            },
            {
              text: "Omit、Exclude、Pick的区别",
              link: "/articles/TypeScript/Omit、Exclude、Pick的区别",
            },
            {
              text: "判断元组",
              link: "/articles/TypeScript/isTuple",
            },
            {
              text: "type和interface的区别",
              link: "/articles/TypeScript/type和interface的区别",
            }
          ],
        },
        {
          text: "八股文",
          items: [
            {
                text: "哈哈哈",
                link: "/articles/八股文/哈哈哈",
            },
          ]
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
      ],
    }
  },
}