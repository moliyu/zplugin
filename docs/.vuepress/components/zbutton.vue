<template>
    <div class="button">
        <zbutton>主要按钮</zbutton>
        <zbutton normal>无背景</zbutton>
        <zbutton p=30>左右padding为30px</zbutton>
        <zbutton disable f="16">字体大小16px</zbutton>
        <zbutton border>边框颜色</zbutton>
        <zbutton gray>灰色</zbutton>
        <zbutton bg="#3ebe8c" hover="yellow" active="pink" nt="black" ht="green" at="orange">自定义</zbutton>
    </div>
</template>

<script>
import zbutton from '../../../src/plugins/zbutton'
export default {
    components: {
        zbutton
    }
}
</script>

<style lang="scss" scoped>
.button {
    div {
       margin-bottom: 15px; 
    }
}
</style>