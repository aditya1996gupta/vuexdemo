<template>
<div>
<h2>filter() return new array always</h2>
<li v-for="n in evenNumbers" v-bind:key="n">{{ n }}</li> // ...filter func used to seperate the numbers from computed method
</div>
</template>

<script>
export default {
  data: function () {
    return {
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
