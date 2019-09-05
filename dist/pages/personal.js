"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _LoginMode = require("./../components/LoginMode.js"),
    _LoginMode2 = _interopRequireDefault(_LoginMode),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, n, o, s;
            _classCallCheck(this, t);
            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.config = {
                navigationBarTitleText: "个人中心"
            }, o.$repeat = {}, o.$props = {
                LoginMode: {
                    "xmlns:v-bind": "",
                    "v-bind:isClose.sync": "isClose"
                }
            }, o.$events = {}, o.components = {
                LoginMode: _LoginMode2.default
            }, o.data = {
                isClose: !0,
                userName: "点击登录",
                userImg: "https://bbs.cehome.com/wxApp/jobResume/imgs/header.jpg",
                types: {
                    "-1": "未认证",
                    1: "已完成个人认证",
                    2: "已完成企业认证"
                },
                info: {
                    collectHdCount: "",
                    collectResumeCount: "",
                    legalizeType: "",
                    publishHdCount: "",
                    publishResumeCount: ""
                },
                isLogin: !1
            }, o.computed = {}, o.methods = {
                click: function() {
                    this.methods.login("UserInfo")
                },
                navigetor: function(e) {
                    if ("success" == this.state.login.status) {
                        var t = e.currentTarget.dataset.navigetpage,
                            n = e.currentTarget.dataset.id;
                        t = n ? t + "?id=" + n : t, wx.navigateTo({
                            url: t
                        })
                    } else this.isClose = !1, this.$apply()
                },
                isLogin: function() {
                    "success" != this.state.login.status && (this.isClose = !1, this.$apply())
                }
            }, o.events = {}, o.watch = {
                state: function(e, t) {
                    this.getUserInfo()
                }
            }, s = n, _possibleConstructorReturn(o, s)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShow",
            value: function() {
                "success" == this.state.login.status && this.getUserInfo()
            }
        }, {
            key: "onLoad",
            value: function() {
                this.$parent.sensorsPublic.autoTrackPageShow("个人主页")
            }
        }, {
            key: "getUserInfo",
            value: function() {
                var e = this;
                this.userImg = this.state.login.userInfo.avatar, this.userName = this.state.login.userInfo.username, _request2.default.cehomeRequest(_request2.default.Api.getJobUserInfo(), {}, "GET").then(function(t) {
                    var n = t.data;
                    0 == n.ret && (e.info = n.data, e.$apply())
                })
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/personal"));