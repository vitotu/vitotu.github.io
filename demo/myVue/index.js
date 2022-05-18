var uid = 0;
class Observer {
  constructor(value) {
    this.dep = new Dep();
    Observer.def(value, '__ob__', this, false);
    if(Array.isArray(value)){
      Object.setPrototypeOf(value, Observer.getArrayMethods());
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(value) { // 对所有可枚举属性定义响应式
    for (let k in value) Observer.defineReactive(value, k);
  }
  observeArray(arr) { // 对数组的所有项定义响应式，(变量l用于固定数组长度)
    for (let i = 0, l = arr.length; i < l; i++) Observer.observe(arr[i]);
  }
  static observe(value) {
    if (typeof value != 'object') return;
    var ob;
    if (typeof value.__ob__ !== 'undefined') ob = value.__ob__;
    else ob = new Observer(value);
    return ob;
  }
  static def(obj, key, value, enumerable) {
    Object.defineProperty(obj, key, {
      value,
      enumerable,
      writable: true,
      configurable: true
    });
  }
  static getArrayMethods(){ // 返回数组响应式的数组操作方法
    const arrayMethods = Object.create(Array.prototype);
    ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(methodName => { // 遍历、重新定义，要被改写的7个数组方法
      Observer.def(arrayMethods, methodName, function () {
        // 恢复原方法的功能
        const result = Array.prototype[methodName].apply(this, arguments);
        const args = [...arguments];
        // 把这个数组身上的__ob__取出来，__ob__已经被添加了，为什么已经被添加了？因为数组肯定不是最高层，比如obj.g属性是数组，obj不能是数组，第一次遍历obj这个对象的第一层的时候，已经给g属性（就是这个数组）添加了__ob__属性。
        const ob = this.__ob__;
        // 有三种方法push\unshift\splice能够插入新项，现在要把插入的新项也要变为observe的
        let inserted = [];
        switch (methodName) {
          case 'push':
          case 'unshift':
            inserted = args;
            break;
          case 'splice': // splice格式是splice(下标, 数量, 插入的新项)
            inserted = args.slice(2);
            break;
        }
        if (inserted) ob.observeArray(inserted); // 为新插入的item添加响应式
        ob.dep.notify(); // 方法调用时，通知更新
        return result; // 原生方法的返回值
      }, false);
    });
    return arrayMethods;
  }
  static defineReactive(data, key, val) { // 对非数组属性，实际设置响应式的函数
    const dep = new Dep();
    if (arguments.length == 2) val = data[key];
    let childOb = Observer.observe(val); // 递归的对子元素进行响应式设置
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: true, // 可以被配置，比如可以被delete
      get() {
        if (Dep.target) { // 尝试收集依赖
          dep.depend();
          if (childOb) childOb.dep.depend();
        }
        return val;
      },
      set(newValue) {
        if (val === newValue) return;
        val = newValue;
        childOb = Observer.observe(newValue); // 当设置了新值，这个新值也要被observe
        dep.notify(); // 发布订阅模式，通知dep更新
      }
    });
  }
}
class Watcher {
  constructor(target , expression, callback){
    this.id = uid++;
    this.target = target;
    this.getter = Watcher.parsePath(expression); // 用于读取target上的属性,支持字符串链式查找
    this.callback = callback;
    this.value = this.get(); // 初始化时调用，便于依赖收集
  }
  update() {
    this.run();
  }
  get() {
    Dep.target = this; // 全局上绑定watcher实例，方便Observer收集
    const obj = this.target;
    var value;
    try {
      value = this.getter(obj); // 尝试读取属性，若读取成功则会尝试收集依赖
    } finally {
      Dep.target = null; // 释放全局对象
    }
    return value;
  }
  run() {
    this.getAndInvoke(this.callback);
  }
  getAndInvoke(cb) {
    const value = this.getter(this.target); // 此处不可使用get，需用getter否则将造成反复添加相同的依赖
    if (value !== this.value || typeof value == 'object') {
      const oldValue = this.value;
      this.value = value;
      cb.call(this.target, value, oldValue);
    }
  }
  static parsePath(str) { // 类似于根据'a.b.c'链式查找属性
    var segments = str.split('.');
    return (obj) => {
      for (let i = 0; i < segments.length; i++) {
        if (!obj) return;
        obj = obj[segments[i]]
      }
      return obj;
    };
  }
}
class Dep { // 依赖收集器
  constructor() {
    this.id = uid++;
    this.subs = []; // 订阅者subscribes，watcher实例
  }
  addSub(sub){ // 添加订阅
    this.subs.push(sub);
  }
  depend() { // 通过Dep.target添加依赖，Dep.target全局唯一
    if(Dep.target) this.addSub(Dep.target);
  }
  notify() { // 通知更新，调用watcher的update进行更新
    const subs = this.subs.slice(0);
    for(let i = 0, l = subs.length; i < l; i++) subs[i].update();
  }
}
class Compile {
  constructor(el, vue){
    this.$vue = vue;
    this.$el = document.querySelector(el);
    if(this.$el){
      // 调用函数，让节点变为fragment，类似于mustache中的tokens。实际上用的是AST，这里就是轻量级的，fragment
      let $fragment = this.node2Fragment(this.$el);
      this.compile($fragment); // 编译
      this.$el.appendChild($fragment); // 替换好的内容要上树
    }
  }
  node2Fragment(el) {
    var fragment = document.createDocumentFragment();
    var child; // 让所有DOM节点，都进入fragment,每次append都会自动从el中移除
    while (child = el.firstChild) fragment.appendChild(child);
    return fragment;
  }
  compile(el) {
    // 得到子元素
    var childNodes = el.childNodes;
    var self = this;
    var reg = /\{\{(.*)\}\}/;
    childNodes.forEach(node => {
      var text = node.textContent;
      if (node.nodeType == 1) { // 元素节点，处理节点中的属性
        self.compileElement(node);
      } else if (node.nodeType == 3 && reg.test(text)) { // 文本节点
        let name = text.match(reg)[1]; // name实际为js表达式，此处仅支持对象属性读取
        self.compileText(node, name);
      }
    });
  }

