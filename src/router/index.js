import Vue from 'vue'
import Router from 'vue-router'
import ComponentCT_Account from '../components/ComponentCT_Account.vue'
import ComponentCT_Project from '../components/ComponentCT_Project.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/project', 
      name: 'project', 
      component: ComponentCT_Project
    },
    {
      path: '/account',
      name: 'account',
      component: ComponentCT_Account
    },
  ]
})
