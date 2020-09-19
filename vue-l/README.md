# vue-l

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> {{}}
> 双向绑定 只支持单行表达式 ，不支持多行表达式
> 原始 HTML
``<p v-html="moorth"> </p>``
> v-once指令 点击事件将只会触发一次
## 只能赋值一次，不能被修改 .once 修饰符还能被用到自定义的组件事件上。 插值内容不会更新
##  特性
> v-bind
> 缩写 v-on 等同于 @ v-bind 等同于 ：

> 条件渲染
> v-if v-else 
> v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

> v-for 列表渲染
## <li v-for="(item,name,index) in huwen" :key="index">{{name}}:{{item}}</li>
## 数组更新检测
## 该方法会改变原数组
## 变异方法:( mutation method):push pop unshift shift splice() sort() reverse()
## 替换数组 做不到视图更新 原数组不变。

> 对象的更新检测
## 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。添加与删除
> 事件处理
``<li v-for="(item,name,index) in huwen" :key="index">{{name}}:{{item}}</li>``
`` <li v-for="(item,index) in objname" :key="index" @click="getpost(item)">{{item}}</li>``
`` getpost(data){ console.log(data)} ``

## 事件修饰符



## class 与 style  样式和样式的处理
## 对象语法
`` <div> <p :class="{active:isactive}">我是一个一般的P标签我的颜色是蓝色</p></div>``
`` <div> <p :class="{active:isactive,entityerror:erroractive}">我是一个一般的P标签我的颜色是蓝色</p></div>``

## 数组语法

## 内联样式的绑定
## 对象语法
`` <p :style="{color:'blue',fontSize:fontSize+'px'}">请给我赋值一个颜色</p>``
## 数组语法 自动添加前缀


> 计算属性

`` arrayfail(){数组去重 var len = this.arraypass.length;this.arraypass.sort(); //sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。for(var i=this.arraypass.length-1; i>0; i--){if( this.arraypass[i] == this.arraypass[i-1]){this.arraypass.splice(i,1);}} console.log(this.arraypass);return this.arraypass;}} ``




## 5. 作用域插槽
## 有时让插槽内容能够访问子组件中才有的数据是很有用的
## 6.解构插槽
## 具名插槽的缩写 2.6.0 新增 <br/>

``<template v-slot:header> <p> 我是头部 </p> </template><br/>``

## 缩写 v-slot：=> #
`` <template #header> <p>我是头部</p> </template>``

## slot-scope 2.6.0 被废弃了=> v-slot


