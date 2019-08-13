import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ourRoutes from './routes/routes';
import Paginate from 'vuejs-paginate'

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.component('paginate', Paginate)

const router = new VueRouter({
  routes: ourRoutes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
