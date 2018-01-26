
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../../bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('complete-form', require('./forms/Complete'))
Vue.component('update-form', require('./forms/Update'))
Vue.component('login-form', require('./forms/Login'))
Vue.component('fast-register-form', require('./forms/FastRegister'))

const app = new Vue({
  el: '#app'
});
