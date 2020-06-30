<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cGetSet">GetSet</router-link> |
      <router-link to="/watch">Watch</router-link> | -->
      <!-- <router-link to="/for">For</router-link> |
      <router-link to="/filter">Filter</router-link> |
      <router-link to="/cwithvfor">Cvf</router-link> | -->
      <router-link to="/skillbar">skillbar</router-link> |
      <router-link to="/items">items</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import items from './components/Items'

export default {
  components: {
    '': items
  },
  name: 'app',
  data () {
    return {
      msg: 'My Fancy T-Shirt Store'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
