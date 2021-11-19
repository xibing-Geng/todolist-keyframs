<template>
  <div>
      <h1>学校：</h1>
      <button >点击获取学校详情</button>
      <h3>现在有个学生是：{{stuname}}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return{
            name:'昔冰-collage',
            stuname:''
        }
    },
    methods:{
        getName(msgName,nameData){
            this.stuname=nameData
        }
    },
    mounted() {
        // this.pid=pubsub.subscribe('wantStuName',this.getName)
        this.pid=pubsub.subscribe('wantStuName',(msgName,nameData)=>{
            this.stuname=nameData
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubid)
    }
}
</script>

<style>

</style>