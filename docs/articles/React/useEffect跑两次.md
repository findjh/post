ref也可以接受一个回调函数

```ts
function Comp(){
  const drawCallBack = useCallback((target:HTMLDivElement)=>{
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = 200
      canvas.height = 200
      ctx?.fillRect(0,0,200,200)
      target.appendChild(canvas);
  },[]);
  return <div ref={drawCallBack}/>
}
```

