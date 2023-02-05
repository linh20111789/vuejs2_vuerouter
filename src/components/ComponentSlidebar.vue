<template>
  <div id="slidebar">
    <h3> Menu </h3>
    <ul>
      <li><router-link to="/project"> Project Management </router-link></li>
      <li><router-link to="/account"> Account</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComponentSlidebar",
  data() {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
