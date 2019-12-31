import './public/index.scss'
import '../../src/icon/iconfont.css'
import 'highlight.js/styles/color-brewer.css' 
import  VueHighlightJS  from  'vue-highlight.js';
// import  'highlight.js/styles/dark.css';
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
   }) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS)
   }