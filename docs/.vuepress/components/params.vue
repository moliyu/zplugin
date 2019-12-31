<template>
   <div class="params">
       <h3>{{ename}}</h3>
        <p>{{zname}}</p>
        <ztable center :header="header" :dataList="list"></ztable>
   </div>
</template>

<script>
import ztable from '../../../src/plugins/ztable/ztable'
export default {
    data() {
        return {
            
        }
    },
    props: {
        list: null,
        header: {
            default: () => {
                return [
                    {prop: 'params', name: '参数'},
                    {prop: 'detail', name: '说明'},
                    {prop: 'type', name: '类型'},
                    {prop: 'choose', name: '可选值'},
                    {prop: 'default', name: '默认值'},
                ]
            },
        },
        ename: {default: 'attributes'},
        zname: {default: '组件参数说明'}
    },
    components: {
        ztable
    }
}
</script>

<style>

</style>