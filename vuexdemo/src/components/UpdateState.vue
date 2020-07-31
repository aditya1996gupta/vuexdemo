<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Page 2</h1>
              <P>{{stateData}}</P>
                <div class="form-group">
                    <input type="text" v-model="updateState" class="form-control">
                </div>
                <button  @click="Update()" class="btn btn-outline-secondary">
                Update state
                </button> &nbsp;
                <router-link to="/" @click="Update()" class="btn btn-outline-secondary">
                Back
               </router-link>
              <hr>
              <div class="form-group">
                  <small class="btn-outline-danger">
                      Here We used Actions to dispatch our mutaions.
                      Actions are similar to mutations,
                      the differences being that:
                      - Instead of mutating the state, actions commit mutations.
                      - Actions can contain arbitrary asynchronous operations.
                  </small>
              </div>
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
      stateData: '',
      updateState: ''
    }
  },
  mounted () {
    this.stateData = this.$store.getters.getMessage
  },
  methods: {
    Update () {
      if (this.updateState !== '') {
      // using the commit method to call the mutation
        this.$store.commit('changeMessageValue', this.updateState)
        this.$store.dispatch('changeMessageValue', this.updateState)
        // update the state with the curren
        this.stateData = this.updateState
        console.log('state updated')
      } else {
        console.log('Emtyp form field')
      }
    }
  }
}
</script>
