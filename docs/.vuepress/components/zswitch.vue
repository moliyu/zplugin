<template>
    <div class="zswitch">
        <zswitch></zswitch>
        <zswitch :toggle="true"></zswitch>
        <zswitch :toggle="toggle" @click.native="toggle=!toggle"></zswitch>
        <zswitch :toggle="toggle1" open="red" close="orange" bbg="blue"  @click.native="toggle1=!toggle1"></zswitch>
        <zswitch  w=50 h=20 :toggle="toggle2" @click.native="toggle2=!toggle2"></zswitch>
    </div>  
</template>

<script>
import zswitch from '../../../src/plugins/zswitch/zswitch'
export default {
    components: {
        zswitch
    },
    data() {
        return {
            toggle: false,
            toggle1: false,
            toggle2: true,
        }       
    }
}
</script>

<style lang="scss" scoped>
.zswitch {
    display: flex;
    align-items: center;
    div+div {
        margin-left: 20px;
    }
    div {
        margin-bottom: 15px;
    }
}
</style>