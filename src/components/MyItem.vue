<template>
        <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="changeBox(todo.id)"/>
            <!-- 以下方法也可以实现选项框的勾选同步功能，但是不推荐！
            Vue不建议修改props数据，done作为todo的属性，虽内部属性改变，但是对象没有变（对象地址没变），
            Vue不做深层监测，所以不报错，如果直接暴力改对象，或者改某个单一的props值，控制台会报错 -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteobj(todo.id)">删除</button>
        </li>
</template>

<script>
export default {
    name:'MyItem',
    // 子组件接收绑定的属性todo
    props:['todo','changeBox','deleteTodo'],
    methods:{
       // 删除
        deleteobj(id){
            // 删除时作出提示
            if(confirm('确定要删除这条？')) this.deleteTodo(id)
        }
    }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
 
/* 当鼠标悬浮时让li颜色高亮 */
li:hover{
  background-color: coral;
}
/* 当鼠标在li上悬浮时，让这个li的button显示出来 */
li:hover button{
  display: block;
}
</style>