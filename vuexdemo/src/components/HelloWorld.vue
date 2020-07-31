<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="form-group">
                <small class="btn-outline-warning">Getters provide a way of retrieving the values we want from the state object.
A getter's result is cached based and will only re-evaluate when some of its dependencies have changed.
                </small>
            </div>
          <div class="card">
            <div class="card-body">
              <h1>this.$store.getters was used</h1>
              <P>{{stateData}}</P>
                <router-link to="/update" class="btn btn-outline-secondary">
                Next
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stateData: ''
    }
  },
  mounted () {
    this.stateData = this.$store.getters.getMessage
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
