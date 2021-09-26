<template>
  <h2>reactive 和 ref 的细节问题</h2>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
</template>

<script lang="ts">

import { defineComponent,ref,reactive} from 'vue'

export default defineComponent({
name: 'App',

setup(){
  // 通过ref的方式设置数据
  const m1 = ref('abc')
  const m2 = reactive({
    name:'小明',
    wife:{
      name:'小红'
    }
  })
  
  const m3 = ref({
    name:'小明',
    wife:{
      name:'小红'
    }
  })
  // 更新数据
  const update = () =>{
    m1.value+='==='
    m2.wife.name+='==='
    m3.value.name+='==='
  }
  return{
    m1,m2,m3
  }
}

})
</script>

<style>

</style>