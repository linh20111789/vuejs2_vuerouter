<template>
  <div id="slidebar">
    <h3> Danh Muc</h3>
    <ul>
      <li><router-link to="/"> Project Management </router-link></li>
      <li><router-link to="/account"> Account</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComponentSlidebar",
  data() {
    return {
      tempMessage: ''
    }
  },
  methods: {
    sendMessage() {
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#slidebar {
  flex-basis: 15%;
}
</style>
