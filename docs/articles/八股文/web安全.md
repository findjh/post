1. xss: 在web页面注入脚本，使用JavaScript 窃取用户信息

   dom攻击：例如img 的onerror事件

   防御手段：过滤, 转义。重要的cookie设置http-only,这样就能防止通过js获取cookie

   

- sql注入攻击：将用户传入的数据作为参数，使用字符串拼接的方式插入到sql查询中

- csrf跨域请求伪造：伪造用户请求向网站发起恶意请求

- ddos

