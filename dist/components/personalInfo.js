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
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, o, i) {
            return o && e(t.prototype, o), i && e(t, i), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _utils = require("./../utils/utils.js"),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, o, i, n;
            _classCallCheck(this, t);
            for (var a = arguments.length, r = Array(a), s = 0; s < a; s++) r[s] = arguments[s];
            return o = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), i.props = {
                item: {},
                submitFunDisabled: {
                    twoWay: !0
                },
                editorDataObject: {
                    twoWay: !0
                },
                chooseCity: {
                    twoWay: !0
                }
            }, i.data = {
                VerifyCode: !1,
                list: [{
                    name: "工作区域",
                    desc: "异地求职和工作，请对招聘方多做沟通和了解",
                    types: [{
                        name: "只在本地",
                        select: !0
                    }, {
                        name: "可去外地"
                    }]
                }],
                time: 60,
                timer: null,
                can: !0,
                Seconds: "",
                verificationInfo: "点击获取验证码",
                personalInfo: {
                    headPortrait: "",
                    name: "",
                    tel: "",
                    verificationCode: "",
                    area: "",
                    areaCode: "",
                    workRegion: ""
                }
            }, i.watch = {
                editorDataObject: function() {
                    this.newEditorData()
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
            }, i.methods = {
                selecedWork: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.selecedWorkFun(t)
                },
                inputFun: function(e) {
                    var t = e.detail.value,
                        o = e.target.dataset.type;
                    switch (o) {
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
                    this.personalInfo[o] = t, this.$apply(), this.$emit("editorData", e.target.dataset.type, t)
                },
                deleteFun: function() {
                    this.personalInfo.headPortrait = "", this.$emit("editorData", "headPortrait", ""), this.$apply()
                },
                chooseImage: function() {
                    var e = this;
                    wx.chooseImage({
                        count: 1,
                        sizeType: ["original", "compressed"],
                        sourceType: ["album", "camera"],
                        success: function(t) {
                            e.submitFunDisabled = !0;
                            var o = t.tempFilePaths[0];
                            e.personalInfo.headPortrait = o, e.$apply(), wx.uploadFile({
                                url: _request2.default.Api.upImageFile(),
                                filePath: o,
                                name: "file",
                                header: _request2.default.getHeaderData(),
                                complete: function(t) {
                                    e.submitFunDisabled = !1, e.$apply();
                                    var o = JSON.parse(t.data);
                                    "0" == o.ret ? e.$emit("editorData", "headPortrait", o.data) : _wepy2.default.showToast({
                                        icon: "none",
                                        title: "网络问题，请重新上传~",
                                        duration: 1500
                                    })
                                }
                            })
                        }
                    })
                },
                getVerifyCode: function() {
                    var e = this.personalInfo.tel;
                    (0, _utils.phoneVirtal)(e) ? (this.getNowFormatDate(), this.verificationCodeFun()) : wx.showToast({
                        title: "手机号输入有误",
                        icon: "none",
                        duration: 2e3
                    })
                },
                gotoLink: function(e) {
                    _wepy2.default.navigateTo({
                        url: "/pages/" + e
                    })
                }
            }, n = o, _possibleConstructorReturn(i, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function() {
                this.state.login.login && (this.personalInfo.tel = this.state.login.userInfo.mobile, this.$apply())
            }
        }, {
            key: "selecedWorkFun",
            value: function(e) {
                0 == e ? (this.list[0].types[0].select = !0, this.list[0].types[1].select = !1, this.personalInfo.workRegion = 1, this.$emit("editorData", "workRegion", 1)) : 1 == e && (this.list[0].types[1].select = !0, this.list[0].types[0].select = !1, this.personalInfo.workRegion = 2, this.$emit("editorData", "workRegion", 2))
            }
        }, {
            key: "newEditorData",
            value: function() {
                this.VerifyCode = !1;
                for (var e in this.personalInfo) this.personalInfo[e] = this.editorDataObject[e];
                this.selecedWorkFun(this.editorDataObject.workRegion - 1), this.$apply()
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
                    phoneNumber: this.personalInfo.tel
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