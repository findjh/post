import{_ as r,o,c as s,d as t}from"./app.91d29e6e.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/JavaScript/worker.md","lastUpdated":1704204110000}'),p={name:"articles/JavaScript/worker.md"},n=t("<p><strong>\u5728\u5927\u6587\u4EF6\u4E0A\u4F20\u4E2D\uFF0C Web Workers \u80FD\u53D1\u6325\u4EC0\u4E48\u4F5C\u7528\uFF1F</strong></p><p>\u5728\u5927\u6587\u4EF6\u4E0A\u4F20\u4E2D\uFF0CWeb Workers\u80FD\u53D1\u6325\u91CD\u8981\u4F5C\u7528\uFF0C\u7279\u522B\u662F\u5728\u63D0\u9AD8\u524D\u7AEF\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u65B9\u9762\u3002\u4EE5\u4E0B\u662FWeb</p><p>Workers\u7684\u51E0\u4E2A\u5173\u952E\u7528\u9014\uFF1A</p><p><strong>1.</strong> <strong>\u5904\u7406\u8BA1\u7B97\u5BC6\u96C6\u578B\u4EFB\u52A1</strong></p><p><strong>\u6587\u4EF6\u5206\u7247</strong>\uFF1A\u5728\u4E0A\u4F20\u5927\u6587\u4EF6\u4E4B\u524D\uFF0C\u901A\u5E38\u9700\u8981\u5C06\u5176\u5206\u5272\u6210\u591A\u4E2A\u5C0F\u5757\uFF08\u5206\u7247\uFF09\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u80FD\u76F8\u5F53\u8017\u65F6\uFF0C</p><p>\u7279\u522B\u662F\u5BF9\u4E8E\u975E\u5E38\u5927\u7684\u6587\u4EF6\u3002Web Workers\u53EF\u4EE5\u5728\u540E\u53F0\u7EBF\u7A0B\u5904\u7406\u6587\u4EF6\u5206\u5272\uFF0C\u907F\u514D\u963B\u585EUI\u7EBF\u7A0B\u3002</p><p><strong>\u6570\u636E\u52A0\u5BC6</strong>\uFF1A\u5982\u679C\u4E0A\u4F20\u7684\u6587\u4EF6\u9700\u8981\u52A0\u5BC6\uFF0C\u8FD9\u901A\u5E38\u662F\u4E00\u4E2A\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684\u8FC7\u7A0B\u3002Web Workers\u5141\u8BB8\u5728\u540E\u53F0</p><p>\u7EBF\u7A0B\u4E2D\u8FDB\u884C\u52A0\u5BC6\u64CD\u4F5C\uFF0C\u51CF\u5C11\u5BF9\u4E3B\u7EBF\u7A0B\u7684\u5F71\u54CD\u3002</p><p><strong>2.</strong> <strong>\u63D0\u5347\u6027\u80FD\u548C\u54CD\u5E94\u6027</strong></p><p><strong>\u907F\u514D\u4E3B\u7EBF\u7A0B\u963B\u585E</strong>\uFF1A\u6267\u884C\u8017\u65F6\u4EFB\u52A1\u65F6\uFF0C\u5982\u6587\u4EF6\u5904\u7406\u6216\u6570\u636E\u52A0\u5BC6\uFF0CWeb Workers\u80FD\u591F\u786E\u4FDD\u8FD9\u4E9B\u64CD\u4F5C\u4E0D\u4F1A</p><p>\u963B\u585EUI\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u4FDD\u6301\u5E94\u7528\u754C\u9762\u7684\u6D41\u7545\u548C\u54CD\u5E94\u3002</p><p><strong>\u5E76\u884C\u5904\u7406</strong>\uFF1A\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2AWeb Workers\u6765\u540C\u65F6\u5904\u7406\u591A\u4E2A\u4EFB\u52A1\uFF0C\u5982\u540C\u65F6\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u7684\u4E0D\u540C\u90E8\u5206\u3002</p><p><strong>3.</strong> <strong>\u5B9E\u73B0\u590D\u6742\u7684\u4E0A\u4F20\u903B\u8F91</strong></p><p><strong>\u65AD\u70B9\u7EED\u4F20\u548C\u9519\u8BEF\u6062\u590D</strong>\uFF1AWeb Workers\u53EF\u4EE5\u7528\u6765\u5904\u7406\u65AD\u70B9\u7EED\u4F20\u903B\u8F91\uFF0C\u6BD4\u5982\u5728\u7F51\u7EDC\u4E2D\u65AD\u540E\u81EA\u52A8\u91CD\u65B0\u4E0A\u4F20</p><p>\u672A\u5B8C\u6210\u7684\u90E8\u5206\u3002</p><p><strong>\u7F51\u7EDC\u72B6\u6001\u76D1\u63A7</strong>\uFF1A\u5728Web Worker\u4E2D\u76D1\u63A7\u7F51\u7EDC\u72B6\u6001\uFF0C\u6839\u636E\u7F51\u7EDC\u53D8\u5316\u8C03\u6574\u4E0A\u4F20\u7B56\u7565\u3002</p><p><strong>4.</strong> <strong>\u80CC\u666F\u6570\u636E\u540C\u6B65</strong></p><p><strong>\u6570\u636E\u9884\u5904\u7406</strong>\uFF1A\u5728\u4E0A\u4F20\u4E4B\u524D\u5BF9\u6587\u4EF6\u8FDB\u884C\u9884\u5904\u7406\uFF0C\u5982\u683C\u5F0F\u8F6C\u6362\u3001\u538B\u7F29\u6216\u6821\u9A8C\u548C\u8BA1\u7B97\u7B49\u3002</p><p><strong>\u72B6\u6001\u66F4\u65B0</strong>\uFF1A\u5728\u540E\u53F0\u7EBF\u7A0B\u4E2D\u5B9A\u671F\u53D1\u9001\u4E0A\u4F20\u72B6\u6001\u66F4\u65B0\u5230\u670D\u52A1\u5668\uFF0C\u6216\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u72B6\u6001\u66F4\u65B0\u3002</p><p><strong>5.</strong> <strong>\u7528\u6237\u4F53\u9A8C\u4F18\u5316</strong></p><p><strong>\u8FDB\u5EA6\u66F4\u65B0</strong>\uFF1A\u5373\u4F7F\u5728\u8FDB\u884C\u5927\u6587\u4EF6\u5904\u7406\u548C\u4E0A\u4F20\u65F6\uFF0C\u4E5F\u80FD\u6301\u7EED\u66F4\u65B0\u8FDB\u5EA6\u6761\u6216\u5176\u4ED6UI\u5143\u7D20\uFF0C\u4FDD\u6301\u7528\u6237\u754C\u9762\u7684</p><p>\u6D3B\u8DC3\u548C\u54CD\u5E94\u3002</p><p><strong>\u4F7F\u7528<strong><strong>Web Workers</strong></strong>\u7684\u6CE8\u610F\u4E8B\u9879</strong></p><p><strong>\u5185\u5B58\u7BA1\u7406</strong>\uFF1A\u867D\u7136Web Workers\u8FD0\u884C\u5728\u72EC\u7ACB\u7684\u7EBF\u7A0B\u4E2D\uFF0C\u4F46\u4ECD\u7136\u5171\u4EAB\u540C\u4E00\u8FDB\u7A0B\u7684\u5185\u5B58\u3002\u5927\u6587\u4EF6\u5904\u7406\u5E94\u6CE8</p><p>\u610F\u5185\u5B58\u6D88\u8017\u3002</p><p><strong>\u901A\u4FE1\u5F00\u9500</strong>\uFF1AWeb Workers\u4E0E\u4E3B\u7EBF\u7A0B\u95F4\u7684\u901A\u4FE1\u662F\u901A\u8FC7\u590D\u5236\u6570\u636E\u5B9E\u73B0\u7684\uFF0C\u800C\u975E\u5171\u4EAB\u6570\u636E\uFF0C\u56E0\u6B64\u5927\u91CF\u6570\u636E</p><p>\u4F20\u8F93\u53EF\u80FD\u4F1A\u6709\u6027\u80FD\u5F00\u9500\u3002</p><p><strong>\u517C\u5BB9\u6027</strong>\uFF1A\u786E\u4FDD\u8003\u8651\u5230\u4E0D\u540C\u6D4F\u89C8\u5668\u5BF9Web Workers\u7684\u652F\u6301\u7A0B\u5EA6\u3002</p><p>\u901A\u8FC7\u5229\u7528Web Workers\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u5904\u7406\u5927\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u524D\u7AEF\u6027\u80FD\uFF0C\u540C\u65F6\u4FDD\u6301\u5E94\u7528\u754C\u9762\u7684\u6D41\u7545\u548C\u54CD</p><p>\u5E94\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002</p>",30),e=[n];function g(a,W,_,c,k,i){return o(),s("div",null,e)}var l=r(p,[["render",g]]);export{b as __pageData,l as default};