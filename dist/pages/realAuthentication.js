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
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
        }
        return e
    },
    _createClass = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, a, i) {
            return a && e(t.prototype, a), i && e(t, i), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _api = require("./../common/api.js"),
    _api2 = _interopRequireDefault(_api),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _index = require("./../store/types/index.js"),
    _actions = require("./../store/actions/index.js"),
    _utils = require("./../utils/utils.js"),
    _authStatus = require("./../components/authStatus.js"),
    _authStatus2 = _interopRequireDefault(_authStatus),
    _popup = require("./../components/popup.js"),
    _popup2 = _interopRequireDefault(_popup),
    _personalCertificate = require("./../components/personalCertificate.js"),
    _personalCertificate2 = _interopRequireDefault(_personalCertificate),
    _enterpriseCertification = require("./../components/enterpriseCertification.js"),
    _enterpriseCertification2 = _interopRequireDefault(_enterpriseCertification),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }, {
        login: _actions.login,
        loginStart: _index.LOGIN_START
    }))(_class = function(e) {
        function t() {
            var e, a, i, s;
            _classCallCheck(this, t);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return a = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), i.config = {
                navigationBarTitleText: "实名认证"
            }, i.$repeat = {}, i.$props = {
                popup: {
                    "v-bind:info.sync": "popupInfo"
                },
                authStatus: {
                    "v-bind:authStatus.sync": "authStatus",
                    "v-bind:reviewReason.sync": "reviewReason"
                },
                personalCertificate: {
                    "xmlns:v-bind": "",
                    "v-bind:submitParams.sync": "submitData",
                    "v-bind:showData.sync": "submitParams"
                },
                enterpriseCertification: {
                    "v-bind:QsubmitParams.sync": "submitData",
                    "v-bind:showData.sync": "QsubmitParams"
                }
            }, i.$events = {}, i.components = {
                popup: _popup2.default,
                authStatus: _authStatus2.default,
                personalCertificate: _personalCertificate2.default,
                enterpriseCertification: _enterpriseCertification2.default
            }, i.data = {
                reviewReason: "",
                popupInfo: {},
                authStatus: 0,
                btnType: [{
                    className: "active",
                    name: "个人",
                    value: 1
                }, {
                    className: "",
                    name: "企业",
                    value: 2
                }],
                submitParams: {
                    personal: !0,
                    fullName: "",
                    sex: "男",
                    certificatesNumber: "",
                    certificatesImage: "",
                    personalPhoto: "../images/man.jpg"
                },
                QsubmitParams: {
                    Qpersonal: !0,
                    companyBusinessLicenseName: "",
                    companyBusinessLicensePhoto: "https://bbs.cehome.com/wxApp/jobResume/imgs/bg3.png",
                    companyLegalPersonIdphotoNegative: "https://bbs.cehome.com/wxApp/jobResume/imgs/bg2.png",
                    companyLegalPersonIdphotoPositive: "https://bbs.cehome.com/wxApp/jobResume/imgs/bg1.png",
                    companyLegalPersonName: "",
                    companySocialCreditCode: ""
                },
                canSubmit: !1,
                personal: !0,
                submitData: {
                    1: {
                        personalIdentityNumber: "",
                        personalName: "",
                        personalPhoto: "",
                        personalSex: 1
                    },
                    2: {
                        companyBusinessLicenseName: "",
                        companyBusinessLicensePhoto: "",
                        companyLegalPersonIdphotoNegative: "",
                        companyLegalPersonIdphotoPositive: "",
                        companyLegalPersonName: "",
                        companySocialCreditCode: ""
                    },
                    globle: {
                        uid: "",
                        userName: "",
                        mobile: "",
                        legalizeType: 1
                    }
                }
            }, i.methods = {
                submit: function() {
                    var e = this;
                    if (this.canSubmit) {
                        switch (Number(this.submitData.globle.legalizeType)) {
                            case 1:
                                if (!(0, _utils.isID)(this.submitData[this.submitData.globle.legalizeType].personalIdentityNumber)) return void this.toastView("请输入正确的身份证号");
                                break;
                            default:
                                if (!(0, _utils.tyshyxdm)(this.submitData[this.submitData.globle.legalizeType].companySocialCreditCode)) return void this.toastView("请输入正确的社会信用代码")
                        }
                        if (!this.submitDisable) {
                            this.submitDisable = !0;
                            var t = _extends({}, this.submitData.globle, this.submitData[this.submitData.globle.legalizeType]);
                            _request2.default.cehomeRequest(_request2.default.Api.adrove(), t, "POST").then(function(t) {
                                if (e.submitDisable = !1, "0" === t.data.ret) {
                                    var a = wx.getStorageSync("loginInfo");
                                    wx.setStorageSync("loginInfo", Object.assign(a, {
                                        auth: !0
                                    })), e.authStatus = 1, e.$apply(), e.toastView("发布成功")
                                } else e.toastView(t.data.msg)
                            })
                        }
                    }
                },
                changeBtn: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.checkBoxFun(t)
                },
                gotoLink: function() {
                    var e = {
                        title: "温馨提示",
                        desc: "请确认要放弃认证吗？",
                        show: !0,
                        type: "notice",
                        callback: function(e) {
                            "success" == e && wx.navigateBack({
                                delta: 1
                            })
                        }
                    };
                    this.popupInfo = e, this.$apply()
                }
            }, i.events = {
                chooseImage: function(e, t) {
                    var a = this;
                    wx.chooseImage({
                        count: 1,
                        sizeType: ["original", "compressed"],
                        sourceType: ["album", "camera"],
                        success: function(i) {
                            var s = i.tempFilePaths[0];
                            wx.showLoading({
                                title: "正在上传图片"
                            }), wx.uploadFile({
                                url: _request2.default.Api.upImageFile(),
                                filePath: s,
                                header: _request2.default.getHeaderData(),
                                name: "file",
                                complete: function(i) {
                                    wx.hideLoading();
                                    var s = JSON.parse(i.data);
                                    "0" == s.ret ? (a.submitData[e][t] = s.data, a.buttonTypeFun(e)) : _wepy2.default.showToast({
                                        icon: "none",
                                        title: "网络问题，请重新上传~",
                                        duration: 1500
                                    })
                                }
                            })
                        }
                    })
                },
                editorData: function(e, t, a) {
                    this.submitData[e][t] = a, this.buttonTypeFun(e), this.$apply()
                }
            }, i.watch = {}, s = a, _possibleConstructorReturn(i, s)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function(e) {
                this.submitData.globle.userName = this.state.login.userInfo.username, this.submitData.globle.uid = this.state.login.userInfo.uid, this.submitData.globle.mobile = this.state.login.userInfo.mobile, this.getInfo(), this.$apply()
            }
        }, {
            key: "checkBoxFun",
            value: function(e) {
                this.personal = 0 == e;
                var t = this.btnType.map(function(t, a) {
                    return e == a ? _extends({}, t, {
                        className: "active"
                    }) : _extends({}, t, {
                        className: ""
                    })
                });
                this.submitData.globle.legalizeType = this.btnType[e].value, this.btnType = t, this.buttonTypeFun(this.btnType[e].value), this.$apply()
            }
        }, {
            key: "getInfo",
            value: function() {
                var e = this;
                _request2.default.cehomeRequest(_request2.default.Api.getUserAuthInfo(), {}, "GET").then(function(t) {
                    if ("0" === t.data.ret) {
                        var a = t.data.data,
                            i = a.reviewStatus;
                        switch (Number(i)) {
                            case 0:
                                e.authStatus = 1;
                                break;
                            case 1:
                                e.authStatus = 2;
                                break;
                            case 2:
                                e.authStatus = "-1", e.reviewReason = a.reviewReason
                        }
                        var s = a.legalizeType;
                        e.checkBoxFun(s - 1);
                        for (var n in e.submitData.globle) e.submitData.globle[n] = a[n];
                        for (var o in e.submitData[s]) e.submitData[s][o] = a[o];
                        e.$apply()
                    }
                })
            }
        }, {
            key: "buttonTypeFun",
            value: function(e) {
                var t = !0;
                for (var a in this.submitData[e]) "" === this.submitData[e][a] && (t = !1);
                this.canSubmit = t, this.$apply()
            }
        }, {
            key: "toastView",
            value: function(e) {
                wx.showToast({
                    title: e,
                    icon: "none",
                    duration: 1200
                })
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/realAuthentication"));