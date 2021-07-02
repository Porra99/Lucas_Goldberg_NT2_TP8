<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1><b>TP8 - Lucas Goldberg</b></h1>
      <br>
      <Navbar />
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
}

h1{
  color: rgb(0, 0, 0);
}

.jumbotron{
  padding: 32px
}

</style>
