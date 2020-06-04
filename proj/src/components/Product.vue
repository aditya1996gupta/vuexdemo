<template>
<div>
<h1>Product</h1>
<ul v-for='(product, index) in products' :key='index' v-text ="product"></ul>
</div>
</template>

<script>
import productmixins from '../mixins/productmixins'
export default {
  mixins: [productmixins],
  data () {
    return {
    
    }
  }
}
</script>
