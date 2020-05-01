<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {
    axios.get('/api/demo01').then(res => {
      console.log(res.data);
    });
    axios.get('/api/demo02').then(res => {
      console.log(res.data);
    });
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
  margin-top: 60px;
}
</style>
