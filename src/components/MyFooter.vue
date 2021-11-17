<template>
  <!-- 如果条目数为0则不显示底部操作栏 -->
    <div class="todo-footer" v-show="total">
        <label>
          <!-- 表达式方法1 -->
          <!-- <input type="checkbox" :checked="doneTotal===total"/> -->
          <!-- 函数方法2 -->
          <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
          <!-- 计算属性方法3之v-model isAll管状态的呈现，checkAll管交互，可以汇合为v-model-->
          <input type="checkbox" v-model="isAll" >
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
  props:['todos',"checkIsOrNo",'clearAllDone'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      // 借助reduce方法，两个参数，第一个是业务逻辑，用于计数的话第二个是0，从0开始，第一次的返回值会作为第二次的pre传入，累计
      return this.todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    },
    /* isAll(){
      // 当选中的数量等于总数时全选，前提：总数得是大于零的，否则全勾再全删，条目们都没了，但是全选状态依旧残存
      return this.doneTotal===this.total && this.total>0
    }, */

    /* 搭配v-model的isAll，如果只做数据的获取可以直接用上面的方法，取得返回值
    但是v-model涉及双向，也就不能使用简写，需要配备set */
    isAll:{
      get(){
        return this.todos.length===this.doneTotal && this.total>0
      },
      // set中的value也就是新的值，由于是input，所以这里的value也就是选中框的选中状态
      set(value){
        this.checkIsOrNo(value)
      }
    }
  },
  methods:{
    // 搭配计算属性isAll
    /*checkAll(e){
      this.checkIsOrNo( e.target.checked )
    }, */
    clearAll(){
      if(confirm('真的要清空已完成的？')) this.clearAllDone()
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>