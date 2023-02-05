<template>
  <div id="maincontent">
    <ComponentSlidebar/>
    <ComponentContent/>
  </div>
</template>

<script>
import ComponentSlidebar from "./ComponentSlidebar.vue";
import ComponentContent from "./ComponentContent.vue";

export default {
  name: 'main-content',
  components: {
    ComponentSlidebar,
    ComponentContent,
  },  
  data(){
    return {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #maincontent{
    display: flex;
  }

  #slidebar {
    flex-basis: 15%;
  }
  #content {
    flex-basis: 85%;
  }
</style>
