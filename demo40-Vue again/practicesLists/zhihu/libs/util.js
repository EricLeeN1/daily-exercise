import axios from 'axios';

const Util = {
    imgPath: 'http://127.0.0.1:8011/',
    apiPath: 'http://127.0.0.1:8010/'
};


Util.toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
Util.filterNull = function (o) {
    for (var key in o) {
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

Util.apiAxios = function (method, url, params, success, failure) {
    if (params) {
        params = Util.filterNull(params);
    };
    console.log('====================================');
    console.log(Util.baseURL);
    console.log('====================================');
    axios({
            method: method,
            url: url,
            baseURL: Util.apiPath,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            withCredentials: true,
            headers: method === 'POST' ? {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            } : method === "GET" ? {
                'X-Requested-With': 'XMLHttpRequest'
            } : '',
            transformRequest: [function (data, headers) {
                headers.Accept = "application/json, text/javascript, */*";
                console.log(headers);
                let params = '';
                for (const index in data) {
                    params += index + '=' + data[index] + '&';
                }
                return params;
            }]
        })
        .then(function (res) {
            if (res.data.success === true) {
                if (success) {
                    success(res.data)
                }
            } else {
                if (failure) {
                    failure(res.data)
                } else {
                    window.alert('error: ' + JSON.stringify(res.data))
                }
            }
        })
        .catch(function (err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}
Util.get = function (url, params, success, failure) {
    return Util.apiAxios('GET', url, params, success, failure)
};
Util.post = function (url, params, success, failure) {
    console.log(params, url);
    return Util.apiAxios('POST', url, params, success, failure)
};
Util.put = function (url, params, success, failure) {
    return Util.apiAxios('PUT', url, params, success, failure)
};
Util.delete = function (url, params, success, failure) {
    return Util.apiAxios('DELETE', url, params, success, failure)
};
// 添加响应拦截器
Util.ajax.interceptors.response.use(res => {
    return res.data;
});
console.log('====================================');
console.log(Util);
console.log('====================================');
// 返回在vue模板中的调用接口
export default Util;