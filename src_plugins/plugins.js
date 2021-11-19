export default {
    install(Vue) {
        // 定义全局过滤器
        Vue.filter('mySlice', function(value) {
                return value.slice(0, 2)
            }),

            // 定义全局指令
            Vue.directive('bfocus', {
                bind(ele, binding) {
                    ele.value = binding.value + 1
                },
                inserted(ele) {
                    ele.focus()
                },
                update(ele, binding) {
                    ele.value = binding.value + 1
                },
            }),

            // 定义混入
            Vue.mixin({
                data() {
                    return {
                        name: 'mixin-昔冰',
                        partner: '柴子宝贝'
                    }
                }
            }),
            //原型上定义方法
            Vue.prototype.showname = () => { alert('你点到我的名字咯') }
    }
}