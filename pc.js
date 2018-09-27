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

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());