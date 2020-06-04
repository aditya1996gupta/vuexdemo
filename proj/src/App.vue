<template>
  <div>
<product></product>
<hr/>
<sitemap></sitemap>
  </div>
</template>

<script>
import Product from './components/Product'
import Sitemap from './components/Sitemap'

export default {
  name: 'app',
  components: {
    Product,
    Sitemap
  }
}
</script>

<style>

</style>
