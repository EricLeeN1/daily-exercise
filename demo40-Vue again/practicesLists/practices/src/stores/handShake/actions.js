import api from '../../assets/libs/util.js';
import Settings from '../../assets/libs/settings.js'
import CryptoJS from 'crypto-js';
export default {
  handShakes(context) {
    api.post('WebService.asmx/AcquireSecretKey', {
      type: 3,
      ts: Date.parse(new Date()) / 1000
    }, r => {
      if (r.msgcode == 1) {
        var key = CryptoJS.enc.Latin1.parse(Settings.key);
        var iv = CryptoJS.enc.Latin1.parse(Settings.iv);
        r.data.key = CryptoJS.AES.decrypt(r.data.key, key, {
          iv: iv,
          padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        r.data.secret = CryptoJS.AES.decrypt(r.data.secret, key, {
          iv: iv,
          padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        context.commit('handShakeDatas', r.data);
      }
    }, r => {
      console.log(r);
    });
  },
}
