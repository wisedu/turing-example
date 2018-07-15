import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import iView from 'bh-iview';
Vue.use(iView);
import tgTuring from 'tg-turing';
Vue.use(tgTuring);
window["tg-turing"] = tgTuring;

import tgTuringAntd from 'tg-turing-antd';
Vue.use(tgTuringAntd);
// tgTuringAntd.init();

// tgTuringAntd.defaults.antd.

Vue.directive('tg-funckey', {
    inserted: function(el,binding) {
        let authkeys = [];
        let authkeys_str = window.sessionStorage.getItem("tg-authkeys");
        if (authkeys_str !== undefined && authkeys_str !== null) {
            authkeys = authkeys_str.split(",")
        }
        let funckeys = binding.value.split(",");
        if (authkeys.some(item => funckeys.indexOf(item) > -1) ) {
            el.parentNode.removeChild(el);
        }
    }
})


tgTuring.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
tgTuring.axios.defaults.transformRequest = [function (data) {
    var ret = []
    for (var it in data) {
        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
    }
    return ret.join('&');
}],
tgTuring.defaults.beforeFindAll[0] = function(action, params, props) {
    return Object.assign({}, params.where, {
        pageSize: props.pageSize,
        pageNumber: props.pageNumber
    })
}
tgTuring.defaults.afterFindAll[0] = function(data, action){
    return data.data.datas[action.name];
}

tgTuring.defaults.getDictData[0] = function (dict, params, callback){
    tgTuring.utils.Post(dict.url, {"searchValue": params.key}).then(function(result) {
        var datas;
        try{
            datas = result.data.datas.code.rows.map(function(item) {
                return {
                    label: item["name"],
                    value: item["id"]
                }
            })
            callback(datas);
        } catch (e) {
            console.error(e, result);
        }
    })
};
tgTuring.defaults.getDictTreeData[0] = function (dict, params, callback){
    var treeParams = {};
    if (params !== undefined && params.key !== undefined) {
        treeParams = {"pId": params.key};
    }
    tgTuring.utils.Post(dict.url, treeParams).then(function(result) {
        var datas;
        try{
            datas = result.data.datas.code.rows.map(function(item) {
                item["label"] = item["name"];
                item["value"] = item["id"];
                if (item["isParent"] === 1) {
                    item["children"] = [];
                    item["loading"] = false;
                }
                return item;
            })
            if (params !== undefined && params.key !== undefined) {
            }else {
                datas = window["tg-turing"].utils.toTreeData(datas, "", {ukey:"id", pkey:'pId', toCKey:'children'})
            }
            callback(datas);
        } catch (e) {
            console.error(e, result);
        }
    })
};
tgTuring.defaults.getDictTreeOneData[0] = function (dict, params, callback){
    tgTuring.utils.Post(dict.url, {"id": params.key,"checkParent": true}).then(function(result) {
        var datas;
        try{
            datas = result.data.datas.code.rows.map(function(item) {
                item["label"] = item["name"];
                item["value"] = item["id"];
                return item;
            })
            datas = window["tg-turing"].utils.toTreeData(datas, "", {ukey:"id", pkey:'pId', toCKey:'children'})
            callback(datas);
        } catch (e) {
            console.error(e, result);
        }
    })
};



import home from './pages/home.vue';
import users from './pages/users.vue';

Vue.use(VueRouter)

if(process.env.NODE_ENV === 'development'){
    window.apiPath = "http://localhost:8080/emap/sys/funauthapp/modules";
}else{
    window.apiPath = ".";
}

const routes = [
    { path: '/home', component: home, name:"首页" },
    { path: '/users', component: users, name:"用户管理" },
]
const router = new VueRouter({
    routes,
})

  
new Vue({
    el:"#root",
    render:h=>h(App),
    router
})
