<template>
    <div>
      <h2 @click="showname">专业：{{name}}</h2>
      <h2>简称：{{nick}}</h2>
      <h2 >搭配：{{partner | mySlice}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'计算机学科与技术',
            nick:'计科',
            partner:'PC科'
        }
    }
}
</script>

<style>

</style>