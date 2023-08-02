import{_ as s,c as a,o as n,d as l}from"./app.42bc66d1.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u5E38\u7528\u4EE3\u7801\u5757/hexToRgba.md","lastUpdated":1690998362000}'),o={name:"articles/\u5E38\u7528\u4EE3\u7801\u5757/hexToRgba.md"},p=l(`<div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hexToRgba </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">hex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> opacity</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rgbaColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\\da-f</span><span style="color:#89DDFF;">]{6}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">reg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">hex</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">rgbaColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">rgba(</span><span style="color:#89DDFF;">\${</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> hex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">\${</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> hex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">\${</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> hex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">opacity</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rgbaColor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,1),e=[p];function t(c,r,D,F,y,C){return n(),a("div",null,e)}var _=s(o,[["render",t]]);export{i as __pageData,_ as default};
