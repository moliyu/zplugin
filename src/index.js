import zbutton from './plugins/zbutton/index'
import zswitch from './plugins/zswitch/index'
import ztable from './plugins/ztable/index'
import zprogress from './plugins/zprogress/index'
import zcollapse from './plugins/zcollapse/index'

const components = [
    zbutton,
    zswitch,
    ztable,
    zprogress,
    zcollapse
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    // 这里除了注册组件，还可以做一些其他的东西
    // 你可以在Vue的原型上扩展一些方法
    // eg:element-ui
    //      Vue.prototype.$message = Message;
    //      使用：this.$message({message:"xxxxx",type:"success"});
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.0.1',
    install,
    zbutton,
    zswitch,
    ztable,
    zprogress,
    zcollapse
};