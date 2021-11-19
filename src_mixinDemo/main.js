import Vue from 'vue'
import App from './App.vue'
// 引入混合模块
import { mixShowpei } from './mixin-usedemo'

Vue.config.productionTip = false
    // 全局配置混合模块
Vue.mixin(mixShowpei)

new Vue({
    render: h => h(App),
}).$mount('#app')