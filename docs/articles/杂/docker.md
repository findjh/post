- run 启动新容器实例
- start 启动老容器
- Dockerfile 里的RUN命令在image文件的构建阶段执行，执行结果都会打包进image文件；CMD命令则是在容器启动后执行
- 一个Dockerfile可以有多个RUN命令，但只能有一个CMD命令。
- 指定了CMD命令后，docker container run 命令就不能再附加命令了，否则它会覆盖CMD命令

### 端口映射

1. 查看镜像里暴露出的端口号

   ```bash
   docker image inspect nginx
   ```

2. 让宿主机的8080端口映射到docker容器的80端口

   ```bash
   docker run -d --name port_nginx -p 8080:80 nginx
   ```

3. 