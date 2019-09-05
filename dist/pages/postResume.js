"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function i(o, n) {
                try {
                    var r = t[o](n),
                        s = r.value
                } catch (e) {
                    return void a(e)
                }
                if (!r.done) return Promise.resolve(s).then(function(e) {
                    i("next", e)
                }, function(e) {
                    i("throw", e)
                });
                e(s)
            }
            return i("next")
        })
    }
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
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
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _personalInfo = require("./../components/personalInfo.js"),
    _personalInfo2 = _interopRequireDefault(_personalInfo),
    _jobDemand = require("./../components/job-demand.js"),
    _jobDemand2 = _interopRequireDefault(_jobDemand),
    _additionTerm = require("./../components/additionTerm.js"),
    _additionTerm2 = _interopRequireDefault(_additionTerm),
    _moreInfo = require("./../components/moreInfo.js"),
    _moreInfo2 = _interopRequireDefault(_moreInfo),
    _welfare = require("./../components/welfare.js"),
    _welfare2 = _interopRequireDefault(_welfare),
    _jobWanted = require("./../components/jobWanted.js"),
    _jobWanted2 = _interopRequireDefault(_jobWanted),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, a, i, o, n;
            _classCallCheck(this, t);
            for (var r = arguments.length, s = Array(r), u = 0; u < r; u++) s[u] = arguments[u];
            return i = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), o.config = {
                navigationBarTitleText: "发布简历"
            }, o.$repeat = {}, o.$props = {
                personalInfo: {
                    "xmlns:v-bind": "",
                    "v-bind:chooseCity.sync": "chooseCity",
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:submitFunDisabled.sync": "submitFunDisabled"
                },
                jobDemand: {
                    "v-bind:loaderTitle.once": "loaderTitle",
                    "v-bind:editorDataObject.sync": "editorDataObject"
                },
                additionTerm: {
                    "v-bind:editorDataObject.sync": "editorDataObject"
                },
                moreInfo: {
                    "v-bind:pageType.sync": "pageType",
                    "v-bind:worksRelation.sync": "worksRelation",
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:submitData.sync": "submitData",
                    "v-bind:submitFunDisabled.sync": "submitFunDisabled"
                },
                welfare: {
                    "v-bind:pageType.sync": "pageType",
                    "v-bind:editorDataObject.sync": "editorDataObject"
                },
                jobWanted: {
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:statusType.sync": "statusType"
                }
            }, o.$events = {}, o.components = {
                personalInfo: _personalInfo2.default,
                jobDemand: _jobDemand2.default,
                additionTerm: _additionTerm2.default,
                moreInfo: _moreInfo2.default,
                welfare: _welfare2.default,
                jobWanted: _jobWanted2.default
            }, o.data = {
                submitFunDisabled: !1,
                EditOrPost: !1,
                VerifyCode: !1,
                pageCanEditor: "",
                editorDataObject: {},
                pageType: "resume",
                buttonHint: "填写更多信息",
                showInfo: !0,
                loaderTitle: !0,
                chooseCity: {
                    name: "选择您希望的工作地区",
                    code: 0
                },
                worksRelation: "点击选择",
                submitData: (a = {
                    area: "",
                    areaCode: "",
                    askFor: "",
                    driverType: "",
                    drivingYears: "",
                    headPortrait: "",
                    jobRequire: "",
                    repairFlag: "",
                    trailerFlag: "",
                    useHammerFlag: "",
                    workRegion: "1",
                    name: "",
                    operationDirection: "1",
                    otherDevice: "",
                    otherWorks: "",
                    settlementAmount: "",
                    settlementType: "",
                    status: 1,
                    tel: "",
                    userId: "",
                    videoPaths: "",
                    videoThumbPaths: "",
                    workExperience: ""
                }, _defineProperty(a, "askFor", ""), _defineProperty(a, "worksRelation", "1"), a),
                mandatory: {
                    name: {
                        hint: "请输入联系人姓名"
                    },
                    tel: {
                        hint: "请输入正确的联系方式"
                    },
                    area: {
                        hint: "请输入工作地点"
                    },
                    areaCode: {
                        hint: "请输入工作地点"
                    },
                    driverType: {
                        other: {
                            type: "otherDevice",
                            value: 99
                        },
                        hint: "您的设备类型还为空",
                        associated: {
                            type: "useHammerFlag",
                            value: 5,
                            hint: "请选择破碎锤使用情况"
                        }
                    },
                    drivingYears: {
                        hint: "请选择驾龄要求"
                    },
                    settlementType: {
                        removeOther: {
                            type: "settlementAmount",
                            value: 3
                        },
                        hint: "请选择薪资待遇"
                    }
                },
                statusType: {
                    title: "求职状态",
                    types: [{
                        name: "正在找工作",
                        select: !0,
                        type: "status",
                        value: 1
                    }, {
                        name: "考虑换工作",
                        type: "status",
                        select: !1,
                        value: 4
                    }, {
                        name: "关闭简历",
                        type: "status",
                        select: !1,
                        value: 3
                    }]
                }
            }, o.watch = {}, o.methods = {
                showMoreInfo: function() {
                    switch (this.showInfo) {
                        case !0:
                            this.buttonHint = "放弃填写更多信息", this.showInfo = !1;
                            break;
                        default:
                            this.buttonHint = "填写更多信息", this.showInfo = !0
                    }
                    this.$apply()
                },
                submitFun: function() {
                    var e = this;
                    for (var t in this.mandatory) {
                        var a = this.mandatory[t];
                        if (a.other && this.submitData[t] === a.other.value && "" === this.submitData[a.other.type]) return void this.toastView(a.hint);
                        if (a.removeOther && this.submitData[t] != a.removeOther.value && "" === this.submitData[a.removeOther.type]) return void this.toastView(a.hint);
                        if (a.associated && this.submitData[t] < a.associated.value && "" === this.submitData[a.associated.type]) return void this.toastView(a.associated.hint);
                        if (a.orType) {
                            if ("" === this.submitData[t] && "" === this.submitData[a.orType]) return void this.toastView(a.hint)
                        } else if ("" === this.submitData[t]) return void this.toastView(a.hint)
                    }
                    this.submitData.userId = this.state.login.userInfo.uid, this.submitFunDisabled || (this.submitFunDisabled = !0, _request2.default.cehomeRequest(this.EditOrPost ? _request2.default.Api.editResume() : _request2.default.Api.addResume(), this.submitData, "POST").then(function(t) {
                        if ("0" === t.data.ret) {
                            e.toastView("发布成功");
                            var a = setTimeout(function() {
                                clearTimeout(a), e.submitFunDisabled = !1, wx.redirectTo({
                                    url: "/pages/my-release?id=1&currentIndex=1"
                                })
                            }, 1200)
                        } else e.toastView(t.data.msg), e.submitFunDisabled = !1
                    }).catch(function(t) {
                        e.submitFunDisabled = !1, "request:fail timeout" == t.errMsg ? wx.showToast({
                            title: "网络请求超时~",
                            icon: "none",
                            duration: 2e3
                        }) : wx.showToast({
                            title: "网络好像有问题，请检查网络~",
                            icon: "none",
                            duration: 2e3
                        })
                    }))
                }
            }, o.events = {
                editorData: function(e, t) {
                    this.submitData[e] = "useHammerFlag" == e ? 1 == t ? "2" : "1" : t, this.$apply()
                }
            }, n = i, _possibleConstructorReturn(o, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShow",
            value: function() {
                var e = this;
                wx.getStorage({
                    key: "JOBchooseCity",
                    complete: function() {
                        function t(e) {
                            return a.apply(this, arguments)
                        }
                        var a = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                            var i;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        a.data && (i = JSON.parse(a.data), e.chooseCity.name = i.province + " " + i.city + " " + i.district, e.chooseCity.code = i.code, e.submitData.area = e.chooseCity.name, e.submitData.areaCode = e.chooseCity.code, e.$apply());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }));
                        return t
                    }()
                }), wx.getStorage({
                    key: "worksRelation",
                    success: function(t) {
                        if (t.data) {
                            var a = JSON.parse(t.data),
                                i = [],
                                o = [];
                            a.forEach(function(e) {
                                i.push(e.key), o.push(e.value)
                            }), e.submitData.worksRelation = i.join(","), e.worksRelation = o.join(","), e.$apply()
                        }
                    }
                })
            }
        }, {
            key: "onLoad",
            value: function(e) {
                var t = this;
                wx.removeStorage({
                    key: "JOBchooseCity"
                }), wx.removeStorage({
                    key: "worksRelation"
                }), this.state.login.userInfo && (this.submitData.tel = this.state.login.userInfo.mobile), this.$parent.sensorsPublic.autoTrackPageShow("发布简历页"), "editor" == e.type ? (wx.showLoading(), wx.getStorage({
                    key: "myResumeEditorData",
                    complete: function(e) {
                        if (e.data) {
                            var a = JSON.parse(e.data);
                            t.editorDataObject = a, t.editorDataFun(), t.$apply(), wx.hideLoading()
                        } else t.getEditorData(t.state.login.userInfo.uid)
                    }
                })) : this.mandatory.verificationCode = {
                    hint: "请输入正确的验证码"
                }
            }
        }, {
            key: "getEditorData",
            value: function(e) {
                var t = this;
                _request2.default.cehomeRequest(_request2.default.Api.myResumeList(), {
                    userId: e
                }, "POST").then(function(e) {
                    wx.hideLoading(), "0" == e.data.ret && (t.editorDataObject = e.data.data, t.$apply(), t.editorDataFun())
                })
            }
        }, {
            key: "editorDataFun",
            value: function() {
                for (var e in this.submitData) this.editorDataObject[e] && (this.submitData[e] = this.editorDataObject[e]);
                this.chooseCity.name = this.editorDataObject.area, this.chooseCity.code = this.editorDataObject.province + this.editorDataObject.city + this.editorDataObject.county, this.submitData.areaCode = this.chooseCity.code, this.submitData.id = this.editorDataObject.id, this.EditOrPost = !0, this.VerifyCode = !0, this.$apply()
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
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/postResume"));