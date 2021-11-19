<template>
    <div>
      <h2 @click="showName">学生姓名：{{name}}</h2>
      <h2>学生性别：{{gender}}</h2>
      <h2 @click="showPei">配偶：{{partner}}</h2>
  </div>
</template>

<script>
// 引入混合模块---【注意名字保持一直，mixin.js中暴露的是什么，这里就用什么名字做接收，否则报错】
import {mixShowname,mixNum} from '../mixin-usedemo'
export default {
    name:'Student',
    // mixNum中存在name的值，但是这里data中已经有name的定义，所以以本文件为主
    // 对于data中没有定义的partner属性，可以使用mixin中的数据，和混入与data的放置顺序无关
    mixins:[mixShowname,mixNum],
    data(){
        return {
            name:'昔冰',
            gender:'男'
        }
    },
/*     methods:{
        showName(){
            alert(this.name)
        }
    } */

}
</script>

<style>

</style>