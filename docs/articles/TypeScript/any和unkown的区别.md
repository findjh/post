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

- 文件模块

文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域。