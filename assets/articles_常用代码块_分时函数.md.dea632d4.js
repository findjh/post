import{_ as s,o as n,c as a,d as l}from"./app.a870340f.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/\u5E38\u7528\u4EE3\u7801\u5757/\u5206\u65F6\u51FD\u6570.md","lastUpdated":1704915449000}'),p={name:"articles/\u5E38\u7528\u4EE3\u7801\u5757/\u5206\u65F6\u51FD\u6570.md"},e=l(`<p>\u5206\u65F6\u51FD\u6570\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"> var max = 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;"> for (let i = 0; i &lt; max; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr.push(i);</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA\u4E00\u4E2A\u5206\u65F6\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">const timerChunk = (sourceArr, callback, count = 1, wait = 200) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let ret, timer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const renderData = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i=0;i&lt;Math.min(count, sourceArr.length);i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u53D6\u51FA\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">      ret = sourceArr.shift();</span></span>
<span class="line"><span style="color:#A6ACCD;">      callback(ret)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5982\u679C\u6570\u636E\u53D6\u5B8C\u4E86\uFF0C\u6E05\u7A7A\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (sourceArr.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          clearInterval(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        renderData();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, wait)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }  </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const createElem = (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const appDom = document.getElementById(&#39;app&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const divDom = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      divDom.innerHTML = res;</span></span>
<span class="line"><span style="color:#A6ACCD;">      appDom.appendChild(divDom);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">var curentRender = timerChunk(arr, (res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    createElem(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6BCF\u6B21\u53D610\u6761\u6570\u636E\uFF0C200ms</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 10, 200);</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.time(&#39;start&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"> curentRender(); // start: 0.0341796875 ms</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.timeEnd(&#39;start&#39;);</span></span>
<span class="line"></span></code></pre></div><p>\u60F0\u6027\u52A0\u8F7D\u51FD\u6570\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u4EE5\u4E66\u4E0A\u7684\u4F8B\u5B50\u603B\u7ED3\u5427\uFF08\u6CA1\u6709\u60F3\u5230\u66F4\u597D\u7684\u65B9\u6848\uFF09\u6D4F\u89C8\u5668\u7684\u517C\u5BB9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u672A\u4F18\u5316\u524D</span></span>
<span class="line"><span style="color:#A6ACCD;">let addEvent = function(elem, type, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(window.addEventListener) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return elem.addEventListener(type, handler, false)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  if(window.attachEvent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return elem.attachEvent(\`on\${type}\`, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u7F3A\u70B9\uFF1A\u6BCF\u6B21\u52A0\u8F7D\u90FD\u9700\u8981\u8FDB\u884C\u5224\u65AD\u8FDB\u5165\u91CC\u9762\u7684if\u6761\u4EF6</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u7B2C\u4E00\u6B21\u4F18\u5316\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">let addEvent = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   if(window.addEventListener) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          elem.addEventListener(type, handler, false)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   if(window.attachEvent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          elem.attachEvent(\`on\${type}\`, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">})();</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u4F18\u5316\u540E\u7684\u7F3A\u70B9\u662F \u5E73\u767D\u65E0\u6545\u5148\u8C03\u7528\u4E86\u4E0BaddEvent</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u7B2C\u4E8C\u6B21\u4F18\u5316\u5C31\u662F\u54B1\u4EEC\u7684\u60F0\u6027\u52A0\u8F7D\u51FD\u6570\u770B\u770B\u662F\u4EC0\u4E48\u6837\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">let addEvent = function(ele, type, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(window.addEventListener) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          addEvent = function(ele, type, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ele.addEventListener(type, handler, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }else if(window.attachEvent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         addEvent = function(ele, type, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ele.attachEvent(\`on\${type}\`, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">      addEvent(ele, type, handler);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">//\u54B1\u4EEC\u5927\u81F4\u5206\u6790\u4E0B\u8FD9\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">//1\u3001\u5728\u4F7F\u7528\u7684\u7B2C\u4E00\u6B21\u5224\u65AD\u4E86\u4E0B </span></span>
<span class="line"><span style="color:#A6ACCD;">//2\u3001\u76F4\u63A5\u66F4\u6539\u4E86addEvent(\u8FD9\u4E2A\u65F6\u5019\u7684addEvent\u5DF2\u7ECF\u662F\u5224\u65AD\u540E\u7684\u4E86\uFF0C\u5728\u4E0B\u6B21\u5C31\u4E0D\u4F1A\u5728\u8FDB\u884C\u5224\u65AD\u4E86)</span></span>
<span class="line"><span style="color:#A6ACCD;">//3\u3001\u4E3A\u4EC0\u4E48\u5728\u5E95\u90E8\u6267\u884C\u4E86\u4E00\u904D  addEvent(ele, type, handler)\uFF1F \u5176\u5B9E\u5C31\u662F\u66F4\u6539\u540E\u7684\u51FD\u6570\u8C03\u7528\u4E0B\uFF0C\u4E0D\u80FD\u5C31\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002\u7B2C\u4E00\u6B21\u6CA1\u51FA\u53D1\u5427</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,4),c=[e];function t(o,r,A,C,i,y){return n(),a("div",null,c)}var v=s(p,[["render",t]]);export{d as __pageData,v as default};
