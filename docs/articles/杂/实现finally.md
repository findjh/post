```js
Promise.prototype.finally = function (cb){
    return this.then((value)=>{
        return Promise.resolve(cb()).then(()=>value)
    },(err)=>{
        return Promise.resolve(cb()).then(()=>{throw err})
    })
}
```