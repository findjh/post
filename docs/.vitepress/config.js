const path = require('path');
const fs = require('fs');
export default {
  description: '2020_广州_程序员',
  base: '/',
  title:'findjh',
  titleTemplate: '找到我啦!',
  lastUpdated: true,
  themeConfig: {
    siteTitle: "记录工作与生活", 
    lastUpdatedText: 'Updated Date',
    socialLinks: [
      { icon: "github", link: "https://github.com/findjh" }
    ],
    nav: [
      { text: "文章", link: "/articles/CSS/循环轮播.html" },
      { text: "算法", link: "/leetcode/冒泡" },
    ],
    sidebar: {
      //路由包含key时，该路由页面就会展示key对应的侧边栏
      "/articles":getConfig('articles','md'),
      "/leetcode":getConfig('leetcode','md')
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
      // ]
    }
  },
}

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