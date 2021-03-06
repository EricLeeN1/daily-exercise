import Vue from 'vue';
import Vuex from 'vuex';
import CryptoJS from 'crypto-js';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default {
  state,
  getters,
  mutations,
  actions
}
