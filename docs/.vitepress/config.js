const path = require('path');
const fs = require('fs');
function getFilePath(targetDir,extname){
  let pathArr = []
  const files = fs.readdirSync(targetDir)
  files.forEach(filename=>{
    let file = path.join(targetDir,filename);
    let stat = fs.statSync(file);
    let isDir = stat.isDirectory();
    if(isDir){
      let ret = getFilePath(file,extname);
      pathArr.push(...ret)
    }else{
      if(path.extname(file) === `.${extname}`){
        pathArr.push(file)
      }
    }
  })
  return pathArr;
}
function getConfig(key,extname){
  let paths = getFilePath(path.join(__dirname,`../${key}`),extname);
  let map = new Map();
  paths.forEach(p=>{
    let arr = p.split(path.sep);
    let titleName = arr.pop();
    let parentName = arr.pop();
    let items = map.get(parentName)
    if(!items){
      map.set(parentName,items = [])
    }
    items.push({text:titleName,link:p.slice(p.indexOf(key)-1).replace(/\\/g,'/')})
  })
  let ret = [];
  map.forEach((value,key)=>{
    ret.push({
      text:key,
      items:value
    })
  })
  // console.log(JSON.stringify(ret))
  return ret;
}
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
      { text: "算法", link: "/leetcode/冒泡" },
    ],
    sidebar: {

      //路由包含key时，该路由页面就会展示key对应的侧边栏
      "/articles":getConfig('articles','md'),
      "/leetcode":getConfig('leetcode','md')
      // "/articles": [
      //   {
      //     text: "杂",
      //     items: [
      //       {
      //         text: "文件上传",
      //         link: "/articles/杂/文件上传.md",
      //       },
      //       {
      //         text: "sku",
      //         link: "/articles/杂/sku",
      //       }, 
      //       {
      //         text: "非对称密钥的传输",
      //         link: "/articles/杂/非对称密钥的传输",
      //       },
      //       {
      //         text: "刮刮乐",
      //         link: "/articles/杂/刮刮乐",
      //       },
      //       {
      //         text: "new关键词",
      //         link: "/articles/杂/new",
      //       },
      //       {
      //         text: "nginx配置",
      //         link: "/articles/杂/nginx配置",
      //       },
      //     ],
      //   },
      //   {
      //     text: "vue",
      //     items: [
      //       {
      //         text: "pina和vuex",
      //         link: "/articles/vue/pina和vuex",
      //       },
      //     ],
      //   },
      //   {
      //     text: "webpack",
      //     items: [
      //       {
      //         text: "tapable",
      //         link: "/articles/webpack/tapable",
      //       },
      //     ],
      //   },
      //   {
      //     text: "TypeScript",
      //     items: [
      //       {
      //         text: "any和unkown的区别",
      //         link: "/articles/TypeScript/any和unkown的区别",
      //       },
      //       {
      //         text: "Omit、Exclude、Pick的区别",
      //         link: "/articles/TypeScript/Omit、Exclude、Pick的区别",
      //       },
      //       {
      //         text: "判断元组",
      //         link: "/articles/TypeScript/isTuple",
      //       },
      //       {
      //         text: "type和interface的区别",
      //         link: "/articles/TypeScript/type和interface的区别",
      //       },
      //       {
      //         text: "类型推断",
      //         link: "/articles/TypeScript/类型推断",
      //       }
      //     ],
      //   },
      //   {
      //     text: "八股文",
      //     items: [
      //       {
      //           text: "parseInt",
      //           link: "/articles/八股文/parseInt",
      //       },
      //     ]
      //   },
      // ],
      // "/leetcode":[
      //   {
      //     text: "排序",
      //     items: [
      //       {
      //         text: "冒泡",
      //         link: "/leetcode/冒泡",
      //       },
      //     ],
      //   },
      // ],
    }
  },
}