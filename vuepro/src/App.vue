<template>
  <div id="app">
    <header-com></header-com>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/common/header.vue"
export default {
  components:{
    "header-com":header
  }
}
</script>

<style>
  #app{
    width:100%;
    height:100%;
    background:#e1e1e1;
  }
  .page{
  padding-top:1rem;
}
</style>
