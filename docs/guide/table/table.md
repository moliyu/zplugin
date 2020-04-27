---
title: table
pageClass: custom-page-class
---
<clientOnly>
<demo name="table" detail="常用表格组件">
<ztable></ztable>
<highlight-code slot="code" lang="vue" class="code">
&ltztable :header="header" :dataList="list">&lt/ztable>
&ltscript>
export default {
    data() {
        return {
            header: [{prop:'name', name: '姓名'},{prop:'value', name: '数据'},{prop:'sex', name: '表头'}]
            list: [
                {name: '张三', value: '张三的数据', sex:'男'},
                {name: '王五', value: '王五的数据', sex: '男'},
                {name: '馨儿', value: '馨儿的数据', sex: '女'},
            ]
        }
    }
}
&lt/script>
</highlight-code>
</demo>
<demo detail="可以选择的表格" tableIndex=1>
<ztableselect></ztableselect>
<highlight-code slot="code" lang="vue" class="code">
&ltztable :header="header" :dataList="list" :select="true" @chooseList="handleChooseList">&lt/ztable>
&ltscript>
export default {
    data() {
        return {
            header: [{prop:'name', name: '姓名'},{prop:'value', name: '数据'},{prop:'sex', name: '表头'}]
            list: [
                {name: '张三', value: '张三的数据', sex:'男'},
                {name: '王五', value: '王五的数据', sex: '男'},
                {name: '馨儿', value: '馨儿的数据', sex: '女'},
            ]
        }
    },
    methods: {
        handleChooseList(chooseList) {
            console.log(chooseList)
        }
    }
}
&lt/script>
</highlight-code>
</demo>
<demo detail="自定义表格" tableIndex=2>
<ztablep></ztablep>
<highlight-code slot="code" lang="vue" class="code">
&ltztable :header="header" hover="#1989fa" center :zebra="['green','red']" :dataList="list">
  &ltdiv slot="姓名">更改姓名列标题&lt/div>
  &lttemplate v-slot:数据="row">数据列标题:{{row.header.data}}&lt/template>
  &lttemplate v-slot:name="row">
        &ltdiv style="color:blue">{{row.body.data.value}}&lt/div>
  &lt/template>
&lt/ztable>
&ltscript>
export default {
    data() {
        return {
            header: [
                {prop:'name', name: '姓名'},
                {prop:'value', name: '数据'},
                {prop:'sex', name: '表头', width: '100px'}
            ],
            list: [
                {name: '张三', value: '张三的数据', sex:'男'},
                {name: '王五', value: '王五的数据', sex: '男'},
                {name: '馨儿', value: '馨儿的数据', sex: '女'},
            ]
        }
    }
}
&lt/script>
</highlight-code>
</demo>
<params :list="list"></params>
<params :header="header" :list="eventList" ename="event" zname="表格事件"></params>
<params :header="header2" :list="slotList" ename="slot" zname="插槽"></params>
</clientOnly>

<script>
export default {
    data() {
        return {
            list: [
                {params: 'widthList', detail: '如["200px","200px","300px"],设置每列宽度,支持百分比', type: 'Array', choose: '-', default: '-'},
                {params: 'hover', detail: '鼠标悬浮颜色', type: 'string', choose: '-', default: '#F2F6FC90'},
                {params: 'header', detail: '表头信息', type: 'Array', choose: '-', default: '-'},
                {params: 'select', detail: '使表格变为选择状态', type: 'boolean', choose: 'true/false', default: 'false'},
                {params: 'center', detail: '有该字段则居中,默认左对齐', type: '-', choose: 'center/right', default: '-'},
                {params: 'scolor', detail: '选择时选择框的颜色', type: 'string', choose: '-', default: '#3ebe8c'},
                {params: 'zebra', detail: '斑马条纹,列如["red","blue"]', type: 'Array', choose: '-', default: '-'},
                {params: 'rowStyle', detail: '表头样式', type: 'Object', choose: '-', default: '-'},
                {params: 'cellStyle', detail: '表样式', type: 'Object', choose: '-', default: '-'},
                {params: 'unscolor', detail: '未选择时选择框的颜色', type: 'string', choose: '-', default: '#dcdfe6'},
                {params: 'dataList', detail: '表信息,prop对应dataList键值', type: 'Array', choose: '-', default: '-'},
            ],
            header: [
                {prop: 'event', name: '事件名'},
                {prop: 'detail', name: '说明'},
                {prop: 'param', name: '参数'},
            ],
            eventList: [
                {event:'chooseList', detail:'动态响应选择的列', param: '-'}
            ],
            slotList: [
                {slot:'v-slot:表头名称=row', detail:'表头插槽', param: 'row.header.data'},
                {slot:'v-slot:prop=row', detail:'列插槽', param: 'row.body.data'},
            ],
            header1: [
                {prop: 'slot', name: '插槽'},
                {prop: 'detail', name: '说明'},
                {prop: 'param', name: '参数'},
            ],
            header2: [
                {prop: 'slot', name: '插槽'},
                {prop: 'detail', name: '说明'},
                {prop: 'param', name: '参数'},
            ],
            row: {
                header: {data:'{{row.header.data}}'},

                body: {data:{value: '{{row.body.data.value}}'}}
            }
        }
    }
}
</script>

<style>

</style>