<template>
    <div>
      <h2 @click="showName">专业：{{name}}</h2>
      <h2>简称：{{nick}}</h2>
      <h2 @click="showPei">搭配：{{partner}}</h2>
  </div>
</template>

<script>
// 引入混合模块
import {mixShowname} from '../mixin-usedemo'
export default {
    name:'School',
    data(){
        return {
            name:'计算机学科与技术',
            nick:'计科',
            partner:'PC科'
        }
    },
/*     methods:{
        showName(){
            alert(this.name)
        }
    } */
    // 引入的混合无论一个还是多个都必须写到数组中，数组对象为mixins
    mixins:[mixShowname],
    // 对于钩子来说，不冲突，自己的钩子和引入的mixin中的钩子都会调用
    mounted() {
        console.log('自身挂载已完成');
    },
    // 对于这里的挂载，先用mixin的挂载，再用调自己的挂载，和代码顺序有关
}
</script>

<style>

</style>