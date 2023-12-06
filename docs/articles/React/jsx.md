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

- webpack 解析代码的时候，如果遇到import() 会自动进行代码分割，一个import就是一个chunk

- immutale

  - 浅比较的优点是速度快 ，原因是1.只比较第一层 2.只比较引用地址。缺点是无法准确感知内容变化。

  - 深比较（如lodash.isEqual） 的优点是可以感知内容变化，通过深度比较内容一致性。缺点是性能太差。

  - 那有什么办法可以结合浅比较+深比较的优点吗？有的，那就是Immutable ！

​			通过immutable 如果里面的某个属性改变了，这个属性当对象树中一个节点发生变化时，只会改变该子节点以及受其影响的父节点，其他节点共享。（[Structural Sharing（结构共享](https://link.juejin.cn/?target=https%3A%2F%2Flink.jianshu.com%2F%3Ft%3Dhttps%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F27133830%3Fgroup_id%3D851585269567213568)）因此使用浅比较就能感知到内容变化了。
