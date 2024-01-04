### background 多个值的应用
属性值可以有多个，会进行叠加，第一个在最上层
比如
```css
 background: linear-gradient(to bottom, transparent, #fff), rgb(214, 219, 220);   
```



<div class="container"> </div>

<br/>

<style scoped>
.container{
    height: 30vh;
    border: 1px solid #ccc;
    background: linear-gradient(to bottom, transparent, #fff), rgb(214, 219, 220);   
    margin: 20px 0;
}
</style>