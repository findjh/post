```js
function add1(str){
    return '1'+str;
}
function add2(str){
    return '2'+str;
}
function add3(str){
    return '3'+str;
}
function compose(...fns){
    return fns.reduce((pre,cur)=> {
        return (...args)=> pre(cur(...args))
    })
}

console.log(compose(add1,add2,add3)('zjh'))//123zjh
```

如果 `initialValue` 没有传递给 `reduce` 函数，那么 `pre` 的初始值将是数组的第一个元素，而 `cur` 将是数组的第二个元素。