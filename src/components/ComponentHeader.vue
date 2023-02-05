<template>
  <div id="header">
    My header
  </div>
</template>

<script>
export default {
  name: 'BPDX',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    background-color: blue;
    color: white;
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
