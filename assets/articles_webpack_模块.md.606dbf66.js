import{_ as e,c,o,d as t}from"./app.654cd042.js";const h=JSON.parse('{"title":"\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A","slug":"\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A"}],"relativePath":"articles/webpack/\u6A21\u5757.md","lastUpdated":1673332072000}'),l={name:"articles/webpack/\u6A21\u5757.md"},n=t('<ul><li><p>commonjs\uFF1A\u5BFC\u51FA\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Cexports.\u5C5E\u6027 \u4E0D\u53EF\u80FD\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\u6216\u8005\u5B57\u7B26\u4E32\u6570\u5B57</p></li><li><p>commonjs2\uFF1A\u5BFC\u51FA\u7684\u53EF\u80FD\u662F\u4EFB\u4F55\u5185\u5BB9\uFF0C module.exports = xx</p></li><li><p>module\u3001chunk\u3001bundle\u7684\u5173\u7CFB\uFF1A</p><p><img src="https://image-1255652541.cos.ap-shanghai.myqcloud.com/uPic/image-20200518210532171.png" alt="image-20200518210532171"></p></li></ul><p>\u770B\u8FD9\u4E2A\u56FE\u5C31\u5F88\u660E\u767D\u4E86\uFF1A</p><ol><li>\u5BF9\u4E8E\u4E00\u4EFD\u540C\u903B\u8F91\u7684\u4EE3\u7801\uFF0C\u5F53\u6211\u4EEC\u624B\u5199\u4E0B\u4E00\u4E2A\u4E00\u4E2A\u7684\u6587\u4EF6\uFF0C\u5B83\u4EEC\u65E0\u8BBA\u662F ESM \u8FD8\u662F commonJS \u6216\u662F AMD\uFF0C\u4ED6\u4EEC\u90FD\u662F <strong>module</strong> \uFF1B</li><li>\u5F53\u6211\u4EEC\u5199\u7684 module \u6E90\u6587\u4EF6\u4F20\u5230 webpack \u8FDB\u884C\u6253\u5305\u65F6\uFF0Cwebpack \u4F1A\u6839\u636E\u6587\u4EF6\u5F15\u7528\u5173\u7CFB\u751F\u6210 <strong>chunk</strong> \u6587\u4EF6\uFF0Cwebpack \u4F1A\u5BF9\u8FD9\u4E2A chunk \u6587\u4EF6\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF1B</li><li>webpack \u5904\u7406\u597D chunk \u6587\u4EF6\u540E\uFF0C\u6700\u540E\u4F1A\u8F93\u51FA <strong>bundle</strong> \u6587\u4EF6\uFF0C\u8FD9\u4E2A bundle \u6587\u4EF6\u5305\u542B\u4E86\u7ECF\u8FC7\u52A0\u8F7D\u548C\u7F16\u8BD1\u7684\u6700\u7EC8\u6E90\u6587\u4EF6\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u3002</li></ol><p>\u4E00\u822C\u6765\u8BF4\u4E00\u4E2A chunk \u5BF9\u5E94\u4E00\u4E2A bundle\uFF0C\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684 <code>utils.js -&gt; chunks 1 -&gt; utils.bundle.js</code>\uFF1B\u4F46\u4E5F\u6709\u4F8B\u5916\uFF0C\u6BD4\u5982\u8BF4\u4E0A\u56FE\u4E2D\uFF0C\u6211\u5C31\u7528 <code>MiniCssExtractPlugin</code> \u4ECE chunks 0 \u4E2D\u62BD\u79BB\u51FA\u4E86 <code>index.bundle.css</code> \u6587\u4EF6\u3002</p><h3 id="\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A" tabindex="-1">\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A <a class="header-anchor" href="#\u4E00\u53E5\u8BDD\u603B\u7ED3\uFF1A" aria-hidden="true">#</a></h3><p><code>module</code>\uFF0C<code>chunk</code> \u548C <code>bundle</code> \u5176\u5B9E\u5C31\u662F\u540C\u4E00\u4EFD\u903B\u8F91\u4EE3\u7801\u5728\u4E0D\u540C\u8F6C\u6362\u573A\u666F\u4E0B\u7684\u53D6\u4E86\u4E09\u4E2A\u540D\u5B57\uFF1A</p><p>\u6211\u4EEC\u76F4\u63A5\u5199\u51FA\u6765\u7684\u662F module\uFF0Cwebpack \u5904\u7406\u65F6\u662F chunk\uFF0C\u6700\u540E\u751F\u6210\u6D4F\u89C8\u5668\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u7684 bundle\u3002</p>',7),a=[n];function s(d,i,p,r,u,_){return o(),c("div",null,a)}var k=e(l,[["render",s]]);export{h as __pageData,k as default};
