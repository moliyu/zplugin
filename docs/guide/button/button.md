---
title: button
pageClass: custom-page-class
---
<clientOnly>
<demo name="button" detail="常用按钮">
<zbutton></zbutton>
<highlight-code slot="code" lang="vue" class="code">
&ltzbutton&gt主要按钮&lt/zbutton&gt
&ltzbutton normal&gt主要按钮&lt/zbutton&gt
&ltzbutton p=30&gt左右padding为30px&lt/zbutton&gt
&ltzbutton disable f="16"&gt字体大小为16px&lt/zbutton&gt
&ltzbutton border&gt边框颜色&lt/zbutton&gt
&ltzbutton gray&gt灰色&lt/zbutton&gt
&ltzbutton bg="#3ebe8c" hover="yellow" active="pink" nt="black" ht="green" at="orange"&gt自定义&lt/zbutton&gt
</highlight-code>
</demo>
<params :list="list"></params>
</clientOnly>

<script>
export default {
  name: 'app',
  components: {
    // demo
  },
  data() {
      return {
          list: [
              {params: 'p', detail: '左右padding', type: 'Number', choose: '-', default: '20'},
              {params: 'h', detail: '按钮高度', type: 'Number', choose: '-', default: '40'},
              {params: 'f', detail: '字体大小', type: 'Number', choose: '-', default: '14'},
              {params: 'w', detail: '按钮宽度', type: 'Number', choose: '-', default: '-'},
              {params: 'bg', detail: '默认背景色', type: 'string', choose: '-', default: '#409eff'},
              {params: 'hover', detail: '悬浮背景色', type: 'string', choose: '-', default: '#64b0fe'},
              {params: 'active', detail: '点击背景色', type: 'string', choose: '-', default: '#2888eb'},
              {params: 'disable', detail: '禁用按钮', type: '-', choose: '-', default: '-'},
              {params: 'nt(normalfont)', detail: '默认字体颜色', type: 'string', choose: '-', default: '#ffffff'},
              {params: 'ht(hoverfont)', detail: '悬浮字体颜色', type: 'string', choose: '-', default: '#ffffff'},
              {params: 'at(hoverfont)', detail: '点击字体颜色', type: 'string', choose: '-', default: '#ffffff'},
              {params: 'nb', detail: '默认边框颜色', type: 'string', choose: '-', default: 'transparent'},
              {params: 'hb', detail: '悬浮边框颜色', type: 'string', choose: '-', default: 'transparent'},
              {params: 'ab', detail: '点击边框颜色', type: 'string', choose: '-', default: 'transparent'},
          ],
      }
  }
}
</script>