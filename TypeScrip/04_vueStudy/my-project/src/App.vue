<template>
    <h2>Child 子集组件</h2>
</template>

<script lang="ts">

import { defineComponent,reactive,ref } from 'vue';

//暴漏出去一个定义好的组件
export default defineComponent({
  name: 'Child',

});
</script>
