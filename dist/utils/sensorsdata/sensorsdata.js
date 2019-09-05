"use strict";

function e(t, e, r) {
    if (t[e]) {
        var n = t[e];
        t[e] = function(t) {
            r.call(this, t, e), n.call(this, t)
        }
    } else t[e] = function(t) {
        r.call(this, t, e)
    }
}

function appLaunch(t) {
    this[sa.para.name] = sa, sa.init();
    var e = {};
    t && t.path && (e.$url_path = t.path), t && _.isObject(t.query) && t.query.q && _.extend(e, _.getUtm(t.query.q)), e.$scene = _.getMPScene(t.scene), sa.para.autoTrack && !0 === sa.para.autoTrack.appLaunch && sa.autoTrackCustom("appLaunch", e, "$MPLaunch")
}

function appShow(t) {
    var e = {};
    t && t.path && (e.$url_path = t.path), t && _.isObject(t.query) && t.query.q && _.extend(e, _.getUtm(t.query.q)), e.$scene = _.getMPScene(t.scene), sa.para.autoTrack && !0 === sa.para.autoTrack.appShow && sa.autoTrackCustom("appShow", e, "$MPShow")
}

function appHide() {
    sa.para.autoTrack && !0 === sa.para.autoTrack.appHide && sa.autoTrackCustom("appHide", {}, "$MPHide")
}

function appError() {}

function appUnLaunch() {}

function pageOnunload(t, e) {}

function pageOnHide() {}

function pageOnReady() {}

function pageOnPullDownRefresh() {}

function pageOnReachBottom() {}

function pageOnShareAppMessage(t, e) {}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    _ = {},
    sa = {};
sa.para = require("./sensorsdata_conf.js"), sa._queue = [], sa.getSystemInfoComplete = !1;
var ArrayProto = Array.prototype,
    FuncProto = Function.prototype,
    ObjProto = Object.prototype,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty,
    LIB_VERSION = "1.0",
    LIB_NAME = "MiniProgram",
    source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
    mp_scene = {
        1001: "发现栏小程序主入口",
        1005: "顶部搜索框的搜索结果页",
        1006: "发现栏小程序主入口搜索框的搜索结果页",
        1007: "单人聊天会话中的小程序消息卡片",
        1008: "群聊会话中的小程序消息卡片",
        1011: "扫描二维码",
        1012: "长按图片识别二维码",
        1013: "手机相册选取二维码",
        1014: "小程序模版消息",
        1017: "前往体验版的入口页",
        1019: "微信钱包",
        1020: "公众号 profile 页相关小程序列表",
        1022: "聊天顶部置顶小程序入口",
        1023: "安卓系统桌面图标",
        1024: "小程序 profile 页",
        1025: "扫描一维码",
        1026: "附近小程序列表",
        1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
        1028: "我的卡包",
        1029: "卡券详情页",
        1030: "自动化测试下打开小程序",
        1031: "长按图片识别一维码",
        1032: "手机相册选取一维码",
        1034: "微信支付完成页",
        1035: "公众号自定义菜单",
        1036: "App 分享消息卡片",
        1037: "小程序打开小程序",
        1038: "从另一个小程序返回",
        1039: "摇电视",
        1042: "添加好友搜索框的搜索结果页",
        1043: "公众号模板消息",
        1044: "带 shareTicket 的小程序消息卡片（详情)",
        1047: "扫描小程序码",
        1048: "长按图片识别小程序码",
        1049: "手机相册选取小程序码",
        1052: "卡券的适用门店列表",
        1053: "搜一搜的结果页",
        1054: "顶部搜索框小程序快捷入口",
        1056: "音乐播放器菜单",
        1057: "钱包中的银行卡详情页",
        1058: "公众号文章",
        1059: "体验版小程序绑定邀请页",
        1064: "微信连Wi-Fi状态栏",
        1067: "公众号文章广告",
        1068: "附近小程序列表广告",
        1071: "钱包中的银行卡列表页",
        1072: "二维码收款页面",
        1073: "客服消息列表下发的小程序消息卡片",
        1074: "公众号会话下发的小程序消息卡片",
        1078: "连Wi-Fi成功页",
        1089: "微信聊天主界面下拉",
        1090: "长按小程序右上角菜单唤出最近使用历史",
        1092: "城市服务入口"
    },
    sa_referrer = "直接打开";
