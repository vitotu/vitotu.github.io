import{_ as n,c as r,a as l,b as t,w as a,e as i,d as s,r as o,o as u}from"./app-BX0dM8IT.js";const h={},c=s('<h1 id="浏览器原理相关知识整理" tabindex="-1"><a class="header-anchor" href="#浏览器原理相关知识整理"><span>浏览器原理相关知识整理</span></a></h1><h2 id="详解输入url到渲染出页面全过程" tabindex="-1"><a class="header-anchor" href="#详解输入url到渲染出页面全过程"><span>详解输入url到渲染出页面全过程</span></a></h2><p>简单来讲，从输入url到渲染浏览器将经历以下过程：</p><ol><li>处理用户输入</li><li>URL请求流程</li><li>准备渲染阶段</li><li>提交文档</li><li>渲染阶段</li></ol><h3 id="处理输入" tabindex="-1"><a class="header-anchor" href="#处理输入"><span>处理输入</span></a></h3><ul><li>浏览器进程接收用户输入，进行url解析，判断url是否符合规则，不符合则判定为搜索内容，调用搜索引擎进行搜索；</li><li>用户在地址栏输入内容回车后，在即将离开当前页面时，当前页面还有一次执行beforeunload的机会，用于执行数据清理，询问用户等操作，此过程可取消导航到新页面并退出流程</li><li>浏览器进程将url通过IPC(进程间通信)转发给网络进程，标签页图标会进入加载状态，等到新的url返回后，页面内容才会被替换</li></ul><h3 id="url请求流程" tabindex="-1"><a class="header-anchor" href="#url请求流程"><span>URL请求流程</span></a></h3><p>网络进程拿到url后进入url请求流程</p><ol><li>检查浏览器缓存，若命中且有效，则直接返回数据并退出流程</li><li>DNS解析</li><li>建立TCP连接，和TLS连接</li><li>发送http请求</li><li>服务器返回响应数据</li><li>根据响应码(成功、重定向、错误等情况)和响应头中的content-type处理响应数据，若响应为content-type:text/html，浏览器进程会让当前页面执行清理操作visibilitychange, beforeunload事件，清理结束后进入下一步流程</li></ol><h3 id="准备渲染阶段" tabindex="-1"><a class="header-anchor" href="#准备渲染阶段"><span>准备渲染阶段</span></a></h3><ul><li>chrome分配渲染进程 <ul><li>通常情况下每个新建页面分配一个渲染进程</li><li>但从一个页面打开了另一个页面，且两页面同属于一个站点(协议和根域名相同)时会复用父页面进程</li></ul></li></ul><h3 id="提交文档阶段" tabindex="-1"><a class="header-anchor" href="#提交文档阶段"><span>提交文档阶段</span></a></h3><p>浏览器进程将网络进程返回的html文档数据提交给渲染进程的过程叫提交文档阶段</p><ul><li>浏览器进程收到网络进程的响应头数据后，向渲染进程发起“提交文档”消息</li><li>渲染进程收到消息后与网络进程建立管道连接，边传输数据边解析HTML，构建DOM树</li><li>文档数据传输完成后渲染进程返回“确认提交消息”给浏览器进程</li><li>浏览器收到消息后更新浏览器界面状态：安全状态、地址栏、前进后退历史状态，并更新web页面</li></ul><h3 id="渲染阶段" tabindex="-1"><a class="header-anchor" href="#渲染阶段"><span>渲染阶段</span></a></h3><p>此阶段中渲染进程开始页面解析和子资源加载，页面生成后渲染进程发送消息给浏览器进程停止图标上的加载动画</p><ul><li>构建DOM树 <ul><li>便于浏览器理解与渲染；给js提供接口；过滤不安全的内容；</li><li>通过渲染引擎的html解析器模块，进行流式的AST解析生成</li></ul></li><li>构建CSSOM树 <ul><li>CSSOM对应DOM中的document.styleSheets</li><li>过程中大体与DOM解析类似，包含link,style标签以及元素的style属性，将非标准值(em,blue等)标准化(px,<code>rgb()</code>)</li></ul></li><li>结合DOM树和CSSOM树生成布局树 <ul><li>遍历DOM树中所有可见节点，并添加到布局中，计算节点的坐标位置</li></ul></li><li>分层 <ul><li>基于布局树为<a href="https://developer.mozilla.org/zh-CN/docs/web/css/css_positioning/understanding_z_index/the_stacking_context" target="_blank" rel="noopener noreferrer">层叠上下文</a>及需要裁剪的地方(overflow:auto需要滚动)创建图层树</li><li>图层树以内存管理为代价提升了DOM更新的性能，不宜过度使用</li></ul></li><li>图层绘制 <ul><li>渲染引擎将图层拆分为小的绘制指令，生成待绘制指令列表</li></ul></li><li>合成(切分图块和栅格化) <ul><li>主线程将绘制列表交给合成线程；为避免不可见部分的渲染开销，合成线程将图层切成小图块(tile)</li><li>合成线程将视口附近的的图块交由栅格化线程生成位图</li><li>通常栅格化过程由gpu加速，生成位图保存在gpu内存中</li><li>所有图块栅格化完成后，合成块生成&#39;drawQuad&#39;命令，通知浏览器进程</li></ul></li><li>显示 <ul><li>浏览器进程中viz组件收到命令后将页面绘制到内存中并显示在显示器上</li></ul></li></ul>',17),d=l("h2",{id:"首次渲染与页面阻塞",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#首次渲染与页面阻塞"},[l("span",null,"首次渲染与页面阻塞")])],-1),p=l("ul",null,[l("li",null,"预加载扫描器会在后台预先请求资源，不需要等解析到外链CSS、JavaScript文件所在行才去请求资源"),l("li",null,"外链CSS文件的加载，不会阻塞其后HTML内容的解析，但会阻塞其后结构的渲染，之前的不受影响"),l("li",null,"外链CSS文件的加载，会阻塞其后外链JavaScript文件的执行，从而间接阻塞HTML解析"),l("li",null,"外链js文件的加载和执行都会阻塞后续html解析，其之前的结构会进行首次渲染"),l("li",null,"外链js文件加载或被css阻塞会暂存并中断渲染task，继续执行event loop，并渲染之前未被阻塞的不完整的内容，若仅仅是执行阻塞，则不会中断渲染task，等待脚本执行完成后再渲染")],-1),b=s('<p>html文档加载完毕，且内联和外链js加载执行完毕后触发DOMContentLoaded事件<br> html中的资源以及js代码中异步加载的静态资源加载完成后触发load事件</p><p>一些优化措施：</p><ul><li>预解析DNS:<code>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;https://blog.windstone.cc&quot;&gt;</code></li><li>预建立 TCP 连接:<code>&lt;link rel=&quot;preconnect&quot; href=&quot;https://blog.windstone.cc&quot;&gt;</code></li></ul><h2 id="浏览器多进程和js单线程" tabindex="-1"><a class="header-anchor" href="#浏览器多进程和js单线程"><span>浏览器多进程和js单线程</span></a></h2><p>现代浏览器是多进程的，大多数单个tab页面相当于一个独立的浏览器进程<br> 浏览器主要包含的进程有：</p><ul><li>浏览器主进程：仅有一个负责协调，页面管理，创建或销毁其他进程</li><li>渲染进程：将资源转换为可交互的网页，每个tab一个，运行在沙箱模式下，包含如下线程 <ul><li>预解析线程(预加载扫描)</li><li>页面渲染(GUI线程，Blink等)，repaint或reflow等时机执行</li><li>脚本执行线程(js引擎，V8等)，等待任务队列并执行，与渲染线程互斥执行</li><li>事件处理，事件触发线程，控制事件循环，事件触发时将回调放入js引擎任务队列队尾</li><li>定时计时的定时器线程，setTimeout和setInterval所在线程，负责计时</li><li>异步请求（异步 HTTP 请求线程）：http请求连接后新开的线程，当状态变更时将回调放入js引擎任务队列中</li><li>IO 线程: 负责与其他进程 IPC 进行通信，比如接收用户输入事件、网络事件、设备相关等事件</li><li>光栅化线程（池）</li><li>合成线程</li></ul></li><li>网络进程：负责网络资源加载，所有tab共有</li><li>GPU进程：最多一个，用于3D绘制。所有tab共有</li><li>插件进程：负责插件运行，每种类型的插件对应一个</li></ul><p>web worker能开辟一个js执行子线程，并通过postMessage API与js引擎线程通信</p>',7);function m(f,_){const e=o("RouteLink");return u(),r("div",null,[c,l("p",null,[t(e,{to:"/js/js%E8%BF%9B%E9%98%B6.html##%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84"},{default:a(()=>[i("关联话题-浏览器的关键渲染路径")]),_:1})]),d,p,l("p",null,[i("因为历史原因js经常在执行中使用document.write导致无法安全的渲染节点，因此浏览器选择让js阻塞，现代浏览器给script标签增加了async或defer属性提供非阻塞支持 async和defer的特性见"),t(e,{to:"/html/html5.html#script%E6%A0%87%E7%AD%BE%E7%9A%84async%E5%92%8Cdefer%E7%9A%84%E5%8C%BA%E5%88%AB"},{default:a(()=>[i("文档")]),_:1})]),b])}const E=n(h,[["render",m],["__file","browser.html.vue"]]),v=JSON.parse('{"path":"/browser/browser.html","title":"浏览器原理相关知识整理","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"详解输入url到渲染出页面全过程","slug":"详解输入url到渲染出页面全过程","link":"#详解输入url到渲染出页面全过程","children":[{"level":3,"title":"处理输入","slug":"处理输入","link":"#处理输入","children":[]},{"level":3,"title":"URL请求流程","slug":"url请求流程","link":"#url请求流程","children":[]},{"level":3,"title":"准备渲染阶段","slug":"准备渲染阶段","link":"#准备渲染阶段","children":[]},{"level":3,"title":"提交文档阶段","slug":"提交文档阶段","link":"#提交文档阶段","children":[]},{"level":3,"title":"渲染阶段","slug":"渲染阶段","link":"#渲染阶段","children":[]}]},{"level":2,"title":"首次渲染与页面阻塞","slug":"首次渲染与页面阻塞","link":"#首次渲染与页面阻塞","children":[]},{"level":2,"title":"浏览器多进程和js单线程","slug":"浏览器多进程和js单线程","link":"#浏览器多进程和js单线程","children":[]}],"git":{"updatedTime":1673188408000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":3}]},"filePathRelative":"browser/browser.md"}');export{E as comp,v as data};
