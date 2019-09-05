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
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, i, o) {
            return i && e(t.prototype, i), o && e(t, o), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, i, o, n;
            _classCallCheck(this, t);
            for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            return i = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), o.props = {
                loaderTitle: {},
                editorDataObject: {
                    twoWay: !0
                },
                submitData: {
                    twoWay: !0
                }
            }, o.data = {
                info: [{
                    name: "联系人",
                    value: "",
                    type: "name"
                }, {
                    name: "联系电话",
                    value: "",
                    type: "tel"
                }],
                time: 60,
                timer: null,
                can: !0,
                Seconds: "",
                verificationInfo: "点击获取验证码",
                verificationCode: "",
                VerifyCode: !1
            }, o.watch = {
                editorDataObject: function() {
                    var e = this;
                    this.info[0].value = this.editorDataObject.name, this.info.forEach(function(t) {
                        e.submitData[t.type] = t.value
                    }), this.$apply()
                },
                Seconds: function() {
                    var e = this;
                    if (this.time <= 0) return this.verificationInfo = "点击重新发送验证码", this.can = !0, this.time = 60, void this.$apply();
                    this.verificationInfo = "重新发送 ( " + this.time + "s )", this.can = !1, this.time--;
                    var t = setTimeout(function() {
                        e.getNowFormatDate(), clearTimeout(t)
                    }, 1e3);
                    this.$apply()
                }
            }, o.methods = {
                inputFun: function(e) {
                    var t = e.detail.value;
                    switch (e.target.dataset.type) {
                        case "tel":
                            if (!/^1(([38]\d)|(4[57])|(5[012356789])|(6[6])|(7[0678])|(9[89]))\d{8}$/.test(t)) return wx.showToast({
                                title: "请输入正确的手机号",
                                icon: "none",
                                duration: 1200
                            }), void this.$emit("editorData", "tel", "");
                            t != this.state.login.userInfo.mobile ? this.VerifyCode = !0 : this.VerifyCode = !1, this.$emit("editorData", "tel", t);
                            break;
                        case "name":
                            t.length <= 0 && wx.showToast({
                                title: "请输入联系人姓名",
                                icon: "none",
                                duration: 1200
                            });
                            break;
                        case "verificationCode":
                            t.length <= 0 && wx.showToast({
                                title: "验证码不能为空",
                                icon: "none",
                                duration: 1200
                            })
                    }
                    this.$emit("editorData", e.target.dataset.type, t)
                },
                getVerifyCode: function() {
                    this.getNowFormatDate(), this.verificationCodeFun()
                }
            }, n = i, _possibleConstructorReturn(o, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {
                this.state.login.login && (this.info[1].value = this.state.login.userInfo.mobile), this.$apply()
            }
        }, {
            key: "getNowFormatDate",
            value: function() {
                var e = new Date,
                    t = (e.getHours() < 10 ? e.getHours() : e.getHours(), e.getMinutes() < 10 ? e.getMinutes() : e.getMinutes(), e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds());
                this.Seconds = t, this.$apply()
            }
        }, {
            key: "verificationCodeFun",
            value: function() {
                _request2.default.cehomeRequest(_request2.default.Api.getPhoneCode(), {
                    phoneNumber: this.info[1].value
                }, "POST", this).then(function(e) {
                    if ("0" === e.data.ret) return void wx.showToast({
                        title: "验证码发送成功，注意查收",
                        icon: "none",
                        duration: 1200
                    });
                    wx.showToast({
                        title: e.data.msg,
                        icon: "none",
                        duration: 1200
                    })
                })
            }
        }]), t
    }(_wepy2.default.component)) || _class;
exports.default = Index;