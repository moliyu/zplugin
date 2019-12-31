<template>
  <div class="demo">
    <h3>{{name}}</h3>
    <p>{{detail}}</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot></slot>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <slot name="code"></slot>
        </div>
      </div>
      <div class="lock-code" @click="showCode(tableIndex)" ref="xxx">
        <span class="code-text">{{isShow[tableIndex] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
    },
    // props: ['name', 'detail', 'tableIndex'],
    props: {
        name: null,
        detail: null,
        tableIndex: {default: 0}
    },
    data() {
      return {
        codeStr: `
          <g-button>默认按钮</g-button>
          <g-button>默认按钮</g-button>
        `.replace(/^\s*/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
