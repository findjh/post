- 4版本 demo

  ```js
  const redis = require('redis');
  !(async function(){
      const client = await redis.createClient({
          host: '127.0.0.1',
          port: 6379
      });
      // 连接
      await client.connect().then(() => {
          console.log('redis connected');
      }).catch((err) => {
          console.log('redis connect error: ', err);
      });
      await client.set('hello', 'This is a value');
      const value = await client.get('hello');
      console.log(value)
  }())
  ```

  

