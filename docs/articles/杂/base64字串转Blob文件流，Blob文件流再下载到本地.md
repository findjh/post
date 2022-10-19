1. **base64字串转Blob文件流**

   ```js
   // base64转化为Blob对象
       convertBase64ToBlob(imageEditorBase64) {
         var base64Arr = imageEditorBase64.split(",");
         var imgtype = "";
         var base64String = "";
         if (base64Arr.length > 1) {
           //如果是图片base64，去掉头信息
           base64String = base64Arr[1];
           imgtype = base64Arr[0].substring(
             base64Arr[0].indexOf(":") + 1,
             base64Arr[0].indexOf(";")
           );
         }
         // 将base64解码
         var bytes = atob(base64String);
         //var bytes = base64;
         var bytesCode = new ArrayBuffer(bytes.length);
         // 转换为类型化数组
         var byteArray = new Uint8Array(bytesCode);
    
         // 将base64转换为ascii码
         for (var i = 0; i < bytes.length; i++) {
           byteArray[i] = bytes.charCodeAt(i);
         }
    
         // 生成Blob对象（文件对象）
         return new Blob([bytesCode], { type: imgtype });
       }
   ```

   

2. **Blob文件流再下载到本地**

   ```js
   // 下载Blob流文件
       downFileToLocal(fileName, blob) {
         // 创建用于下载文件的a标签
         const d = document.createElement("a");
         // 设置下载内容
         d.href = window.URL.createObjectURL(blob);
         // 设置下载文件的名字
         d.download = fileName;
         // 界面上隐藏该按钮
         d.style.display = "none";
         // 放到页面上
         document.body.appendChild(d);
         // 点击下载文件
         d.click();
         // 从页面移除掉
         document.body.removeChild(d);
         // 释放 URL.createObjectURL() 创建的 URL 对象
         window.URL.revokeObjectURL(d.href);
       }
   ```

   

- [转载](https://blog.csdn.net/xiao970615/article/details/126305092)