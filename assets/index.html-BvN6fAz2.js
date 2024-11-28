import{_ as s,c as n,o as a,d as e}from"./app-DhSRpM88.js";const l={},p=e(`<h1 id="scss基础使用" tabindex="-1"><a class="header-anchor" href="#scss基础使用"><span>scss基础使用</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>scss/sass是css的超集，类似与typescript和JavaScript的关系，最终将转换为css上线,其语法格式有scss和sass(使用“缩进”代替“花括号”)两种</p><p>本笔记仅参考了中文网中的<a href="https://www.sass.hk/guide/" target="_blank" rel="noopener noreferrer">快速入门</a>和<a href="https://www.sass.hk/docs/" target="_blank" rel="noopener noreferrer">中文文档</a>两个部分，更详细的请参考<a href="https://sass-lang.com/documentation" target="_blank" rel="noopener noreferrer">英文版api</a></p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>多行注释<code>/* */</code>会被编译到css中，单行注释<code>//</code>则不会<br> 带<code>!</code>号的多行注释</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token comment">/*!  </span>
<span class="line">  版权信息  </span>
<span class="line">*/</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常用于加入版权信息，在处于压缩模式的css下也不会被删除</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>变量以美元符号开头，赋值方法与 CSS 属性的写法一样</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1600px<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token property"><span class="token variable">$pen-size</span></span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token comment">// 直接使用变量名称调用变量  </span></span>
<span class="line"><span class="token selector">#app </span><span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$pen-size</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token comment">// 支持块级作用域  </span></span>
<span class="line"><span class="token selector">#foo </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 5em !global<span class="token punctuation">;</span> <span class="token comment">// !global将局部变量转换为全局变量  </span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span> <span class="token comment">// 5em  </span></span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token selector">#bar </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span> <span class="token comment">// 5em  </span></span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><p>SassScript 支持 7 种主要的数据类型：</p><ul><li>数字，<code>1, 2, 13, 10px</code></li><li>字符串，有引号字符串与无引号字符串，<code>&quot;foo&quot;, &#39;bar&#39;, baz</code></li><li>颜色，<code>blue, #04a3f9, rgba(255,0,0,0.5)</code></li><li>布尔型，<code>true, false</code>，只有自身是false和null才会返回false，其他一切都将返回true</li><li>空值，<code>null</code>，与任何类型进行算数运算</li><li>数组 (list)，用空格或逗号作分隔符，<code>1.5em 1em 0 2em, Helvetica, Arial, sans-serif</code></li><li>maps, 相当于 JavaScript 的 object，<code>(key1: value1, key2: value2)</code></li></ul><p>SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 !important 声明。然而Sass 不会特殊对待这些属性值，一律视为无引号字符串。</p><p><code>type-of($value)</code>判断数据类型</p><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><p>使用插值语法(模板字符串)<code>#{}</code>(interpolation)时，有引号字符串将被编译为无引号字符串，这样便于在mixin中引用选择器名</p><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字"><span>数字</span></a></h3><p>带单位的数字，单位会和数字当做一个整体，进行算数运算</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>参考<a href="https://sass-lang.com/documentation/modules/list" target="_blank" rel="noopener noreferrer">英文文档</a></p><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h3><p>支持颜色函数<br><code>$color1: lighten($color, 15%);</code></p><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算"><span>运算</span></a></h2><h3 id="数字运算" tabindex="-1"><a class="header-anchor" href="#数字运算"><span>数字运算</span></a></h3><p>对于加法/减法运算,带有字符串类型的会变成拼接,其中减法会带着运算符拼接<br> a.纯数字：只要有单位，结果必有单位,不同单位之间会进行必要的转换<br> b.纯字符串：第一个字符串有无引号决定结果是否有引号<br> c数字和字符串：第一位有引号，结果必为引号；第一位对应数字非数字且最后一位带有引号，则结果必为引号</p><p>乘除取余运算</p><ul><li>乘法:</li></ul><p>每个字段必须前部分为数字，且两个字段只能一个后部分是字符(因为此时后缀被当被单位看待了)。其余编译不通过</p><ul><li>除法:</li></ul><p><code>/</code> 在 CSS 中通常起到分隔数字的用途<br> 以下三种情况 / 将被视为除法运算符号：</p><blockquote><p>1.如果值，或值的一部分，是变量或者函数的返回值 2.如果值被圆括号包裹<br> 3.如果值是算数表达式的一部分</p></blockquote><p>不会四舍五入，精确到小数点后5位<br> 每个字段必须前部分为数字，且当前者只是单纯数字无单位时，后者(除数)后部分不能有字符。其余结果就按顺序去除空格后拼接起来。<br> (因为此时后缀被当被单位看待了)</p><p>取余:<br> 值与&quot;%&quot;之间必须要有空格，否则会被看做字符串</p><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符"><span>关系运算符</span></a></h3><p>大前提：两端必须为数字 或 前部分数字后部分字符</p><h3 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符"><span>相等运算符</span></a></h3><p>前部分为不带引号数字时，对比的仅仅是数字部分；反之，忽略引号，要求字符一一对应</p><h3 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符"><span>布尔运算符</span></a></h3><p>值与&quot;and&quot;、&quot;or&quot;和&quot;not&quot;之间必须要有空格，否则会被看做字符</p><h3 id="颜色运算符" tabindex="-1"><a class="header-anchor" href="#颜色运算符"><span>颜色运算符</span></a></h3><p>颜色与颜色之间运算是分段计算进行的，也就是分别计算r、g、b部分的值<br> 颜色值与数字之间是分段分别与数字进行运算<br> RGB和HSL,如果颜色值包含alpha channel（rgba或hsla两种颜色值），必须拥有相等的alpha值才能进行运算，因为算术运算不会作用于alpha值。</p><h3 id="运算优先级" tabindex="-1"><a class="header-anchor" href="#运算优先级"><span>运算优先级</span></a></h3><p>1、<code>()</code><br> 2、<code>*</code>、<code>/</code>、<code>%</code><br> 3、<code>+</code>、<code>-</code><br> 4、<code>&gt;</code> 、<code>&lt;</code>、<code>&gt;=</code>、<code>&lt;=</code></p><h2 id="嵌套语法" tabindex="-1"><a class="header-anchor" href="#嵌套语法"><span>嵌套语法</span></a></h2><p>scss选择器可嵌套书写</p><p>选择器嵌套时，其嵌套处理逻辑类似于外层选择器与内层拼接，因此跨层次嵌套必须书写中间层<br> 对于特殊的<a href="#%E7%88%B6%E9%80%89%E6%8B%A9%E5%99%A8">父选择器</a><code>&amp;</code>符号将被替换为父选择器名称<br> 同样<code>&gt; + ~</code>选择器和群组选择器也支持</p><p>属性嵌套时：</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.funky </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token selector">font: </span><span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token property">family</span><span class="token punctuation">:</span> fantasy<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token property">size</span><span class="token punctuation">:</span> 30em<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token punctuation">}</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token comment">/*  </span>
<span class="line">被编译为  </span>
<span class="line">.funky {  </span>
<span class="line">  font-family: fantasy;  </span>
<span class="line">  font-size: 30em;  </span>
<span class="line">  font-weight: bold; }  </span>
<span class="line">*/</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>:</code>符号将被转义为<code>-</code></p><h2 id="杂货语法" tabindex="-1"><a class="header-anchor" href="#杂货语法"><span>杂货语法</span></a></h2><p>占位符选择器,以<code>%</code>开头的选择器,不选取任何元素,通常用于继承等场景</p><h3 id="插值语法" tabindex="-1"><a class="header-anchor" href="#插值语法"><span>插值语法</span></a></h3><p>类似于模板字符串<br> 通过 #{} 插值语句可以在选择器、属性名和属性值中使用变量。</p><h3 id="父选择器" tabindex="-1"><a class="header-anchor" href="#父选择器"><span>父选择器&amp;</span></a></h3><p>更接近于指向当前元素</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">a </span><span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>:hover</span><span class="token punctuation">{</span>  </span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token punctuation">}</span>  </span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>:active</span><span class="token punctuation">{</span>  </span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blank<span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token punctuation">}</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span><code>!default</code></span></a></h3><p>设置变量默认值,变量是null空值时将视为未被!default赋值</p><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span><code>!global</code></span></a></h3><p>将局部变量提升为全局变量</p><h3 id="optional" tabindex="-1"><a class="header-anchor" href="#optional"><span><code>!optional</code></span></a></h3><p>当@extend相关代码出现语法错误时，编译器可能会给我们”乱”编译为css，我们加上这个参数可以在出现问题后不让他编译该部分代码</p><h2 id="rule指令" tabindex="-1"><a class="header-anchor" href="#rule指令"><span>@-Rule指令</span></a></h2><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span><code>@import</code></span></a></h3><p>仅可导入scss/sass文件，若传入css或url等参数将被作为普通的css语句。<br> 若不希望将导入的scss文件独立编译为CSS只需要在文件名前添加下划线，但导入语句中却不需要添加下划线，如：<br> 文件名_colors.scss，导入<code>@import &quot;colors&quot;;</code></p><p>嵌套的代码中导入，对应的被导入代码将只在局部作用域生效。不可以在混合指令(mixin)或控制指令(control directives)中嵌套@import</p><h3 id="media指令" tabindex="-1"><a class="header-anchor" href="#media指令"><span><code>@media</code>指令</span></a></h3><p>与CSS中用法一样，但允许其在CSS规则中嵌套<br> 如果 @media 嵌套在 CSS 规则内，编译时，@media 将被编译到文件的最外层，包含嵌套的父选择器</p><h3 id="extend继承" tabindex="-1"><a class="header-anchor" href="#extend继承"><span><code>@extend</code>继承</span></a></h3><p><strong style="color:red;">继承的基本原理类似于：<code>.seriousError @extend .error</code>，那么样式表中的任何一处<code>.error</code>都用<code>.error.seriousError</code>这一选择器组进行替换。</strong></p><p>.seriousError不仅会继承.error自身的所有样式，任何跟.error有关的组合选择器样式也会被.seriousError以组合选择器的形式继承</p><p>不要继承后代选择器,如:</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">#admin .tabbar a </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token selector">#demo .overview .fakelink </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token keyword">@extend</span> a<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为后代选择器之间的层级不确定,scss会根据不同的层级组合生成多种选择器组合,上述代码编译后会生成:</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">#admin .tabbar a,  </span>
<span class="line">#admin .tabbar #demo .overview .fakelink,  </span>
<span class="line">#demo .overview #admin .tabbar .fakelink</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span> <span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>@media</code>中不可继承外部的代码块</p><h3 id="混合" tabindex="-1"><a class="header-anchor" href="#混合"><span>混合</span></a></h3><p><code>@mixin</code>给一大段样式赋予一个名字,通过<code>@include</code>引用对应的混合器,<code>.</code>调用会把混合器中的所有样式提取出来放在@include被调用的地方.</p><p><strong style="color:red;">由于混合器是替换代码的方式调用,因此滥用可能会导致css文件过大</strong></p><p>混合器可以以类似函数的方式定义参数，给<code>@include</code>调用,如下是使用了默认参数的混合器</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>  </span>
<span class="line">    <span class="token variable">$normal</span><span class="token punctuation">,</span>  </span>
<span class="line">    <span class="token property"><span class="token variable">$hover</span></span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">,</span>  </span>
<span class="line">    <span class="token property"><span class="token variable">$visited</span></span><span class="token punctuation">:</span> <span class="token variable">$normal</span>  </span>
<span class="line">  <span class="token punctuation">)</span>  </span>
<span class="line"><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  </span>
<span class="line">  <span class="token selector"><span class="token parent important">&amp;</span>:visited </span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$visited</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token comment">// 调用时可以这样调用  </span></span>
<span class="line"><span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当不确定有多少个参数时,可以使用类似与es6中的<code>...</code>标志符，对参数变量声明(<code>@include</code>时也可使用该标志符，效果类似与es6)，如下：</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token selector">.shadows </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token comment">// 编译为  </span></span>
<span class="line"><span class="token selector">.shadowed </span><span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制指令" tabindex="-1"><a class="header-anchor" href="#控制指令"><span>控制指令</span></a></h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h3><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@if</span> #<span class="token punctuation">{</span>条件<span class="token punctuation">}</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">//业务代码  </span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">@else if</span> #<span class="token punctuation">{</span>条件<span class="token punctuation">}</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">// 业务代码  </span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">// 业务代码  </span></span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>for</span></a></h3><p>指令包含<br><code>@for $var from &lt;start&gt; through &lt;end&gt;</code>和<br><code>@for $var from &lt;start&gt; to &lt;end&gt;</code>两种形式<br> 两种<code>&lt;start&gt;和&lt;end&gt;</code>都必须为整数值，前者包含end而后者不含</p><h3 id="each" tabindex="-1"><a class="header-anchor" href="#each"><span><code>@each</code></span></a></h3><p>指令格式为<code>@each $var in &lt;list&gt;</code>,<code>&lt;list&gt;</code>是一连串的值(值列表)，与js类似的迭代，可多值同时迭代，或迭代map</p><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while"><span><code>@while</code></span></a></h3><p>while循环直到条件满足</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@while</span> #<span class="token punctuation">{</span>condition<span class="token punctuation">}</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">// 业务代码  </span></span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数指令" tabindex="-1"><a class="header-anchor" href="#函数指令"><span>函数指令</span></a></h2><p>支持自定义函数，并在属性值或script中使用;</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token property"><span class="token variable">$grid-width</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>  </span>
<span class="line"><span class="token property"><span class="token variable">$gutter-width</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token keyword">@function</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token keyword">@return</span> <span class="token variable">$n</span> <span class="token operator">*</span> <span class="token variable">$grid-width</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$gutter-width</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token punctuation">}</span>  </span>
<span class="line">  </span>
<span class="line"><span class="token selector">#sidebar </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出格式" tabindex="-1"><a class="header-anchor" href="#输出格式"><span>输出格式</span></a></h3><p>此部分实用性不强，参考<a href="https://www.sass.hk/docs/" target="_blank" rel="noopener noreferrer">官方文档</a></p><h2 id="scss与js联动" tabindex="-1"><a class="header-anchor" href="#scss与js联动"><span>scss与js联动</span></a></h2><p>基于webpack、sass-loader在vue项目中，scss中的变量可以导入到js中使用</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token comment">// @/styles/variables.scss</span></span>
<span class="line"><span class="token property"><span class="token variable">$--color-primary</span></span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$--border-width</span></span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">:export </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">colorPrimary</span><span class="token punctuation">:</span> <span class="token variable">$--color-primary</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">borderWidth</span><span class="token punctuation">:</span> <span class="token variable">$--border-width</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> styleVariables <span class="token keyword">from</span> <span class="token string">&#39;@/styles/variables.scss&#39;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>styleVariables<span class="token punctuation">)</span> <span class="token comment">// { colorPrimary: &#39;skyblue&#39;, borderWidth: &#39;2px&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,104),i=[p];function t(c,o){return a(),n("div",null,i)}const d=s(l,[["render",t],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/css/scss/","title":"scss基础使用","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"数字","slug":"数字","link":"#数字","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"颜色","slug":"颜色","link":"#颜色","children":[]}]},{"level":2,"title":"运算","slug":"运算","link":"#运算","children":[{"level":3,"title":"数字运算","slug":"数字运算","link":"#数字运算","children":[]},{"level":3,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]},{"level":3,"title":"相等运算符","slug":"相等运算符","link":"#相等运算符","children":[]},{"level":3,"title":"布尔运算符","slug":"布尔运算符","link":"#布尔运算符","children":[]},{"level":3,"title":"颜色运算符","slug":"颜色运算符","link":"#颜色运算符","children":[]},{"level":3,"title":"运算优先级","slug":"运算优先级","link":"#运算优先级","children":[]}]},{"level":2,"title":"嵌套语法","slug":"嵌套语法","link":"#嵌套语法","children":[]},{"level":2,"title":"杂货语法","slug":"杂货语法","link":"#杂货语法","children":[{"level":3,"title":"插值语法","slug":"插值语法","link":"#插值语法","children":[]},{"level":3,"title":"父选择器&","slug":"父选择器","link":"#父选择器","children":[]},{"level":3,"title":"!default","slug":"default","link":"#default","children":[]},{"level":3,"title":"!global","slug":"global","link":"#global","children":[]},{"level":3,"title":"!optional","slug":"optional","link":"#optional","children":[]}]},{"level":2,"title":"@-Rule指令","slug":"rule指令","link":"#rule指令","children":[{"level":3,"title":"@import","slug":"import","link":"#import","children":[]},{"level":3,"title":"@media指令","slug":"media指令","link":"#media指令","children":[]},{"level":3,"title":"@extend继承","slug":"extend继承","link":"#extend继承","children":[]},{"level":3,"title":"混合","slug":"混合","link":"#混合","children":[]}]},{"level":2,"title":"控制指令","slug":"控制指令","link":"#控制指令","children":[{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"for","slug":"for","link":"#for","children":[]},{"level":3,"title":"@each","slug":"each","link":"#each","children":[]},{"level":3,"title":"@while","slug":"while","link":"#while","children":[]}]},{"level":2,"title":"函数指令","slug":"函数指令","link":"#函数指令","children":[{"level":3,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]}]},{"level":2,"title":"scss与js联动","slug":"scss与js联动","link":"#scss与js联动","children":[]}],"git":{"updatedTime":1663683344000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":2}]},"filePathRelative":"css/scss/README.md"}');export{d as comp,u as data};