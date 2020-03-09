<template>
    <div class="zcalendar">
        <zcalendar :range="true" @select="handleSelect"></zcalendar>
    </div>
</template>

<script>
import zcalendar from '../../../src/plugins/zcalenda/zcalenda'
export default {
    components: {
        zcalendar
    },
    methods: {
        handleSelect(val) {
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.zcalendar {
    margin-bottom: 15px;
}
</style>