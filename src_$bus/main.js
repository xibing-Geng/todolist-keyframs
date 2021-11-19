import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 在创建之前给注册/安装全局事件总线
    // 所有的vc和vm都能访问到
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')