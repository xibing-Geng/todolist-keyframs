<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addobj"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data(){
        return{
            title:''
        }
    },
    // 接收从App传来的方法addTodo，接收后出现在vc上，那MyHeader的模板、方法中都可以直接使用
    // props:['addTodo'],
    methods:{
        // 添加
        addobj(){
            // 如果为空则提示，并且驳回后续的添加操作
            if(!this.title) return alert('输入不能为空滴！')
            // 将用户输入的内容包装成一个todo对象，再加入到todo数组中，使用nanoid模块来生成id
            const todoobj={id:nanoid(),title:this.title,done:false}
            // 调用App传过来的方法并把数据对象传进去（App中会把数据存到data数组中）
            // this.addTodo(todoobj)
            this.$emit('addTodo',todoobj)
            // 将输入框置空
            this.title=''
        }
        // 修改复选框状态这里没有用自己的函数承接，因为单纯的做值改变，没有条件限制，所以不用做判断，也就直接放到事件中调用了
    }
}
</script>

<style scoped>
/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>