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
}), exports.default = void 0;
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
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _actions = require("./../store/actions/index.js"),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _utils = require("./../utils/utils.js"),
    loginMode = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }, {
        login: _actions.login
    }))(_class = function(e) {
        function t() {
            var e, n, o, i;
            _classCallCheck(this, t);
            for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
            return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), o.props = {
                isClose: {
                    twoWay: !0
                }
            }, o.data = {
                text: ""
            }, o.events = {}, o.watch = {}, o.methods = {
                isClose: function() {
                    this.isClose = !0, this.$apply()
                },
                goNavigator: function() {
                    wx.navigateTo({
                        url: "register"
                    })
                },
                getPhoneNumber: function(e) {
                    if (e.detail.encryptedData) {
                        var t = {
                            encryptedData: e.detail.encryptedData,
                            iv: e.detail.iv,
                            sessionKey: this.state.login.wxInfo.session_key
                        };
                        this.methods.login(t)
                    }
                },
                onGotUserInfo: function(e) {
                    var t = {};
                    "getUserInfo:fail auth deny" == e.detail.errMsg || (this.state.login.wxInfo.unionid ? (t.wxUnionid = this.state.login.wxInfo.unionid, this.userLogin(t)) : (t.encryptedData = e.detail.encryptedData, t.iv = e.detail.iv, t.sessionKey = this.state.login.wxInfo.session_key, this.userLogin(t)))
                }
            }, i = n, _possibleConstructorReturn(o, i)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "userLogin",
            value: function(e) {
                var t = this;
                _request2.default.cehomeRequest(_request2.default.Api.getUserByWxUnionid(), e, "POST").then(function(n) {
                    t.text = JSON.stringify(n), t.$apply(), 200 == n.statusCode && 0 == n.data.ret ? (wx.hideLoading(), wx.setStorageSync("loginInfo", Object.assign(n.data.data, {
                        registerTime: (0, _utils.nowDate)(new Date)
                    })), wx.setStorageSync("isPopup", {
                        registerTime: (0, _utils.nowDate)(new Date),
                        isPopup: !0
                    }), t.methods.login(n.data.data)) : 200 == n.statusCode && 4012 == n.data.ret ? (wx.setStorageSync("submitParams", e), wx.navigateTo({
                        url: "register"
                    })) : wx.showToast({
                        title: n.data.msg ? n.data.msg : "请求失败",
                        icon: "none",
                        duration: 2e3
                    })
                }).catch(function(e) {
                    t.text = JSON.stringify(e), t.$apply(), "request:fail timeout" == e.errMsg ? wx.showToast({
                        title: "网络请求超时~",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showToast({
                        title: "网络好像有问题，请检查网络~",
                        icon: "none",
                        duration: 2e3
                    })
                })
            }
        }]), t
    }(_wepy2.default.component)) || _class;
exports.default = loginMode;