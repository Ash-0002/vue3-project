// plugins/mixpanel.js
import mixpanel from 'mixpanel-browser';

export default {
  install(Vue, options = {}) {
    if (!options.token) {
      console.error('Mixpanel token is missing!');
      return;
    }

    mixpanel.init(options.token, options.config || { debug: true });

    // 👇 Add $mixpanel globally in Vue 2
    Vue.prototype.$mixpanel = mixpanel;

    // Optional: access from window
    if (typeof window !== 'undefined') {
      window.mixpanel = mixpanel;
    }
  }
};
