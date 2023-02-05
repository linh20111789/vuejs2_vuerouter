<template>
  <div>
    <ComponentHeader/>
    <ComponentSlidebar/>
    <ComponentCT_Project/>
  </div>

</template>

<script>
import ComponentHeader from "./ComponentHeader.vue";
import ComponentSlidebar from "./ComponentSlidebar.vue";
import ComponentCT_Project  from "./ComponentCT_Project.vue";
export default {
  name: "Component-Default",
  components: {
    ComponentHeader,
    ComponentSlidebar,
    ComponentCT_Project,
  },
  data() {
    return {
    };
  },
  methods: {
    updateMessage(mes) {
      this.message = mes;
    },
  },
};
</script>

<style>
#app {

}
#maincontent{
    display: flex;
  }


</style>
