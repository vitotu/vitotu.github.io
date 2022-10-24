import{_ as n,o as s,c as a,e as t}from"./app.8e38ce99.js";const p={},e=t(`<h1 id="\u624B\u5199\u865A\u62DF\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u865A\u62DF\u5217\u8868" aria-hidden="true">#</a> \u624B\u5199\u865A\u62DF\u5217\u8868</h1><p>\u539F\u751F\u5B9E\u73B0\u865A\u62DF\u5217\u8868<br> \u601D\u8DEF\uFF1A\u5C06\u6E32\u67D3\u5206\u4E3A\u4E09\u4E2Apage\uFF1Apre, cur, next\u7EF4\u6301\u4E00\u4E2Apage\u53D8\u91CF\u7528\u4E8E\u8868\u793A\u5F53\u524D\u9875\u7801\uFF0C\u4F7F\u7528\u5BB9\u5668\u5B58\u653E DOM fragment\uFF0C\u76D1\u542C scroll \u4E8B\u4EF6\uFF0C\u8BBE\u5B9A\u52A0\u8F7D\u9608\u503C\uFF0C\u5728\u6EE1\u8DB3\u6761\u4EF6\u7684\u65F6\u5019\u52A0\u8F7D\u4E0B\u4E00\u4E2Apage\uFF0C\u79FB\u9664\u4E0A\u4E00\u4E2Apage\uFF0C\u5E76\u66F4\u65B0padding-top\u5C5E\u6027\uFF0C\u4E3A\u9690\u85CF\u7684page\u5360\u4F4D\u9632\u6B62\u6296\u52A8</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>longList<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#box</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box_container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// current page  </span>
      <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// number of item per page  </span>
      <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">// height of per item  </span>
      <span class="token keyword">const</span> preLoadNum <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// pre load page number  </span>
      <span class="token comment">// virtual padding bottom height for calculate threshold height</span>
      <span class="token keyword">const</span> paddingBottom <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> boxHeight <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// scroll window viewport height</span>
      <span class="token comment">// pages array, you can collect all block element array or only pre cur and next block element array</span>
      <span class="token keyword">let</span> eleArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
      <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token keyword">const</span> boxContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#box_container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token keyword">const</span> <span class="token punctuation">{</span>fragment<span class="token punctuation">,</span> <span class="token literal-property property">box</span><span class="token operator">:</span> boxList<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createItem</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      eleArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>boxList<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      boxContainer<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token comment">// calculate threshold height use down to pre page height</span>
        <span class="token keyword">let</span> nextHeight <span class="token operator">=</span> page <span class="token operator">*</span> <span class="token punctuation">(</span>size <span class="token operator">*</span> height<span class="token punctuation">)</span> <span class="token operator">-</span> boxHeight <span class="token operator">-</span> paddingBottom<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>scrollTop <span class="token operator">&gt;=</span> nextHeight<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// render next page</span>
          page<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token comment">// calculate loaded pages but not to render placeholder padding size</span>
          <span class="token keyword">let</span> paddingTop <span class="token operator">=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> preLoadNum<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>size <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> fragment<span class="token punctuation">;</span>
          <span class="token comment">// if current page block not exist then create block</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>eleArr<span class="token punctuation">[</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// current page index is page - 1(start with 0)</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">fragment</span><span class="token operator">:</span> element<span class="token punctuation">,</span> <span class="token literal-property property">box</span><span class="token operator">:</span> boxList<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createItem</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
            fragment <span class="token operator">=</span> element<span class="token punctuation">;</span>
            eleArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>boxList<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fragment <span class="token operator">=</span> eleArr<span class="token punctuation">[</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
          boxContainer<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// remove should being hide page block</span>
          <span class="token keyword">const</span> hideElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.page_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page <span class="token operator">-</span> preLoadNum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>hideElem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// remove and save the placeholder with padding top</span>
            boxContainer<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>hideElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
            boxContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>paddingTop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token comment">// else render the pre page</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> scrollTop <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> preLoadNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> size <span class="token operator">*</span> height <span class="token operator">+</span> paddingBottom <span class="token operator">&amp;&amp;</span> page <span class="token operator">&gt;</span> preLoadNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          page<span class="token operator">--</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> paddingTop <span class="token operator">=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> preLoadNum<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>size <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// get not render block which is the first block before pre block</span>
          <span class="token keyword">const</span> fragment <span class="token operator">=</span> eleArr<span class="token punctuation">[</span>page <span class="token operator">-</span> preLoadNum<span class="token punctuation">]</span><span class="token punctuation">;</span>
          boxContainer<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>fragment<span class="token punctuation">,</span> boxContainer<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> hideElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.page_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>hideElem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// remove next block and update placeholder height</span>
            boxContainer<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>hideElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
            boxContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>paddingTop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/** 
     * <span class="token keyword">@description</span>: create fragment 
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">page</span> : page number 
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">size</span> : number of item per page 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">,</span> Element<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> : fragment and item element array 
     */</span>
    <span class="token keyword">function</span> <span class="token function">createItem</span><span class="token punctuation">(</span><span class="token parameter">page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
      <span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      box<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">page_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">;</span>
      element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">;</span>
      element<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">item_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      element<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u6211\u662Fitem\u2014\u2014</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> size<span class="token punctuation">)</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      box<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token punctuation">}</span>  
      fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token keyword">return</span> <span class="token punctuation">{</span>fragment<span class="token punctuation">,</span> box<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","longList.html.vue"]]);export{k as default};
