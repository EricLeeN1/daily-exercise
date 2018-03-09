// 配置API接口地址
import Settings from './settings.js';
import Qs from 'qs';
// 引用axios
let axios = require('axios')
// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: Settings.site,
      withCredentials: false,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json, text/javascript, */*"
      },
      transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
      }],
      // `transformResponse` allows changes to the response data to be made before
      // it is passed to then/catch
      transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
      }],
    })
    .then(function (res) {
      res.data = JSON.parse(res.data);
      if (res.request.status ===200 & res.request.readyState === 4) {
        if (success) {
          success(res.data);
        }
      } else {
        if (failure) {
          failure(res)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      let res = err.response
      if (err) {
        window.alert('api error, HTTP CODE: ' + res.status)
      }
    })
}

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = Qs.stringify(config.data);
  }
  return config;
}, err => {
  alert('参数错误');
  return Promise.reject(err);
});

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
