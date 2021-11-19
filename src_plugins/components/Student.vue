<template>
    <div>
      <h2 @click="showname">学生姓名：{{name}}</h2>
      <h2>学生性别：{{gender}}</h2>
      <h2>配偶：{{partner | mySlice}}</h2>
      年龄：<input type="text" v-bfocus:value="age">
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'昔冰',
            gender:'男',
            age:18
        }
    },

}
</script>

<style>

</style>