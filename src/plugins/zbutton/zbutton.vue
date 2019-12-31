<template>
  <div
    class="zbt"
    :class="btclass"
    :style="styleObject"
    ref="zbutton"
    @mouseenter="enter"
    @mouseleave="leave"
    @mousedown="down"
    @mouseup="up"
  >
    <div class="bt">
      <slot name="pre"></slot>
      <div class="text">
        <slot></slot>
      </div>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "zbutton",
  props: {
    p: null,
    h: null,
    f: null,
    w: null,
    nt: {default: '#ffffff'},
    ht: null,
    at: null,
    normal: null,
    border: null,
    gray: null,
    active: null,
    hover: null,
    disable: null,
    bg: null,
    nb: {default: 'transparent'},
    ab: null,
    hb: null
  },
  data() {
    return {
      mbg: "#409eff",
      mhover: "#64b0fe",
      mactive: "#2888eb",
      btclass: [],
      styleObject: {},
      isDisable: false,
      bcolor: null
    };
  },
  created() {
    if (this.bg) this.mbg = this.bg;
    if (this.active) this.mactive = this.active;
    if (this.hover) this.mhover = this.hover;
    this.styleObject = {
      padding: `0 ${this.p}px`,
      height: `${this.h}px`,
      lineHeight: `${this.h}px`,
      fontSize: `${this.f}px`,
      width: `${this.w}px`,
      background: this.mbg,
      border: `1px solid ${this.nb}`,
      color: `${this.nt}`
    };
    if (!Object.is(this.normal, undefined)) {
      this.styleObject.background = "#ffffff";
      this.styleObject.border = `1px solid rgba(220, 223, 230, 1)`;
      this.styleObject.color = `#606266`;
    }
    if (!Object.is(this.border, undefined)) {
      this.styleObject.background = "#ffffff";
      this.styleObject.color = "#409EFF";
      this.styleObject.border = `1px solid #409EFF`;
    }
    if (!Object.is(this.gray, undefined)) {
      this.styleObject.background = "#ECF5FF";
      this.styleObject.border = `1px solid #B3D8FF`;
      this.styleObject.color = `#409EFF`;
    }
    if (!Object.is(this.disable, undefined)) {
      this.isDisable = true;
      this.styleObject.opacity = 0.5;
      this.styleObject.cursor = "not-allowed";
    }else {
        this.styleObject.cursor = 'pointer'
    }
  },
  methods: {
    enter() {
      if (this.isDisable) {
        return;
      }
      if (!Object.is(this.normal, undefined)) {
        this.styleObject.border = `1px solid #409eff`;
        this.styleObject.color = `#409eff`;
        return;
      } else if (!Object.is(this.border, undefined)) {
        this.styleObject.border = `1px solid #409eff`;
        this.styleObject.color = `#ffffff`;
        this.styleObject.background = `#409eff`;
        return;
      } else if (!Object.is(this.gray, undefined)) {
        this.styleObject.border = `1px solid #409eff`;
        this.styleObject.color = `#ffffff`;
        this.styleObject.background = `#409eff`;
        return;
      }
      this.styleObject.background = this.mhover;
      this.styleObject.color = this.ht;
      this.styleObject.border = `1px solid ${this.hb}`
    },
    leave() {
      if (this.isDisable) {
        return;
      }
      if (!Object.is(this.normal, undefined)) {
        this.styleObject.border = "1px solid rgba(220, 223, 230, 1)";
        this.styleObject.color = "#606266";
        return;
      } else if (!Object.is(this.border, undefined)) {
        this.styleObject.border = "1px solid #409eff";
        this.styleObject.color = "#409eff";
        this.styleObject.background = "#ffffff";
        return;
      } else if (!Object.is(this.gray, undefined)) {
        this.styleObject.border = "1px solid #B3D8FF";
        this.styleObject.color = "#409eff";
        this.styleObject.background = "#ECF5FF";
        return;
      }
      this.styleObject.background = this.mbg;
      this.styleObject.color = this.nt;
      this.styleObject.border = `1px solid ${this.nb}`;
    },
    down() {
      if (this.isDisable) {
        return;
      }
      if (!Object.is(this.normal, undefined)) {
        this.styleObject.border = "1px solid #2888eb";
        this.styleObject.color = "#2888eb;";
        return;
      } else if (!Object.is(this.border, undefined)) {
        this.styleObject.background = "#2888eb";
        this.styleObject.color = "#2888eb;";
        return;
      }
      this.styleObject.background = this.mactive;
      this.styleObject.color = this.at;
      this.styleObject.border = `1px solid ${this.ab}`;
    },
    up() {
      if (this.isDisable) {
        return;
      }
      if (!Object.is(this.normal, undefined)) {
        this.styleObject.border = "1px solid #409eff";
        this.styleObject.color = "#409eff;";
        return;
      } else if (!Object.is(this.border, undefined)) {
        this.styleObject.background = "#409eff";
        this.styleObject.color = "#409eff;";
        return;
      }
      this.styleObject.background = this.mhover;
      this.styleObject.color = this.ht;
      this.styleObject.border = `1px solid ${this.hb}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.zbt {
  display: inline-block;
  font-size: 14px;
  padding: 0 20px;
  height: 40px;
  color: #ffffff;
  font-weight: 400;
  border-radius: 4px;
  user-select: none;
  position: relative;
  white-space: nowrap;
  .bt {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
.none {
  opacity: 0.5;
  cursor: not-allowed !important;
}
</style>