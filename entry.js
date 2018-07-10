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

import 'core-js/features/array';
import 'core-js/features/string';
import 'core-js/features/promise';

if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }

            return {
                add: update(function(classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function(classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function(classes, index, value) {
                    if (~index)
                        classes.splice(index, 1);
                    else
                        classes.push(value);
                }),

                contains: function(value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function(i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}

import 'tg-turing/dist/css/default/tg-turing.min.css';
import 'tg-turing/dist/style/default/tg-turing.css';
import 'tg-turing-antd/dist/tg-turing-antd.min.css';