```js
const dragenter = (e)=>{
    e.dataTransfer.dropEffect = 'move'//h5 拖动的标识
}
const dragover = (e)=>{
    e.preventDefault();
}
const dragleave = (e)=>{
    e.dataTransfer.dropEffect = 'none'
}
const drop = (e)=>{
    
}

const containerRef = ref(null);

const dragstart = (e,component)=>{
    //dragenter 进入元素中，添加一个移动的标识
    //dragover 在目标元素经过 必须要阻止默认行为，否则不能触发drop
    //dragleave 离开目标元素的时候，需要增加一个禁用标识
    //drop 松手的时候 根据拖拽的组件 添加一个组件
    containerRef.value.addEventListener('dragenter',dragenter)
    containerRef.value.addEventListener('dragover',dragover)
    containerRef.value.addEventListener('dragleave',dragleave)
    containerRef.value.addEventListener('drop',drop)
}
const dragend = (e,component)=>{
    containerRef.value.removeEventListener('dragenter',dragenter)
    containerRef.value.removeEventListener('dragover',dragover)
    containerRef.value.removeEventListener('dragleave',dragleave)
    containerRef.value.removeEventListener('drop',drop)
}

```
