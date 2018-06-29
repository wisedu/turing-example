import Vue from 'vue'
import VueRouter from 'vue-router'
import funauth from './funauth.vue'
import iView from 'bh-iview';
Vue.use(iView);
import tgTuring from 'tg-turing';
Vue.use(tgTuring);
window["tg-turing"] = tgTuring;

import tgTuringAntd from 'tg-turing-antd';
Vue.use(tgTuringAntd);
tgTuringAntd.init();


Vue.use(VueRouter)

if(process.env.NODE_ENV === 'development'){
    window.apiPath = "http://127.0.0.1:7001";
}else{
    window.apiPath = ".";
}

const routes = [
    // { path: '/home', component: home, name:"首页" },
]
const router = new VueRouter({
    routes,
})

  
new Vue({
    el:"#root",
    render:h=>h(funauth),
    router
})
