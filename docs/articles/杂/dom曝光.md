```js
/**
 * DOM曝光
 * @param {object} options 配置参数
 * options @param {Array} DOMs 要被监听的DOM列表
 * options @param {Function} callback[type, io] 回调，传入参数
 * options @param {DOM} parentDom 子元素的对应父元素
 */
export default function expose (options = {}) {
    if (!options.DOMs || !options.callback) {
        console.error('Error: 传入监听DOM或者回调函数');
        return;
    }
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [...Array(100).keys()].map(x => x / 100)
    };
    options.parentDom && (observerOptions.root = options.parentDom);
    // 优先使用异步观察目标元素与祖先元素或顶级文档viewport的交集中的变化的方法
    if (window.IntersectionObserver) {
        let elEnter = false; // dom是否进入可视区域
        const io = new IntersectionObserver((entries) => {
            // 回调包装
            const fn = () => options.callback({ io });
            // 过程性监听
            entries.forEach((item) => {
                if (!elEnter && item.intersectionRatio > 0 && item.intersectionRatio <= 1) { // 部分显示即为显示
                    fn();
                    elEnter = true;
                } else if (item.intersectionRatio === 0) { // 不可见时恢复
                    elEnter = false;
                }
            });
        }, observerOptions);
        // 监听DOM
        options.DOMs.forEach(DOM => io.observe(DOM));
    }
}
```

[参考](https://mp.weixin.qq.com/s/oZKjlSiLiBgcT0TfZ1zMhw)