  compileElement(node) {
    // 这里的方便之处在于不是将HTML结构看做字符串，而是真正的属性列表
    var nodeAttrs = node.attributes;
    // console.log('node attrs:', nodeAttrs)
    var self = this;
    [].slice.call(nodeAttrs).forEach(attr => { // 类数组对象变为数组,处理指令
      var attrName = attr.name;
      var value = attr.value;
      var dir = attrName.substring(2); // 指令都已'v-'开头，取出面的字符串
      if (attrName.indexOf('v-') == 0) {
        if (dir == 'model') { // 更新操作交由watcher处理
          new Watcher(self.$vue, value, value => node.value = value);
          var v = self.getVueVal(self.$vue, value);
          node.value = v;
          node.addEventListener('input', e => { // 双向绑定，添加监听
            var newVal = e.target.value;
            self.setVueVal(self.$vue, value, newVal);
            v = newVal;
          });
        } // TODO：增加对其他指令的支持
      }
    });
  }

  compileText(node, name) {
    node.textContent = this.getVueVal(this.$vue, name);
    new Watcher(this.$vue, name, value => node.textContent = value);
  }

  getVueVal(vue, exp) { // TODO:改写此函数以支出数组类型访问
    var val = vue;
    exp = exp.split('.');
    exp.forEach(k => {
      val = val[k];
    });
    return val;
  }

  setVueVal(vue, exp, value) {
    var val = vue;
    exp = exp.split('.');
    exp.forEach((k, i) => {
      if (i < exp.length - 1) {
        val = val[k];
      } else {
        val[k] = value;
      }
    });
  }
}
class Vue {
  constructor(options) {
    this.$options = options || {};
    this._data = options.data || undefined;
    // debugger
    Observer.observe(this._data);
    this._initData();
    this._initWatch();
    new Compile(options.el, this);
  }
  _initData() { // 将数据劫持到vm实例上
    var self = this;
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(self, key, {
        get: () => self._data[key],
        set: newVal => self._data[key] = newVal
        });
    });
  }
  _initWatch() { // 
    var self = this;
    var watch = this.$options.watch;
    // console.log('watch',watch);
    if(!watch) return;
    Object.keys(watch).forEach(key => {
      new Watcher(self, key, watch[key]);
    });
  }
}