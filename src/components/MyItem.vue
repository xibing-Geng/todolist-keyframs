<template>
  <!-- <transition name="comeGo" appear> -->
        <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="changeBox(todo.id)"/>
            <!-- 以下方法也可以实现选项框的勾选同步功能，但是不推荐！
            Vue不建议修改props数据，done作为todo的属性，虽内部属性改变，但是对象没有变（对象地址没变），
            Vue不做深层监测，所以不报错，如果直接暴力改对象，或者改某个单一的props值，控制台会报错 -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <!-- 失去焦点或者按下回车后都可以进行内容的提交 -->
            <input type="text" 
              v-show="todo.isEdit" 
              :value="todo.title" 
              @blur="handleBlur(todo,$event)" 
              @keyup.enter="handleBlur(todo,$event)"
              ref="editInp"
              >
          </label>
          <button class="btn btn-danger" @click="deleteobj(todo.id)">删除</button>
          <button class="btn btn-edit" @click="editobj(todo)">编辑</button>
          <!-- 有个问题注意下：在点击编辑后input会出现，但是当input失去焦点时才会提交更新的内容，
          不过input一出来可是没有做焦点获取处理，所以还得去点一下再点别处才能完成提交内容，
          如果通过伴随编辑按钮的点击事件让input获取焦点也可以，不过要逐层去获取到这个DOM元素，又回归了DOM操作 -->
        </li>
  <!-- </transition> -->
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 子组件接收绑定的属性todo
    props:['todo'],
    methods:{
       // 删除
        deleteobj(id){
            // 删除时作出提示，并发布删除条目的消息，传递要删除条目的id
            if(confirm('确定要删除这条？')) pubsub.publish('deleteId',id)
        },
        changeBox(id){
          this.$bus.$emit('changeBox',id)
        },
        // 点击编辑按钮之后的回调
        editobj(todo){
          // 出发时间后先判断它上面存不存在idEdit属性，不存在就添加
          // 不能使用!todo.isEdit，这样是对它上面的值进行读取，不是判断有没有
          if(Object.prototype.hasOwnProperty.call(todo,"isEdit")){
            todo.isEdit=true
          }else{
            // 没有这个属性就通过set来设置，否则Vue无法通过get来获取到其值的变化
            this.$set(todo,'isEdit',true)
          }
          // 通过nextTick来实现input获取焦点/或者也可以使用定时器，借助异步操作
          /* setTimeout(function(){
            this.$refs.editInp.focus()
          }) */
          // nextTick作用在于，在下一次DOM更新结束后执行它的回调
          // 当改变数据后，要基于更新后的DOM进行某些操作时，在nextTick的回调中执行
          this.$nextTick(function(){
            this.$refs.editInp.focus()
          })
        },
        // input失去焦点时的回调，更改编辑状态，通过事件对象e来获取其value值
        handleBlur(todo,e){
          todo.isEdit=false
          // 通过全局事件总线完成传值
          this.$bus.$emit('updateTodo',todo.id,e.target.value)
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
/* 编写动画效果 */
/* @keyframes comeGo{
  from{transform: translateX(100%);}to{transform: translateX(0px);}
}
.comeGo-enter-active{animation: comeGo 0.5s;}
.comeGo-leave-active{animation: comeGo 0.5s reverse;} */
</style>