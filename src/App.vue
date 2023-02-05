<template>
  <div>
    <ComponentHeader/>
    <div id="maincontent">
      <ComponentSlidebar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentSlidebar from "./components/ComponentSlidebar.vue";

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentSlidebar,
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

#slidebar {
  flex-basis: 15%;
  background-color: #f2f2f2;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
}
#content {
  flex-basis: 85%;
}
</style>
