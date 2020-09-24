<template>
  <div>
    <div>组件生命周期函数</div>
    <p>{{msgg}}</p>
    <button @click="changdler">change</button>
  </div>
</template>

<script>
export default {
  name: "componentsLife",
  data() {
    return {
      msgg:'change'
    };
  },
  methods:{
    changdler(){
      this.msgg="world"
    }
  },
  //组件创建前
  beforeCreate() {
    console.log("beforeCreate", "创建组件前");
  },
  //组件创建完成
  created() {
    console.log("created", "组件创建完成");
  },
  //渲染之前
  beforeMount() {
    console.log("beforeMount", "组件渲染之前");
  },
  //渲染之后
  mounted() {
    console.log("mounted", "组件渲染之后");
  },
  //数据发生改变 开始更新
  beforeUpdate() {
    console.log("beforeUpdate", "数据更新之前");
  },
  updated() {
    console.log("updated", "数据更新之后");
  },
  //销毁之前
  beforeDestroy() {
    console.log("beforeDestroy", "数据销毁之前");
  },
  destroyed() {
    console.log("destroyed", "数据销毁之后");
  },
  //keep-alive 存在时组件被调用
  activated(){
    console.log('activated')
  },
   //keep-alive 隐藏时组件被调用
  deactivated(){
    console.log('deactivated')
  }
};
</script>

<style>
</style>