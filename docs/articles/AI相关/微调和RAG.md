## 概念

### 智能体 

基于对话的AI项目，它通过对话方式接收用户的输入，由大模型自动调用插件或工作流等方式执行用户指定的业务流程，并生成最终的回复。智能客服、虚拟伴侣、个人助理、英语外教都是智能体的典型应用场景

### 插件

插件是一个工具集，一个插件内可以包含一个或多个工具（API）

### 工作流（Workfiow）

用于处理功能类的请求，可通过顺序执行一系列节点实现某个功能。适合数据的自动化处理场景，例如生成行业调研报告、生成一张海报、制作绘本等

### 知识库：

知识库功能包含两个能力，一是存储和管理外部数据的能力，二是增强检索的能力

[0-1搭建智能体](https://mp.weixin.qq.com/s/GBIPm1ndjW_aDPGLxe1_HA)

训练->部署大模型-> 推理

## 微调

![img](../../public/1756548432906-d38de967-c3c9-463f-aaa3-6839dcaa1266.png)

![img](../../public/1756548909814-8ea83caa-4fd1-4ce4-892b-178a9e996954.png)

![img](../../public/1756548731171-622183e2-668c-40bc-9a2d-e2057948f768.png)

**过拟合：** 模型在训练数据上表现得非常好，但在新数据（测试集、实际应用场景）上表现很差。  



缺点：

![img](../../public/1756549864353-40d37c67-78de-4bcc-8518-f8d66ab6f2f7.png)

## RAG

与微调的区别：微调会改变模型文件，rag不会

![img](../../public/1756559147013-cb42bdc3-73cd-4542-acb3-39a9747161f0.png)

![img](../../public/1756559260071-a1ba83e9-e6c8-4df2-9f18-9a7835c9eecb.png)

![img](../../public/1756559320636-623a434c-08c9-4c8c-97cd-4f7bb3a7a652.png)

![img](../../public/1756566366455-b5f9be1c-8328-4f3f-ae7d-216fe6be22de.png)

![img](../../public/1756566478554-24d6f46b-74b9-4869-8c53-6971de2da2c3.png)

![img](../../public/1756566576049-57001b3a-5614-4fd2-9a50-9d7612ba6697.png)

![img](../../public/1756566623564-480effb4-c6b4-4817-b175-0e0c53fd4cc1.png)

![img](../../public/1756566936101-db08127c-6f87-4e9d-9f00-3e933f449a3d.png)



<details class="lake-collapse"><summary id="u6d73eac8"><span class="ne-text">RAG 的检索流程</span></summary><ol class="ne-ol" style="margin: 0; padding-left: 23px"><li id="u5796c80e" data-lake-index-type="0"><strong><span class="ne-text">向量化</span></strong></li></ol><ul class="ne-list-wrap" style="margin: 0; padding-left: 23px; list-style: none"><ul ne-level="1" class="ne-ul" style="margin: 0; padding-left: 23px; list-style: circle"><li id="u9514f853" data-lake-index-type="0"><span class="ne-text">把用户的问题（query）通过 </span><strong><span class="ne-text">向量模型</span></strong><span class="ne-text">（比如 Sentence-BERT，或者更强的 embedding 模型）转成一个向量。</span></li><li id="ueacd0c08" data-lake-index-type="0"><span class="ne-text">把知识库里的文档也提前分片、向量化，存到一个 </span><strong><span class="ne-text">向量数据库</span></strong><span class="ne-text">（如 FAISS、Milvus、Pinecone）中。</span></li></ul></ul><ol start="2" class="ne-ol" style="margin: 0; padding-left: 23px"><li id="ue3f905a3" data-lake-index-type="0"><strong><span class="ne-text">相似度检索</span></strong></li></ol><ul class="ne-list-wrap" style="margin: 0; padding-left: 23px; list-style: none"><ul ne-level="1" class="ne-ul" style="margin: 0; padding-left: 23px; list-style: circle"><li id="uccb7ca72" data-lake-index-type="0"><span class="ne-text">在向量数据库里，用余弦相似度、点积、欧式距离等方法，找到和 query 最接近的向量（对应的文档片段）。</span></li><li id="u85750270" data-lake-index-type="0"><span class="ne-text">这个过程就是“检索”。</span></li></ul></ul><ol start="3" class="ne-ol" style="margin: 0; padding-left: 23px"><li id="u1042fbaf" data-lake-index-type="0"><strong><span class="ne-text">召回结果</span></strong></li></ol><ul class="ne-list-wrap" style="margin: 0; padding-left: 23px; list-style: none"><ul ne-level="1" class="ne-ul" style="margin: 0; padding-left: 23px; list-style: circle"><li id="u4f0379f9" data-lake-index-type="0"><span class="ne-text">把最相关的文档片段（比如 top-k 个）作为“召回结果”返回。</span></li><li id="uf67e5d6f" data-lake-index-type="0"><span class="ne-text">有时会再做 </span><strong><span class="ne-text">重排序（Re-ranking）</span></strong><span class="ne-text">，保证真正相关的内容排前面。</span></li></ul></ul><ol start="4" class="ne-ol" style="margin: 0; padding-left: 23px"><li id="uaf1fe6b3" data-lake-index-type="0"><strong><span class="ne-text">增强生成</span></strong></li></ol><ul class="ne-list-wrap" style="margin: 0; padding-left: 23px; list-style: none"><ul ne-level="1" class="ne-ul" style="margin: 0; padding-left: 23px; list-style: circle"><li id="u63563be4" data-lake-index-type="0"><span class="ne-text">把召回到的内容塞到 prompt 里，和用户问题一起喂给大模型，让模型基于检索结果来生成回答。</span></li></ul></ul></details>

![img](../../public/1756576177299-8fe142a3-d28a-4877-9b90-88569900b122.png)



<details class="lake-collapse"><summary id="u0575876c"><span class="ne-text">嵌入模型</span></summary><p id="u9e6c193b" class="ne-p" style="margin: 0; padding: 0; min-height: 24px"><span class="ne-text">指 </span><strong><span class="ne-text">Embedding Model</span></strong><span class="ne-text">，主要用来把文本、图片、音频等数据转换成</span><strong><span class="ne-text">向量表示</span></strong><span class="ne-text">（一串高维数字），让计算机能理解并处理这些非结构化数据。</span></p><p id="u1c1c792f" class="ne-p" style="margin: 0; padding: 0; min-height: 24px"><span class="ne-text">简单理解：</span></p><ul class="ne-ul" style="margin: 0; padding-left: 23px"><li id="u2b7af42a" data-lake-index-type="0"><span class="ne-text">传统计算机只能处理数字。</span></li><li id="ua99c9722" data-lake-index-type="0"><span class="ne-text">自然语言（文字）、图像、语音等都需要转化成“向量”，才能进行计算。</span></li><li id="uf4b5bf6c" data-lake-index-type="0"><strong><span class="ne-text">嵌入模型的作用就是把复杂的信息转成向量，并且让相似的内容在向量空间中“靠近”。</span></strong></li></ul></details>

![img](../../public/1756636635628-d4c32f85-87f9-4514-b055-f8a76fb700f5.png)



![img](../../public/1756658280964-0c1bf7cd-f394-4f98-8c11-d2bb8ac5a4cd.png)