import{_ as s,c as n,o as a,d as l}from"./app.c5b59965.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/JavaScript/compose.md","lastUpdated":1701850932000}'),p={name:"articles/JavaScript/compose.md"},o=l(`<div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compose</span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">fns</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fns</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pre</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">pre</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">cur</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">compose</span><span style="color:#A6ACCD;">(add1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">add2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">add3)(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zjh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#676E95;font-style:italic;">//123zjh</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C <code>initialValue</code> \u6CA1\u6709\u4F20\u9012\u7ED9 <code>reduce</code> \u51FD\u6570\uFF0C\u90A3\u4E48 <code>pre</code> \u7684\u521D\u59CB\u503C\u5C06\u662F\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u800C <code>cur</code> \u5C06\u662F\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u3002</p>`,2),e=[o];function c(t,r,F,D,y,A){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
