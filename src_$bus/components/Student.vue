<template>
  <div>
      <h1>学员：</h1>
      <button @click="sendName">点击获取详情</button><br/>
      <button @click="sendToSch">给school传name</button><br/>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'昔冰',
            age:23,
            birth:'05.30'
        }
    },
    methods:{
        sendName(){
            // emit指定父组件给子组件的自定义事件
            this.$emit('giveMe',this.name,this.age,this.birth)
        },
        sendToSch(){
            this.$bus.$emit('ScWantStu',this.name)
        },
        unbind(){
            // 解绑giveMe事件
            this.$off('giveMe')
            // 解绑多个事件就把多个事件放到一个数组中再传给off
            // 或者this.$off()解绑所有事件
            // 自定义事件会随着销毁钩子的执行而销毁
        }
    }
}
</script>

<style>

</style>