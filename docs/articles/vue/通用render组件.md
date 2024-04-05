```ts
import { defineComponent } from 'vue'
const RenderVnode = defineComponent({
    props:{
        vNode:{
            type: [String, Object],
            required: true
        }
    },
    setup(props){
        return ()=> props.vNode
    }
})
export default RenderVnode; 
```

使用
```vue
<template>
    <RenderVnode :vNode="str"/>
    <RenderVnode :vNode="vNode"/>
</template>

<script setup>
import RenderVnode from '@/hooks/RenderVnode.ts'
const str = '文本节点';
const vNode = h('b','加粗文本')
</script>
```