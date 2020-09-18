<template>
  <!-- 
    操作元素的 class 列表和内联样式是数据绑定的一个常见需求。
    因为它们都是 attribute，
    所以我们可以用 v-bind 处理它们：
    只需要通过表达式计算出字符串结果即可。
    不过，字符串拼接麻烦且易错。因此，
    在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

    对象语法:
  -->
  <div>
    <!-- 可以使用两个值 -->
    <div>
      <p :class="{active:isactive,entityerror:erroractive}">我是一个一般的P标签我的颜色是蓝色</p>
    </div>
    <div></div>
    <p :class="[activeclass,headererror]">我是文本嘛</p>
    <!-- 三目运算符 -->
    <p :class="[isflag ? 'flag':'']"></p>
    <!-- 数组嵌套数组 -->
    <p :class="[activeclass,isflag ? 'flag':'',{actives:isactive}]">这是文档5</p>
    <!--  style color代表是值 -->
    <p :style="{color:'blue',fontSize:fontSize+'px'}">请给我赋值一个颜色</p>

    <!--  计算属性 =>数据去重 -->
    <div>
      {{qchongfun}}
    </div>
    <div>
      {{arrayfail}}
    </div>
    <!-- 表单数据双向绑定 -->
    <div>
      <input type="text" name="" id="" v-model.trim="password">
      <p>
        {{password}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password:'', // 空对象
      isactive: true, //如果isactive 为true 则显示
      erroractive: true,
      activeclass: "active", //数组
      headererror: "entityerror",
      isflag: false,
      //    iscolor:'blue'
      fontSize: "40",
      strarray:'a a b a b e',
      arraypass:["a","a","b",'b','c','c','a','d']
    };
  },
  //侦听器
  watch:{
   password(val){
     if(val === '/var')
      {
        console.log('😊');
      }
     console.log(val);
   }
  },
  computed:{
    qchongfun(){
      //字符串去重
      //return 一个结果合并 一下
      console.log(this.strarray)
      this.strarray = this.strarray.match(/\S+/g);//等价于str.split(/\s+/g)// \s空白符，\S非空白符
      this.strarray.sort();
      for(var i=this.strarray.length-1;i>0;i--){
        if(this.strarray[i] == this.strarray[i-1]){
          this.strarray.splice(i,1);
        }
      }
      return this.strarray.join(" ");
    },
    arrayfail(){
      //  数组去重
      // var len = this.arraypass.length;
      this.arraypass.sort(); //sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
      for(var i=this.arraypass.length-1; i>0; i--){
        if( this.arraypass[i] == this.arraypass[i-1]){
          this.arraypass.splice(i,1);
        }
      } 
      console.log(this.arraypass);
      return this.arraypass;
    }
  }
};
</script>

<style lang="">
.active {
  color: blue;
}
.entityerror {
  color: brown;
}
</style>