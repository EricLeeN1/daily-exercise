$(function () {
    // var mySwiper = new Swiper('.swiper-container', {
    //     //            direction:"vertical",
    //     direction: "horizontal",
    //     initialSlide: 0,
    //     speed: 2000,
    //     autoplay: true,
    //     loop: true,
    //     //            分页器
    //     pagination: {
    //         el: ".swiper-pagination"
    //     },
    //     //            前进后退按钮
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     //            如果需要滚动条
    //     scrollbar: {
    //         el: ".swiper-scrollbar"
    //     }
    // });
    // $("#index-nav2 .index-nav2-tabbar li").on('click',function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     let index = $(this).index();
    //     console.log('====================================');
    //     console.log(index);
    //     console.log('====================================');
    //     $(".index-nav2-panel >li").eq(index).show().siblings().hide();
    // });
    jQuery.support.cors = true;
    var Base = window.Base || {};
    Base = {
        site: 'http://47.92.146.91:8089',
        site2: 'http://60.205.111.27:807',
        default: '',
        shareData: {
            title: '孤独招领处',
            subTitle: '来孤独招领处--释放你内心里那些无法对人言语的东西吧！'
        },
        replyHtml: '<div class="reply-area"><textarea maxlength="140" name="reply-content" id="reply-content"></textarea><div id="btn-reply">回复</div></div>',
        handShake: function handShake(id, type) {
            var that = this,
                pid = that.getQueryString(id),
                ptype = that.getQueryString(type);
            that.id = pid;
            console.log(pid, ptype);
            that.type = ptype;
            if (pid == '' || ptype == '') {
                window.location.href = '404.html';
            } else {
                $.ajax({
                    type: "POST",
                    url: Base.site + '/WebService.asmx/AcquireSecretKey',
                    data: {
                        type: 3,
                        ts: Date.parse(new Date()) / 1000
                    },
                    dataType: "json",
                    success: function success(datas) {
                        if (datas.msgcode == 1) {
                            var key = CryptoJS.enc.Latin1.parse('l@j#g=c!w*)8(^5$');
                            var iv = CryptoJS.enc.Latin1.parse('L+*df5,Ir)b$=pkf');
                            datas.data.key = CryptoJS.AES.decrypt(datas.data.key, key, {
                                iv: iv,
                                padding: CryptoJS.pad.Pkcs7
                            }).toString(CryptoJS.enc.Utf8);
                            datas.data.secret = CryptoJS.AES.decrypt(datas.data.secret, key, {
                                iv: iv,
                                padding: CryptoJS.pad.Pkcs7
                            }).toString(CryptoJS.enc.Utf8);
                            sessionStorage.setItem("handShake", JSON.stringify(datas));
                            if (pid && ptype) {
                                if (ptype == 1) {
                                    that.getDetail(id);
                                    setTimeout(function () {
                                        that.getList(id);
                                    }, 1000);
                                } else {
                                    console.log('11111');
                                    $('#vote-gifts-btn-group').show();
                                    that.getDetail1(id);
                                    setTimeout(function () {
                                        that.getList1(id);
                                    }, 1000);
                                }
                            }
                        } else {
                            alert('服务器连接错误');
                        }
                    }
                });
            }
        },
        getInitData: function getInitData(id, type) {
            var that = this,
                pid = that.getQueryString(id),
                ptype = that.getQueryString(type);
            that.id = pid;
            that.type = ptype;
            console.log(pid, ptype);
            if (pid && ptype) {
                if (ptype == 1) {
                    that.getDetail(id);
                    setTimeout(function () {
                        that.getList(id);
                    }, 1000);
                } else {
                    $('#vote-gifts-btn-group').show();
                    that.getDetail1(id);
                    setTimeout(function () {
                        that.getList1(id);
                    }, 1000);
                }
            } else {
                window.location.href = '404.html';
            }
        },
        getQueryString: function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
            var context = "";
            if (r != null) context = r[2];
            reg = null;
            r = null;
            return context == null || context == "" || context == "undefined" ? "" : context;
        },
        objKeySort: function objKeySort(arys) {
            var newkey = Object.keys(arys).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
                newObj[newkey[i]] = arys[newkey[i]];
            }
            return newObj; //返回排好序的新对象
        },
        getAjax: function getAjax(url, datas, fn) {
            var dataCookies = JSON.parse(sessionStorage.getItem("handShake"));
            var keyData = {};
            for (var i in datas) {
                keyData[i] = datas[i];
            }
            keyData['ts'] = Date.parse(new Date()) / 1000 - 0 + JSON.parse(sessionStorage.getItem("handShake")).data.ts;
            keyData['key'] = JSON.parse(sessionStorage.getItem("handShake")).data.key;
            var signData = {};
            for (var i in keyData) {
                signData[i] = keyData[i];
            }
            signData['sec'] = JSON.parse(sessionStorage.getItem("handShake")).data.secret;
            $.ajax({
                type: "get",
                url: '' + this.site + '' + url + '' + $.param(keyData, true) + '&sign=' + _md5($.param(this.objKeySort(signData), true)) + '',
                dataType: 'json',
                success: fn
            });
        },
        postAjax: function postAjax(url, datas, fn) {
            $.ajax({
                type: 'post',
                url: this.site + url,
                data: datas,
                dataType: 'json',
                success: fn
            });
        },
        getDetail(query) {
            var that = this,
                id = that.getQueryString(query);
            if (id) {
                that.postAjax('/api/common/good/goodInfo', {
                    id: id
                }, function (res) {
                    console.log(res);
                    if (res.msgcode == 1) {
                        that.Info = res.data;
                        $("#music").attr('src', that.site2 + that.Info.musicpath);
                        $("#app>header.mirror-2").removeClass('mirror-2').addClass('mirror-' + that.Info.scene);
                        $('#app>header').css('background-color', '#' + that.Info.skin);
                        $("#music")[0].play();
                        $('#user-infos-group img:eq(0)').attr('src', that.site2 + res.data.ulogo);
                        $('#shower-logo').attr('src', that.site2 + res.data.logo);
                        $("#user-infos-group>.user-infos>h5").html(res.data.uname).next().html(res.data.ptime);
                        if (res.data.facenumber == 1) {
                            $('#heart-single-group>.heart:eq(0)').html('<p>' + res.data.smile + '</p>').next().html('<p>' + res.data.lefteye + '</p>').next().html('<p>' + res.data.age + '</p>').next().html('<p>' + res.data.mouth + '</p>').next().html('<p>' + res.data.righteye + '</p>').next().html('<p>' + res.data.emotion + '</p>').next().html(res.data.gender);
                            $('.stamp-front>h3').html(res.data.score);
                            $('.envelope-comments').html(res.data.comment);
                        } else {
                            $("#heart-single-group>.heart-many").html(res.data.facecomment).css("bottom", "-.2rem");
                            if (browser.versions.mobile) {
                                //判断是否是移动设备打开。browser代码在下面
                                var screenWith = document.documentElement.clientWidth;
                                that.getImgInfos(that.site2 + res.data.logo);
                                setTimeout(function () {
                                    var scale = that.imgInfo.width / screenWith;
                                    that.setFaceBorder(res, scale);
                                }, 2000);
                            } else {
                                that.getImgInfos(that.site2 + res.data.logo);
                                setTimeout(function () {
                                    var scale = that.imgInfo.width / 750;
                                    that.setFaceBorder(res, scale);
                                }, 2000);
                            }
                        }
                        $('#user .user-judge').html(res.data.comment.length > 0 ? res.data.comment : '这位少年，骨骼惊奇，将来必有大成就！');
                    } else {
                        alert(res.msg);
                    }
                });
            } else {
                window.location.href = '/404.html';
            }
        },
        setFaceBorder: function setFaceBorder(res, scale) {
            var that = this;
            var reduce = (that.imgInfo.height - that.imgInfo.width) / scale;
            res.data.facerectangle.top = res.data.facerectangle.top / scale;
            res.data.facerectangle.left = res.data.facerectangle.left / scale;
            res.data.facerectangle.width = res.data.facerectangle.width / scale;
            res.data.facerectangle.height = res.data.facerectangle.height / scale;
            $('#banner>.face-border').show().css({
                "width": res.data.facerectangle.width,
                "height": res.data.facerectangle.height,
                "top": res.data.facerectangle.top,
                "left": res.data.facerectangle.left
            });
        },
        getImgInfos: function getImgInfos(url) {
            // 记录当前时间戳
            var start_time = new Date().getTime(),
                that = this;

            // 图片地址
            var img_url = url;

            // 创建对象
            var img = new Image();

            // 改变图片的src
            img.src = img_url;

            // 定时执行获取宽高
            var check = function check() {
                // 只要任何一方大于0
                // 表示已经服务器已经返回宽高
                if (img.width > 0 || img.height > 0) {
                    var diff = new Date().getTime() - start_time;
                    // document.body.innerHTML += '
                    // from:check : width:'+img.width+', height:'+img.height+', time:'+diff+'ms';
                    clearInterval(set);
                }
            };

            var set = setInterval(check, 40);
            // 加载完成获取宽高
            img.onload = function () {
                var data = {
                    width: img.width,
                    height: img.height
                };
                that.imgInfo = data;
                // return data;
            };
        },
        getDetail1: function getDetail1(query) {
            var that = this,
                id = that.getQueryString(query);
            if (id) {
                that.postAjax('/FrontendService.asmx/AppearanceLevelDetail?', {
                    id: id
                }, function (res) {
                    if (res.msgcode == 1) {
                        if (!res.data.musicpath || res.data.musicpath == '/music/BillboardMusic/') {
                            res.data.musicpath = '/music/BillboardMusic/20180118030.mp3';
                        }
                        if (!res.data.scene) {
                            res.data.scene = '2';
                        }
                        if (!res.data.skin) {
                            res.data.skin = 'ff5053';
                        }
                        that.Info = res.data;
                        $("#music").attr('src', that.site2 + that.Info.musicpath);
                        $("#app>header.mirror-2").removeClass('mirror-2').addClass('mirror-' + that.Info.scene);
                        $('#app>header').css('background-color', '#' + that.Info.skin);
                        $("#music")[0].play();
                        $("header.mirror").css('height', "13rem");
                        console.log(res.data.status);
                        if (res.data.status == 1) {
                            //未开始
                            $("#vote-gifts-btn-group>vote-gifts-btn:eq(1)").show();
                            // $("#vote-1").show();
                        } else if (res.data.status == 3) {
                            $("#vote-gifts-btn-group>.vote-gifts-btn:eq(2)").show();
                        } else {
                            if (res.data.isvote) {
                                $("#vote-gifts-btn-group>.vote-gifts-btn:eq(3)").show();
                            } else {
                                $("#vote-gifts-btn-group>.vote-gifts-btn:eq(0)").show();
                            }
                        }
                        $('#reply-form-main').css('top', '-.4rem');
                        $('#user-infos-group img:eq(0)').attr('src', that.site2 + res.data.ulogo);
                        $('#shower-logo').attr('src', that.site2 + res.data.logo);
                        $("#user-infos-group>.user-infos>h5").html(res.data.uname).next().html(res.data.ptime);
                        $('#heart-single-group>.heart:eq(0)').html('<p>' + res.data.smile + '</p>').next().html('<p>' + res.data.lefteye + '</p>').next().html('<p>' + res.data.age + '</p>').next().html('<p>' + res.data.mouth + '</p>').next().html('<p>' + res.data.righteye + '</p>').next().html('<p>' + res.data.emotion + '</p>').next().html(res.data.gender);
                        $('.stamp-front>h3').html(res.data.score + '分');
                        $('.envelope-comments').html(res.data.comment);
                        $('#gift-modal .gift-panel-input>input').attr('max', res.data.pignunber);
                        $("#user>.user-infos>.user-detail>p:eq(0)").html(res.data.uname).next().html(res.data.ptime);
                        $('.heart-score').show().children('span').html(res.data.score - 0 + (res.data.poll - 0) + '分');
                        $('#comments-list').css('margin-top', '-.5rem');
                        $('#module-envelope').css('bottom', '1.4rem');
                    } else {
                        alert(res.msg);
                    }
                });
            } else {
                window.location.href = '/404.html';
            }
        },
        getList: function getList(query) {
            var that = this,
                id = that.getQueryString(query);
            if (id) {
                that.getAjax('/FrontendService.asmx/AppearanceShowCommonList?', {
                    id: id
                }, function (res) {
                    console.log(res);
                    if (res.msgcode == 1) {
                        var list = res.data.list;
                        if (list.length == 0) {
                            $("#comments-list").hide();
                            $("#comments-list.comments-none").show();
                        } else {
                            var html = '',
                                rhtml = '';
                            list.forEach(function (ele, index, array) {
                                if (list[index].rlist.length > 0) {
                                    list[index].rlist.forEach(function (rele, index, array) {
                                        rhtml += '<div class="rcomments-item" data-id=' + ele.id + '>' + '<div class="comments-top"  data-uid=' + rele.fuid + '>' + '<img src="' + that.site2 + rele.fulogo + '" alt="" class="avatar">' + '<div class="commenter-name">' + rele.funame + '</div>' + '<span>回复</span>' + '</div>' + '<div class="comment-content" data-id=' + rele.tuid + ' >@' + rele.tuname + '&nbsp;' + rele.fcontent + '</div>' + '</div>';
                                    });
                                } else {
                                    rhtml = '';
                                }
                                html += '<li class="comments-item" data-id=' + ele.id + '>' + '<div class="comments-top" data-uid=' + ele.uid + '>' + '<img src="' + that.site2 + ele.ulogo + '" alt="" class="avatar">' + '<div class="commenter-name">' + ele.uname + '</div>' + '<span>回复</span>' + '</div>' + '<div class="comment-content">' + ele.content + '</div>' + rhtml + '</li>';
                                $('#comments-list').html(html);
                            });
                        }
                    } else {
                        alert(res.msg);
                    }
                });
            } else {
                window.location.href = '/404.html';
            }
        },
        getList1: function getList1(query) {
            var that = this,
                id = that.getQueryString(query);
            if (id) {
                that.getAjax('/FrontendService.asmx/AppearanceLevelCommonList?', {
                    id: id
                }, function (res) {
                    if (res.msgcode == 1) {
                        var list = res.data.list;
                        if (list.length > 0) {
                            var html = '',
                                rhtml = '';
                            list.forEach(function (ele, index, array) {
                                if (list[index].rlist.length > 0) {
                                    list[index].rlist.forEach(function (rele, index, array) {
                                        rhtml += '<div class="rcomments-item" data-id=' + ele.id + '>' + '<div class="comments-top"  data-uid=' + rele.fuid + '>' + '<img src="' + that.site2 + rele.fulogo + '" alt="" class="avatar">' + '<div class="commenter-name">' + rele.funame + '</div>' + '<span>回复</span>' + '</div>' + '<div class="comment-content" data-id=' + rele.tuid + '>@' + rele.tuname + '&nbsp;' + rele.fcontent + '</div>' + '</div>';
                                    });
                                } else {
                                    rhtml = '';
                                }
                                html += '<li class="comments-item" data-id=' + ele.id + '>' + '<div class="comments-top" data-uid=' + ele.uid + '>' + '<img src="' + that.site2 + ele.ulogo + '" alt="" class="avatar">' + '<div class="commenter-name">' + ele.uname + '</div>' + '<span>回复</span>' + '</div>' + '<div class="comment-content">' + ele.content + '</div>' + rhtml + '</li>';
                                $('#comments-list').html(html);
                            });
                        } else {
                            $("#comments-list").hide();
                            $("#comments-list.comments-none").show();
                        }
                    } else {
                        alert(res.msg);
                    }
                });
            } else {
                window.location.href = '/404.html';
            }
        },
        share: function share() {
            if (Base.isClient) {
                var acc = Base.getQueryString('acc'),
                    href = window.location.href,
                    index = href.indexOf('acc');
                if (href.charAt(index - 1) == '&') {
                    var accStr = '&acc=' + acc;
                } else if (href.charAt(index - 1) == '?') {
                    var accStr = 'acc=' + acc + '&';
                }
                var params = {
                    title: Base.shareData.title,
                    subTitle: Base.shareData.subTitle,
                    shareUrl: href.replace(accStr, "")
                };
                WebViewJavascriptBridge.callHandler('skipCategoryOfShare', params, function (response) {});
            } else {
                if (browser.versions.mobile) {
                    //判断是否是移动设备打开。browser代码在下面
                    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
                        //在微信中打开或在QQ空间打开
                        if (confirm("您当前使用的是qq/微信，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
                            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                        }
                    } else if (browser.versions.ios || browser.versions.android) {
                        if (confirm("您当前使用的是浏览器，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
                            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                        }
                    }
                    if (ua.match(/WeiBo/i) == "weibo") {
                        if (confirm("您当前使用的是新浪，无法参与本次活动，确认下载app？参与到孤独活动中来?")) {
                            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                        }
                    }
                }
            }
        },
        downloadApp: function downloadApp() {
            if (browser.versions.mobile) {
                //判断是否是移动设备打开。browser代码在下面
                var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
                    //在微信中打开或在QQ空间打开
                    if (confirm("您当前使用的是qq/微信，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
                        location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                    }
                } else if (browser.versions.ios || browser.versions.android) {
                    if (confirm("您当前使用的是浏览器，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
                        location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                    }
                }
                if (ua.match(/WeiBo/i) == "weibo") {
                    if (confirm("您当前使用的是新浪，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
                        location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                    }
                }
            } else {
                if (confirm("您当前使用的是PC端页面，无法参与本次活动，确认下载app？参与到魔镜活动中来?")) {
                    location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ruanmeng.gexiazi';
                }
            }
        },
        submitForm: function submitForm(ele, _this) {
            var content = ele.val(),
                that = this,
                url = '';
            _this.parent().remove();
            if (!content) {
                $('#form-tips').text('不能什么都不说啊!').fadeIn();
                setTimeout(function () {
                    ele.val('');
                    $('#form-tips').text('').fadeOut();
                }, 1000);
            } else if (content.length < 5) {
                $('#form-tips').text('不能低于五个字呦!').fadeIn();
                setTimeout(function () {
                    ele.val('');
                    $('#form-tips').text('').fadeOut();
                }, 1000);
            } else {
                if (that.type == 1) {
                    url = '/ClientService.asmx/UserReviewAppearanceShow';
                } else {
                    url = '/ClientService.asmx/UserReviewAppearanceLevel';
                }
                that.postAjax(url, {
                    id: that.getQueryString('id'),
                    reviewid: that.reviewid,
                    reviewuserid: that.reviewuserid,
                    content: content
                }, function (res) {
                    if (res.msgcode == 1) {
                        $('#form-tips').text(res.msg).fadeIn();
                        $('.comments-list').html('');
                        if (that.type == 1) {
                            that.getList('id');
                        } else {
                            that.getList1('id');
                        }
                    } else {
                        $('#form-tips').text(res.msg).fadeIn();
                    }
                    setTimeout(function () {
                        ele.val('');
                        $('#form-tips').text('').fadeOut();
                    }, 1000);
                });
            }
        },
        isLogin: function isLogin() {
            var that = this;
            if (sessionStorage.getItem('login')) {
                return true;
            } else {
                return false;
            }
        },
        submitOnTop: function submitOnTop() {
            var that = this,
                loginStatu = that.isLogin(),
                content = $('#comments').val();
            if (content.length) {
                if (loginStatu) {
                    if (that.type == 1) {
                        // 秀场评论
                        var url = '/ClientService.asmx/UserReviewAppearanceShow';
                    } else {
                        var url = '/ClientService.asmx/UserReviewAppearanceLevel';
                    }
                    that.postAjax(url, {
                        id: that.id,
                        reviewid: 0,
                        reviewuserid: 0,
                        content: content
                    }, function (res) {
                        if (res.msgcode == 1) {
                            $('#form-tips').text(res.msg).fadeIn();
                            $('#comments').val('');
                            $('.comments-list').html('');
                            if (that.type == 1) {
                                that.getList('id');
                            } else {
                                that.getList1('id');
                            }
                        } else {
                            $('#form-tips').text(res.msg).fadeIn();
                        }
                    });
                } else {
                    window.sessionStorage.setItem('url', window.location);
                    window.location.href = 'logReg.html?' + window.location;
                }
            } else {
                $('#form-tips').text('您还什么都没有写呢').fadeIn();
            }
            setTimeout(function () {
                $('#form-tips').fadeOut(1000);
            }, 1000);
        },
        setReplyForm: function setReplyForm(_this) {
            var that = this,
                loginStatu = that.isLogin();
            if (!loginStatu) {
                window.sessionStorage.setItem('url', window.location);
                window.location.href = 'logReg.html?' + window.location;
            } else {
                $(".reply-area").each(function () {
                    _this.remove();
                });
                Base.reviewid = _this.parents('.comments-item').attr('data-id');
                Base.reviewuserid = _this.parent().attr('data-uid');
                var html = Base.replyHtml;
                _this.parent().next().after(html);
            }
        },
        voteForHim: function voteForHim(_this) {
            var that = this,
                loginStatu = that.isLogin();
            if (!loginStatu) {
                window.sessionStorage.setItem('url', window.location);
                window.location.href = 'logReg.html?' + window.location;
            } else {
                that.postAjax('/ClientService.asmx/HelpHimOnTheList', {
                    id: that.id
                }, function (res) {
                    if (res.msgcode == 1) {
                        $('#form-tips').text(res.msg).fadeIn();
                        ele.hide().next().next().next().show();
                        that.Info.isvote == 1;
                        $('.comments-list').html('');
                        if (that.type == 1) {
                            console.log(that.type == 1);
                            that.getList('id');
                        } else {
                            that.getList1('id');
                        }
                    } else {
                        $('#form-tips').text(res.msg).fadeIn();
                    }
                });
                setTimeout(function () {
                    $('#form-tips').fadeOut(1000);
                }, 1000);
            }
        },
        openGiftsModal: function openGiftsModal() {
            var that = this,
                loginStatu = that.isLogin(),
                num = that.Info.pignunber;
            if (!loginStatu) {
                window.sessionStorage.setItem('url', window.location);
                window.location.href = 'logReg.html?' + window.location;
            } else {
                if (num) {
                    that.giftFresh();
                    $('#gift-modal').fadeIn();
                } else {
                    $('#no-gift-modal').fadeIn();
                }
            }
        },
        giftFresh: function giftFresh() {
            var that = this,
                num = that.Info.pignunber,
                numFinally = parseInt(Math.random() * num) + 1,
                length = numFinally.toString().length;
            console.log(numFinally);
            if (numFinally == 0) {
                that.giftFresh();
            } else {
                that.Info.reduceNum = numFinally;
                $('#gift-number').val(numFinally).css({
                    'width': length * .5 + 'rem'
                });
            }
        },
        inputGiftNumber: function inputGiftNumber(ele) {
            var that = this,
                num = that.Info.pignunber,
                inputVal = $.trim(ele.val()),
                length = inputVal.toString().length;
            that.Info.reduceNum = inputVal;
            if (inputVal <= 0) {
                ele.val(1);
            } else {
                $('#gift-modal .gift-panel-input').css({
                    'width': length * .5 + 'rem'
                });
            }
        },
        focusRemark: function focusRemark(ele) {
            ele.hide();
            ele.next().show();
        },
        sendGiftsForHim: function sendGiftsForHim() {
            var that = this,
                loginStatu = that.isLogin();
            if (!loginStatu) {
                window.sessionStorage.setItem('url', window.location);
                window.location.href = 'logReg.html?' + window.location;
            } else {
                if (that.Info.reduceNum > that.Info.pignunber) {
                    $('#form-tips').text('您只有' + that.Info.pignunber + '个金猪').fadeIn();
                    setTimeout(function () {
                        $('#form-tips').fadeOut();
                    }, 1000);
                } else if (that.Info.pignunber == 0) {
                    $('#no-gift-modal').fadeIn();
                } else {
                    var remark = $('#gift-panel-message').val();
                    that.postAjax('/ClientService.asmx/UserGiveGoldenPig', {
                        id: that.id,
                        pn: that.Info.reduceNum,
                        remark: remark || ''
                    }, function (res) {
                        if (res.msgcode == 1) {
                            $('#form-tips').text(res.msg).fadeIn();
                            $('.comments-list').html('');
                            that.Info.pignunber = that.Info.pignunber - that.Info.reduceNum;
                        } else {
                            $('#form-tips').text(res.msg).fadeIn();
                        }
                    });
                    setTimeout(function () {
                        $('#form-tips').fadeOut();
                        that.closeGiftModal();
                    }, 1000);
                }
            }
        },
        closeGiftModal: function closeGiftModal() {
            var that = this,
                num = that.Info.pignunber;
            if (num) {
                $('#gift-modal').fadeOut();
                $('#gift-modal .gift-panel-message label').show();
                $('#gift-modal .gift-panel-message label').next().hide();
            } else {
                $('#no-gift-modal').fadeOut();
            }
        },
        init: function init() {
            let that = this;
            that.getDetail('id');
            // $('#share-btn').on('click', function () {
            //     that.downloadApp();
            // });
            // $('#btn-comments').on('click', function () {
            //     that.submitOnTop();
            // });
            // $('#comments-list').on('click', '.comments-top>span,img.smile', function () {
            //     var _this = $(this);
            //     that.setReplyForm(_this);
            // });
            // $("#comments-list").on('click', 'div#btn-reply', function () {
            //     var _this = $(this);
            //     Base.submitForm($('div#btn-reply').prev(), _this);
            // });
            // $('#vote').on('click', function () {
            //     var _this = $(this);
            //     that.voteForHim(_this);
            // });
            // $('#gifts').on('click', function () {
            //     that.openGiftsModal();
            // });
            // $('#gift-modal>.gift-bg,#gift-modal .gift-panel-close,#no-gift-modal .close-modal,#no-gift-modal>.no-gift-bg').on('click', function () {
            //     that.closeGiftModal();
            // });
            // $("#gift-modal .gift-panel-fresh").on('click', function () {
            //     that.giftFresh();
            // });
            // $('#gift-panel-give').on('click', function () {
            //     that.sendGiftsForHim();
            // });
            // $('#gift-number').on('keyup', function () {
            //     var _this = $(this);
            //     that.inputGiftNumber(_this);
            // });
            // $('#focus-label').on('click', function () {
            //     var _this = $(this);
            //     that.focusRemark(_this);
            // });
        }
    };
    Base.init();
})

// let app = new Vue({
//     el: '#app',
//     data() {
//         return {
//             icon: {
//                 add: "./images/+@2x.png",
//                 reduce: "./images/-@2x.png",
//             },
//             goods: {
//                 number: 1
//             },
//             site: "http://47.92.146.91:8089"
//         }
//     },
//     methods: {
//         getDatas(id) {
//             $.ajax({
//                 type: "POST", //提交方式 
//                 url: this.site + 'api/common/good/goodInfo', //路径 
//                 data: {
//                     "id": id
//                 }, //数据，这里使用的是Json格式进行传输 
//                 success: function (res) { //返回数据根据结果进行相应的处理 
//                     console.log(res);
//                     // if (result.success) {
//                     //     $("#tipMsg").text("删除数据成功");
//                     //     tree.deleteItem("${org.id}", true);
//                     // } else {
//                     //     $("#tipMsg").text("删除数据失败");
//                     // }
//                 }
//             });
//         }
//     },
//     mounted() {
//         this.getDatas();
//     },
// })