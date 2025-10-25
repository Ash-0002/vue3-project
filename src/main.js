/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from 'vue-analytics'
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
import browserDetect from "vue-browser-detect-plugin";
Vue.use(browserDetect);
// import veux from 'vue';
import store from "./store"
import mixpanelPlugin from './plugins/mixpanel';

Vue.use(mixpanelPlugin, {
  token: '5c62cf3351219ccfe982914d6b404da3', // ✅ your Mixpanel token
  config: { debug: true }
});

// router.afterEach((to) => {
//   var pageName = (to.meta && to.meta.mixpanelName) || to.name || to.path;
//   console.log('Tracking page:', pageName); // ✅ debug
//   Vue.prototype.$mixpanel.track('Page Viewed', { page: pageName });
// });

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebar.vue";
import Landinglayouts from "./layouts/Landinglayouts.vue";
import Withoutlogin from "./layouts/Withoutlogin.vue";
import Withlogin from "./layouts/Withlogin.vue";
import Website from "./layouts/Websitelayouts.vue";
import NewWebsite from "./layouts/newwebsitelayout.vue";
import tallylayouts from "./layouts/tallylayouts.vue";
import feedbacklayout from "./layouts/feedbacklayout.vue";
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

import TallySidebar from "./components/TallysideView.vue";
import CurrentDate from "./components/Sidebar/CurrentDate.vue";
import PeriodChange from "./components/Sidebar/PeriodChange.vue";
import CompanyModal from "./components/Sidebar/CompanyModal.vue";
import VoucherType from "./components/Sidebar/VoucherType.vue";
import StockGroup from "./components/Sidebar/StockGroup.vue";
import LedgerGroup from "./components/Sidebar/LedgerGroup.vue"
import numericOnly from './directives/numericOnly';
import numericMaxLength from './directives/numericMaxlen';


Vue.directive('numeric-only', numericOnly);
Vue.directive('numeric-maxlength', numericMaxLength);




Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.component("with-out-login-layout", Withoutlogin);
Vue.component("with-login-layout", Withlogin);
Vue.component("with-website-layout", Website);
Vue.component("with-new-website-layout", NewWebsite);
Vue.component("landing-layout", Landinglayouts);
Vue.component("tally-layout", tallylayouts);
Vue.component("feedback-layout", feedbacklayout);

Vue.component("Tally-Sidebar", TallySidebar);
Vue.component("Current-Date", CurrentDate);
Vue.component("Period-Change", PeriodChange);
Vue.component("Company-Modal", CompanyModal);
Vue.component("Voucher-Type", VoucherType);
Vue.component("Stock-Group", StockGroup);
Vue.component("Ledger-Group", LedgerGroup);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'G-FLV2C8MTDJ'
})



new Vue({
  router,
  vuetify,
  render: h => h(App),
  store
}).$mount("#app");