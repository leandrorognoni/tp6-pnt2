<template>
  <div id="app">
    <br>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
   background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}


</style>
