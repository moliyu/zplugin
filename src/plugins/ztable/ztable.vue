<template>
  <div class="ztable">
    <table class="table" :style="`font-size: ${f}px;color: ${fcolor}`">
      <tr>
        <th
          v-for="(item, index) in header"
          :class="{center:!Object.is(center, undefind),right: !Object.is(right, undefind)}"
          :key="index"
          :style="{width: item.prop=='select'&&selectWidth||item.width&&item.width||widthList&&widthList[index],border:border&&`1px solid #E0E2E6`,...rowStyle}"
        >
          <slot :name="item.name" :header="{data:item,rowIndex: index}">
            <div v-if="item.prop=='select'">
              <i
                class="iconfont"
                :class="chooseList.length==dataList.length?'icon-select':'icon-unselect'"
                @click.prevent="chooseAll"
              ></i>
            </div>
            <div v-else>{{item.name}}</div>
          </slot>
        </th>
      </tr>
      <tr
        v-for="(body, i) in dataList"
        :key="i"
        @mouseenter="enter(i)"
        :style="`background: ${i==active&&hover||zebra&&i%2==0&&zebra[0]||zebra&&i%2==1&&zebra[1]||''}`"
        @mouseleave="leave()"
      >
        <td
          v-for="(data, index) in header"
          :key="index"
          :class="{center:!Object.is(center, undefind),right: !Object.is(right, undefind)}"
          :style="{border:border&&`1px solid #E0E2E6`,...cellStyle}"
        >
          <slot :name="data.prop" :body="{data: body,cellIndex: i, rowIndex: index}">
            <div v-if="data.prop=='select'">
              <i
                class="iconfont"
                :class="chooseList.includes(body)?'icon-select':'icon-unselect'"
                @click.prevent="choose(body,i)"
              ></i>
            </div>
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
  name: "ztable",
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
    hover: { default: "#F2F6FC90" },
    zebra: null,
    widthList: null,
    select: null,
    unscolor: null,
    scolor: null,
    border: null,
    selectWidth: null,
    nodata: {
      type: String,
      default: "暂无数据"
    }
  },
  data() {
    return {
      active: -1,
      undefind: undefined,
      chooseList: []
    };
  },
  watch: {
    select(val) {
      if (val) {
        this.header.unshift({ prop: "select", name: "选择" });
      } else {
        this.header.shift();
      }
    }
  },
  methods: {
    enter(i) {
      this.active = i;
    },
    leave() {
      this.active = -1;
    },
    choose(data, i) {
      if (this.chooseList.includes(data)) {
        this.chooseList = this.chooseList.filter(item => item !== data);
      } else {
        this.chooseList.push(data);
      }
      this.$emit("chooseList", this.chooseList);
    },
    chooseAll() {
      if (this.chooseList.length > 0) {
        this.chooseList = [];
      } else {
        this.chooseList = this.dataList;
      }
      this.$emit("chooseList", this.chooseList);
    }
  },
  created() {
    if (this.select) {
      if (this.header[0].prop != "select") {
        this.header.unshift({ prop: "select", name: "选择" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ztable {
  table {
    border-collapse: collapse;
    // border: 1px solid;
    width: 100%;
    font-size: 14px;
    color: #2a303e;
    .iconfont {
      font-weight: normal;
      background: #ffffff;
      &:hover {
        cursor: pointer;
      }
    }
    .icon-select {
      color: #3ebe8c;
    }
    .icon-unselect {
      color: #dcdfe6;
    }
    .center {
      text-align: center;
    }
    .right {
      text-align: end;
    }
    th {
      background: #f2f6fc;
      text-align: left;
      padding: 10px;
      white-space: nowrap;
      &:last-child {
        border-right: none;
      }
    }
    td {
      word-break: break-all;
      text-align: left;
      border-bottom: 1px solid #ebeef5;
      padding: 10px;
    }
  }
  .nodata {
    text-align: center;
    padding: 10px;
    font-size: 14px;
    color: #2a303e;
    border-bottom: 1px solid #ebeef5;
  }
  .border {
    border: 1px solid #e0e2e6;
    border-top: 0;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>