(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{489:function(t,r,s){"use strict";s.r(r);var a=s(62),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端相关的网络安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端相关的网络安全"}},[t._v("#")]),t._v(" 前端相关的网络安全")]),t._v(" "),s("h2",{attrs:{id:"xss和csrf攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss和csrf攻击"}},[t._v("#")]),t._v(" XSS和CSRF攻击")]),t._v(" "),s("h2",{attrs:{id:"点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),s("p",[t._v("向目标网站通过iframe嵌入并隐藏到自己网页中，用户在操作网页时实际点击的是iframe，实现目标网站的点击劫持")]),t._v(" "),s("ul",[s("li",[t._v("防范：\n"),s("ul",[s("li",[t._v("在http报文头中添加X-FRAME-OPTIONS属性控制页面是否可被嵌入iframe中，DENY, SAMEORIGIN, ALLOW-FROM URL")]),t._v(" "),s("li",[t._v("通过js判断当前网页是否被嵌套")])])])]),t._v(" "),s("h2",{attrs:{id:"cdn劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn劫持"}},[t._v("#")]),t._v(" CDN劫持")]),t._v(" "),s("p",[t._v("Content Delivery Network内容分发网络，在距离用户更近的位置架设缓存服务器，利用全局负载技术，将用户的访问指向距离最近的缓存服务器上。"),s("br"),t._v("\n黑客通过cdn劫持方法让用户转到自己开发的网站")]),t._v(" "),s("ul",[s("li",[t._v("防范：")])]),t._v(" "),s("p",[t._v("验证SRI(子资源完整性)，来判断是否被篡改安全特性。通过link、或script标签添加integrity属性开启SRI功能，如："),s("br"),t._v(" "),s("code",[t._v('<script integrity="[哈希生成算法:sha-256等]-[base64编码的实际哈希值]">')]),s("br"),t._v("\n浏览器在遇到该属性后会计算文件哈希值，并与实际哈希对比，若不符合，则会拒绝应用或执行，并返回一个网络错误")])])}),[],!1,null,null,null);r.default=e.exports}}]);