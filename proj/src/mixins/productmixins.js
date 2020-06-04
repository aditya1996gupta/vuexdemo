
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    this.products = this.loadProducts()
  },
  methods: {
    loadProducts () {
      return ['product a', 'product b', 'product c', 'product d', '  product e']
    }
  }
}
