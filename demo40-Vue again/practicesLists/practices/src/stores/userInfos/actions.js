import api from '../../assets/libs/util.js';
import Settings from '../../assets/libs/settings.js'
import CryptoJS from 'crypto-js';
import datas from '../../data/userLists.js';
export default {
  userInfos(context) {
    setTimeout(() => {
      context.commit('usersDatas', datas);
    }, 2000);
    // api.get('../../data/product.js', null, r => {
    //   if (r.msgcode == 1) {
    //     console.log(r);
    //     context.commit('usersDatas', r.data);
    //   }
    // }, r => {
    //   console.log(r);
    // });
  },
}
