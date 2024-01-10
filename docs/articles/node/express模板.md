### 入口 app.js
```js
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('wechat pay')
})
app.use((req,res)=>{
    res.status(404).send('404 Page Not Fount')
})
app.use((error,req,res,next)=>{
    console.log('Error',error);
    res.status(500).send('Internal Server Error')
})

module.exports = app
```
### bin/www.js
```js

#!usr/bin/env node
const app = require('../app');
const port = 8000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`))
```

```json
"script":{
    "express-dev": "nodemon  ./bin/www.js"
}
```

最后执行`npm run express-dev`





### express 

- 如果 *next* 被调用时没有参数，那么将简单地继续执行下一个路由或中间件。如果 *next* 函数有参数，那么将执行 *错误处理中间件*。

错误处理程序是使用一个接受 *四个参数* 的函数来定义的中间件

```js
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  // 在所有其他错误情况下，中间件将错误传递给默认的 Express 错误处理程序。
  next(error)
}

// 这必须是最后一个载入的中间件。
app.use(errorHandler)
```

- 处理不支持路由404的程序应该放在倒数第二个加载入 Express，位置就在错误处理程序之前。