<template>
    <div>
        <tg-toolbar>
            <div slot="left">
                <Button type="primary" @click="openModal(true)" v-tg-funckey="'abc'">新增</Button>
                <Button type="error" @click="openModal(true)" v-tg-funckey="'1d,4d'">删除</Button>
                <span v-tg-funckey="'4d'">
                    <Button type="warning" @click="openModal(true)">修改</Button>
                </span>
            </div>
        </tg-toolbar>
        <Table :columns="columns" :data="data">

        </Table>
        <Modal v-model="isModalShow" title="用户信息" @on-ok="ok" @on-cancel="cancel" :loading="modalLoading">
            <tg-form ref="form" :fields="fields" :column="2"></tg-form>
        </Modal>
    </div>
</template>

<script>
import {EMAPDataAdapter} from 'tg-turing'
import tgTuringAntd from 'tg-turing-antd';
import meta from '../../json/user_model.json'
let inst = new EMAPDataAdapter(tgTuringAntd.Adapter);
inst.refresh(meta, "T_FUNA_USER_QUERY")
export default {
    data(){
        return {
            columns:inst.view("grid:table"),
            data:[],
            fields: inst.view("form:form"),
            isModalShow: false,
            modalLoading: true
        }
    },
    created(){
        inst.findAll().then(results => {
            this.data = results.rows
        })
    },
    methods:{
        openModal(isNew){
            this.isModalShow = true;
        },
        ok(){
            this.$refs.form.validate(result => {
                if (result === true) {
                    console.log(result)
                    this.isModalShow = false;
                } else {
                    this.isModalShow = true;
                    this.modalLoading = false;
                }
                // this.isModalShow = true;
            })
            return false
        },
        cancel(){

        }
    }
}
</script>

<style>

</style>
