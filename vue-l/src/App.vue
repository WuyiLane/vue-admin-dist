<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <kind-view/> -->
    <!-- <styleview> -->
    <!-- <style-view/> -->
    <!--  加冒号表示变量,不加冒号 -->
    <!-- <mycomponent  myName="name" age="20"/> -->
    <!--  事件对应一个处理函数 -->
    <!-- <Helloview title="hello" @onEvent="getsendHendler"/> -->
    <div>
      <!-- {{current}}  -->
      <!--  通过 data 可以拿到 子传父的数据 -->
    </div>
    <!-- <div>
      {{Compsolt}}
    </div> -->
    <Compsolt>
      <template #header>
        <p>
          我是头部
        </p>
      </template>
      <h3>我是标题</h3>
      <h4>我是副标题</h4>
      <p>
        {{msg}}
      </p>
      <!--  定义name footer -->
      <template v-solt:footer>
        <p>我是居中显示的</p>
      </template>  
      <!--  通过名称拿到数据    数据插槽-->
      <!-- <template v-slot:dataSlot="{ getDate }">
        <h1>{{ getDate }}</h1>
      </template> -->
      <template v-slot:dataSlot="slotPress">
       <h1> {{slotPress.getDate}}</h1>
        </template>
    </Compsolt>
    <!-- Invalid prop: type check failed for prop "age". Expected Number with value NaN, got String with value "age".
    无效属性：属性“age”的类型检查失败。需要值为NaN的数字，而得到的字符串值为“age”。
 -->
      <p v-red>我是自定义指令</p>
      <p>{{20 | RMB}}</p>
      <span>{{ 30 | filterA | RMB}}</span>
  </div>
</template>

<script>
import kindonce from './components/kindonce'
import styleclass from './components/styleclass'
import mycomponent from './components/mycomponents'
import Helloview from './components/Helloview'
import Compsolt from './components/Compsolt'
export default {
  name: 'App',
  //  注入组件,挂载到...
  data() {
    return {
      age: 20,
      arrays: ['xiaomao', 'xiaogou', 'xiaohua'],
      current: '',//父传子
      msg: '我是谁',
    }
  },
  methods: {
    //子传父传参
    getsendHendler(data) {
      // console.log(data,"子传父的数据");
      this.current = data;
    }
  },
  directives: {
    red:{
      inserted(el) {
        el.style.color = 'red'
      }
    },
  },
  //局部过滤器
  filters:{
    filterA:function(value){
      if(!value);
      return "$" + value
    }
  },
  components:{
    'kind-view':kindonce,
    'style-view':styleclass,
     mycomponent,
     Helloview,
     Compsolt,
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
