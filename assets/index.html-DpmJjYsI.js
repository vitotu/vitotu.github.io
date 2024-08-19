import{_ as a,c as n,o as s,d as e}from"./app-N3b4cOr6.js";const t={},p=e(`<h1 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h1><h2 id="理解作用域" tabindex="-1"><a class="header-anchor" href="#理解作用域"><span>理解作用域</span></a></h2><p>编译器：js会在代码进行运行前进行编译，主要有分词(词法分析)、解析(语法分析生成AST抽象语法树)、代码生成三个过程构成，在变量声明过程中，为变量开辟内存区域<br> 引擎：负责整个程序的编译和执行过程<br> 作用域：收集维护所有声明的变量并负责提供查询,作用域会在全局作用域基础上进行嵌套，栈数据结构类似</p><p>以<code>var a = 2</code>为例，编译器会先查询作用域中是否存在a，若不存在则为a变量开辟内存，否则就忽略此语句，(对应变量提升)<br> 接下来由引擎执行<code>a = 2</code>赋值操作，引擎首先进行LHS查询作用域中是否存在a变量，并进行赋值，若不存在则抛出异常</p><p>LHS查询：变量出现在赋值操作左侧时进行LHS，LHS尝试找到变量容器本身，若未找到，则会在全局作用域中创建该变量(非严格模式下)，或抛出ReferenceError(严格模式下)<br> RHS查询：变量出现在赋值操作右侧时进行RHS或非LHS情况下都算RHS，RHS找到变量的值即可，若找不到变量引擎则会抛出ReferenceError</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token comment">// 示例代码中LHS有3处，RHS有4处  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域"><span>词法作用域</span></a></h2><p>词法作用域由书写代码时变量和块作用域的位置所决定<br> eval()函数通过动态的插入代码来修改(欺骗)作用域，与之类似的setTimeout()、setInterval()、new Function()等函数都可以通过传入字符串的方式动态创建函数，因此也可以用来修改作用域(不推荐使用) /ps：严格模式下eval有自己的词法作用域，无法修改其他作用域<br> with语句通过包含对象让语句块中可以快捷的访问对象的属性，相当于修改了作用域，若在块中对属性进行赋值，而该对象中没有对应的属性，则会无意中创建了同名的全局变量，而对象的属性则赋值失败，其内部的var声明会将变量添加到with所处的函数作用域中；</p><p>eval和with都会被严格模式限制，引擎无法在编译时对作用域查找进行优化，因此使用这两种模式也会带来性能问题</p><h2 id="函数作用域和块作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域和块作用域"><span>函数作用域和块作用域</span></a></h2><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>TODO</span></a></h2><p>学习中。。。</p>`,12),l=[p];function i(o,c){return s(),n("div",null,l)}const d=a(t,[["render",i],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/js/jsDeep/","title":"作用域","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"理解作用域","slug":"理解作用域","link":"#理解作用域","children":[]},{"level":2,"title":"词法作用域","slug":"词法作用域","link":"#词法作用域","children":[]},{"level":2,"title":"函数作用域和块作用域","slug":"函数作用域和块作用域","link":"#函数作用域和块作用域","children":[]},{"level":2,"title":"TODO","slug":"todo","link":"#todo","children":[]}],"git":{"updatedTime":1651996667000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":1}]},"filePathRelative":"js/jsDeep/README.md"}');export{d as comp,u as data};
