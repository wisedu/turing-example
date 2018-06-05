import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import iView from 'bh-iview';
import 'bh-iview/dist/styles/iview.css';
Vue.use(iView);
import tgTuring from 'tg-turing';
import 'tg-turing/dist/css/default/tg-turing.min.css';
Vue.use(tgTuring);
window["tg-turing"] = tgTuring;

import tgTuringIview from 'tg-turing-iview';
Vue.use(tgTuringIview);
tgTuringIview.init();

import home from './pages/home.vue';

Vue.use(VueRouter)

if(process.env.NODE_ENV === 'development'){
    window.apiPath = "http://127.0.0.1:7001";
}else{
    window.apiPath = ".";
}

const routes = [
    { path: '/', component: home, name:"首页" },
]
const router = new VueRouter({
    routes,
})

  
new Vue({
    el:"#root",
    render:h=>h(App),
    router
})
