`next` 方法用于推动生成器的执行。`next` 方法可以带有一个参数，该参数将作为上一个 `yield` 表达式的结果（即上一次暂停时 `yield` 的值）。

```js
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('a'), ms)
//     })
// }
// function* fn() {
//     console.log('*fn ---------')
//     let a = yield delay(1000);
//     console.log('after a:', a)
//     yield 'b';

// }
// let it = fn();
// it.next().value.then((res)=>it.next(res))


function* generatorFunction() {
    const x = yield 'First yield'; // 第一次调用 next 时，执行到这里，并暂停，返回 'First yield'
    console.log('Received:', x);
    const y = yield 'Second yield'; // 第二次调用 next 时，执行到这里，并暂停，返回 'Second yield'
    console.log('Received:', y);
    return 'Done'; // 生成器执行完成，返回 'Done'
  }
  
  const generator = generatorFunction();
   
  const result1 = generator.next(); 
  console.log(result1); // { value: 'First yield', done: false }
  
  // 第二次调用 next，将参数传递给上一个 yield 表达式，并执行到第二个 yield 表达式
  const result2 = generator.next(10);
  console.log(result2); //Received: 10 { value: 'Second yield', done: false } 
  
  // 第三次调用 next，没有更多的 yield 表达式，生成器执行完成
  const result3 = generator.next(); 
  console.log(result3); // Received: undefined  { value: 'Done', done: true } 
  
```

