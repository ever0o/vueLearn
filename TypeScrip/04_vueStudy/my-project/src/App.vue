<template>
  <h2>App父级菜单</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <hr>
  <Child v-if="isShow"></Child>
</template>

<script>
// 引入子集组件
import { defineComponent, ref} from 'vue';
import Child from './components/Child.vue';
export default defineComponent({
  name: 'App',
  components:{
    Child,
  },
  setup(){
    const isShow = ref(true)
    return{
      isShow
    }
  }
})
</script>

<style>

</style>