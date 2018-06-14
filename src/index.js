import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import iView from 'bh-iview';
Vue.use(iView);
import MintUI from 'bh-mint-ui2'
Vue.use(MintUI)
import tgTuring from 'tg-turing';
Vue.use(tgTuring);
window["tg-turing"] = tgTuring;

import tgTuringIview from 'tg-turing-iview';
Vue.use(tgTuringIview);
tgTuringIview.init();

import tgTuringMint from 'tg-turing-mint';
Vue.use(tgTuringMint);
tgTuringMint.init();

import OaAbc from "./components/oa-abc";
Vue.component(OaAbc.name, OaAbc);

// window["tg-turing"].iview.form["text"] = "oa-abc";

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
