<template>
  <div id="app">
    <div class="nav">
      <router-link to="/swamp">Swamp</router-link> |
      <router-link to="/gator">Gator</router-link>
    </div>
    <hr />
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
