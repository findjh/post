- & 交叉类型  https://typescript.bootcss.com/advanced-types.html

  交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

  例如，Person & Serializable & Loggable同时是Person和Serializable和Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。

- | 联合类型

  联合类型表示一个值可以是几种类型之一。 我们用竖线（|）分隔每个类型，所以number | string | boolean表示一个值可以是number，string，或boolean。

  如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

- 两者都可以用来描述对象或函数的类型，但是语法不同
```js
// interface
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

// type
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

- 与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。
```js
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;
```

- 与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
```js
interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };
```

- 两者都可以扩展，接口通过 extends 来实现。类型别名的扩展就是交叉类型，通过 & 来实现。
```js
// 接口扩展接口
interface PointX {
    x: number
}

interface Point extends PointX {
    y: number
}

// 类型别名扩展类型别名
type PointX = {
    x: number
}

type Point = PointX & {
    y: number
}

// 接口扩展类型别名
type PointX = {
    x: number
}
interface Point extends PointX {
    y: number
}

// 类型别名扩展接口
interface PointX {
    x: number
}
type Point = PointX & {
    y: number
}

```