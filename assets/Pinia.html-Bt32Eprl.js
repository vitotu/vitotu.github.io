import{_ as n,c as s,o as a,d as t}from"./app-N3b4cOr6.js";const e={},p=t(`<h1 id="pinia状态存储库" tabindex="-1"><a class="header-anchor" href="#pinia状态存储库"><span>Pinia状态存储库</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Pinia是vue的专属状态存储库，与vuex处于同一生态位，但pinia同时支持组合式api和选项式api，同时兼容vue2和vue3两个版本</p><p>与vuex相比,Pinia删除了mutation，扁平化结构无需嵌套，无需包装器来支持ts</p><p>在vue3中：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue2中</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia<span class="token punctuation">,</span> PiniaVuePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PiniaVuePlugin<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  pinia<span class="token punctuation">,</span> <span class="token comment">// 请注意，同一个\`pinia&#39;实例，可以在同一个页面的多个 Vue 应用中使用。 </span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store"><span>Store</span></a></h2><ul><li>定义Store</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Store由defineStore定义， 其返回值命名应当以use开头，且已Store结尾</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个参数为id</span></span>
<span class="line">  <span class="token comment">// 第二个参数可以是option或setup函数类型</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token function-variable function">double</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>state<span class="token punctuation">.</span>count<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useSetUpStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;sub&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// setup函数类型</span></span>
<span class="line">  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// state</span></span>
<span class="line">  <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>count<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// getters</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">}</span> <span class="token comment">// actions</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span>count<span class="token punctuation">,</span> double<span class="token punctuation">,</span> increment <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用Store</li></ul><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> <span class="token comment">// vue3中</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用后store才会被创建</span></span>
<span class="line"><span class="token comment">// store 是一个用 reactive 包装的对象,可使用storeToRefs()函数解构出其属性且保留了响应式</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state"><span>state</span></a></h2><p>state与组件中的data类似，定义成一个返回初始状态的函数；<br> 使用store实例即可直接访问和修改state：<code>store.count++</code>;通过<code>store.$reset()</code>重置state为初始值</p><ul><li>辅助函数</li></ul><p>在选项式api中同样有<code>mapState()</code>辅助函数可以映射state为计算属性</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span> mapWritableState<span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;pinia<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stores/counter&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span>useCounterStore<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span>useCounterStore<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">myOwnName</span><span class="token operator">:</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">double</span><span class="token operator">:</span> <span class="token parameter">store</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>count<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 可以通过函数获取访问权</span></span>
<span class="line">      <span class="token function">calNum</span><span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 可访问this，获取之前定义过的data或computed</span></span>
<span class="line">        <span class="token keyword">return</span> store<span class="token punctuation">.</span>someGetter <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>double<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapWritableState</span><span class="token punctuation">(</span>useCounterStore<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 此方法的映射可直接修改state</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$patch</code></li></ul><p>除了直接修改state外，给store.$patch()传递一个对象或函数可以可以用于同时修改多个state属性<br> 不可对<code>store.$state</code>完全替换(整体赋值)，只能通过<code>$patch</code>进行更新</p><ul><li><code>$subscribe</code></li></ul><p>通过<code>store.$subscribe(callback, options)</code>方法侦听state的变化，与普通watch相比，<code>$subscribe</code>在patch后仅更新一次<br> 在setup中使用时，订阅器会被绑定到它们的组件上，组件被卸载时，将被自动删除，若要在卸载后继续保留，需要传递options参数<code>{detached:true}</code></p><h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter"><span>getter</span></a></h2><p>getter完全等同于store的计算值，函数接收state为参数，但也可通过this访问到整个store实例<br> 向getter传递参数需要在getter中返回一个接收参数的函数，然后就可以像函数调用一样使用getter，但这样做getter将不再被缓存<br> 上节中的mapState辅助函数同样也可以用来映射getter</p><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>action</span></a></h2><p>Action 相当于组件中的 method，action同样也可以用this访问到store实例，并且action可以是异步的</p><ul><li>辅助函数</li></ul><p>mapActions()可以将action属性映射为组件中的方法</p><ul><li><code>$onAction()</code></li></ul><p>使用<code>store.$onAction(callback, options)</code>监听action和它们的结果，callback将在action本身之前执行</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// callback函数</span></span>
<span class="line">  name<span class="token punctuation">,</span> <span class="token comment">// action名称</span></span>
<span class="line">  store<span class="token punctuation">,</span><span class="token comment">// store实例</span></span>
<span class="line">  args<span class="token punctuation">,</span> <span class="token comment">// 传递给action的参数数组</span></span>
<span class="line">  after<span class="token punctuation">,</span> <span class="token comment">// 在action返回或resolve后的钩子函数，类似生命周期函数</span></span>
<span class="line">  onError<span class="token punctuation">,</span> <span class="token comment">// action抛出或拒绝的钩子函数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">after</span><span class="token punctuation">(</span>afterCallback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">onError</span><span class="token punctuation">(</span>onErrorCallback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 与state中的订阅相同，若要在组件卸载后保留，需传递第二个参数true</span></span>
<span class="line"><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">$onAction</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递true在组件卸载后保留订阅</span></span>
<span class="line"><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 手动删除监听器</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><p><code>pinia.use()</code>方法支持扩展pinia实例的功能(添加属性、选项、方法、包装、副作用，修改、取消action等)</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span></span>
<span class="line"><span class="token comment">// 在安装此插件后创建的每个 store 中都会添加一个名为 \`secret\` 的属性。</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">SecretPiniaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token comment">// 插件可以保存在不同的文件中，本质是一个函数</span></span>
<span class="line">  pinia<span class="token punctuation">,</span> <span class="token comment">// 接收可选参数context，包含属性pinia，可使用createPinia()方法</span></span>
<span class="line">  app<span class="token punctuation">,</span> <span class="token comment">// 用createApp() 创建的当前应用(仅限Vue3)</span></span>
<span class="line">  store<span class="token punctuation">,</span> <span class="token comment">// 想扩展的store</span></span>
<span class="line">  options <span class="token comment">// 定义传给 \`defineStore()\` 的 store 的可选对象</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 直接返回对象扩展store或通过store参数添加属性</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;the cake is a lie&#39;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SecretPiniaPlugin<span class="token punctuation">)</span> <span class="token comment">// 将该插件交给 Pinia,此后创建的store才会生效</span></span>
<span class="line"><span class="token comment">// 在另一个文件中使用， 每个store都有secret属性</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">store<span class="token punctuation">.</span>secret <span class="token comment">// &#39;the cake is a lie&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加新的state</li></ul><p>给store添加新的state属性，需要在store和store.$state上同时添加，并且使用ref或其他响应式api以便在不同的读取方式中共享相同的值<br> 插件对state的变更或添加(包括<code>store.$patch()</code>调用)都是在store激活之前，因此不会触发任何订阅函数</p><ul><li>添加新的外部属性</li></ul><p>当添加外部属性、第三方类库实例或非响应式的简单之时，应该使用<code>markRow()</code>来包装</p><ul><li>在插件中订阅</li></ul><p><code>store.$subscribe()</code>, <code>store.$onAction()</code></p><ul><li>添加新的选项</li></ul><p>定义store时，可以创建与state、actions等同一级别的新选项，插件可以读取该选项来对action进行包装，并替换action<br> 在setup定义语法中，新的自定义选项作为第三个参数传递</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* 自定义选项 */</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用ts和nuxt详见<a href="https://pinia.vuejs.org/zh/core-concepts/plugins.html#nuxt-js" target="_blank" rel="noopener noreferrer">官方文档</a></p><h2 id="组件外使用store" tabindex="-1"><a class="header-anchor" href="#组件外使用store"><span>组件外使用store</span></a></h2><p>大多数时候store依靠pinia实例在所有调用中共享一个store实例, 在组件中调用useStore()函数时自动给app注入了pinia实例，因此在组件外使用时需要手动给useStore函数提供pinia实例</p><h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr"><span>SSR</span></a></h2><p>服务端渲染等更详细的使用方法参见<a href="https://pinia.vuejs.org/zh/ssr/" target="_blank" rel="noopener noreferrer">官方文档</a></p>`,48),o=[p];function c(l,i){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","Pinia.html.vue"]]),k=JSON.parse('{"path":"/vue/Pinia.html","title":"Pinia状态存储库","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Store","slug":"store","link":"#store","children":[]},{"level":2,"title":"state","slug":"state","link":"#state","children":[]},{"level":2,"title":"getter","slug":"getter","link":"#getter","children":[]},{"level":2,"title":"action","slug":"action","link":"#action","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"组件外使用store","slug":"组件外使用store","link":"#组件外使用store","children":[]},{"level":2,"title":"SSR","slug":"ssr","link":"#ssr","children":[]}],"git":{"updatedTime":1675778990000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":1}]},"filePathRelative":"vue/Pinia.md"}');export{r as comp,k as data};
