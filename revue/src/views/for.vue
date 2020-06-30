<template>
<ul class="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }} //-----using v-for render the array objects
  </li>
</ul>
</template>

<script>
export default {
  name: 'example-1',
  data: function () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  }
}
</script>
