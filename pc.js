import 'core-js/features/object/assign';
import 'core-js/features/object/entries';
import 'core-js/features/object/get-own-property-descriptor';
import 'core-js/features/object/is';
import 'core-js/features/object/set-prototype-of';
import 'core-js/features/object/values';
import 'core-js/features/array/copy-within';
import 'core-js/features/array/entries';
import 'core-js/features/array/fill';
import 'core-js/features/array/find';
import 'core-js/features/array/find-index';
import 'core-js/features/array/flat';
import 'core-js/features/array/flat-map';
import 'core-js/features/array/from';
import 'core-js/features/array/includes';
import 'core-js/features/array/keys';
import 'core-js/features/array/of';
import 'core-js/features/string/anchor';
import 'core-js/features/string/code-point-at';
import 'core-js/features/string/ends-with';
import 'core-js/features/string/from-code-point';
import 'core-js/features/string/includes';
import 'core-js/features/string/pad-end';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/raw';
import 'core-js/features/string/repeat';
import 'core-js/features/string/starts-with';
import 'core-js/features/string/trim-end';
import 'core-js/features/string/trim-start';
import 'core-js/features/promise';
import 'core-js/features/reflect';


import 'tg-turing/dist/css/default/tg-turing.min.css';
import 'tg-turing/dist/style/default/tg-turing.css';
import 'tg-turing-antd/dist/tg-turing-antd.min.css';


/*! Polyfill for requestAnimationFrame/cancelAnimationFrame */
"use strict";if(!Date.now)Date.now=function(){return(new Date).getTime()};(function(){var n=["webkit","moz"];for(var e=0;e<n.length&&!window.requestAnimationFrame;++e){var i=n[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"];window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var a=0;window.requestAnimationFrame=function(n){var e=Date.now();var i=Math.max(a+16,e);return setTimeout(function(){n(a=i)},i-e)};window.cancelAnimationFrame=clearTimeout}})();

/*! DOMTokenlist shim | Copyright 2016 Jonathan Wilsson and Bogdan Chadkin. */
"undefined"!=typeof window&&function(e){"use strict";if(e.DOMTokenList){var t=document.createElement("a").classList,n=DOMTokenList.prototype,i=n.add,o=n.remove,r=n.toggle;t.add("c1","c2");var s=function(e){return function(){var t,n=arguments;for(t=0;t<n.length;t+=1)e.call(this,n[t])}};t.contains("c2")||(n.add=s(i),n.remove=s(o)),t.toggle("c1",!0)||(n.toggle=function(e,t){return void 0===t?r.call(this,e):((t?i:o).call(this,e),!!t)})}}(window),"undefined"!=typeof window&&function(e){"use strict";var t=[],n=function(e,n){var i;if(t.indexOf)return t.indexOf.call(e,n);for(i=0;i<e.length;i++)if(e[i]===n)return i;return-1},i=function(e){var t=/[\u0009\u000A\u000C\u000D\u0020]/;if(""===e||t.test(e))throw new Error("Token must not be empty or contain whitespace.")},o=function(e,t){var n,i=this,o=[];if(e&&t&&(i.element=e,i.prop=t,e[t]))for(o=e[t].replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<o.length;n++)i[n]=o[n];i.length=o.length};o.prototype={add:function(){var e,n=this,o=arguments;for(e=0;e<o.length;e++)i(o[e]),n.contains(o[e])||t.push.call(n,o[e]);n.element&&(n.element[n.prop]=n)},contains:function(e){return i(e),-1!==n(this,e)},item:function(e){return this[e]||null},remove:function(){var e,o,r=arguments,s=this;for(o=0;o<r.length;o++)i(r[o]),e=n(s,r[o]),-1!==e&&t.splice.call(s,e,1);s.element&&(s.element[s.prop]=s)},toggle:function(e,t){var n=this;return n.contains(e)?t?!0:(n.remove(e),!1):t===!1?!1:(n.add(e),!0)},toString:function(){return t.join.call(this," ")}},e.DOMTokenList=o}(window),"undefined"!=typeof window&&function(){"use strict";"classList"in document.createElement("a")||Object.defineProperty(Element.prototype,"classList",{get:function(){return new DOMTokenList(this,"className")}})}(),"undefined"!=typeof window&&function(){"use strict";if(!("relList"in document.createElement("a"))){var e,t=[HTMLAnchorElement,HTMLAreaElement,HTMLLinkElement],n=function(){return new DOMTokenList(this,"rel")};for(e=0;e<t.length;e++)Object.defineProperty(t[e].prototype,"relList",{get:n})}}(),"undefined"!=typeof window&&function(){"use strict";if("undefined"!=typeof SVGElement){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");"classList"in e&&!window.QUnit||Object.defineProperty(SVGElement.prototype,"classList",{get:function(){return"string"==typeof this.className?new DOMTokenList(this,"className"):"string"==typeof this.className.baseVal?new DOMTokenList(this.className,"baseVal"):void 0}})}}();


import Vue from 'vue'
window.Vue = Vue;
import Vuex from 'vuex';
Vue.use(Vuex);
window.Vuex = Vuex;
import VueRouter from 'vue-router';
Vue.use(VueRouter);
window.VueRouter = VueRouter;
// import iView from 'bh-iview';
// Vue.use(iView);
import tgTuring from 'tg-turing';
Vue.use(tgTuring);
window["tg-turing"] = tgTuring;
import tgTuringAntd from 'tg-turing-antd';
Vue.use(tgTuringAntd);