<template>
    <div class="zprogress" :style="`height: ${h}px;background: ${bg};border-radius: ${h/2}px`">
        <div v-if="play" class="per" :style="`width: calc(${per*(1+2/100)}% + ${2*per/100}px);transition: ${per<100&&per>0&&'all .3s linear'};height: ${h}px;background: ${perbg};border-radius: ${h/2}px`"></div>
        <div v-else class="per" :style="`width: calc(${per*(1+2/100)}% + ${2*per/100}px);transition: ${'all .3s linear'};height: ${h}px;background: ${perbg};border-radius: ${h/2}px`"></div>
    </div>
</template>

<script>
export default {
    name: 'zprogress',
    props: ['per', 'h', 'bg', 'perbg', 'play']
}
</script>

<style lang="scss" scoped>
.zprogress {
    height: 8px;
    border-radius: 4px;
    background: #D8DEDC;
    position: relative;
    overflow: hidden;
    .per {
        position: absolute;
        height: 8px;
        border-radius: 4px;
        left: 0;
        top: 0;
        background: #33AE81;
        z-index: 9999;
        margin-left: -1px;
    }
}
</style>