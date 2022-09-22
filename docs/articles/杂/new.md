- 如何要求new Function方式调用函数？
```js
function Vue(options) {
    if (!(this instanceof Vue)) {
        warn('Vue是一个构造函数，应使用“new”关键字调用');
    }
}
```
