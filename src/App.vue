<template>
  <div id="app">
    <!-- Routes get rendered here -->
    <router-view></router-view>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'app',
  components: {
    Homepage
  }
}
</script>

<style>

 @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
