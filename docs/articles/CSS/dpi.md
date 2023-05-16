- 设备像素比的概念。它告诉浏览器一个css像素应该使用多少个物理像素来绘制

- `window.devicePixelRatio` =显示设备物理像素分辨率 / 显示设备CSS像素分辨率

- 根据设备像素比的定义, 如果知道显示设备横向的css像素值，根据上面的公式，就能计算出显示设备横向的物理像素值。

  ```js
  显示设备宽度物理像素值= window.screen.width * window.devicePixelRatio;
  ```

  







https://juejin.cn/post/7225206098692407355