import {DataAdapter} from 'tg-turing'
import tgTuringAntd from 'tg-turing-antd';
export default class extends DataAdapter{
    constructor() {
        super()
        let views = {
            "default": {
                ACCOUNTID: { caption: "登录帐号" },
                PASSWORD: { caption: "密码" },
                ACCOUNTNAME: { caption: "昵称" },
                EMAIL: { caption: "邮箱" },
                CELLPHONE: { caption: "手机" },
                USERTYPE: { caption: "用户类型" },
                USERSTATE: { "caption": "用户状态" },
            },
            "默认列表:table": {
                ACCOUNTID: {  },
                PASSWORD: {  },
                ACCOUNTNAME: {  },
                EMAIL: {  },
                CELLPHONE: {  },
                USERTYPE: {  },
                USERSTATE: {  },
            },
            "默认表单:form": {
                ACCOUNTID: { required:true },
                PASSWORD: { required:true },
                ACCOUNTNAME: { required:true },
                EMAIL: { checkType: "custom[email]" },
                CELLPHONE: { checkType: "custom[phone]" },
                USERTYPE: { "xtype": "select", "url": "/emap/code/91c0d3ea-7efc-4b5c-b021-f3d211f5291c/userType.do", required:true },
                USERSTATE: { "xtype": "select", "url": "/emap/code/91c0d3ea-7efc-4b5c-b021-f3d211f5291c/userState.do", required:true },
            },
            "默认查询": {
            }
        }
        this.actions.findAll.url = "/emap/sys/funauthapp/modules/yhgl/T_FUNA_USER_QUERY.do";
        this.actions.save.url = "/emap/sys/funauthapp/modules/yhgl/T_FUNA_USER_MODIFY.do";
        this.actions.delete.url = "/emap/sys/funauthapp/modules/yhgl/T_FUNA_USER_DELETE.d";

        this.initView(views);
    }
    view(name, params) {
        let props = name.split(":")
        let type = props[1];
        return tgTuringAntd.Adapter(type, this.getView(name), params);
    }
}