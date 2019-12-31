<template>
    <div class="back" :style="`background:${toggle?open:close};transition: background .3s linear;width: ${w}px;height:${h}px`">
        <div class="ball" :style="styleObject"></div>
    </div>
</template>

<script>
export default {
    name: 'zswitch',
    data() {
        return {
            styleObject: {
                transition: `all .3s linear`,
                transform: '',
                width: `${Number(this.h)+4}px`,
                height: `${Number(this.h)+4}px`,
                marginTop: `-${Number(this.h/2)+2}px`,
                borderRadius: `${Number(this.h)+4}px`,
                background: this.bbg
            }
        }
    },
    methods: {
        slide() {
            this.toggle=!this.toggle
            if(this.toggle) {
                this.styleObject.transform = `translateX(${this.w - this.h - 3}px)`
            }else {
                this.styleObject.transform = `translateX(-1)px`
            }
        }
    },
    props: {
        w: {default: 32},
        h: {default: 13},
        open: {default: '#33AE00'},
        close: {default: '#2A303E'},
        bbg: {default: '#D2DEEE'},
        toggle: {default: false}
    },
    created() {
        if(this.toggle) {
            this.styleObject.transform = `translateX(${this.w - this.h - 3}px)`
        }
    },
    watch: {
        toggle(val) {
            if(val) {
                this.styleObject.transform = `translateX(${this.w - this.h - 3}px)`
            }else {
                this.styleObject.transform = `translateX(-1px)`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.back {
    cursor: pointer;
    width: 32px;
    height: 13px;
    border-radius: 13px;
    position: relative;
    .ball {
        position: absolute;
        left: -1px;
        top: 50%;
    }
}
</style>