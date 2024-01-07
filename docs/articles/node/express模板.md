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

app.use((error,req,res,next)=>{
    console.log('Error',error);
    res.status(500).send('Internal Server Error')
})
app.use((req,res)=>{
    res.status(404).send('404 Page Not Fount')
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