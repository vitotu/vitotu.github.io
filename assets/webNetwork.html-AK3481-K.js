import{_ as n,c as s,o as a,d as t}from"./app-N3b4cOr6.js";const e="/assets/tcp3hand-BK8i5G5H.png",l="/assets/tcp4wave-BTA1LjTr.png",p="/assets/browserCache-Ddv2Renl.png",i={},o=t(`<h1 id="web网络通信知识汇总" tabindex="-1"><a class="header-anchor" href="#web网络通信知识汇总"><span>web网络通信知识汇总</span></a></h1><h2 id="nginx配置和相对url" tabindex="-1"><a class="header-anchor" href="#nginx配置和相对url"><span>nginx配置和相对url</span></a></h2><p>当html中静态资源使用了相对url时，不同的访问方式会产生奇怪的现象<br> 假设html中含有以下资源</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">&lt; img src=&quot;img1.png&quot;/&gt;</span>
<span class="line">&lt; img src=&quot;./img2.png&quot;/&gt;</span>
<span class="line">&lt; img src=&quot;xyz/img3.png&quot;/&gt;</span>
<span class="line">&lt; img src=&quot;/xyz/img4.png&quot;/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、访问地址为 www.abc.com/123 时<br> 图片地址分别会被解析为:<br> www.abc.com/img1.png<br> www.abc.com/img2.png<br> www.abc.com/xyz/img3.png<br> www.abc.com/xyz/img4.png</p><p>2、访问地址为 www.abc.com/123/时<br> 图片地址会被解析为<br> www.abc.com/123/img1.png<br> www.abc.com/123/img2.png<br> www.abc.com/123/xyz/img3.png<br> www.abc.com/xyz/img4.png</p><p>当访问的uri最后不带斜杠时，例如 www.abc.com/123 ，会先查找 123 文件，存在就返回；若存在 123 文件夹，会在末尾加上一个斜杠并产生 301 跳转www.abc.com/123/<br> 当访问的uri最后带斜杠时，例如 www.abc.com/123/，查找 123 下的 index 页面，存在就返回；不存在且未开启自动索引目录选项（autoindex on）则报 403 错误</p><p>但如果nginx块未配置目录进行了转发，则不会出现301跳转，因此可能导致页面资源相对url解析错误，从而导致资源加载失败<br> 此时nginx配置多类似与：</p><div class="language-nginx.conf line-numbers-mode" data-highlighter="prismjs" data-ext="nginx.conf" data-title="nginx.conf"><pre><code><span class="line">server {</span>
<span class="line">  listen 80;</span>
<span class="line">  server_name www.abc.com;</span>
<span class="line">  location /temp {</span>
<span class="line">    proxy_pass http://localhost:8090;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">  listen 8090;</span>
<span class="line">  server_name localhost;</span>
<span class="line">  location /temp {</span>
<span class="line">    alias /**/**/dist;</span>
<span class="line">    index index.html index.htm;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念"><span>基础概念</span></a></h2><p>TCP/IP分层：应用层、传输层、网络层和数据链路层</p><ul><li>应用层：HTTP,FTP,DNS等</li><li>传输层：TCP,UDP</li><li>网络层：IP</li><li>数据链路层：涉及硬件部分，网卡mac地址等</li></ul><p>URI通常的组成为：<code>&lt;协议名&gt;://&lt;认证信息user:pass可选&gt;@&lt;服务器地址:端口号&gt;:&lt;文件路径&gt;?&lt;查询字符串&gt;#&lt;片段标识符&gt;</code></p><p>HTTP有get、post、put(上传文件)、head(类似与get，但只用于确认资源有效性)、delete、options(查询服务器支持uri的方法)、trace(追踪请求转发路径)、connect(使用隧道协议链接代理，与ssl、tsl加密有关)方法</p><p>由于一次TCP通信需要“三次握手，四次挥手”多次请求会造成不必要的时间开销，因此HTTP/1.1默认支持了持久化连接和管线化连接(可持续发送请求,不用等上一请求响应)</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie</span></a></h2><p>由于http是无状态协议,因此引入cookie进行状态管理<br> cookie本质上是一种存储与共享机制</p><h3 id="cookie与身份认证" tabindex="-1"><a class="header-anchor" href="#cookie与身份认证"><span>cookie与身份认证</span></a></h3><p>session和jwt都是基于cookie的web身份认证机制</p><ul><li>session机制：用户登录时，服务端创建session并给浏览器返回sessionId，浏览器将sessionId存储在cookie中并与域名做好关联，下次请求时带上该sessionId，由服务端验证sessionId有效性</li><li>token机制：流程上，token与sessionId类似，但token机制中服务端不用维护类似与session的状态 <ul><li>简单的token由<code>header.payload.sign</code>组成，header中存储解密或签名的算法并用base64编码，payload中用户存储数据、uid、过期时间等数据同样进行base64编码，sign是用<code>header.payload</code>的base64编码和设置的密码进行加密</li><li>验证时服务端利用持有的密码在进行签发过程，验证生成的签名与token中的签名是否相同，并且服务端可通过header和payload拿到用户uid和加密算法</li></ul></li><li>jwt(JSON web token)是基于token的一种解决方案，认证流程与token相同</li></ul><p><a href="https://learnku.com/articles/30051" target="_blank" rel="noopener noreferrer">参考文档</a></p><h2 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文"><span>http报文</span></a></h2><p>http请求报文由报文首部、报文主体构成，以空行分隔</p><ul><li>报文首部，由请求行及首部字段构成 <ul><li>请求行通常格式为<code>&lt;请求方法&gt; &lt;uri或*&gt; &lt;http版本&gt;</code>以空格分隔</li></ul></li><li>通用首部字段 <ul><li>Cache-Control控制缓存机制，指令参数可选，多指令用“,”分隔。常见取值： <ul><li>no-cache 客户端拒绝过期的缓存响应</li><li>no-store 禁止存储请求，相比于no-cache更严格，no-cache可以进行有效验证后进行缓存，但no-store禁止存储响应的任何一个部分</li><li><code>max-age=(秒)</code>(响应的最大age值,必选)，缓存时间超过此值时，需要将请求转发至源服务器</li><li><code>max-stale(=秒)</code>不超过指定时间的缓存即使过期也会被接收，若未指定值则无论过多久会会接收</li><li><code>min-fresh=(秒)</code>要求返回未超过指定时间的缓存</li><li>no-transform 缓存服务器不可更改请求或响应主体的媒体类型</li><li>only-if-cached 要求获取缓存的资源</li><li>cache-extension 扩展指令</li></ul></li><li>Connection字段 <ul><li>控制不再转发给代理的首部字段，添加在Connection字段中的其他首部字段将在经过代理后不再转发给源服务器或客户端</li><li>管理持久连接，http/1.1默认为持久连接即<code>Connection: Keep-Alive</code>,当明确想要断开连接时，设置<code>Connection: close</code>即可</li></ul></li><li>Date表示创建报文的日期和时间</li><li>Pragma是http/1.1之前版本的遗留字段，仅存在于客户端发送的请求中，唯一形式<code>Pragma: no-cache</code>与<code>Cache-Control: no-cache</code>的作用相同，拒绝缓存的内容</li><li>Trailer字段声明在报文主体后记录了哪些首部字段，可在分块传输编码时使用</li><li>Transfer-Encoding定义传输报文时的编码方式，http/1.1中仅对分块传输编码有效</li><li>Upgrade 用于检测是否可以更换通信协议，需配合<code>Connection: Upgrade</code>使用</li><li>Via 用于追踪客户端与服务器之间报文的传送路径，代理服务器会在via中附加服务器信息，可与TRACE方法配合使用</li><li>Waring http/1.1之前称为Retry-After，通知用户与缓存相关的问题警告</li></ul></li><li>请求首部字段 客户端到服务端请求中使用的字段 <ul><li>Accept 可接收的媒体类型及优先级type/subtype形式，多值以逗号分隔，如:text/html、image/png、application/zip等</li><li>Accept-Charset 可接收的字符集及优先级</li><li>Accept-Encoding 可接收的内容编码格式及优先级，取gzip、compress、deflate、identity</li><li>Accept-Language 可接收的自然语言集及优先级，如<code>Accept-Language: zh-cn,zh;q=0.7,en-us,en;q=0.3</code>其中q表示优先级</li><li>Authorization 告知服务器，用户代理(浏览器或app)的认证信息</li><li>Expect 期望出现某种特定的行为，如:<code>Expect: 100-continue</code>状态码100</li><li>From 使用用户代理的电子邮件地址，取值为邮件地址</li><li>Host 当主机ip对应多个域名时，指定请求资源所处的互联网主机名和端口号，该字段是http/1.1规范中唯一一个必须包含在请求头中的字段，可为空</li><li>If-Match、If-Modified-Since、If-None-Match、If-Range、If-Unmodified-Since为条件请求，针对ETag值或日期进行条件判断，符合条件才处理请求</li><li>Max-Forwards 可进行转发的次数，每转发一次减1，值为0时响应</li><li>Proxy-Authorization 与代理服务器之间的认证，与Authorization类似</li><li>Range 只获取指定范围的资源，与断点续传相关</li><li>Referer 表示请求发起方的uri，标准制定时Referrer单词拼写错误，此后将错就错采用Referer</li><li>TE 可接收的传输编码方式级优先级，与Accept-Encoding类似，但用于传输编码</li><li>User-Agent 传递浏览器或客户端等用户代理信息</li></ul></li><li>实体首部字段 用于补充实体部分信息</li></ul><p>http响应报文</p><ul><li>报文首部，由状态行及首部字段构成 <ul><li>状态行的常见格式为<code>&lt;http版本&gt; &lt;状态码&gt; &lt;reason字段,可选&gt;</code>同样以空格分隔</li></ul></li><li>通用首部字段 <ul><li>Cache-Control与请求报文中的作用相同，取值不同： <ul><li>public 表示其他用户也可使用缓存</li><li>private 缓存仅针对特定用户</li><li>no-cache 缓存服务器不可对响应资源进行缓存，该指令指定参数时，如：<code>Cache-Control： no-cache=Location</code>将禁止客户端对资源进行缓存</li><li>no-store 禁止存储响应，与请求报文中的no-store类似</li><li>no-transform 缓存服务器不可更改请求或响应主体的媒体类型</li><li>must-revalidate 要求代理向资源服务器再次确认响应的缓存是否有效，否则返回504，该指令将屏蔽max-stale</li><li>proxy-revalidate 所有的缓存服务器在响应前验证资源有效性</li><li>max-age 缓存服务器将不对资源进行有效性确认,其数值表示缓存保存最长时长，http/1.1版本中该字段将屏蔽Expires</li><li>s-maxage 与max-age类似，但仅适用于公共缓存服务器，将屏蔽Expires和max-age指令</li><li>cache-extension 扩展指令</li></ul></li></ul></li><li>响应首部字段 <ul><li>Accept-Range 可处理的请求范围</li><li>Age 表示源服务器在多久前创建了响应，单位秒</li><li>ETag 资源实体唯一性标识</li><li>Location 重定向的uri，指示新的地址</li><li>Proxy-Authenticate 代理服务器与客户端认证所需的字段，与WWW-Authorization字段类似</li><li>Retry-After 客户端应在指定时间后再次尝试</li><li>Server 展示服务器类型，与User-Agent对应</li><li>Vary 控制缓存，源服务器向代理服务器传达缓存使用方法</li><li>WWW-Authorization 表示http认证访问的方法及所需字段</li></ul></li><li>实体首部字段 用于补充实体部分信息/部分字段也可用于请求报文 <ul><li>Allow 通知客户端，服务端支持的http方法，若不支持http 则返回405 Method Not Allowed</li><li>Content-Encoding 告知客户端，响应实体采用的内容编码方式 gzip等</li><li>Content-Language 响应实体所使用的自然语言</li><li>Content-Length 实体部分的长度，单位字节</li><li>Content-Location 实体部分对应的uri，与Location字段略微不同</li><li>Content-MD5 实体部分的MD5校验值</li><li>Content-Range 返回的实体范围，单位字节</li><li>Content-Type 实体对象媒体类型，取值与Accept类似</li><li>Expires 资源失效日期</li><li>Last-Modified 资源上次修改事件</li></ul></li></ul><p>其他首部字段：</p><ul><li>Set-Cookie 指定客户端要保存的cookie内容</li><li>Cookie 客户端请求中携带的Cookie信息</li></ul><p>此外报文还支持用户自定义字段</p><p>针对缓存代理，首部字段又可分为End-to-end首部和hop-by-hop首部<br> http/1.1中hop-by-hop逐跳首部字段有8个：Connection、Keep-Alive、Proxy-Authenticate、Proxy-Authorization、Trailer、TE、Transfer-Encoding、Upgrade。其他均为end-to-end端到端首部</p><h2 id="响应状态码" tabindex="-1"><a class="header-anchor" href="#响应状态码"><span>响应状态码</span></a></h2><p>类别：</p><table><thead><th>状态码</th><th>类别</th><th>原因短语</th></thead><tbody><tr><td>1**</td><td>信息性状态码</td><td>接收到的请求正在处理</td></tr><tr><td>2**</td><td>成功状态码</td><td>请求正常处理完毕</td></tr><tr><td>3**</td><td>重定向状态码</td><td>需要进行附加操作以完成请求</td></tr><tr><td>4**</td><td>客户端错误状态码</td><td>服务器无法处理请求</td></tr><tr><td>5**</td><td>服务器错误状态码</td><td>服务器处理请求错误</td></tr></tbody></table><p>常见的状态码：</p><ul><li>1** 信息响应 <ul><li>100 continue 客户端可以继续，通常客户端想要上传较大数据量时，提前征询服务器状况是否能够接收，避免不必要的网络开销</li><li>101 Switching Protocols 即将切换协议，用于响应请求头中Upgrade字段</li><li>102 processing 服务器正在处理，但当前没有响应可用</li></ul></li><li>2** 成功状态码 <ul><li>200 OK 请求被正常处理</li><li>201 Created 请求成功，并成功的创建了新资源，通常用于响应post或put请求</li><li>202 Accepted 服务器已接收请求但尚未处理</li><li>204 请求被接收，但返回响应中不含主体，一般用于反馈操作成功、客户端不需要做更新等情况</li><li>206 客户端进行了范围请求(Content-Range指定资源范围)，而服务器成功的执行了</li></ul></li><li>3** 重定向 <ul><li>301 Moved Permanently 永久性重定向，资源已被分配新的uri，以后应该使用现在所指的的uri</li><li>302 Found 临时性重定向</li><li>303 see other 请求对应的资源存在另一个uri，应用get请求定向获取请求的资源</li><li>304 Not Modified 协商缓存，客户端发送了附带条件的请求，但服务端查询发现不符合条件</li><li>307 临时重定向，与302类似，但不会让post请求变为get</li></ul></li><li>4** 客户端错误 <ul><li>400 bad Request 请求中存在语法错误</li><li>401 unauthorized 请求需要有通过http认证的认证信息或认证失败</li><li>403 forbidden 请求资源的访问被服务器拒绝</li><li>404 not found 无法找到请求的资源</li><li>408 Request Timeout 请求超时，客户端没有在服务器预备等待的时间内完成一个请求的发送，随时可重发</li></ul></li><li>5** 服务器错误 <ul><li>500 Internal server error 服务器执行请求时故障</li><li>503 service unavailable 服务器暂时无法处理请求</li><li>504 Gateway timeout 网关超时</li></ul></li></ul><h2 id="服务器类别" tabindex="-1"><a class="header-anchor" href="#服务器类别"><span>服务器类别</span></a></h2><ul><li>web服务器：单台物理主机可对应多台服务器，部署多个服务</li><li>代理服务器：接收客户端的请求，转发给其他服务器。会对资源进行缓存的叫缓存代理，不对报文做任何处理的叫透明代理</li><li>网关：网关能给通信线路上的服务器提供非http协议的服务,提高网络通信的安全性</li><li>隧道：隧道可建立一条客户端到目标服务器的通信线路并使用ssl等加密手段进行加密，提供安全的通信服务</li></ul><h2 id="tcp-udp" tabindex="-1"><a class="header-anchor" href="#tcp-udp"><span>TCP/UDP</span></a></h2><p>tcp/udp通信协议位于&quot;TCP/IP分层模型&quot;中的传输层</p><h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp"><span>tcp</span></a></h3><p>tcp是面向连接的(一对一)、可靠的、基于字节流(无边界、有序)的传输层通信协议 tcp报文头格式中包含序列号(解决网络包乱序问题)，确认应答号(解决丢包问题)、控制位(ack, rst, syn, fin等)</p><p>tcp通过：源地址，源端口，目标地址，目标端口确定一个连接，客户端的连接数受客户端的ip数和端口数限制，服务端则实际受到文件描述符(文件数，每个tcp连接都对应一个文件，而文件inode有上限)和内存限制</p><ul><li><p>三次握手建立连接(如下图)</p><ul><li>第三次握手由于连接建立，可携带数据</li><li>通过三次握手可阻止历史连接的初始化，同步双方初始序列号，避免建立多个冗余的无效连接造成资源浪费</li><li>tcp初始化序列号能够减小历史报文被下一个相同的tcp连接接收的可能性，序列号isn是通过时间和ip端口号hash生成</li><li>超时重传：报文丢失时可能触发超时重传，仅包含ack的报文不会进行重传，其他报文均有可能被发送方进行重传，重传超过一定次数则会关闭连接</li></ul></li></ul><p><img src="`+e+'" alt="tcp3handshake"></p><ul><li>四次挥手断开连接(如下图) <ul><li>主动关闭方为保证被动方正常关闭连接，设置了2msl的time_wait状态，2msl时长表示报文在网络中存活的2倍时长</li><li>被动关闭方(通常是服务端)在接收到fin关闭连接信号后，可能有数据还要处理和发送，因此先回复ack表示受到关闭信号，待处理完成后再发送fin信号表示可以继续关闭连接，这就导致断开连接比建立连接多一个挥手</li><li>挥手超时重传与握手类似，若第三次挥手fin丢失则由服务端进行重传，客户端在等待60秒后仍无信号则会直接关闭连接</li><li>为防止服务端收不到第四次挥手ack，客户端会等待2msl时长用于响应服务端的重传信号</li><li>time_wait状态能够防止历史连接中的数据，被后面相同四元组的连接错误的接收；尽量保证「被动关闭连接」的一方，能被正确的关闭；</li></ul></li></ul><p><img src="'+l+'" alt="tcp4wave"></p><h3 id="udp" tabindex="-1"><a class="header-anchor" href="#udp"><span>udp</span></a></h3><p>相比于tcp，udp无需连接就能直接传输数据，udp具有一对一、一对多、多对多的通信能力，udp不保证可靠交付数据，首部小，仅有8字节，按包发送有边界限制，其分片在ip层完成<br> udp多应用与包总量较小的通信dns、snmp等，音视频等多媒体通信、广播通信</p><p><a href="https://www.cnblogs.com/xiaolincoding/p/12638546.html" target="_blank" rel="noopener noreferrer">参考文档</a></p><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https"><span>https</span></a></h2><p>ssl/tls、ca证书、非对称加密(公钥、私钥) 加密、认证、完整性 TODO：继续完善ssl/tls握手及证书链</p><h2 id="http的发展" tabindex="-1"><a class="header-anchor" href="#http的发展"><span>http的发展</span></a></h2><p>Ajax解决了部分更新问题、Comet解决服务端向客户端推送的问题、SPDY加入了安全性、首部压缩、多路复用、请求优先级、推送、服务器提示等功能，但对一个ip多域名的情况改善有限<br> webSocket是全新的协议，具备推送、减少通信量的特点，其基于http连接<code>Upgrade:websocket</code>字段，更改通信协议到ws</p><h2 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1"><span>http/1.1</span></a></h2><p>http/1.1通过默认开启keep-alive复用已建立的TCP连接(请求头设置Connection:Keep-Alive，且服务端响应中也含此字段，表明此TCP连接可以复用,这个过程在http/1.1中时默认的)<br> 另外服务器通常通过响应头keep-alive：timeout=5, max=1000设置连接保持的最小时长(s)和此连接可发送的最大请求数,不同服务器默认超时时长不同nginx是75秒;<br> timeout时间内没有数据传输，服务器会以75s的间隔发送10次探测报文，若仍然无响应则会关闭连接</p><h2 id="http2" tabindex="-1"><a class="header-anchor" href="#http2"><span>http2</span></a></h2><p>相对于http/1.1，http2有以下几点改进</p><ul><li>头部压缩 <ul><li>索引表</li><li>哈夫曼编码</li></ul></li><li>二进制帧，帧中包含数据流等信息，标识不同的帧所属数据流，以便进行数据拼接</li><li>链路复用，复用同一链路，充分利用了等待响应的链路空载时间 <ul><li>相比于http1.1的管线化，链路复用利用二进制帧的特性可乱序响应，不会存在队头阻塞问题</li></ul></li></ul><h2 id="辨析" tabindex="-1"><a class="header-anchor" href="#辨析"><span>辨析</span></a></h2><h3 id="浏览器的强缓存和协商缓存" tabindex="-1"><a class="header-anchor" href="#浏览器的强缓存和协商缓存"><span>浏览器的强缓存和协商缓存</span></a></h3><p>浏览器有三级缓存机制：</p><ol><li>先检查内存中是否有缓存资源</li><li>然后检测磁盘中是否有缓存资源</li><li>若还没找到则进行网络请求</li><li>加载到的资源缓存到硬盘和内存</li></ol><ul><li>强缓存 <ul><li>如果浏览器命中强缓存，则不需要给服务器发请求，状态码通常为200(实际并未发送请求)</li></ul></li><li>协商缓存 <ul><li>协商缓存最终由服务器来决定是否使用缓存，即客户端与服务器之间存在一次通信。若命中缓存则服务器返回304</li></ul></li></ul><p>请求流程，浏览器在第一次请求后缓存资源，再次请求时，会进行下面两个步骤：</p><ul><li>浏览器获取缓存中的资源，根据缓存的响应header中expires和cache-control字段来判断缓存是否有效(是否命中) <ol><li>Cache-Control字段一般设置为max-age=3600,表示资源在响应报文创建时间开始3600秒内都有效，使用该字段时Expires字段将失效，字段含义<a href="#http%E6%8A%A5%E6%96%87">详见</a></li></ol></li><li>若没有命中强缓存，浏览器将发送请求进行协商缓存，这次请求会带上IF-Modified-Since或IF-None-Match字段，取值分别为第一次请求或上次请求返回的Last-Modified或Etag字段 <ol><li>服务器将IF-None-Match字段与服务端资源的Etag对比，若不同，则表示文件被更新了，返回该资源和新的Etag，若相同则返回304，同时返回新计算好的Etag(服务器需要计算才能得到资源的Etag，不管有没有变化都会返回Etag字段)，该字段的计算通常使用hash算法</li><li>若IF-None-Match/Etag为空或不存在，则判断IF-Modified-Since，若服务器时间超过该字段指示时间，则返回资源，否则返回304表示使用资源未更新，使用缓存</li><li>若两字段都不存在或都不匹配，则缓存资源不可用，所有的返回响应都会进行新的缓存协商</li></ol></li></ul><p>优先级： Cache-Control &gt; expires &gt; Etag &gt; Last-Modified<br> ctrl+f5将导致强缓存和协商缓存都失效，但仅f5刷新，协商缓存仍然有效，而强缓存则不同的浏览器中表现不一<br><img src="'+p+`" alt="avatar"><a href="https://segmentfault.com/a/1190000021661656" target="_blank" rel="noopener noreferrer">参考文档</a></p><h3 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题"><span>跨域问题</span></a></h3><p>此处仅讨论ajax请求跨域，其他跨域问题(cookie,iframe,LocalStorage等跨域)暂不做讨论：<br> 前端调用的后端接口不属于同一个域(域名、端口号或协议不同)，就会产生跨域问题。<br> 浏览器考虑cookie等安全问题设置了同源策略造成了ajax请求跨域限制，发送跨域的XHR请求时，浏览器会发送options预检请求判断服务端是否设置cors允许跨域，若未设置则拦截跨域的xhr请求</p><p>CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing）它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。<br> cors将请求分为两类，同时满足以下两个条件即为简单请求，否则为复杂请求：</p><ul><li>请求方法为:HEAD,POST,GET</li><li>请求头仅包含字段:Accept,Accept-Language,Content-Language,Last-Event-ID,Content-Type(取值限于application/x-www-form-urlencoded、 multipart/form-data、text/plain)</li></ul><p>TODO：复杂请求和简单请求在跨域的不同表现</p><p>常见的跨域错误:</p><ul><li><code>No &#39;Access-Control-Allow-Origin&#39; header ..., code xxx</code><ul><li>code 为404时，复杂ajax请求，发送了options预检请求，但后端未允许options请求</li><li>code 405，后端支持options请求，但安全配置阻止了options</li><li>code 200，后端对options请求头部检查，出现不匹配现象(如：不支持的字段)</li></ul></li><li><code>header contains multiple values &#39;*,*&#39;</code> 后端响应字段中配置重复</li></ul><p>解决方法：</p><ul><li>JSONP 通过<code>&lt;script&gt;</code>标签的src属性实现跨域请求，这种方式只支持get请求，因此不推荐使用</li><li>修改服务端(包括http服务器和应用服务器) <ul><li>被调用方解决，通常是在后端的api应用服务器或http服务器上添加指定字段Access-Control-Allow-Origin,Access-Control-Allow-Methods,Access-Control-Allow-Headers等</li><li>调用方解决，即反向代理，将被调用方的域名代理到调用方域名下</li></ul></li><li>postMessage</li><li>nodejs正向代理</li><li>websocket协议跨域</li><li>手写JSONP实现</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 在html中添加如下代码用于请求端</span></span>
<span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://127.0.0.1:3007/</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DemoJSONP</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">normal</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&quot;get&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;normal request data&#39;</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">jsp</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> cbFnName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">JSONP_PADDING_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?callback=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cbFnName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">[</span>cbFnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;jsonp data&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 普通请求与jsp对比</span></span>
<span class="line">    DemoJSONP<span class="token punctuation">.</span><span class="token function">normal</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    DemoJSONP<span class="token punctuation">.</span><span class="token function">jsp</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">DemoJSONP<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 创建service.js文件用于服务端</span></span>
<span class="line"><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用了koa框架，需要安装koa</span></span>
<span class="line"><span class="token keyword">const</span> handleJsonP <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./jsonp.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3007</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;request from :&#39;</span><span class="token punctuation">,</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>header<span class="token punctuation">.</span>referer <span class="token operator">||</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>header<span class="token punctuation">.</span>origin<span class="token punctuation">)</span></span>
<span class="line">  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token function">handleJsonP</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">koa working on http://127.0.0.1:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 同目录下创建jsonp.js用于处理jsonp和普通请求</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>query<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> body <span class="token operator">||</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;jsonp&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;script&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;normal request&#39;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>callback<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> str<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// node service.js开发服务端，浏览器打开html验证jsonp跨域</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps1:根据同源策略，不同域不可共享cookie，但实际上浏览器实现是同一个ip下的多个端口下的cookie是共享的<br> ps2:ajax请求基于XMLHttpRequest(XHR)，获取数据后无需立即展示，不会导致页面刷新；而普通http请求则会导致页面刷新</p><h3 id="cdn原理和优缺点" tabindex="-1"><a class="header-anchor" href="#cdn原理和优缺点"><span>CDN原理和优缺点</span></a></h3><p>内容分发网络Content Delivery Network通过增加一层缓存层，将网站内容发布到离用户较近的边缘节点，是的用户可以就近取得所需内容；<br> 因此具有了优点：</p><ol><li>提升用户访问响应速度</li><li>跨运营商网络加速</li><li>分散了服务器及网络压力</li><li>提升了抗网络攻击风险能力</li></ol><p>缺点：</p><ol><li>实时性差</li><li>缓存可能同步不及时</li></ol><h3 id="dns解析" tabindex="-1"><a class="header-anchor" href="#dns解析"><span>DNS解析</span></a></h3><p>DNS属于应用层，基于UDP协议，用于将域名转换为ip地址<br> hosts文件：本机hosts解析配置<br> 域名：mail(三级域名).ccav(二级域名).com(顶级域名)<br> 域名服务器：</p><ul><li>本地域名服务器</li><li>根域名服务器</li><li>顶级域名服务器</li><li>权限域名服务器</li></ul><p>从host到本地域名服务器是由客户端进行递归查询<br> 而本地域名服务器到根域名服务器是由本地域名服务器进行迭代查询<br> TODO： <a href="https://segmentfault.com/a/1190000023694985" target="_blank" rel="noopener noreferrer">参考文档</a></p>`,86),c=[o];function u(r,d){return a(),s("div",null,c)}const h=n(i,[["render",u],["__file","webNetwork.html.vue"]]),m=JSON.parse('{"path":"/network/webNetwork.html","title":"web网络通信知识汇总","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"nginx配置和相对url","slug":"nginx配置和相对url","link":"#nginx配置和相对url","children":[]},{"level":2,"title":"基础概念","slug":"基础概念","link":"#基础概念","children":[]},{"level":2,"title":"cookie","slug":"cookie","link":"#cookie","children":[{"level":3,"title":"cookie与身份认证","slug":"cookie与身份认证","link":"#cookie与身份认证","children":[]}]},{"level":2,"title":"http报文","slug":"http报文","link":"#http报文","children":[]},{"level":2,"title":"响应状态码","slug":"响应状态码","link":"#响应状态码","children":[]},{"level":2,"title":"服务器类别","slug":"服务器类别","link":"#服务器类别","children":[]},{"level":2,"title":"TCP/UDP","slug":"tcp-udp","link":"#tcp-udp","children":[{"level":3,"title":"tcp","slug":"tcp","link":"#tcp","children":[]},{"level":3,"title":"udp","slug":"udp","link":"#udp","children":[]}]},{"level":2,"title":"https","slug":"https","link":"#https","children":[]},{"level":2,"title":"http的发展","slug":"http的发展","link":"#http的发展","children":[]},{"level":2,"title":"http/1.1","slug":"http-1-1","link":"#http-1-1","children":[]},{"level":2,"title":"http2","slug":"http2","link":"#http2","children":[]},{"level":2,"title":"辨析","slug":"辨析","link":"#辨析","children":[{"level":3,"title":"浏览器的强缓存和协商缓存","slug":"浏览器的强缓存和协商缓存","link":"#浏览器的强缓存和协商缓存","children":[]},{"level":3,"title":"跨域问题","slug":"跨域问题","link":"#跨域问题","children":[]},{"level":3,"title":"CDN原理和优缺点","slug":"cdn原理和优缺点","link":"#cdn原理和优缺点","children":[]},{"level":3,"title":"DNS解析","slug":"dns解析","link":"#dns解析","children":[]}]}],"git":{"updatedTime":1677680742000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":8}]},"filePathRelative":"network/webNetwork.md"}');export{h as comp,m as data};
