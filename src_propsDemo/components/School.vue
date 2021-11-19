<template>
  <div class="box-sch">
    <h1>专业：{{major}}</h1>
      <Student name="昔冰" :age="20" gender="男" msg="积善者必有余庆"></Student>
      <Student name="小耿" :age="23" gender="男" msg="进击西二旗"/>
  </div>
</template>

<script>
import Student from './Student.vue'
export default {
    name:'School',
    data() {
        return {
            major:'计算机科学与技术'
        }
    },
    components:{
        Student
    }
}
</script>

<style>
.box-sch{
    width: 380px;
    height: auto;
    background-color: coral;
}
.box-sch>h1{
    text-align: left;
}
</style>