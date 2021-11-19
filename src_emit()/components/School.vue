<template>
  <div>
      <h1>学校：</h1>
      <button @click="getSchoolName(name)">点击获取学校详情</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return{
            name:'昔冰-collage'
        }
    },
}
</script>

<style>

</style>