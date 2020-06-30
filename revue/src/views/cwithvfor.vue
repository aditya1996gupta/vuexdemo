<template>
<div class="example-1">
  <button v-on:click="counter += 1">Add 1</button> //---using v-on:click directives
  <p>The button above has been clicked {{ counter }} times.</p>
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>//----using v-model two-way data binding
  <br/>
  <p>Multiline message is:</p>
<p style="white-space: pre-line;">{{ words }}</p>
<br>
<textarea v-model="words" placeholder="add multiple lines"></textarea>
<div>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
</div>//----checkbox using v-model
<div>
<h3>radio button</h3>
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
</div>
<div>
<h3>select box using v-model</h3>
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
</div>
</div>
</template>

<script>
export default {
  name: 'example-1',
  data: () => {
    return {
      counter: 0,
      message: '',
      words: '',
      checked: '',
      picked: '',
      selected: ''
    }
  }
}
</script>
