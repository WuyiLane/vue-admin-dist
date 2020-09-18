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

### {{}}
### 双向绑定 只支持单行表达式 ，不支持多行表达式
### 原始 HTML
####  <p v-html="moorth">
####      </p>
### v-once指令 点击事件将只会触发一次
#### 只能赋值一次，不能被修改 .once 修饰符还能被用到自定义的组件事件上。 插值内容不会更新
####  特性
#### v-bind
### 缩写 v-on 等同于 @ v-bind 等同于 ：

### 条件渲染
#### v-if v-else 
#### v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

### v-for 列表渲染
####  <li v-for="(item,name,index) in huwen" :key="index">{{name}}:{{item}}</li>
### 数组更新检测
#### 该方法会改变原数组
#### 变异方法:( mutation method):push pop unshift shift splice() sort() reverse()
#### 替换数组 做不到视图更新 原数组不变。

### 对象的更新检测
#### 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。添加与删除
### 事件处理
##### <li v-for="(item,name,index) in huwen" :key="index">{{name}}:{{item}}</li>
####  <li v-for="(item,index) in objname" :key="index" @click="getpost(item)">{{item}}</li>
#### getpost(data){
####      console.log(data)
####    }

#### 事件修饰符



### class 与 style  样式和样式的处理
#### 对象语法
#### <div> <p :class="{active:isactive}">我是一个一般的P标签我的颜色是蓝色</p></div>
#### <div> <p :class="{active:isactive,entityerror:erroractive}">我是一个一般的P标签我的颜色是蓝色</p></div>

#### 数组语法

### 内联样式的绑定
#### 对象语法
#### <p :style="{color:'blue',fontSize:fontSize+'px'}">请给我赋值一个颜色</p>
#### 数组语法 自动添加前缀


### 计算属性

####  arrayfail(){
####      //  数组去重
####      // var len = this.arraypass.length;
####      this.arraypass.sort(); //sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
####      for(var i=this.arraypass.length-1; i>0; i--){
####        if( this.arraypass[i] == this.arraypass[i-1]){
####          this.arraypass.splice(i,1);
####        }
####      } 
####      console.log(this.arraypass);
####     return this.arraypass;
####    }
#### }



### 表单的输入绑定
#### 你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

#### watch 侦听器

#### 修饰符
#### lazy  失去焦点后
#### number 自动转化为 数字
#### trim   自动过滤用户输入的首尾空白字符


### 组件技术
#### 基本组件实例  template script style(lang 当前样式的语言 scoped 当前样式只能在当前组件里生效)
#### 组件的使用 引入 注入 加载... data 必须是个纯函数，必须存在返回值，返回值必须存在状态 

#### 组件的复用性

####   //  data 必须是一个纯函数,因为data是个纯函数，意味着组件每次被调用，都会创建一个新的组件 //要加同加 要减同减

#### 组件中的传参 通过props 向子组件 传递数据

#### props: {
#### title: String, //字符串
####  likes: Number,//数字
####  isPublished: Boolean,//boolean
####  commentIds: Array, //数组
####  author: Object,//对象
####  callback: Function,//function
####  contactsPromise: Promise // or any other constructor //promise 类型
#### }

#### 传递静态或动态 Prop
#### <blog-post title="My journey with Vue"></blog-post>
#### <!-- 动态赋予一个变量的值 -->
#### <blog-post v-bind:title="post.title"></blog-post>


#### 单项数据流
#### props 是单项的 只能父传子,不能子传父

#### props验证 本身的验证

#### Property or method "arrays" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.
#### 属性或方法“arrays”未在实例上定义，但在呈现期间被引用。通过初始化属性，确保此属性是被动的，无论是在data选项中，还是对于基于类的组件。

#### 必须使用 使用工厂函数来返回这个默认值
####  default:function(){
####         return ['saitang','xiaosatang']
####       }  

#### Vue.component('my-component', {
####   props: {
####     // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
####     propA: Number,
####     // 多个可能的类型
####     propB: [String, Number],
####     // 必填的字符串
####     propC: {
####       type: String,
####       required: true
####     },
####     // 带有默认值的数字
####     propD: {
####       type: Number,
####       default: 100
####     },
####     // 带有默认值的对象
####     propE: {
####       type: Object,
####       // 对象或数组默认值必须从一个工厂函数获取
####       default: function () {
####         return { message: 'hello' }
####       }
####     },
####     // 自定义验证函数
####     propF: {
####       validator: function (value) {
####         // 这个值必须匹配下列字符串中的一个
####         return ['success', 'warning', 'danger'].indexOf(value) !== -1
####       }
####     }
####   }
####  })

#### 类型检查
#### type 可以是下列原生构造函数中的一个：String Number Boolean Array Object Date Function ymbol

#### 自定义事件

####  this.$emit('onEvent',this.msg)

#### 插槽

#### 传递结构类型
#### 传递数据的方案，但是传递的是结构
##### 1.插槽
