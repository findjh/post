<template>
    <div class="container">
        <div class="box " ref="boxRef1" @animationiteration="onAnimationIterate">一个人</div>
        <div class="box " ref="boxRef2">旅行路上</div>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    overflow: hidden;
    height: 21px;
    font-size: 12px;
    line-height: 17px;
    box-sizing: border-box;

}

.box {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    font-weight: 600;
    color: hsl(230, 47.6%, 48.6%);
    height: 21px;
    padding: 2px 4.5px;
    background-color: hsla(230, 47.6%, 48.6%, .2);
    border-radius: 2px;
    animation-name: popup;
    animation-duration: 1.6s;
    animation-timing-function: cubic-bezier(.49, .11, 0, 1);
    animation-iteration-count: infinite;
    will-change: top;
    animation-delay: 1s;
    transition: width cubic-bezier(.49, .11, 0, 1);
    transition-duration: .6s
}

@keyframes popup {
    37.5% {
        top: -24px;
    }

    100% {
        top: -24px;
    }
}

.box:nth-of-type(2) {
    margin-top: 3px;
    transform: translateY(21px)
}
</style>
<script setup>
import { ref } from 'vue';
let arr = ['一个人', '旅行路上', '放空大脑', '做家务', '通勤路上', '散步时', '眼睛好累']
let i = 1;
const boxRef1 = ref(null);
const boxRef2 = ref(null)
function onAnimationIterate() {
    i = (i + 1) % arr.length;
    boxRef1.value.textContent = boxRef2.value.textContent;
    boxRef2.value.textContent = arr[i]
}
</script>