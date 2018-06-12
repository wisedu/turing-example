import {DataAdapter} from 'tg-turing'
import tgTuringIview from 'tg-turing-iview';
export default class extends DataAdapter{
    constructor() {
        super()
        let views = {
            "default": {
                opt:{ caption:"" },
                name: { caption: "姓名" },
                workcode: { caption: "工号" },
                photo: { caption: "照片" },
                created_at: { caption: "创建" },
                updated_at: { caption: "更新" },
                deleted_at: { caption: "删除" }
            },
            "默认列表:table": {
                opt: {type: 'selection',width: 60,align: 'center'},
                name: {sortable: "custom"},
                workcode: {sortable: "custom"},
                photo: { },
                created_at: {filters:[]},
                updated_at: {},
                deleted_at: {}
            },
            "默认表单:form": {
                photo: {xtype:"date"},
                photo2: {xtype:"date"},
                photo3: {xtype:"select"},
                photo3: {xtype:"number-range"},
                photo3: {xtype:"uploadfile"},
                "CSRQ": {"xtype": "buttonlist","dataSize": 10},
                "CSRQ1": {"xtype": "date-local","dataSize": 10},
                "CCQJ": {"xtype": "selecttable","url": "/axsfw/sys/swpubapp/*default/ggmk/hczzdmhss.do","dataSize": 300},
            },
            "默认查询": {
            }
        }
        this.actions.find.url = "/api/user";
        this.actions.save.url = "/api/user/save";
        this.actions.delete.url = "/api/user";
        this.actions.delete.method = "delete"

        this.initView(views);
    }
    view(name, params) {
        let props = name.split(":")
        let iviewtype = props[1];
        return tgTuringIview.adapter(iviewtype, this.getView(name), params);
    }
}