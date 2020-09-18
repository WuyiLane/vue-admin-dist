<template>
  <div>
    <div>{{count}}</div>
    <button @click="ontup">我是按钮</button>
    <div>{{title}}</div>
    <p>{{myName}}</p>
     <p>{{age}}</p>
    <div>
      <ul v-for="(item,index) in arrays" :key="index">
        {{item}}
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mycomponent",
  //  data 必须是一个纯函数,因为data是个纯函数，意味着组件每次被调用，都会创建一个新的组件
  //要加同加 要减同减
  data() {
    return {
      count: 0,
    };
  },
  //读取props
  // props: ["title","myName","age"], //和return 状态值的读取方案是一样的
  props:{
    title:{
      type: String,
      default:"标题" //默认值 //如果title 不存在
    },
    age:{
      type:(Number,String),
      required:true
      }, // 必选项 你传也要传，不传也要传

      //默认值 数组和对象的默认值必须是工厂模式
    myName:String,
    arrays:{
      type:Array,
      default:function(){
        return ['saitang','xiaosatang']
      }  
       }
  },
  // 但是，通常你希望每个 prop 
  //都有指定的值类型。
  //这时，你可以以对象形式列出 prop，
  //这些 property 的名称和值分别是 prop 各自的名称和类型：
  //
  methods: {
    ontup() {
      this.count += 2;
    },
  },
};
</script>

<style>
</style>