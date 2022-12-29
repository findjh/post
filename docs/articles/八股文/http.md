- http options 方法的作用是什么？
1. 检测服务器所支持的请求方法
2. CORS 中的预检请求

- allowedMethods 的作用
 1. 响应 `options` 方法，告诉它所支持的请求方法
 2. 相应地返回405（not allowed method） 和 501 （没实现）