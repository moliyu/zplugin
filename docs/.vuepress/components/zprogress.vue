<template>
    <div class="zprogress">
        <zprogress :per="percent"></zprogress>
    </div>
</template>

<script>
import zprogress from '../../../src/plugins/zprogress/zprogress'
export default {
    components: {
        zprogress
    },
    data() {
        return {
            percent: 40
        }
    }
}
</script>

<style lang="scss" scoped>
.zprogress {
    margin-bottom: 15px;
}
</style>