

```js
//1. 由于 SVG 文件就是一段 XML 文本，因此可以通过读取 XML 代码的方式，读取 SVG 源码。
var svgString = new XMLSerializer()
        .serializeToString(document.querySelector('svg'));
//2. 要新建一个Image对象，将 SVG 图像指定到该Image对象的src属性。
var img = new Image();
var svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
//3. 当图像加载完成后，再将它绘制到<canvas>元素。
var DOMURL = self.URL || self.webkitURL || self;
var url = DOMURL.createObjectURL(svg);
img.src = url;
img.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
};
```

