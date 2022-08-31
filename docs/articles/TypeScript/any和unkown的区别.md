[深入理解TypeScript](https://jkchao.github.io/typescript-book-chinese/)
- TypeScript 不允许我们对类型为 unknown 的值执行任意操作
```ts
    function dateMethod() {
    return '22'
    }
    const data: unknown = dateMethod();
    data.hello(); // ts报错： Object is of type 'unknown'.ts(2571)
```
- 只能将 unknown 类型的变量赋值给 any 和 unknown, 而 any 类型的变量可以赋值给 任何类型的变量