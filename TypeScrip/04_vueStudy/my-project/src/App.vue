<template>
    <h2>App 父集组件</h2>
    <h3>msg:{{msg}}</h3>
    <button @click="msg+='==='">更新数据</button>
    <hr/>
    <Child :msg="msg" />
</template>

<script lang="ts">

import { defineComponent,reactive,ref } from 'vue';
import Child from './components/Child.vue';


//暴漏出去一个定义好的组件
export default defineComponent({
  name: 'App',
  components: { Child },
 
  setup(){
    // 定义一个ref
    const msg = ref('hello world')
    return{
      msg,
    }
  }
});
</script>
