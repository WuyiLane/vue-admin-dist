<template>
  <div class="hello">
    <div>{{flags}}</div>
    <div>
      <p>{{20/10?'对的':'错的'}}</p>
    </div>
    <div>
      <!-- <p>
        {{if(true){
          return 20;
        }}}
      </p>-->
    </div>
    <div>
      <p v-html="moorth"></p>
    </div>
    <div v-bind:class="isActive">绑定</div>
    <p>
      <!--  split 数组 -->
      {{message.split('').reverse().join('')}}
    </p>
    <div>
      <p v-if="flag">{{msg}}</p>
      <p v-else>{{flags}}</p>
    </div>
    <div v-if="moth">
      <p>因为 v-if 是一个指令，</p>
      <p>所以必须将它添加到一个元素上。</p>
      <p>但是如果想切换多个元素呢？此时可以把一个</p>
      <p>元素当做不可见的包裹元素，</p>
      <p>并在上面使用 v-if。最终的渲染结果将不包含</p>
      <p>元素。</p>
    </div>
    <div v-show="isflag">
      <p>相见不如怀念怀念不如相见</p>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in objname" :key="index">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in user" :key="index">{{item.name}}{{item.age}}</li>
      </ul>
      <ul>
        <!-- 
          参数不能颠倒 对象遍历
         -->
        <li v-for="(item,name,index) in huwen" :key="index">{{name}}:{{item}}</li>
      </ul>
      <!-- 
        事件处理
       -->
    </div>
     <div>
       <!--  给他一个处理函数的事件 -->
         <button v-on:click="count+=1">按纽</button>
         <p>{{count}}</p>
          <button v-on:click="onlyclick">按纽</button>
       </div>
       <div>
         <button @click="clonefun">按钮修改</button>
         <p>
           {{msg}}
         </p>
       </div>
       <!-- 内联处理器的方法  事件传参-->
       <div>
         <button @click="sendFun('hello 沃尔玛！',($event))">事件传值</button>
       </div>
       <!--  实现点击谁，切换谁的文本 -->
       <ul>
        <li v-for="(item,index) in objname" :key="index" @click="getpost(item)">{{item}}</li>
      </ul>
      <!-- 提交事件不再重载页面 --> 
      <a @click.prevent="blankhendler"  href="https:www.baidu.com">跳转</a>
      <a @click.stop="blankhendler"  href="https:www.baidu.com">跳转</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count:0,
      flags: "welcome off pop form",
      msg: "Welcome to Your Vue.js App",
      moorth: "<strong>站在巨人的肩膀上</strong>",
      // 数据的动态绑定
      isActive: "active",
      message: "message",
      flag: false,
      moth: true,
      isflag: false,
      //渲染v-for
      objname: ["banana", "opple", "orange"],
      //渲染 列表
      user: [
        {
          name: "orange",
          age: 20,
        },
        {
          name: "orange",
          age: 30,
        },
      ],
      // huwen:[
      //   {
      //     name:'xiaojia',
      //     age:30,
      //     sex:'男'
      //   
      // ]
      huwen: {
        name: "xiaojia",
        age: 30,
        sex: "男",
      },
      msg:'我是Java'
    };

  },
  methods:{
    // this.data 相当于 setState({{count}})
    onlyclick(event){
      this.count+=100;
    },
    clonefun(){
      //一旦修改数据,视图重绘了
      this.msg="我是javascript"
    },
    // data 相当于 ('hello 沃尔玛');
    sendFun(data,event){
      console.log(data);
      console.log(event);
    },
    getpost(data){
      console.log(data);
    },
    blankhendler(event){
      event.preventDefault();
      console.log('hello')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
