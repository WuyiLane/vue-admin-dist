<template>
  <div>
      ComponentB
      {{this.$root.count}}
      {{this.$root.getCount()}}
      {{this.$parent.readMsg}} 
      <!--  父级 -->
      <ComponentC/>
      <div>
        <ul>
          <li v-for="(item,index) in arraymsg" :key="index">
            {{item}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import ComponentC from './ComponentC'  //异步加载
// const ComponentC = ()=> import('./ComponentC') //会加载1.js同步加载
export default {
    name:"ComponentB",
    data(){
      return{
        arraymsg:[
          '小米','小猫','小弟'
        ]
      }
    },
    created(){
      console.log(this.arraymsg)
    },
    components:{
      ComponentC
    },
}
</script>

<style>

</style>