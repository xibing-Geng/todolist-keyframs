<template>
    <ul class="todo-main">
        <!-- 向子组件中传值，绑定todo -->
        <MyItem v-for="todoobj in todos" :key="todoobj.id" :todo="todoobj" :changeBox="changeBox" :deleteTodo="deleteTodo"></MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    props:['todos','changeBox','deleteTodo'],
    components:{
        MyItem
    }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>