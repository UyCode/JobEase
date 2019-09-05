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
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _actions = require("./../store/actions/index.js"),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _utils = require("./../utils/utils.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }, {
        login: _actions.login
    }))(_class = function(e) {
        function t() {
            var e, i, n, o;
            _classCallCheck(this, t);
            for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
            return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.config = {
                navigationBarTitleText: ""
            }, n.components = {}, n.data = {
                mobile: "",
                inputVal: [],
                newValue: "",
                length: 0,
                time: 60,
                timer: null,
                isFouce: !0,
                textIndex: 0,
                verificationInfo: "",
                can: !1,
                verifyCode: "",
                Seconds: ""
            }, n.watch = {
                Seconds: function() {
                    var e = this;
                    if (this.time < 0) return this.verificationInfo = "点击重新发送验证码", this.can = !0, this.time = 60, void this.$apply();
                    this.verificationInfo = "重新发送 ( " + this.time + "s )", this.can = !1, this.time--;
                    var t = setTimeout(function() {
                        e.getNowFormatDate(), clearTimeout(t)
                    }, 1e3);
                    this.$apply()
                }
            }, n.methods = {
                send: function(e) {
                    e && (this.getNowFormatDate(), this.phoneRegister(this.mobile))
                },
                inputChange: function(e) {
                    var t = (e.currentTarget.dataset.index, e.detail.value.replace(/ /g, ""));
                    this.length = e.detail.value.length, this.inputVal = t.split(""), 4 === this.length && (this.verifyCode == t ? this.checkVerificationCode(t) : this.$parent.methods.showToast("验证码输入错误~")), this.$apply()
                },
                IsFouce: function() {
                    this.isFouce = !0, this.$apply()
                },
                notFocus: function() {
                    this.isFouce = !1, this.$apply()
                },
                itemTap: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.textIndex = t
                },
                submit: function() {
                    this.inputVal
                }
            }, n.events = {}, o = i, _possibleConstructorReturn(n, o)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "checkVerificationCode",
            value: function(e) {
                var t = this;
                this.$parent.methods.showLoading("正在登陆...");
                var i = {};
                wx.getStorageSync("submitParams") && (i = wx.getStorageSync("submitParams")), _request2.default.cehomeRequest(_request2.default.Api.registerLoginByMobileVC(), Object.assign({
                    mobile: this.mobile,
                    vc: e
                }, i), "POST", this).then(function(e) {
                    200 == e.statusCode && 0 == e.data.ret ? (t.methods.login(e.data.data), wx.setStorageSync("loginInfo", Object.assign(e.data.data, {
                        registerTime: (0, _utils.nowDate)(new Date),
                        isPopup: !0
                    })), wx.setStorageSync("isPopup", {
                        registerTime: (0, _utils.nowDate)(new Date),
                        isPopup: !0
                    }), t.time = 0, wx.navigateBack({
                        delta: 2
                    }), t.$parent.methods.hideLoading()) : (t.time = 0, setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        })
                    }, 2e3), t.$parent.methods.showToast(e.data.msg))
                }).catch(function(e) {
                    "request:fail timeout" == e.errMsg ? t.$parent.methods.showToast("网络请求超时~") : t.$parent.methods.showToast("网络好像有问题，请检查网络~")
                })
            }
        }, {
            key: "phoneRegister",
            value: function(e) {
                var t = this;
                _request2.default.cehomeRequest(_request2.default.Api.sendVCOfRegisterLogin(), {
                    mobile: e
                }, "POST", this).then(function(e) {
                    200 == e.statusCode ? t.verifyCode = e.data.data : t.methods.showToast("网络好像有问题，请检查网络~")
                }).catch(function(e) {
                    "request:fail timeout" == e.errMsg ? t.methods.showToast("网络请求超时~") : t.methods.showToast("网络好像有问题，请检查网络~")
                })
            }
        }, {
            key: "getNowFormatDate",
            value: function() {
                var e = new Date,
                    t = (e.getHours() < 10 ? e.getHours() : e.getHours(), e.getMinutes() < 10 ? e.getMinutes() : e.getMinutes(), e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds());
                this.Seconds = t, this.$apply()
            }
        }, {
            key: "onLoad",
            value: function(e) {
                this.phoneRegister(e.mobile), this.mobile = e.mobile, this.getNowFormatDate()
            }
        }, {
            key: "onShow",
            value: function() {}
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/verificationCode"));