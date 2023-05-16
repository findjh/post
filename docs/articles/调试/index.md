启动方式1：window下配置chrome启动调试模式端口：右击chrome快捷方式点击属性，定位到目标输入框，在最末尾加上--remote-debugging-port=9222。加上之后用这个快捷方式启动的窗口都会是调试模式

启动方式2："C:\Program Files\Google\Chrome\Application\chrome.exe"  --remote-debugging-port=9222 --user-data-dir="D:\Learning\wsconfig"

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        },
        {
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "name": "attach Chrome against localhost",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

