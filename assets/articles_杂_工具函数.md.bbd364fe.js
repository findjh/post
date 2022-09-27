import{_ as s,c as a,o as n,a as l}from"./app.333ae39c.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u6742/\u5DE5\u5177\u51FD\u6570.md"}'),p={name:"articles/\u6742/\u5DE5\u5177\u51FD\u6570.md"},o=l(`<ul><li>\u590D\u5236</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> copyText </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clipboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeText</span><span style="color:#A6ACCD;">(text)</span></span>
<span class="line"><span style="color:#82AAFF;">copyText</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5355\u884C\u4EE3\u7801 \u524D\u7AEF\u4E16\u754C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)   </span></span>
<span class="line"></span></code></pre></div><ul><li>\u9009\u62E9\u6587\u672C</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getSelectedText </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSelection</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">getSelectedText</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E24\u65E5\u671F\u4E4B\u95F4\u76F8\u5DEE\u7684\u5929\u6570</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dayDiff </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">date1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> date2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ceil</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(date1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> date2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">86400000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">dayDiff</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-10-21</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-02-12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Result: 114</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8BA1\u7B97\u6570\u7EC4\u5E73\u5747\u503C</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> average </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">average</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">//16</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,D,y,A,C){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
