<template>
  <div>
      <h1>学校：</h1>
      <button @click="getSchoolName(name)">点击获取学校详情</button>
      <h3>现在有个学生是：{{stuname}}</h3>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return{
            name:'昔冰-collage',
            stuname:''
        }
    },
    mounted() {
        this.$bus.$on('ScWantStu',(data)=>{ this.stuname=data})
    },
}
</script>

<style>

</style>