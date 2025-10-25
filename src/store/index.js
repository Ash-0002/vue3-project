// index.js
import Vue from 'vue';
import Vuex from 'vuex';
// import user from './modules/user';
import tallyThemeStore from './modules/tallyThemeStore';
import visibilityModule from './modules/visibility';
import Web1_store from './modules/Web1_Store';

Vue.use(Vuex);
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    tallyStore: tallyThemeStore,
    visibility: visibilityModule,
    Web1_Store: Web1_store
  },
});
