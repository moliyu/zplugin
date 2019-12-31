<template>
    <div class="ztable">
        <ztable :header="header" :dataList="list"></ztable>
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
.ztable {
    margin-bottom: 15px;
}
</style>