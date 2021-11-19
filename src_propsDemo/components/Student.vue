<template>
  <div class="box1">
      <h1>学生：{{name}}</h1>
      <h2>性别：{{gender}}</h2>
      <h2>年龄：{{age}}</h2>
      <h2>座右铭：{{msg}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    // data() {
    //     return {
    //         name:'昔冰_G',
    //         age:18
    //     }
    // },

    // 子组件对父组件传值的接收写在props中
    /* 方式1：
        props:['name','gender','age','msg'],
    方式2：
        props:{
            name:String,
            gender:String,
            age:Number,
            msg:String
        },
    方式3： */
    props:{
        name:{
            type:String
        },
        gender:{
            type:String
        },
        age:{
            type:Number,
            defaults:18
        },
        msg:{
            type:String
        }
    }
}
</script>

<style>
    .box1{
        width: 380px;
        height: 300px;
        background-color: aquamarine;
        line-height: 60px;
        text-align: center;
    }
</style>