sa.lib_version = LIB_VERSION;
var logger = "object" === (void 0 === logger ? "undefined" : _typeof(logger)) ? logger : {};
logger.info = function() {
        "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log
    },
    function() {
        var t = (FuncProto.bind, ArrayProto.forEach),
            e = ArrayProto.indexOf,
            r = Array.isArray,
            n = {},
            i = _.each = function(e, r, i) {
                if (null == e) return !1;
                if (t && e.forEach === t) e.forEach(r, i);
                else if (e.length === +e.length) {
                    for (var s = 0, o = e.length; s < o; s++)
                        if (s in e && r.call(i, e[s], s, e) === n) return !1
                } else
                    for (var a in e)
                        if (hasOwnProperty.call(e, a) && r.call(i, e[a], a, e) === n) return !1
            };
        _.logger = logger, _.extend = function(t) {
            return i(slice.call(arguments, 1), function(e) {
                for (var r in e) void 0 !== e[r] && (t[r] = e[r])
            }), t
        }, _.extend2Lev = function(t) {
            return i(slice.call(arguments, 1), function(e) {
                for (var r in e) void 0 !== e[r] && (_.isObject(e[r]) && _.isObject(t[r]) ? _.extend(t[r], e[r]) : t[r] = e[r])
            }), t
        }, _.coverExtend = function(t) {
            return i(slice.call(arguments, 1), function(e) {
                for (var r in e) void 0 !== e[r] && void 0 === t[r] && (t[r] = e[r])
            }), t
        }, _.isArray = r || function(t) {
            return "[object Array]" === toString.call(t)
        }, _.isFunction = function(t) {
            try {
                return /^\s*\bfunction\b/.test(t)
            } catch (t) {
                return !1
            }
        }, _.isArguments = function(t) {
            return !(!t || !hasOwnProperty.call(t, "callee"))
        }, _.toArray = function(t) {
            return t ? t.toArray ? t.toArray() : _.isArray(t) ? slice.call(t) : _.isArguments(t) ? slice.call(t) : _.values(t) : []
        }, _.values = function(t) {
            var e = [];
            return null == t ? e : (i(t, function(t) {
                e[e.length] = t
            }), e)
        }, _.include = function(t, r) {
            var s = !1;
            return null == t ? s : e && t.indexOf === e ? -1 != t.indexOf(r) : (i(t, function(t) {
                if (s || (s = t === r)) return n
            }), s)
        }
    }(), _.trim = function(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, _.isObject = function(t) {
        return "[object Object]" == toString.call(t) && null != t
    }, _.isEmptyObject = function(t) {
        if (_.isObject(t)) {
            for (var e in t)
                if (hasOwnProperty.call(t, e)) return !1;
            return !0
        }
        return !1
    }, _.isUndefined = function(t) {
        return void 0 === t
    }, _.isString = function(t) {
        return "[object String]" == toString.call(t)
    }, _.isDate = function(t) {
        return "[object Date]" == toString.call(t)
    }, _.isBoolean = function(t) {
        return "[object Boolean]" == toString.call(t)
    }, _.isNumber = function(t) {
        return "[object Number]" == toString.call(t) && /[\d\.]+/.test(String(t))
    }, _.isJSONString = function(t) {
        try {
            JSON.parse(t)
        } catch (t) {
            return !1
        }
        return !0
    }, _.decodeURIComponent = function(t) {
        var e = "";
        try {
            e = decodeURIComponent(t)
        } catch (r) {
            e = t
        }
        return e
    }, _.encodeDates = function(t) {
        return _.each(t, function(e, r) {
            _.isDate(e) ? t[r] = _.formatDate(e) : _.isObject(e) && (t[r] = _.encodeDates(e))
        }), t
    }, _.formatDate = function(t) {
        function e(t) {
            return t < 10 ? "0" + t : t
        }
        return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds())
    }, _.searchObjDate = function(t) {
        _.isObject(t) && _.each(t, function(e, r) {
            _.isObject(e) ? _.searchObjDate(t[r]) : _.isDate(e) && (t[r] = _.formatDate(e))
        })
    }, _.formatString = function(t) {
        return t.length > sa.para.max_string_length ? (logger.info("字符串长度超过限制，已经做截取--" + t), t.slice(0, sa.para.max_string_length)) : t
    }, _.searchObjString = function(t) {
        _.isObject(t) && _.each(t, function(e, r) {
            _.isObject(e) ? _.searchObjString(t[r]) : _.isString(e) && (t[r] = _.formatString(e))
        })
    }, _.unique = function(t) {
        for (var e, r = [], n = {}, i = 0; i < t.length; i++)(e = t[i]) in n || (n[e] = !0, r.push(e));
        return r
    }, _.strip_sa_properties = function(t) {
        return _.isObject(t) ? (_.each(t, function(e, r) {
            if (_.isArray(e)) {
                var n = [];
                _.each(e, function(t) {
                    _.isString(t) ? n.push(t) : logger.info("您的数据-", e, "的数组里的值必须是字符串,已经将其删除")
                }), 0 !== n.length ? t[r] = n : (delete t[r], logger.info("已经删除空的数组"))
            }
            _.isString(e) || _.isNumber(e) || _.isDate(e) || _.isBoolean(e) || _.isArray(e) || (logger.info("您的数据-", e, "-格式不满足要求，我们已经将其删除"), delete t[r])
        }), t) : t
    }, _.strip_empty_properties = function(t) {
        var e = {};
        return _.each(t, function(t, r) {
            null != t && (e[r] = t)
        }), e
    }, _.utf8Encode = function(t) {
        t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var e, r, n, i = "",
            s = 0;
        for (e = r = 0, s = t.length, n = 0; n < s; n++) {
            var o = t.charCodeAt(n),
                a = null;
            o < 128 ? r++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), null !== a && (r > e && (i += t.substring(e, r)), i += a, e = r = n + 1)
        }
        return r > e && (i += t.substring(e, t.length)), i
    }, _.base64Encode = function(t) {
        var e, r, n, i, s, o, a, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            p = 0,
            f = 0,
            l = "",
            h = [];
        if (!t) return t;
        t = _.utf8Encode(t);
        do {
            e = t.charCodeAt(p++), r = t.charCodeAt(p++), n = t.charCodeAt(p++), c = e << 16 | r << 8 | n, i = c >> 18 & 63, s = c >> 12 & 63, o = c >> 6 & 63, a = 63 & c, h[f++] = u.charAt(i) + u.charAt(s) + u.charAt(o) + u.charAt(a)
        } while (p < t.length);
        switch (l = h.join(""), t.length % 3) {
            case 1:
                l = l.slice(0, -2) + "==";
                break;
            case 2:
                l = l.slice(0, -1) + "="
        }
        return l
    }, _.getQueryParam = function(t, e) {
        t = _.decodeURIComponent(t);
        var r = "[\\?&]" + e + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(t);
        return null === i || i && "string" != typeof i[1] && i[1].length ? "" : _.decodeURIComponent(i[1])
    }, _.getUtm = function(t) {
        var e = source_channel_standard.split(" "),
            r = source_channel_standard.split(" "),
            n = "",
            i = {};
        return t = _.decodeURIComponent(t), t = t.split("?"), 2 !== t.length ? {} : (t = t[1], t = "?" + t, _.isArray(sa.para.source_channel) && sa.para.source_channel.length > 0 && (r = r.concat(sa.para.source_channel), r = _.unique(r)), _.each(r, function(r) {
            n = _.getQueryParam(t, r), n.length && (_.include(e, r) ? i["$" + r] = n : i[r] = n)
        }), i)
    }, _.getMPScene = function(t) {
        return t = String(t), mp_scene[t] || t
    }, _.info = {
        properties: {
            $lib: LIB_NAME,
            $lib_version: String(LIB_VERSION),
            $user_agent: "SensorsAnalytics MP SDK"
        },
        getSystem: function() {
            function t() {
                wx.getSystemInfo({
                    success: function(t) {
                        e.$model = t.model, e.$screen_width = Number(t.windowWidth), e.$screen_height = Number(t.windowHeight), e.$os = t.system.split(" ")[0], e.$os_version = t.system.split(" ")[1]
                    },
                    complete: r.setStatusComplete
                })
            }
            var e = this.properties,
                r = this;
            ! function() {
                wx.getNetworkType({
                    success: function(t) {
                        e.$network_type = t.networkType
                    },
                    complete: t
                })
            }()
        },
        setStatusComplete: function() {
            sa.getSystemInfoComplete = !0, sa._queue.length > 0 && (_.each(sa._queue, function(t) {
                sa.prepareData.apply(sa, slice.call(t))
            }), sa._queue = [])
        }
    }, sa._ = _, sa.prepareData = function(t, e) {
        if (!sa.getSystemInfoComplete) return sa._queue.push(arguments), !1;
        var r = {
            distinct_id: this.store.getDistinctId(),
            lib: {
                $lib: LIB_NAME,
                $lib_method: "code",
                $lib_version: String(LIB_VERSION)
            },
            properties: {}
        };
        _.extend(r, t), _.isObject(t.properties) && !_.isEmptyObject(t.properties) && _.extend(r.properties, t.properties), t.type && "profile" === t.type.slice(0, 7) || (r.properties = _.extend({}, _.info.properties, sa.store.getProps(), r.properties), "object" === _typeof(sa.store._state) && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > (new Date).getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1), r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, delete r.properties.$time) : sa.para.use_client_time && (r.time = 1 * new Date), _.searchObjDate(r), _.searchObjString(r), sa.send(r, e)
    }, sa.store = {
        getUUID: function() {
            return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8)
        },
        setStorage: function() {},
        getStorage: function() {
            return wx.getStorageSync("sensorsdata2015_wechat") || ""
        },
        _state: {},
        toState: function(t) {
            var e = null;
            _.isJSONString(t) ? (e = JSON.parse(t), e.distinct_id ? this._state = e : this.set("distinct_id", this.getUUID())) : this.set("distinct_id", this.getUUID())
        },
        getFirstId: function() {
            return this._state.first_id
        },
        getDistinctId: function() {
            return this._state.distinct_id
        },
        getProps: function() {
            return this._state.props || {}
        },
        setProps: function(t, e) {
            var r = this._state.props || {};
            e ? this.set("props", t) : (_.extend(r, t), this.set("props", r))
        },
        set: function(t, e) {
            var r = {};
            "string" == typeof t ? r[t] = e : "object" === (void 0 === t ? "undefined" : _typeof(t)) && (r = t), this._state = this._state || {};
            for (var n in r) this._state[n] = r[n];
            this.save()
        },
        change: function(t, e) {
            this._state[t] = e
        },
        save: function() {
            wx.setStorageSync("sensorsdata2015_wechat", JSON.stringify(this._state))
        },
        init: function() {
            var t = this.getStorage();
            if (t) this.toState(t);
            else {
                var e = new Date,
                    r = e.getTime();
                e.setHours(23), e.setMinutes(59), e.setSeconds(60), this.set({
                    distinct_id: this.getUUID(),
                    first_visit_time: r,
                    first_visit_day_time: e.getTime()
                })
            }
        }
    }, sa.setProfile = function(t, e) {
        sa.prepareData({
            type: "profile_set",
            properties: t
        }, e)
    }, sa.setOnceProfile = function(t, e) {
        sa.prepareData({
            type: "profile_set_once",
            properties: t
        }, e)
    }, sa.track = function(t, e, r) {
        this.prepareData({
            type: "track",
            event: t,
            properties: e
        }, r)
    }, sa.identify = function(t, e) {
        if ("number" == typeof t) t = String(t);
        else if ("string" != typeof t) return !1;
        var r = sa.store.getFirstId();
        !0 === e ? r ? sa.store.set("first_id", t) : sa.store.set("distinct_id", t) : r ? sa.store.change("first_id", t) : sa.store.change("distinct_id", t)
    }, sa.trackSignup = function(t, e, r, n) {
        sa.prepareData({
            original_id: sa.store.getFirstId() || sa.store.getDistinctId(),
            distinct_id: t,
            type: "track_signup",
            event: e,
            properties: r
        }, n), sa.store.set("distinct_id", t)
    }, sa.register = function(t) {
        _.isObject(t) && !_.isEmptyObject(t) && sa.store.setProps(t)
    }, sa.clearAllRegister = function() {
        sa.store.setProps({}, !0)
    }, sa.login = function(t) {
        var e = sa.store.getFirstId(),
            r = sa.store.getDistinctId();
        t !== r && (e ? sa.trackSignup(t, "$SignUp") : (sa.store.set("first_id", r), sa.trackSignup(t, "$SignUp")))
    }, sa.init = function() {
        this._.info.getSystem(), this.store.init(), _.isObject(this.para.register) && (_.info.properties = _.extend(_.info.properties, this.para.register))
    }, _.autoExeQueue = function() {
        return {
            items: [],
            enqueue: function(t) {
                this.items.push(t), this.start()
            },
            dequeue: function() {
                return this.items.shift()
            },
            getCurrentItem: function() {
                return this.items[0]
            },
            isRun: !1,
            start: function() {
                this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start())
            },
            close: function() {
                this.dequeue(), this.isRun = !1, this.start()
            }
        }
    }, sa.requestQueue = function(t) {
        this.url = t.url
    }, sa.requestQueue.prototype.isEnd = function() {
        this.received || (this.received = !0, this.close())
    }, sa.requestQueue.prototype.start = function() {
        var t = this;
        setTimeout(function() {
            t.isEnd()
        }, 300), wx.request({
            url: this.url,
            method: "GET",
            complete: function() {
                t.isEnd()
            }
        })
    }, sa.dataQueue = _.autoExeQueue(), sa.send = function(t) {
        var e = "";
        t._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), logger.info(t), t = JSON.stringify(t), e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(t)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(t));
        var r = new sa.requestQueue({
            url: e
        });
        r.close = function() {
            sa.dataQueue.close()
        }, sa.dataQueue.enqueue(r)
    }, sa.autoTrackCustom = function(t, e, r) {
        var n = sa.para.autoTrack[t],
            i = "";
        sa.para.autoTrack && n && ("function" == typeof n ? (i = n(), _.isObject(i) && _.extend(e, i)) : _.isObject(n) && _.extend(e, n), sa.track(r, e))
    };
var p = App;
App = function(t) {
    e(t, "onLaunch", appLaunch), e(t, "onShow", appShow), e(t, "onHide", appHide), p(t)
};
var v = Page;
Page = function(t) {
    e(t, "onLoad", function(t) {
        t && _.isObject(t) && t.q && (this.sensors_mp_load_utm = _.getUtm(t.q))
    }), e(t, "onShow", function() {
        var t = "系统没有取到值";
        "object" === _typeof(this) && ("string" == typeof this.route ? t = this.route : "string" == typeof this.__route__ && (t = this.__route__));
        var e = {};
        e.$referrer = sa_referrer, e.$url_path = t, this.sensors_mp_load_utm && (_.extend(e, this.sensors_mp_load_utm), this.sensors_mp_load_utm = null), sa.para.onshow ? sa.para.onshow(sa, t, this) : sa.autoTrackCustom("pageShow", e, "$MPViewScreen"), sa_referrer = t
    }), v(t)
}, module.exports = sa;