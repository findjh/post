<script setup>
import ClipPath from '../../../examples/ClipPath.vue'
</script>
### 移动显示对比
<br/>
<ClipPath /> 

```vue
<template>
    <div class="container" ref="containerRef">
        <img class="bottom" src="./assets/images/girl-14-2.jpg">
        <div class="img-overlay" @mousemove="handleMouseMove">
            <img src="./assets/images/girl-14.webp">
        </div>
        <div class="divider"></div>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    width: 80%;
    --exposure: 50%;

}

img {
    width: 100%;
}

.img-overlay {
    position: absolute;
    inset: 0;
}

.img-overlay img {
    width: 100%;
    clip-path: inset(0 var(--exposure) 0 0);
}

.divider {
    width: 1px;
    height: 100%;
    background-color: #666;
    position: absolute;
    top: 0;
    right: var(--exposure)
}
</style>
<script setup>
import { ref } from 'vue';
const containerRef = ref(null)
function handleMouseMove(e) {
    const exposure = containerRef.value.clientWidth - e.offsetX;
    containerRef.value.style.setProperty('--exposure', `${exposure}px`)
}
</script>
```