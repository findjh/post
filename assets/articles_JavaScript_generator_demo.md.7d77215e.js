import{_ as s,c as n,o as a,d as l}from"./app.c5b59965.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/JavaScript/generator_demo.md","lastUpdated":1701850932000}'),o={name:"articles/JavaScript/generator_demo.md"},p=l(`<p><code>next</code> \u65B9\u6CD5\u7528\u4E8E\u63A8\u52A8\u751F\u6210\u5668\u7684\u6267\u884C\u3002<code>next</code> \u65B9\u6CD5\u53EF\u4EE5\u5E26\u6709\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5C06\u4F5C\u4E3A\u4E0A\u4E00\u4E2A <code>yield</code> \u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\uFF08\u5373\u4E0A\u4E00\u6B21\u6682\u505C\u65F6 <code>yield</code> \u7684\u503C\uFF09\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// function delay(ms) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         setTimeout(() =&gt; resolve(&#39;a&#39;), ms)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function* fn() {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(&#39;*fn ---------&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     let a = yield delay(1000);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(&#39;after a:&#39;, a)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     yield &#39;b&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let it = fn();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// it.next().value.then((res)=&gt;it.next(res))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generatorFunction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">First yield</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E00\u6B21\u8C03\u7528 next \u65F6\uFF0C\u6267\u884C\u5230\u8FD9\u91CC\uFF0C\u5E76\u6682\u505C\uFF0C\u8FD4\u56DE &#39;First yield&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Second yield</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E8C\u6B21\u8C03\u7528 next \u65F6\uFF0C\u6267\u884C\u5230\u8FD9\u91CC\uFF0C\u5E76\u6682\u505C\uFF0C\u8FD4\u56DE &#39;Second yield&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Received:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Done</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u751F\u6210\u5668\u6267\u884C\u5B8C\u6210\uFF0C\u8FD4\u56DE &#39;Done&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> generator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generatorFunction</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> generator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { value: &#39;First yield&#39;, done: false }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E8C\u6B21\u8C03\u7528 next\uFF0C\u5C06\u53C2\u6570\u4F20\u9012\u7ED9\u4E0A\u4E00\u4E2A yield \u8868\u8FBE\u5F0F\uFF0C\u5E76\u6267\u884C\u5230\u7B2C\u4E8C\u4E2A yield \u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> generator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//Received: 10 { value: &#39;Second yield&#39;, done: false } </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E09\u6B21\u8C03\u7528 next\uFF0C\u6CA1\u6709\u66F4\u591A\u7684 yield \u8868\u8FBE\u5F0F\uFF0C\u751F\u6210\u5668\u6267\u884C\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> generator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result3)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Received: undefined  { value: &#39;Done&#39;, done: true } </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div>`,2),e=[p];function t(c,r,y,D,F,i){return a(),n("div",null,e)}var d=s(o,[["render",t]]);export{C as __pageData,d as default};
