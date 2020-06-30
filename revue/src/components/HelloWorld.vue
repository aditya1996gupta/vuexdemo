<template>
  <div class ="example">
  <!-- <p>Original message: "{{ message }}"<span>..real meassge</span></p>
  <p>Computed reversed message: "{{ reversedMessage }}"<span>..using computed</span></p>
  <p>Reversed message: "{{ reverseMessage() }}"<span>..using method</span></p> -->
  </div>
</template>

<script>
export default {
  name: 'example',
  data: function () {
    return {
      message: 'hello vue'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
