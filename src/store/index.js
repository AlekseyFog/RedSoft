import Vue from 'vue';
import Vuex from 'vuex';

import preloader from './preloader';
import market from './market';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    preloader,
    market,
  },
});
