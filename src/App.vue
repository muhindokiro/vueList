<template>
  <div id="app">
    <div class="internalBody">
    <header-component/>
    <body-component />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/Header.vue'
import bodyComponent from '@/components/MyBody.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Header
    HeaderComponent,
    bodyComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 500px; 
  margin: auto;
  height:100%;
}
.internalBody{
  height: 100%;
}
</style>
