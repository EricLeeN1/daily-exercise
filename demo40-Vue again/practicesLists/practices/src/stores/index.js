import Vue from 'vue';
import Vuex from 'vuex';
import Settings from '@/assets/libs/settings.js';
import api from '@/assets/libs/util.js';
import handShake from './handShake/index.js';

Vue.prototype.$api = api;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgSite: Settings.imgSite
  },
  modules: {
    hand: handShake
  }
});
