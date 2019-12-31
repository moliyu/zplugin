---
title: switch
pageClass: custom-page-class
---
<clientOnly>
<demo name="switch" detail="滑块组件">
<zswitch></zswitch>
<highlight-code slot="code" lang="vue" class="code">
&ltzswitch&gt&lt/zswitch&gt
&ltzswitch :toggle="true"&gt&lt/zswitch&gt
&ltzswitch :toggle="toggle" @click.native="toggle=!toggle"&gt&lt/zswitch&gt
&ltzswitch :toggle="toggle1" open="red" close="orange" bbg="blue"  @click.native="toggle1=!toggle1">&lt/zswitch>
&ltzswitch  w=50 h=20 :toggle="toggle2"&gt&lt/zswitch&gt
&ltscript&gt 
export default {
    data() {
        return {
            toggle: false,
            toggle1: false,
            toggle2: true
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
                {params: 'w', detail: '宽度', type: 'Number', choose: '-', default: '32'},
                {params: 'h', detail: '高度', type: 'Number', choose: '-', default: '13'},
                {params: 'open', detail: '打开时的背景色', type: 'string', choose: '-', default: '#33AE00'},
                {params: 'close', detail: '关闭时的背景色', type: 'string', choose: '-', default: '#2A303E'},
                {params: 'bbg', detail: '圆球背景色', type: 'string', choose: '-', default: '#D2DEEE'},
                {params: 'toggle', detail: '开关状态', type: 'boolean', choose: 'true/false', default: 'false'},
            ]
        }
    }
}
</script>

<style>

</style>