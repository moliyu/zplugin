<template>
    <div class="ztable">
        <div class="header" :style="`font-size: ${f}px;color: ${fcolor}`">
            <div class="item" @click.prevent="chooseAll(item, index)" v-for="(item, index) in header" :key="index" :style="`flex:${item.name=='选择'?'none':per&&per[index]};max-width:${item.name=='选择'&&200}px;};border-right:${border&&'1px solid #E0E2E6'};border-left:${index==0&&border&&'1px solid #E0E2E6'}`">
                <div class="ztitle" :style="`height:${headerh}px;justify-content:${!Object.is(center,undefind)&&'center'||!Object.is(right,undefind)&&'flex-end'};`">
                    <slot :name="item.name" :header="{data:item,index}">
                        <div>
                            <i v-if="index==0&&select" class="iconfont" :class="selectAll?'icon-select':'icon-unselect'" :style="`color:${selectAll?scolor:unscolor}`"></i>
                            <div v-else>{{item.name}}</div>
                        </div>
                    </slot>
                </div>
                <div class="data" v-for="(data,i) in dataList" :key="i" @mouseenter="enter(i)" :ref="`b${i}`" :style="`background:${zebra&&i%2==0&&zebra[0]||zebra&&i%2==1&&zebra[1]};transiton:all .3s ease;height: ${bodyh}px;justify-content:${!Object.is(center,undefind)&&'center'||!Object.is(right,undefind)&&'flex-end'};`" @mouseleave="leave(i)">
                    <!-- <slot :name="item.name+i" :row="{...data,index,i}">
                        {{data[item.prop]}}
                    </slot> -->
                    <slot :name="index" :body="{data,index,i}">
                        <i v-if="item.name=='选择'" @click.stop="choose(data, i)" class="iconfont" :class="data.select?'icon-select':'icon-unselect'" :style="`color:${data.select?scolor:unscolor}`"></i>
                        <div v-else>
                            {{data[item.prop]}}
                        </div>
                    </slot>
                    <slot name="test"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ztable',
    data() {
        return {
            hindex: -1,
            styleObj: {color: 'red'},
            undefind: undefined,
            selectAll: false
        }
    },
    props: {
       border: null,
       fcolor: null,
       dataList: null,
       header: null,
       hover: {default: '#F2F6FC90'},
       headerh: null,
       bodyh: null,
       f: null,
       center: false,
       right: false,
       per: null,
       zebra: null,
       select: null,
       unscolor: {default: '#dcdfe6'},
       scolor: {default: '#3ebe8c'},
    },
    watch: {
        select(val) {
            if(val) {
                this.header.unshift({prop:'select', name: '选择'})
            }else {
                this.header.shift()
            }
        },
    }, 
    created() {
        if(this.select) {
            if(this.header[0].prop!='select') {
                this.header.unshift({prop:'select', name: '选择'})
            }
        }
        this.dataList.map(item => {
            this.$set(item, 'select', false)
        })
    },
    methods: {
        enter(i) {
            this.$refs[`b${i}`].map(item => {
                item.style.background = this.hover
            })
        },
        leave(i) {
            // this.hindex = -1 
            this.$refs[`b${i}`].map(item => {
                if(this.zebra) {
                    if(i%2==0) {
                        item.style.background = this.zebra[0]
                    }else {
                        item.style.background = this.zebra[1]
                    }
                }else {
                    item.style.background = '#ffffff'
                }
            })
        },
        choose(data, i) {
            if(this.select) {
                data.select = !data.select
                let find = this.dataList.findIndex(item => item.select == false)
                if(find == -1) {
                    this.selectAll = true
                }else {
                    this.selectAll = false
                }
            }
            let list = []
            list = this.dataList.filter(item => item.select == true)
            this.$emit('chooseList', list)
        },
        chooseAll(item, index) {
            if(this.select&&index==0) {
                let find = this.dataList.findIndex(item => item.select == false)
                this.dataList.map(item => {
                    if(find == -1) {
                        item.select = false
                        this.selectAll = false
                    }else {
                        item.select = true
                        this.selectAll = true
                    }
                })
                if(this.selectAll) {
                    this.$emit('chooseList', this.dataList)
                }else {
                    this.$emit('chooseList', [])
                }
            }
        }
    }
}
</script>

<style lang="scss">
.ztable {
    width: 100%;
    .iconfont {
        // margin-right: 20px;
        // color: #3ebe8c; transition: all .3s linear;
        &:hover {cursor: pointer;}
    }
    .icon-select {color: #3ebe8c; }
    .icon-unselect {color: #2a303e; }
    .header {
        display: flex;
        align-items: center;
        font-size: 14px;
        .item {
            flex: auto;
            .ztitle {
                background: #F2F6FC;
                height: 35px;
                display: flex;
                align-items: center;
                padding: 0 20px;
            }
            .data {
                height: 35px;
                display: flex;
                align-items: center;
                padding: 0 20px;
                background: #ffffff;
                transition: all .3s ease;
                border-bottom: 1px solid #ebeef5;
            }
        }
    }
    .body {
        display: flex;
        flex: 1;
    }
}
</style>