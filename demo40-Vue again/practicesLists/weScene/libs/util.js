import axios from 'axios';

const Util = {
    imgPath: 'http://127.0.0.1:8011',
    // apiPath: 'http://127.0.0.1:8010'
    apiPath: 'http://60.205.111.27:801'
};

Util.toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
Util.filterNull = function (o) {
    let that = this;
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (that.toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (that.toType(o[key]) === 'object') {
            o[key] = that.filterNull(o[key])
        } else if (that.toType(o[key]) === 'array') {
            o[key] = that.filterNull(o[key])
        }
    }
    return o
}

Util.apiAxios = function (method, url, params, success, failure) {
    let that = this;
    if (params) {
        params = that.filterNull(params);
    };
    axios({
            method: method,
            url: url,
            baseURL: Util.apiPath,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            withCredentials: false,
            headers: method === 'POST' ? {
                "Accept": "application/json, text/javascript, */*",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            } : method === "GET" ? {
                "Accept": "application/json, text/javascript, */*",
                "X-Requested-With": "XMLHttpRequest"
            } : '',
            transformRequest: [function (data, headers) {
                let params = '';
                for (const index in data) {
                    params += index + '=' + data[index] + '&';
                }
                return params;
            }],
            transformResponse: [function (data) {
                data = JSON.parse(data);
                return data;
            }],
        })
        .then(function (res) {
            if (res.status === 200 && res.request.readyState === 4) {
                if (success) {
                    success(res.data);
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
            let res = err.response;
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}
Util.get = function (url, params, success, failure) {
    return this.apiAxios('GET', url, params, success, failure)
};
Util.post = function (url, params, success, failure) {
    return this.apiAxios('POST', url, params, success, failure)
};
Util.put = function (url, params, success, failure) {
    return this.apiAxios('PUT', url, params, success, failure)
};
Util.delete = function (url, params, success, failure) {
    return this.apiAxios('DELETE', url, params, success, failure)
};
// 返回在vue模板中的调用接口
export default Util;