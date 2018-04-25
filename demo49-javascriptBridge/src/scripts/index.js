$(function () {
    let Base = window.Base || {};
    Base = {
        isClient: null,
        changeRuby() {
            let word = document.getElementsByTagName('ruby');
            for (let i = 0; i < word.length; i++) {
                const element = word[i];
                let text = element.innerHTML.trim();
                let textArray = text.split('');
                let jelehtml = '';
                for (let j = 0; j < textArray.length; j++) {
                    const jele = textArray[j];
                    jelehtml += `<span class="getwords">${jele}</span>`;
                }
                element.innerHTML = jelehtml;
            }
        },
        changeTitle() {
            let word = document.getElementsByClassName('zw-tit');
            for (let i = 0; i < word.length; i++) {
                const element = word[i];
                let text = element.innerHTML.trim();
                let textArray = text.split('');
                let jelehtml = '';
                for (let j = 0; j < textArray.length; j++) {
                    const jele = textArray[j];
                    jelehtml += `<span class="getwords">${jele}</span>`;
                }
                element.innerHTML = jelehtml;
            }
        },
        getWord(e) {
            let word = e.text();
            alert(word);
            let that = this;
            if (that.isClient) {
                let params = {
                    word: word
                };
                WebViewJavascriptBridge.callHandler('getWord', params, function (response) {});
            }
        },
        init() {
            let that = this;
            function setupWebViewJavascriptBridge(callback) {
                if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
                    if (window.WebViewJavascriptBridge) {
                        callback(WebViewJavascriptBridge)
                    } else {
                        document.addEventListener(
                            'WebViewJavascriptBridgeReady',
                            function () {
                                callback(WebViewJavascriptBridge)
                            },
                            false
                        );
                    }
                } else if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
                    if (window.WVJBCallbacks) {
                        return window.WVJBCallbacks.push(callback);
                    }
                    window.WVJBCallbacks = [callback];
                    var WVJBIframe = document.createElement('iframe');
                    WVJBIframe.style.display = 'none';
                    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
                    document.documentElement.appendChild(WVJBIframe);
                    setTimeout(function () {
                        document.documentElement.removeChild(WVJBIframe)
                    }, 0);
                }

            };
            setupWebViewJavascriptBridge(function (bridge) {
                if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
                    bridge.init(function (message, responseCallback) {
                        var data = {
                            'Javascript Responds': '测试中文!'
                        };
                        responseCallback(data);
                    });
                };
                bridge.registerHandler('isConfirmAgainSelf', function (data, responseCallback) {
                    that.isClient = true;
                    that.changeRuby();
                    that.changeTitle();
                    responseCallback('js执行过了');
                });
            });
            $(".zw-content").on('click', '.getwords', function () {
                let _ele = $(this);
                that.getWord(_ele);
            })
        }
    }
    Base.init();
});