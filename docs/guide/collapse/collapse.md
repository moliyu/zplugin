---
title: collase
pageClass: custom-page-class
---
<clientOnly>
<demo name="collase" detail="收缩展开">
<zcollapse></zcollapse>
<highlight-code slot="code" lang="vue" class="code">
&ltzbutton class="button" @click.native="show=!show" style="margin: 0 auto">展开/收缩&lt/zbutton>
&ltzcollapse>
    &ltdiv v-if="show" style="background: #2888eb; padding: 10px; color: #ffffff">
        我是内部的内容
    &lt/div>
&lt/zcollapse>
&ltscript>
export default {
    data() {
        return {
            show: false
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
                {params: 'v-if/v-show', detail: '传入一个布尔值', type: 'Boolean', choose: '-', default: '-'},
            ]
        }
    }
}
</script>

<style>

</style>