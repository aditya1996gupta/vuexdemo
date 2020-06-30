<template>
<div class="demo">{{ fullName }}<span> ----using watched property</span>
<div class="demo">{{ fN }}<span> ----using computed property</span></div>
</div>
</template>

<script>
export default {
  name: 'demo',
  data: function () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  computed: {
    fN: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
