<template>
    <ul class="todo-main">
        <!-- 向子组件中传值，绑定todo -->
        <!-- 由于MyItem组件中不只1个li元素，所以要使用tansition-group，一定要注意内部元素要添加 key 属性 否则只能出现最新的那个，也会报错！-->
        <transition-group name="comeGo" :appear="true">
            <MyItem v-for="todoobj in todos" 
                    :key="todoobj.id" 
                    :todo="todoobj" 
                    :changeBox="changeBox" 
                    :deleteTodo="deleteTodo">
            </MyItem>
        </transition-group>
        <!-- 除此之方式外，还可以在MyItem组件中对li进行动画设置，就不用transition-group了 -->
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

@keyframes comeGo{
  from{transform: translateX(100%);}to{transform: translateX(0px);}
}
.comeGo-enter-active{animation: comeGo 0.5s;}
.comeGo-leave-active{animation: comeGo 0.5s reverse;}
</style>