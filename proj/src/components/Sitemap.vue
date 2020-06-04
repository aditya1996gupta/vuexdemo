<template>
<div>
<h1>Sitemap</h1>
<span>Home</span><br/>
<span>About</span><br/>
<span>Products
<ul>
<div v-for='(product, index) in products' :key='index' v-text ="product"></div>
</ul>
</span></li>
</div>
</template>

<script>
import productmixins from '../mixins/productmixins'

export default {
  mixins: [productmixins],
  data () {
    return {
      'title': 'Sitemap'
    }
  }
}
</script>
