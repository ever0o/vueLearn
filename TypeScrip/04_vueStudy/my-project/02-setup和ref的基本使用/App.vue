<template>
  <h2>setup 和 ref 的基本使用</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount()">更新数据</button>
</template>

<script lang="ts">

import { defineComponent,ref } from 'vue';

//暴漏出去一个定义好的组件
export default defineComponent({
  name: 'App',
  /**
   * 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
   * vue2的实现方式
   */
  // data(){
  //   return{ // 属性
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount(){ // 方法
  //     this.count++;
  //   }
  // }
  // vue3 的方式实现
  // setup 是组合API的入口函数
  setup(){
    // let count = 0;  // 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
    // ref 是一个函数，作用：定义一个响应式的数据,返回的是一个ref对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该ref调用value属性的方式进行数据的操作
    // html的模板中是不需要使用.value属性的写法的
    // 一般用来定义一个基本类型的响应式数据
    const count = ref(0);
    function updateCount(){
      // 报错的原因：count是一个ref对象，对象是不能进行++的操作的
      // count++;
      count.value++
    }

    return{
      count,
      updateCount
    }
  }
});
</script>
