<template>
  <div>
    <h1>
      Component Account
    </h1>
    <input-tag v-model="tags"></input-tag>
  </div>

</template>

<script>
import InputTag from 'vue-input-tag'
export default {
  name: 'Component-ComponentCT_Account',
  components: {
    InputTag,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
