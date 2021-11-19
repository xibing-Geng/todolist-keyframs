<template>
  <div>
      <h1>学员：{{name}}</h1>
      <button @click="sendToSch">给School传name</button><br/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data(){
        return{
            name:'昔冰',
            age:23,
            birth:'05.30'
        }
    },
    methods:{
        sendToSch(){
           this.pubid= pubsub.publish('wantStuName',this.name)
        }
    },
}
</script>

<style>

</style>