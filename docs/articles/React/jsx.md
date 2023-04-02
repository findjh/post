- useEffect 会在组件渲染完成之后执行

- html 5 History API包括2个方法： `history.pushState()` 和 `histroy.replaceState()`, 和1个事件 `window.onpopstate`

- history.pushState(stateObject, title, url)包括三个参数
  - 第一个参数用于存储该url对应的状态对象， 该对象可在onpopstate事件中获取，也可以在history对象中获取
  - 第二个参数是标题，目前浏览器并未实现
  - 第三个参数则是设定的url
- pushState函数向浏览器的历史堆栈压入一个url为设定值的记录，并改变历史堆栈的当前指针至栈顶
- replaceState
  - 该接口与pushState参数相同，含义也相同
  - 唯一的区别在于`replaceState`是替换浏览器历史堆栈的当前历史记录为设定的url
  - 需要注意的是`replaceState`不会改动浏览器历史堆栈的当前指针
- onpopstate
  - 该事件按window的属性
  - 该事件会在调用浏览器的前进、后退以及执行`history.forward`、`history.back`和`history.go`触发，因为这些操作有一个共性、及修改了历史堆栈的当前指针
  - 在不改变document的前提下，一旦当前指针改变则会触发`onpopstate`事件
  - onpopstate 监听不到pushState

