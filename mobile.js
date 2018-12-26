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
import tgFormDidi from 'tg-form-didi';
Vue.use(tgFormDidi);
import initMixinSdk from 'bh-mixin-sdk';
window.initMixinSdk = initMixinSdk;
// import 'core-js/features/array';
// import 'core-js/features/string';
// import 'core-js/features/promise';


import 'tg-turing/dist/css/default/tg-turing.min.css';
import 'tg-turing/dist/style/default/tg-turing.css';
import 'tg-form-didi/dist/tg-turing-didi.min.css';
import 'tg-ui/lib/style.css';
