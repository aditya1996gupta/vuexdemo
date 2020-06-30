<template>
    <div class="app">
        <skill-bar skill="HTML" level="100" /> <br/>
        <skill-bar skill="CSS" level="90" barColor="#42b983"/> <br/>
        <skill-bar skill="Javascript" level="80" barSize="18"/> <br/>
        <skill-bar skill="C++" level="70" barSize="small"/> <br/>
        <skill-bar skill="Python" level="60" barSize="medium"/> <br/>
        <skill-bar skill="Java" level="50" barSize="large"/> <br/>
    </div>
</template>

<script>
import { SkillBar } from 'vue-skill-bar'

export default {
  name: 'app',
  components: {
    'skill-bar': SkillBar
  },
  data: function () {
    return {

    }
  }
}
</script>
