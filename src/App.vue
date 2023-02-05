<template>
  <div>
    <ComponentHeader/>
    <ComponentMainContent/>
    <router-view class="view"></router-view>
  </div>

</template>

<script>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentMainContent from "./components/ComponentMainContent.vue";

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentMainContent,
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
}
#content {
  flex-basis: 85%;
}
</style>
