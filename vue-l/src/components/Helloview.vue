<template>
<!--  自定义事件 子传父数据  
如何通过 helloview => 传递给app 数据
-->
  <div>
      <div>{{title}}</div>
      <button @click="sendhendler">send</button>
      <!--  插槽 -->
  </div>
</template>

<script>
export default {
  name:'Helloview',
  data(){
    return{
      msg:'helloAre you help you'
    }
  },
  props:{
    title:{
      type:String,
      default:''
    }
  },
  methods:{
    sendhendler(){
      /* 
        $emit 是子传父
         参数1 为 自定义事件
         参数2 为 传递的参数
         去发送一个事件
         //onEvent 和父亲的事件是相同的
         父里的data 就是helloworld
         也可以是动态的
       */
      this.$emit('onEvent',this.msg)
    }
  }
}
</script>

<style>

</style>