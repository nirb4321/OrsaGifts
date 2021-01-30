<template>
  <img alt="Vue logo" src="./assets/orsalogo.png">
  <Orders v-bind:orders="orders"/>
</template>

<script>
import Orders from './components/Order.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Orders
  },


  data(){
    return{
      orders:null
    }
  },


  mounted: function () {
    axios.get('http://localhost:3000/order/all').then(response => this.orders = response.data);
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
