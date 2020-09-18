<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <kind-view/> -->
    <!-- <styleview> -->
    <!-- <style-view/> -->
    <!--  加冒号表示变量,不加冒号 -->
    <!-- <mycomponent  myName="name" age="20"/> -->
    <!--  事件对应一个处理函数 -->
    <Helloview title="hello" @onEvent="getsendHendler"/>
    <div>
      {{current}} 
      <!--  通过 data 可以拿到 子传父的数据 -->
    </div>
    <!-- Invalid prop: type check failed for prop "age". Expected Number with value NaN, got String with value "age".
    无效属性：属性“age”的类型检查失败。需要值为NaN的数字，而得到的字符串值为“age”。
 -->
  </div>
</template>

<script>
import kindonce from './components/kindonce'
import styleclass from './components/styleclass'
import mycomponent from './components/mycomponents'
import Helloview from './components/Helloview'
export default {
  name: 'App',
  //  注入组件,挂载到...
  data(){
    return{
      age:20,
      arrays:['xiaomao','xiaogou','xiaohua'],
      current:''//父传子
    }
  },
  methods:{
    //子传父传参
    getsendHendler(data){
      // console.log(data,"子传父的数据");
      this.current = data;
    }
  },
  components:{
    'kind-view':kindonce,
    'style-view':styleclass,
     mycomponent,
     Helloview,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
