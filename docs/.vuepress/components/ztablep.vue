<template>
<div class="tableperson">
    <ztable :header="header" hover="#1989fa" center :zebra="['green','red']" :dataList="list">
        <div slot="姓名">更改姓名列标题</div>
        <template v-slot:数据="row">{{row.header.data}}</template>
        <template v-slot:name="row">
            <div style="color: blue">{{row.body.data.value}}</div>
        </template>
    </ztable>
</div>
</template>

<script>
import ztable from '../../../src/plugins/ztable/ztable'
export default {
    components: {
        ztable
    },
    data() {
        return {
            header: [
                {prop:'name', name: '姓名'},
                {prop:'value', name: '数据'},
                {prop:'sex', name: '性别'}
            ],
            list: [
                {name: '张三', value: '张三的数据', sex:'男'},
                {name: '王五', value: '王五的数据', sex: '男'},
                {name: '馨儿', value: '馨儿的数据', sex: '女'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.tableperson {
    margin-bottom: 15px;
}
</style>