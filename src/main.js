import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  english: {
    message: {
      value: 'hello world'
    }
  },
  japanese: {
    message: {
      value: 'こんにちは、世界'
    }
  },
  bangla: {
    message: {
      value: 'ওহে বিশ্ব'
    }
  },
  spanish: {
    message: {
      value: 'Hola Mundo'
    }
  },
  norwegian: {
    message: {
      value: 'Hei Verden'
    }
  },
};

const i18n = new VueI18n({
  locale: 'english',
  messages
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')