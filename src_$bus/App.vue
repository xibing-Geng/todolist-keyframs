<template>
  <div id="box">
      <!-- 方式1：使用父组件向子组件传值的方法来完成：props；
            子组件调用父组件传递过来的方法将自己的name值传递进去，
            由于方法属于父组件所以也就执行父组件中函数的业务逻辑 
      -->
      <School :getSchoolName="getSchoolName"></School>
      <!-- 方式2：使用自定义事件来完成 -->
      <!-- <Student @giveMe="getStudentName"></Student> -->

      <!-- 方式3：使用ref -->
      <Student ref="stu"></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    components:{School,Student},
    methods:{
        getSchoolName(name){
            alert(name)
        },
        getStudentName(name,...params){
            alert(name)
            console.log(params);
        }
    },
    mounted() {
        // 绑定自定义事件
        // this.$refs.stu.$on('giveMe',this.getStudentName)
        // 绑定自定义事件-一次性
        this.$refs.stu.$once('giveMe',this.getStudentName)
        // 这里调用了getStudentName函数，其实也可以直接把函数体放到这里，
        //不过， 需要是箭头函数，如果是普通函数，内部的this会被当作这个事件的应用者Student这个组件对象，而非App组件对象
        // this.$refs.stu.$once('giveMe',(name)=>{ alert(name) })
    },
}
</script>

<style>
 #box{
    width: 300px;
    height: 400px;
    background-color: coral;
    padding: 10px;
 }
</style>