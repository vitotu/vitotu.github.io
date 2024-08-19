import{_ as n,c as e,o as s,d as a}from"./app-N3b4cOr6.js";const t={},i=a(`<h1 id="小新pro14锐龙版安装ubuntu" tabindex="-1"><a class="header-anchor" href="#小新pro14锐龙版安装ubuntu"><span>小新pro14锐龙版安装Ubuntu</span></a></h1><p>码农一名，新买了个小新pro14的R7版本，想着用来做生产力工具，平时不怎么玩游戏，就准备装个win10、Ubuntu双系统，平时用Ubuntu作为主力系统敲代码<br> win10就不说了，关于Ubuntu网上搜索相关教程，说是R7-5800还太新，Ubuntu的支持不是太好，键盘/触控板/网卡等失灵问题，而对应的解决方案大都是升级内核，因此准备一步到位直接安装Ubuntu21.04版本</p><h2 id="ubuntu-21-04安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-21-04安装"><span>Ubuntu 21.04安装</span></a></h2><ul><li>1、在win10系统上压缩出120G的磁盘大小给Ubuntu安装系统(磁盘管理器--&gt;压缩卷)</li><li>2、关闭win10快速重启功能(电源--&gt;电源计划--&gt;更改不可编辑项)</li><li>3、在Ubuntu官网上现在Ubuntu21.04的iso文件，准备一个U盘按照官网<a href="https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview" target="_blank" rel="noopener noreferrer">教程</a>创建启动盘</li><li>4、做好启动盘后，插入u盘，在启动电脑的时候按f12，选择从u盘中启动系统，即可进入Ubuntu的安装界面，点击试用Ubuntu，先简单体验下，确认有没有什么明显的bug</li><li>5、开始安装Ubuntu</li><li>6、安装成功后,调试硬件基本没有什么问题，屏幕亮度被默认为最高/最低,通过屏幕亮度快捷键也能够调整屏幕亮度，其他硬件上触控板、键盘、屏幕、充电、wifi等都没有网上所说的问题，看来新笔记本还是要配新系统。</li><li>7、配置系统(双系统时间同步问题，软件源配置、开机自动加载win10系统的磁盘)</li></ul><h3 id="硬件问题" tabindex="-1"><a class="header-anchor" href="#硬件问题"><span>硬件问题</span></a></h3><blockquote><p>蓝牙无法开启可尝试执行下面的命令</p></blockquote><div class="language-code line-numbers-mode" data-highlighter="prismjs" data-ext="code" data-title="code"><pre><code><span class="line">sudo rmmod btusb</span>
<span class="line">sleep 1</span>
<span class="line">sudo modprobe btusb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用软件安装" tabindex="-1"><a class="header-anchor" href="#常用软件安装"><span>常用软件安装</span></a></h2><ul><li>中文输入法：中文输入法我选择的是搜狗的linux版本，首选需要先安装fcitx小企鹅输入法框架，然后去搜狗官网下载最新的适配20.04版本的输入法，<code>sudo dpkg -i &lt;包名&gt;</code>即可安装</li><li>chrome，虚拟机选用kvm，wps的linux版，vim，git，网易云音乐</li><li>kvm虚拟机主要参考这篇<a href="https://cloud.tencent.com/developer/article/1657533" target="_blank" rel="noopener noreferrer">文章</a></li><li>开发环境软件vscode、node、vue、nginx、jdk，及环境变量，包源配置</li></ul><h2 id="系统美化" tabindex="-1"><a class="header-anchor" href="#系统美化"><span>系统美化</span></a></h2><p>系统美化主要参考这篇<a href="https://zhuanlan.zhihu.com/p/176977192" target="_blank" rel="noopener noreferrer">文章</a></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-tweaks chrome-gnome-shell</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gtk2-engines-murrine gtk2-engines-pixbuf </span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> sassc optipng inkscape libcanberra-gtk-module libglib2.0-dev libxml2-utils</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-tweak-tool gnome-shell-extensions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[i];function u(o,c){return s(),e("div",null,l)}const p=n(t,[["render",u],["__file","小新pro14ACH安装Ubuntu并美化.html.vue"]]),d=JSON.parse('{"path":"/LinuxNote/%E5%B0%8F%E6%96%B0pro14ACH%E5%AE%89%E8%A3%85Ubuntu%E5%B9%B6%E7%BE%8E%E5%8C%96.html","title":"小新pro14锐龙版安装Ubuntu","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ubuntu 21.04安装","slug":"ubuntu-21-04安装","link":"#ubuntu-21-04安装","children":[{"level":3,"title":"硬件问题","slug":"硬件问题","link":"#硬件问题","children":[]}]},{"level":2,"title":"常用软件安装","slug":"常用软件安装","link":"#常用软件安装","children":[]},{"level":2,"title":"系统美化","slug":"系统美化","link":"#系统美化","children":[]}],"git":{"updatedTime":1651768003000,"contributors":[{"name":"vito","email":"vitotu@qq.com","commits":2}]},"filePathRelative":"LinuxNote/小新pro14ACH安装Ubuntu并美化.md"}');export{p as comp,d as data};
