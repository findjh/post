- 概念

  Application Performance Management 是监控服务的一套技术手段

- 组成

  - Agent: 用于上报数据

  - Monitor：用于收集数据

  - Dashboard/Console：用于展示数据

- Grafana 数据监控，数据统计，告警，可视化工具

- nginx 在第7层 http协议
- lvs 负载均衡在第4层 tcp/udp协议，因此无法拿到cookie这些

- cluster 集群
  - master 进程负责监听端口，并将客户请求转发给worker进程
  - worker之间并不共享内存，每个进程都有自己的内存空间。
  - 进程间通过IPC通信（send、on）