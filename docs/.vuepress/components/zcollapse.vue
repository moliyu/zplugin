<template>
    <div class="zcollapse">
        <zbutton class="button" @click.native="show=!show">展开/收缩</zbutton>
        <zcollapse>
            <div v-if="show" style="background: #3eaf7c; padding: 10px; color: #ffffff">
                我是内部的内容
            </div>
        </zcollapse>
    </div>
</template>

<script>
import zbutton from '../../../src/plugins/zbutton/zbutton'
import zcollapse from '../../../src/plugins/zcollapse/zcollapse'
export default {
    components: {
        zbutton,
        zcollapse
    },
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
.zcollapse {
    margin-bottom: 15px;
    box-sizing: border-box;
    text-align: center;
    .button {
        text-align: center;
    }
}
</style>