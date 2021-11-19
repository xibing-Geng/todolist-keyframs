<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :changeBox="changeBox" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :checkIsOrNo="checkIsOrNo" :clearAllDone="clearAllDone"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    components:{
        MyHeader,MyList,MyFooter
    },
    data(){
        return{
            todos:[
                {
                    id:'001',title:'学习前端',done:true
                },{
                    id:'002',title:'进击西二旗',done:false
                },{
                    id:'003',title:'热爱大自然',done:true
                }
            ]
        }
    },
    // 数据在哪里，对数据进行操作的函数就写在哪个组件里
    methods:{
      // 添加一个todo对象
        addTodo(newTodoobj){
            this.todos.unshift(newTodoobj);
        },
        // 改变todo对象的完成状态（复选框布尔切换）
        changeBox(id){
          this.todos.forEach((todoobj)=>{
            if(todoobj.id==id) todoobj.done=!todoobj.done
          })
        },
        // 删除一个todo对象，由于filter方法起过滤作用，但是不会改变原数组，Vue也就不会侦测到，也就不会做内容的更新
        // 所以可以把筛选后的结果（排除删除的那一项）赋值给原数组，实现了原数组的更改，Vue重新渲染模板
        deleteTodo(id){
        /*this.todos= this.todos.filter((todo)=>{
            return todo.id!==id
          }) */
          this.todos=this.todos.filter((todo)=>todo.id!==id)
        },
        // 让全选按钮的选中状态去控制条目们的选中状态
        checkIsOrNo(status){
          this.todos.forEach((todo)=>{
            todo.done=status
          })
        },
        // 清空所有已完成的条目
        clearAllDone(){
          this.todos=this.todos.filter((todo)=> !todo.done)
        }        
   }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>