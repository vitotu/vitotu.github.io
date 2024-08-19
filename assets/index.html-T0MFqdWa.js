import{_ as t,c as e,o as s,d as r}from"./app-N3b4cOr6.js";const d={},a=r('<h1 id="nodejs概述" tabindex="-1"><a class="header-anchor" href="#nodejs概述"><span>nodejs概述</span></a></h1><p>nodejs 是一种脚本程序，基于node环境运行js脚本而无需浏览器<br> nodejs最常使用的场景还是服务端程序，通常为web应用程序，或数据服务中间层，也可用于读取数据库等后端数据服务</p><p>作为web应用程序时，nodejs常见的应用框架有</p><p>express、koa、egg、nest</p><p>他们之间的区别是：</p><p>express最早出现，现在仍然很流行的一套nodejs web框架</p><p>koa相比于Express</p><p>中间件使用洋葱模型，让中间件代码根据 next 方法分隔有两次执行时机 几乎不再内置任何中间件，把控制权和复杂度交给了开发者 Koa 1 通过 generator、koa 2 通过 async/await 语法，让 web 中高频出现的异步调用书写简单</p><p>由于koa不内置中间件，web应用程序的session，视图模板，路由等常用中间件需要在官方的<a href="https://github.com/koajs/koa/wiki#middleware" target="_blank" rel="noopener noreferrer">Middleware</a>中寻找，为了规范搭配，提供统一的默认配置、部署方案、技术选型、代码风格等推出了基于社区最佳事件的整合egg.js<br> egg是一个生成web框架的框架，目标用户是团队架构师，约定了一套优先配置实现，其底层基于koa2，中间件机制与koa一直，egg也可以被当做web框架直接使用</p><p>由于ts的推出，nest框架基于Express上封装，并增加了TS特性支持，Midway则是基于egg封装增加了TS的特性支持</p><p>TODO: <a href="https://juejin.cn/post/7218739623245774885" target="_blank" rel="noopener noreferrer">Next, Nuxt ,Nest, Nust 傻傻分不清</a></p><h2 id="与ssr服务端渲染的联系" tabindex="-1"><a class="header-anchor" href="#与ssr服务端渲染的联系"><span>与ssr服务端渲染的联系</span></a></h2><p>CSR(Client Side Render)即对应单页应用SPA；SSR(Server Side Render)即服务端渲染；</p><ul><li>早期SSR：</li></ul><p>在web技术早期，仅强调内容本身，而不强调与用户之间的高强度交互，此时期的网站均采用服务端渲染技术来实现<br> 当时流行的技术是PHP/JSP等，客户端(通常是浏览器)发起请求时，服务端通过rest api请求数据，将模板与数据整合为html字符串，直出html返回给客户端，当客户端刷新时，再次重复该流程</p><ul><li>CSR：</li></ul><p>由于AJAX的出现，催生了web2.0，产生了大量的SPA(Single Page Application)，与SSR不同，CSR是浏览器发起请求获取到html后，根据html中的“资源标签”加载css、js等静态资源，完成模板与数据的融合，并渲染出最终的HTML页面；<br> 页面中的业务数据以及后续刷新页面刷新时，仅需要发起AJAX请求API获取数据并部分更新页面即可</p><ul><li>同构渲染：</li></ul><p>现代框架Vue、React等，提到的SSR多指同构渲染，同构渲染整合了SSR和CSR的优点，,服务器通过 API 请求 的数据会被序列化为字符串,并拼接到静态的 HTML 字符串中，为后续客户端激活做准备<br> 浏览器收到html后请求获取css、js等资源，js执行过程进行激活操作，从html页面中提取服务端序列化后的初始数据，用于初始化整个应用程序<br> 此后，用户的交互将会按照CSR的流程来执行，若刷新了页面则重复上述步骤</p><p>三种方式的优劣对比：</p><table><thead><tr><th></th><th>ssr</th><th>csr</th><th>同构渲染</th></tr></thead><tbody><tr><td>SEO</td><td>友好</td><td>不友好</td><td>友好</td></tr><tr><td>白屏问题</td><td>无</td><td>有</td><td>无</td></tr><tr><td>占用服务端资源</td><td>多</td><td>少</td><td>中</td></tr><tr><td>用户体验</td><td>差</td><td>好</td><td>好</td></tr></tbody></table>',21),n=[a];function o(p,l){return s(),e("div",null,n)}const h=t(d,[["render",o],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/nodejs/","title":"nodejs概述","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"与ssr服务端渲染的联系","slug":"与ssr服务端渲染的联系","link":"#与ssr服务端渲染的联系","children":[]}],"git":{"updatedTime":1682259883000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":6}]},"filePathRelative":"nodejs/README.md"}');export{h as comp,c as data};
