import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
            // 并不是所有的组件都适合使用全局事件总线。父子之间传值可以沿用函数传递或props，祖孙之间可以借助事件总线去做
    }
}).$mount('#app')