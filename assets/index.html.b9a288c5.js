import{_ as n,r as a,o,c as l,a as t,b as e,d as s,e as r}from"./app.ae75801b.js";const i={},p=r('<h1 id="nodejs\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#nodejs\u6982\u8FF0" aria-hidden="true">#</a> nodejs\u6982\u8FF0</h1><p>nodejs \u662F\u4E00\u79CD\u811A\u672C\u7A0B\u5E8F\uFF0C\u57FA\u4E8Enode\u73AF\u5883\u8FD0\u884Cjs\u811A\u672C\u800C\u65E0\u9700\u6D4F\u89C8\u5668<br> nodejs\u6700\u5E38\u4F7F\u7528\u7684\u573A\u666F\u8FD8\u662F\u670D\u52A1\u7AEF\u7A0B\u5E8F\uFF0C\u901A\u5E38\u4E3Aweb\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6216\u6570\u636E\u670D\u52A1\u4E2D\u95F4\u5C42\uFF0C\u4E5F\u53EF\u7528\u4E8E\u8BFB\u53D6\u6570\u636E\u5E93\u7B49\u540E\u7AEF\u6570\u636E\u670D\u52A1</p><p>\u4F5C\u4E3Aweb\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0Cnodejs\u5E38\u89C1\u7684\u5E94\u7528\u6846\u67B6\u6709</p><p>express\u3001koa\u3001egg\u3001nest</p><p>\u4ED6\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u662F\uFF1A</p><p>express\u6700\u65E9\u51FA\u73B0\uFF0C\u73B0\u5728\u4ECD\u7136\u5F88\u6D41\u884C\u7684\u4E00\u5957nodejs web\u6846\u67B6</p><p>koa\u76F8\u6BD4\u4E8EExpress</p><p>\u4E2D\u95F4\u4EF6\u4F7F\u7528\u6D0B\u8471\u6A21\u578B\uFF0C\u8BA9\u4E2D\u95F4\u4EF6\u4EE3\u7801\u6839\u636E next \u65B9\u6CD5\u5206\u9694\u6709\u4E24\u6B21\u6267\u884C\u65F6\u673A \u51E0\u4E4E\u4E0D\u518D\u5185\u7F6E\u4EFB\u4F55\u4E2D\u95F4\u4EF6\uFF0C\u628A\u63A7\u5236\u6743\u548C\u590D\u6742\u5EA6\u4EA4\u7ED9\u4E86\u5F00\u53D1\u8005 Koa 1 \u901A\u8FC7 generator\u3001koa 2 \u901A\u8FC7 async/await \u8BED\u6CD5\uFF0C\u8BA9 web \u4E2D\u9AD8\u9891\u51FA\u73B0\u7684\u5F02\u6B65\u8C03\u7528\u4E66\u5199\u7B80\u5355</p>',8),h={href:"https://github.com/koajs/koa/wiki#middleware",target:"_blank",rel:"noopener noreferrer"},c=t("br",null,null,-1),_=t("p",null,"\u7531\u4E8Ets\u7684\u63A8\u51FA\uFF0Cnest\u6846\u67B6\u57FA\u4E8EExpress\u4E0A\u5C01\u88C5\uFF0C\u5E76\u589E\u52A0\u4E86TS\u7279\u6027\u652F\u6301\uFF0CMidway\u5219\u662F\u57FA\u4E8Eegg\u5C01\u88C5\u589E\u52A0\u4E86TS\u7684\u7279\u6027\u652F\u6301",-1),S={href:"https://juejin.cn/post/7218739623245774885",target:"_blank",rel:"noopener noreferrer"},b=r('<h2 id="\u4E0Essr\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u8054\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4E0Essr\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u8054\u7CFB" aria-hidden="true">#</a> \u4E0Essr\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u8054\u7CFB</h2><p>CSR(Client Side Render)\u5373\u5BF9\u5E94\u5355\u9875\u5E94\u7528SPA\uFF1BSSR(Server Side Render)\u5373\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1B</p><ul><li>\u65E9\u671FSSR\uFF1A</li></ul><p>\u5728web\u6280\u672F\u65E9\u671F\uFF0C\u4EC5\u5F3A\u8C03\u5185\u5BB9\u672C\u8EAB\uFF0C\u800C\u4E0D\u5F3A\u8C03\u4E0E\u7528\u6237\u4E4B\u95F4\u7684\u9AD8\u5F3A\u5EA6\u4EA4\u4E92\uFF0C\u6B64\u65F6\u671F\u7684\u7F51\u7AD9\u5747\u91C7\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\u6280\u672F\u6765\u5B9E\u73B0<br> \u5F53\u65F6\u6D41\u884C\u7684\u6280\u672F\u662FPHP/JSP\u7B49\uFF0C\u5BA2\u6237\u7AEF(\u901A\u5E38\u662F\u6D4F\u89C8\u5668)\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7rest api\u8BF7\u6C42\u6570\u636E\uFF0C\u5C06\u6A21\u677F\u4E0E\u6570\u636E\u6574\u5408\u4E3Ahtml\u5B57\u7B26\u4E32\uFF0C\u76F4\u51FAhtml\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5F53\u5BA2\u6237\u7AEF\u5237\u65B0\u65F6\uFF0C\u518D\u6B21\u91CD\u590D\u8BE5\u6D41\u7A0B</p><ul><li>CSR\uFF1A</li></ul><p>\u7531\u4E8EAJAX\u7684\u51FA\u73B0\uFF0C\u50AC\u751F\u4E86web2.0\uFF0C\u4EA7\u751F\u4E86\u5927\u91CF\u7684SPA(Single Page Application)\uFF0C\u4E0ESSR\u4E0D\u540C\uFF0CCSR\u662F\u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\u83B7\u53D6\u5230html\u540E\uFF0C\u6839\u636Ehtml\u4E2D\u7684\u201C\u8D44\u6E90\u6807\u7B7E\u201D\u52A0\u8F7Dcss\u3001js\u7B49\u9759\u6001\u8D44\u6E90\uFF0C\u5B8C\u6210\u6A21\u677F\u4E0E\u6570\u636E\u7684\u878D\u5408\uFF0C\u5E76\u6E32\u67D3\u51FA\u6700\u7EC8\u7684HTML\u9875\u9762\uFF1B<br> \u9875\u9762\u4E2D\u7684\u4E1A\u52A1\u6570\u636E\u4EE5\u53CA\u540E\u7EED\u5237\u65B0\u9875\u9762\u5237\u65B0\u65F6\uFF0C\u4EC5\u9700\u8981\u53D1\u8D77AJAX\u8BF7\u6C42API\u83B7\u53D6\u6570\u636E\u5E76\u90E8\u5206\u66F4\u65B0\u9875\u9762\u5373\u53EF</p><ul><li>\u540C\u6784\u6E32\u67D3\uFF1A</li></ul><p>\u73B0\u4EE3\u6846\u67B6Vue\u3001React\u7B49\uFF0C\u63D0\u5230\u7684SSR\u591A\u6307\u540C\u6784\u6E32\u67D3\uFF0C\u540C\u6784\u6E32\u67D3\u6574\u5408\u4E86SSR\u548CCSR\u7684\u4F18\u70B9\uFF0C,\u670D\u52A1\u5668\u901A\u8FC7 API \u8BF7\u6C42 \u7684\u6570\u636E\u4F1A\u88AB\u5E8F\u5217\u5316\u4E3A\u5B57\u7B26\u4E32,\u5E76\u62FC\u63A5\u5230\u9759\u6001\u7684 HTML \u5B57\u7B26\u4E32\u4E2D\uFF0C\u4E3A\u540E\u7EED\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u505A\u51C6\u5907<br> \u6D4F\u89C8\u5668\u6536\u5230html\u540E\u8BF7\u6C42\u83B7\u53D6css\u3001js\u7B49\u8D44\u6E90\uFF0Cjs\u6267\u884C\u8FC7\u7A0B\u8FDB\u884C\u6FC0\u6D3B\u64CD\u4F5C\uFF0C\u4ECEhtml\u9875\u9762\u4E2D\u63D0\u53D6\u670D\u52A1\u7AEF\u5E8F\u5217\u5316\u540E\u7684\u521D\u59CB\u6570\u636E\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F<br> \u6B64\u540E\uFF0C\u7528\u6237\u7684\u4EA4\u4E92\u5C06\u4F1A\u6309\u7167CSR\u7684\u6D41\u7A0B\u6765\u6267\u884C\uFF0C\u82E5\u5237\u65B0\u4E86\u9875\u9762\u5219\u91CD\u590D\u4E0A\u8FF0\u6B65\u9AA4</p><p>\u4E09\u79CD\u65B9\u5F0F\u7684\u4F18\u52A3\u5BF9\u6BD4\uFF1A</p><table><thead><tr><th></th><th>ssr</th><th>csr</th><th>\u540C\u6784\u6E32\u67D3</th></tr></thead><tbody><tr><td>SEO</td><td>\u53CB\u597D</td><td>\u4E0D\u53CB\u597D</td><td>\u53CB\u597D</td></tr><tr><td>\u767D\u5C4F\u95EE\u9898</td><td>\u65E0</td><td>\u6709</td><td>\u65E0</td></tr><tr><td>\u5360\u7528\u670D\u52A1\u7AEF\u8D44\u6E90</td><td>\u591A</td><td>\u5C11</td><td>\u4E2D</td></tr><tr><td>\u7528\u6237\u4F53\u9A8C</td><td>\u5DEE</td><td>\u597D</td><td>\u597D</td></tr></tbody></table>',10);function u(x,g){const d=a("ExternalLinkIcon");return o(),l("div",null,[p,t("p",null,[e("\u7531\u4E8Ekoa\u4E0D\u5185\u7F6E\u4E2D\u95F4\u4EF6\uFF0Cweb\u5E94\u7528\u7A0B\u5E8F\u7684session\uFF0C\u89C6\u56FE\u6A21\u677F\uFF0C\u8DEF\u7531\u7B49\u5E38\u7528\u4E2D\u95F4\u4EF6\u9700\u8981\u5728\u5B98\u65B9\u7684"),t("a",h,[e("Middleware"),s(d)]),e("\u4E2D\u5BFB\u627E\uFF0C\u4E3A\u4E86\u89C4\u8303\u642D\u914D\uFF0C\u63D0\u4F9B\u7EDF\u4E00\u7684\u9ED8\u8BA4\u914D\u7F6E\u3001\u90E8\u7F72\u65B9\u6848\u3001\u6280\u672F\u9009\u578B\u3001\u4EE3\u7801\u98CE\u683C\u7B49\u63A8\u51FA\u4E86\u57FA\u4E8E\u793E\u533A\u6700\u4F73\u4E8B\u4EF6\u7684\u6574\u5408egg.js"),c,e(" egg\u662F\u4E00\u4E2A\u751F\u6210web\u6846\u67B6\u7684\u6846\u67B6\uFF0C\u76EE\u6807\u7528\u6237\u662F\u56E2\u961F\u67B6\u6784\u5E08\uFF0C\u7EA6\u5B9A\u4E86\u4E00\u5957\u4F18\u5148\u914D\u7F6E\u5B9E\u73B0\uFF0C\u5176\u5E95\u5C42\u57FA\u4E8Ekoa2\uFF0C\u4E2D\u95F4\u4EF6\u673A\u5236\u4E0Ekoa\u4E00\u76F4\uFF0Cegg\u4E5F\u53EF\u4EE5\u88AB\u5F53\u505Aweb\u6846\u67B6\u76F4\u63A5\u4F7F\u7528")]),_,t("p",null,[e("TODO: "),t("a",S,[e("Next, Nuxt ,Nest, Nust \u50BB\u50BB\u5206\u4E0D\u6E05"),s(d)])]),b])}const j=n(i,[["render",u],["__file","index.html.vue"]]);export{j as default};
