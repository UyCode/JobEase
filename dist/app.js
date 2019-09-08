"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, s) {
                try {
                    var a = t[r](s),
                        i = a.value
                } catch (e) {
                    return void n(e)
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    o("next", e)
                }, function(e) {
                    o("throw", e)
                });
                e(i)
            }
            return o("next")
        })
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
        }
    }(),
    _wepy = require("./npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy);
require("./npm/wepy-async-function/index.js");
var _request = require("./common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _wepyRedux = require("./npm/wepy-redux/lib/index.js"),
    _store = require("./store/index.js"),
    _store2 = _interopRequireDefault(_store),
    _types = require("./store/types/index.js"),
    _sensorsdata = require("./common/sensorsdata.js"),
    _sensorsdata2 = _interopRequireDefault(_sensorsdata),
    store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);
var _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [
                "pages/index",
                "pages/resumeDetail",
                "pages/postResume",
                "pages/about",
                "pages/postjob",
                "pages/report",
                "pages/jobDetail",
                "pages/listPage",
                "pages/realAuthentication",
                "pages/release",
                "pages/chooseCity",
                "pages/projectType",
                "pages/my-release",
                "pages/verificationCode",
                "pages/register",
                "pages/personal"
            ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "black"
            },
            tabBar: {
                color: "#bdc1c9",
                selectedColor: "#3b6afb",
                borderStyle: "white",
                backgroundColor: "#fff",
                list: [{
                    selectedIconPath: "images/homeed.png",
                    iconPath: "images/home.png",
                    pagePath: "pages/index",
                    text: "首页"
                }, {
                    selectedIconPath: "images/myed.png",
                    iconPath: "images/my.png",
                    pagePath: "pages/personal",
                    text: "我的"
                }, {
                    selectedIconPath: "images/replesed.png",
                    iconPath: "images/reples.png",
                    pagePath: "pages/release",
                    text: "发布"
                }]
            }
        }, e.sensorsPublic = _sensorsdata2.default, e.globalData = {
            userInfo: null
        }, e.methods = {
            showToast: function(e, t, n) {
                wx.showToast({
                    title: e || "",
                    icon: t || "none",
                    duration: n || 2e3
                })
            },
            showLoading: function(e, t, n) {
                wx.showLoading({
                    title: e || "",
                    icon: t || "",
                    duration: n || 3e4,
                    mask: !0
                })
            },
            hideLoading: function() {
                wx.hideLoading()
            }
        }, e.login = function() {
            return new Promise(function(t, n) {
                wx.login({
                    success: function(t) {
                        _request2.default.cehomeRequest(_request2.default.Api.getOpenid(), {
                            jsCode: t.code
                        }, "GET", e).then(function(t) {
                            if (200 == t.statusCode) {
                                var n = t.data.data;
                                store.dispatch({
                                    type: _types.GET_WXINFO_SUCCESS,
                                    payload: {
                                        wxInfo: n
                                    }
                                });
                                try {
                                    wx.setStorageSync("wxInfo", n)
                                } catch (e) {}
                            } else e.methods.showToast("网络好像有问题，请检查网络~")
                        }).catch(function(t) {
                            "request:fail timeout" == t.errMsg ? e.methods.showToast("网络请求超时~") : e.methods.showToast("网络好像有问题，请检查网络~")
                        })
                    }
                })
            })
        }, e.getUserInfo = function() {
            return new Promise(function(e, t) {
                wx.getUserInfo({
                    success: function(t) {
                        e("ok")
                    },
                    fail: function(e) {
                        t("err")
                    }
                })
            })
        }, e.checkUser = function() {
            return new Promise(function(e, t) {})
        }, e.use("requestfix"), e
    }
    return _inherits(t, e), _createClass(t, [{
        key: "onLaunch",
        value: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return _sensorsdata2.default.sensorsPublic(), this.getSystemInfo(), wx.setStorage({
                                key: "IndexChooseCity",
                                data: ""
                            }), e.next = 5, wx.checkSession({
                                success: function(e) {
                                    try {
                                        var n = wx.getStorageSync("wxInfo"),
                                            o = wx.getStorageSync("loginInfo");
                                        n ? store.dispatch({
                                            type: _types.GET_WXINFO_SUCCESS,
                                            payload: {
                                                wxInfo: n
                                            }
                                        }) : t.login(), o && store.dispatch({
                                            type: _types.LOGIN_SUCCESS,
                                            payload: {
                                                userInfo: o
                                            }
                                        })
                                    } catch (e) {}
                                },
                                fail: function() {
                                    t.login()
                                }
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return e
        }()
    }, {
        key: "getSystemInfo",
        value: function() {
            wx.getSystemInfo({
                success: function(e) {
                    var t = e.windowWidth / 375,
                        n = e.windowHeight / 603;
                    wx.setStorageSync("kScreenW", t), wx.setStorageSync("kScreenH", n), wx.setStorageSync("ScreenH", e.windowHeight)
                }
            })
        }
    }]), t
}(_wepy2.default.app);
App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: ["createSelectorQuery"]
}));