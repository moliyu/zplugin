---
title: switch
pageClass: custom-page-class
---
<clientOnly>
<demo name="进度条" detail="进度条组件">
<zprogress></zprogress>
<highlight-code slot="code" lang="vue" class="code">
&ltzprogress :per="percent">&lt/zprogress>
&ltscript&gt 
export default {
    data() {
        return {
            percent: 40
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
                {params: 'per', detail: '当前进度条百分比', type: 'Number/string', choose: '-', default: '32'},
                {params: 'bg', detail: '进度条背景色', type: 'string', choose: '-', default: '#D8DEDC'},
                {params: 'perbg', detail: '百分比背景色', type: 'string', choose: '-', default: '#33AE81'},
                {params: 'h', detail: '进度条高度', type: 'Number/string', choose: '-', default: '8'},
            ]
        }
    }
}
</script>

<style>

</style>