<template>
  <div>
    <transition name="fade">
      <p v-if="isflag">hello</p>
    </transition>
    <!-- 
      name: 定义class 名称
      enter: 进入的流程
      leave: 离开的流程
      animated: 代表的动画
      tata: 动画效果
     -->
    <transition
      name="custom-classes-transition"  
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <p v-if="isflag">hello</p>
    </transition>
    <button @click="oncharp">change(切换)</button>
  </div>
</template>

<script>
export default {
  name: "Anim",
  data() {
    return {
      isflag: true,
    };
  },
  methods: {
    oncharp() {
      this.isflag = !this.isflag;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
.fade-enter,
.fade-leave-to {
  /* 进入前 */
  opacity: 0;
  font-size: 12px;
}
.fade-enter-active,
.fade-leave-active {
  /* 过渡效果 */
  /* transition: all .5s; */
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
  font-size: 20px;
}
/* 过渡效果 */

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
} */
/* // .fade-leave-active below version 2.1.8 */
/* .fade-enter, .fade-leave-to 
{opacity: 0;  }  */
</style>

