<template>
<Home/>
  <div id="nav">
    <router-link to="/gallery">גלריה</router-link>
    |
    <router-link to="/neworder">הזמן עכשיו</router-link>
  </div>
  <router-view/>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
    Home
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
