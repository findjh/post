import{_ as e,o as a,c as t,d as l}from"./app.91d29e6e.js";const _=JSON.parse('{"title":"useMemo","description":"","frontmatter":{},"headers":[{"level":3,"title":"useMemo","slug":"usememo"},{"level":3,"title":"useState","slug":"usestate"},{"level":3,"title":"useEffect","slug":"useeffect"},{"level":3,"title":"useRef","slug":"useref"},{"level":3,"title":"useLayoutEffect","slug":"uselayouteffect"},{"level":3,"title":"forwardRef + useImperativeHandle","slug":"forwardref-useimperativehandle"}],"relativePath":"articles/React/hooks.md","lastUpdated":1704197026000}'),s={name:"articles/React/hooks.md"},i=l('<ul><li><p>\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u9996\u5B57\u6BCD\u8981\u5927\u5199</p></li><li><p>React\u901A\u8FC7\u9996\u5B57\u6BCD\u6765\u5224\u65AD\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08\u5927\u5199\uFF09\u8FD8\u662F\u539F\u751FDOM\uFF08\u5C0F\u5199\uFF09</p></li><li><p>props\u3001state\u7684\u6539\u53D8\u624D\u4F1A\u5F15\u8D77\u89C6\u56FE\u66F4\u65B0</p></li><li><p>setState</p><p>\u7C7B\u7EC4\u4EF6\u4E2D\u4F20\u5BF9\u8C61\u4E0D\u4F1A\u8986\u76D6\uFF0C\u800C\u662F\u548C\u8001\u5BF9\u8C61\u5408\u5E76\u3002\u4F46\u51FD\u6570\u7EC4\u4EF6\u4F1A\u8986\u76D6</p><p>\u66F4\u65B0\u662F\u5F02\u6B65\u7684</p></li><li><p>\u6BCF\u6B21\u6E32\u67D3\u90FD\u662F\u72EC\u7ACB\u7684\u95ED\u5305</p></li><li><p>\u51E1\u662F\u5E26use\u7684\u90FD\u6709\u4E00\u4E2A\u7279\u5F81\uFF0C\u5728\u591A\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u53EF\u80FD\u4FDD\u6301\u4E00\u81F4</p></li></ul><h3 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-hidden="true">#</a></h3><p><strong><code>React.memo</code>\uFF1A</strong> \u5B83\u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C01\u88C5\u51FD\u6570\u7EC4\u4EF6\uFF0C\u4F7F\u5176\u5728\u53EA\u6709\u5728\u5176 props \u53D1\u751F\u53D8\u5316\u65F6\u624D\u91CD\u65B0\u6E32\u67D3\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u7EC4\u4EF6\u5728\u6BCF\u6B21\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\u90FD\u4F1A\u91CD\u65B0\u6267\u884C\uFF0C\u4F46\u4F7F\u7528 <code>React.memo</code> \u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u3002</p><h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-hidden="true">#</a></h3><ol><li><p>\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u4F1A\u5728\u521D\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u6267\u884C\uFF0C\u800C\u4E14\u53EA\u6267\u884C\u4E00\u6B21\u3002</p></li><li><p>\u5982\u679C\u4F20\u5165\u66F4\u65B0\u51FD\u6570\u7684\u5BF9\u8C61\u662F\u8001\u72B6\u6001\u5BF9\u8C61\u7684\u8BDD\uFF0C\u5219\u4F1A\u8DF3\u8FC7\u7EC4\u4EF6\u66F4\u65B0\u548C\u6E32\u67D3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6027\u80FD\u4F18\u5316\u3002</p></li><li><p>\u4E0D\u80FD\u5728if while for\u4E2D\u8C03\u7528useState, \u53EA\u80FD\u5728\u51FD\u6570\u7684\u6700\u5916\u5C42\u8C03\u7528hook</p></li></ol><h3 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-hidden="true">#</a></h3><ol><li><p>useEffect\u91CC\u9762\u7684\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\uFF0C\u548C\u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210\u540E\u6267\u884C</p></li><li><p>\u5982\u679C\u7B2C2\u4E2A\u53C2\u6570\u6CA1\u4F20\uFF0C\u5219\u6B64\u51FD\u6570\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u6267\u884C</p></li><li><p>\u5982\u679C\u4F20\u7684\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u6302\u8F7D\u540E\u6267\u884C\u4E00\u6B21\uFF0C\u4EE5\u540E\u4E0D\u518D\u6267\u884C\u4E86</p></li></ol><h3 id="useref" tabindex="-1">useRef <a class="header-anchor" href="#useref" aria-hidden="true">#</a></h3><ol><li>useRef\u8FD4\u56DE\u4E00\u4E2A\u53EF\u53D8\u7684ref\u5BF9\u8C61\uFF0C \u5176 <code>.current</code>\u5C5E\u6027\u88AB\u521D\u59CB\u5316\u4E3A\u4F20\u5165\u7684\u53C2\u6570\u3002</li><li>\u88AB\u5F15\u7528\u5BF9\u8C61\u7684\u503C\u5728\u91CD\u65B0\u6E32\u67D3\u4E4B\u95F4\u4FDD\u6301\u4E0D\u53D8</li></ol><h3 id="uselayouteffect" tabindex="-1">useLayoutEffect <a class="header-anchor" href="#uselayouteffect" aria-hidden="true">#</a></h3><ol><li>\u6570\u636E\u6539\u53D8\u540E, render(\u6E32\u67D3) layout(\u5E03\u5C40)\uFF0C \u518D\u6267\u884CuseLayoutEffect\uFF0C\u7136\u540E\u518Dpaint(\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A)\uFF0C\u7136\u540E\u518D\u5728\u67D0\u4E2A\u7A7A\u95F2\u7684\u65F6\u95F4\u70B9\u6267\u884CuseEffect</li><li>\u4F1A\u963B\u585E\u6E32\u67D3</li></ol><h3 id="forwardref-useimperativehandle" tabindex="-1">forwardRef + useImperativeHandle <a class="header-anchor" href="#forwardref-useimperativehandle" aria-hidden="true">#</a></h3>',12),r=[i];function o(u,d,f,c,p,h){return a(),t("div",null,r)}var m=e(s,[["render",o]]);export{_ as __pageData,m as default};
