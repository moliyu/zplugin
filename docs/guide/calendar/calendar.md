---
title: 日历
pageClass: custom-page-class
---
<clientOnly>
<demo name="calendar" detail="日历挂件-日期单选">
<zcalendar></zcalendar>
<highlight-code slot="code" lang="vue" class="code">
&lt;div class="zcalendar">
    &lt;zcalendar :date="{year: 2020, month: 1, day: 1}" @select="handleSelect"></zcalendar>
&lt;/div>
&ltscript>
export default {
    methods: {
        handleSelect(val) {
            /*
            如果传入:range="true", 返回{start: {}，end: {}}
            日期单选返回当前年月日
            */
            console.log(val)
        }
    }
}
&lt/script&gt
</highlight-code>
</demo>
<demo detail="日历挂件-日期多选" tableIndex=1>
<zcalendar1></zcalendar1>
<highlight-code slot="code" lang="vue" class="code">
&lt;div class="zcalendar">
    &lt;zcalendar :range="true" @select="handleSelect"></zcalendar>
&lt;/div>
&ltscript>
export default {
    methods: {
        handleSelect(val) {
            /*
            如果传入:range="true", 返回{start: {}，end: {}}
            日期单选返回当前年月日
            */
            console.log(val)
        }
    }
}
&lt/script&gt
</highlight-code>
</demo>
<params :list="list"></params>
</clientOnly>

<script>
export default {
    data() {
        return {
            list: [
                {params: 'date', detail: '{year:2020, month: 1, day: 1}/new Date()', type: 'Object/String', choose: '-', default: 'new Date()'},
                {params: 'range', detail: '为true时可以选择时间区间', type: 'Boolean', choose: '-', default: 'false'},
                {params: 'weekStyle', detail: '设置周样式，例:weekStyle={color: red}', type: 'Object', choose: '-', default: '{}'},
                {params: 'dayStyle', detail: '设置日期样式，例:dayStyle={color: red}', type: 'Object', choose: '-', default: '{}'},
                {params: 'color', detail: '设置本月日期颜色', type: 'String', choose: '-', default: '#2a303e'},
                {params: 'otherColor', detail: '设置非本月日期颜色', type: 'String', choose: '-', default: '#8897aa'},
                {params: 'chooseColor', detail: '设置本月日期选中颜色', type: 'String', choose: '-', default: '#409eff'},
                {params: 'chooseTextColor', detail: '设置本月日期选中字体颜色', type: 'String', choose: '-', default: '#ffffff'},
            ],
            select: "select"
        }
    }
}
</script>

<style>

</style>