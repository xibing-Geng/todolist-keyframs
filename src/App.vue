<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
        <!-- <MyHeader :addTodo="addTodo"></MyHeader> -->
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <!-- <MyFooter :todos="todos" :checkIsOrNo="checkIsOrNo" :clearAllDone="clearAllDone"></MyFooter> -->
        <MyFooter :todos="todos" @checkIsOrNo="checkIsOrNo" @clearAllDone="clearAllDone"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
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
            // todos:[]
            // 从localStorage中读取todos  首次使用没有localStorage，也就todos对应的是Null，那么在解析todos的length时没有这个就会报错
            // 所以用一个或者的关系，前者为真则先走前者，前者为假再走后者
            todos:JSON.parse(localStorage.getItem('todos')) || []
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
        deleteTodo(_,id){
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
        },
        // 修改todo内容
        updateTodo(id,value){
          this.todos.forEach((todo)=>{
            if(todo.id===id) todo.title=value
          })
        }        
   },
  //  使用watch监听todos是否有更改，有更改的话就把新的值赋给它，把这个值存到localStorage中（目的：刷新不丢）
  watch:{
    todos:{
      // 为了可以侦测到todos内部每个todo对象的选中状态，添加deep来做深度监听
      deep:true,
      // 由于deep配置项的存在，这里就不能再使用简写形式了，就得借助handler来处理逻辑
      handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
      } 
    }
  },
  mounted(){
    // 使用全局事件总线完成复选框改变
    this.$bus.$on('changeBox',this.changeBox)
    // 使用pubsub消息订阅来完成删除操作
    this.pid=pubsub.subscribe('deleteId',this.deleteTodo)
    // 使用全局事件总线来完成input编辑修改功能
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy(){
    this.$bus.$off('changeBox')
    this.$bus.$off('updateTodo')
    // 在组件销毁之前取消订阅，以消息id来定位消息
    pubsub.unsubscribe(this.pid)
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

.btn-edit {
  color: #fff;
  background-color: #2382f0;
  border: 1px solid #3e22a1;
  margin-right: 5px;
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