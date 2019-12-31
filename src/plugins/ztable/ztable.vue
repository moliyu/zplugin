<template>
    <div class="ztable">
        <table class="table" :style="`font-size: ${f}px;color: ${fcolor}`">
            <tr>
                <th v-for="(item, index) in header" :class="{center:!Object.is(center, undefind),right: !Object.is(right, undefind)}" :key="index" :style="{width: widthList&&widthList[index],border:border&&`1px solid #E0E2E6`,...rowStyle}">
                    <slot :name="item.name" :header="{data:item,rowIndex: index}">
                        <div v-if="item.prop=='select'"><i class="iconfont" :class="selectAll?'icon-select':'icon-unselect'" @click.prevent="chooseAll"></i></div>
                        <div v-else>{{item.name}}</div>
                    </slot>
                </th>
            </tr>
            <tr v-for="(body, i) in dataList" :key="i" @mouseenter="enter(i)" :style="`background: ${i==active&&hover||zebra&&i%2==0&&zebra[0]||zebra&&i%2==1&&zebra[1]||''}`" @mouseleave="leave()">
                <td v-for="(data, index) in header" :key="index" :class="{center:!Object.is(center, undefind),right: !Object.is(right, undefind)}" :style="{border:border&&`1px solid #E0E2E6`,...cellStyle}">
                        <slot :name="data.prop" :body="{data: body,cellIndex: i, rowIndex: index}">
                            <div v-if="data.prop=='select'"><i class="iconfont" :class="body.select?'icon-select':'icon-unselect'" @click.prevent="choose(body,i)"></i></div>
                            <div v-else>{{body[data.prop]}}</div>
                        </slot>
                </td>
            </tr>
        </table>
        <div class="nodata" v-if="!dataList.length>0" :class="border&&'border'">{{nodata}}</div>
    </div>
</template>

<script>
export default {
    name: 'ztable',
    props: {
        header: null,
        dataList: null,
        fcolor: null,
        f: null,
        rowStyle: null,
        cellStyle: null,
        fix: null,
        select: null,
        center: null,
        right: null,
        hover: {default: '#F2F6FC90'},
        zebra: null,
        widthList: null,
        select: null,
        unscolor: null,
        scolor: null,
        border: null,
        nodata: {
            type: String,
            default: '暂无数据'
            }
    },
    data() {
        return {
            active: -1,
            undefind: undefined,
            selectAll: false
            // isSelect: false
        }
    },
    watch: {
        select(val) {
            if(val) {
                this.header.unshift({prop:'select', name: '选择'})
            }else {
                this.header.shift()
            }
        },
        dataList(val) {
            if(val) {
                this.dataList.map((item,i) => {
                    item = this.$set(item, 'select', false)
                    // return item
                })
            }
        }
    },
    methods: {
        enter(i) {
            this.active = i
            // this.$refs[`row${i}`].style.background = this.hover
        },
        leave() {
            this.active = -1
        },
        choose(data, i) {
            if(this.select) {
                // console.log('单机', data)
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
        chooseAll() {
            if(this.select) {
                // console.log('全选')
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
    },
    created() {
        if(this.select) {
            if(this.header[0].prop!='select') {
                this.header.unshift({prop:'select', name: '选择'})
            }
            // this.dataList.map(item => {
            //     this.$set(item, 'select', false)
            // })
        }
        this.dataList.map((item,i) => {
            item = this.$set(item, 'select', false)
            // return item
        })
    }
}
</script>

<style lang="scss" scoped>
table {
    border-collapse: collapse;
    // border: 1px solid;
    width: 100%;
    font-size: 14px;
    color: #2a303e;
    .iconfont {
        font-weight: normal;
        background: #ffffff;
        &:hover {cursor: pointer;}
    }
    .icon-select {color: #3ebe8c; }
    .icon-unselect {color: #dcdfe6; }
    .center {text-align: center}
    .right {text-align: end}
    th {
        background: #F2F6FC;
        // border: 1px solid;
        text-align: left;
        padding: 10px;
        white-space: nowrap;
        // border-right: 1px solid #E0E2E6;
        &:last-child {
            border-right: none;
        }
    }
    td {
        text-align: left;
        // border: 1px solid #E0E2E6;
        border-bottom: 1px solid #ebeef5;
        padding: 10px;
        word-break: break-all;
        // border: 1px solid
    }
}
.nodata {
    text-align: center;
    padding: 10px;
    font-size: 14px;
    color: #2a303e;
    border-bottom: 1px solid #ebeef5
}
.border {
    border: 1px solid  #E0E2E6;
    border-top: 0;
    border-bottom: 1px solid #ebeef5;
}
</style>