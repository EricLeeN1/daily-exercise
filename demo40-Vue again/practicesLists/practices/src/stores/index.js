import Vue from 'vue';
import Vuex from 'vuex';
import CryptoJS from 'crypto-js';
import Settings from '../assets/libs/settings.js';
import api from '../assets/libs/util.js';

Vue.prototype.$api = api;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgSite: Settings.imgSite
  }
});
