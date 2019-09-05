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
            function o(i, n) {
                try {
                    var r = t[i](n),
                        s = r.value
                } catch (e) {
                    return void a(e)
                }
                if (!r.done) return Promise.resolve(s).then(function(e) {
                    o("next", e)
                }, function(e) {
                    o("throw", e)
                });
                e(s)
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
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, a, o) {
            return a && e(t.prototype, a), o && e(t, o), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _jobDemand = require("./../components/job-demand.js"),
    _jobDemand2 = _interopRequireDefault(_jobDemand),
    _welfare = require("./../components/welfare.js"),
    _welfare2 = _interopRequireDefault(_welfare),
    _jobInfo = require("./../components/jobInfo.js"),
    _jobInfo2 = _interopRequireDefault(_jobInfo),
    _jobWanted = require("./../components/jobWanted.js"),
    _jobWanted2 = _interopRequireDefault(_jobWanted),
    _moreInfo = require("./../components/moreInfo.js"),
    _moreInfo2 = _interopRequireDefault(_moreInfo),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, a, o, i;
            _classCallCheck(this, t);
            for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
            return a = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), o.config = {
                navigationBarTitleText: "发布职位"
            }, o.data = {
                jobType: "",
                submitFunDisabled: !1,
                EditOrPost: !1,
                VerifyCode: !1,
                editorDataObject: {},
                buttonHint: "填写更多信息",
                showInfo: !0,
                chooseCity: {
                    name: "选择所在城市",
                    code: 0
                },
                worksRelation: "点击选择",
                submitData: {
                    area: "",
                    areaCode: "",
                    cutoffTime: "",
                    driverType: "",
                    drivingYears: "",
                    humanCount: 1,
                    jobRequire: "",
                    longTime: "",
                    moreWelfare: "",
                    name: "",
                    operationDirection: "1",
                    otherDevice: "",
                    otherWelfare: "",
                    otherWorks: "",
                    settlementAmount: "",
                    settlementType: "",
                    shiftType: "1",
                    sitePhoto: "",
                    status: "1",
                    tel: "",
                    useHammerFlag: "",
                    userId: "",
                    worksRelation: "1"
                },
                mandatory: {
                    area: {
                        hint: "请输入工作地点"
                    },
                    areaCode: {
                        hint: "请输入工作地点"
                    },
                    cutoffTime: {
                        orType: "longTime",
                        hint: "请选择招聘时效"
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
                    name: {
                        hint: "请输入联系人姓名"
                    },
                    tel: {
                        hint: "请输入正确的联系方式"
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
                    title: "招聘状态",
                    types: [{
                        name: "正在招聘",
                        select: !0,
                        type: "status",
                        value: 1
                    }, {
                        name: "已找到司机",
                        type: "status",
                        select: !1,
                        value: 2
                    }, {
                        name: "关闭招聘",
                        type: "status",
                        select: !1,
                        value: 3
                    }]
                }
            }, o.$repeat = {}, o.$props = {
                jobDemand: {
                    "xmlns:v-bind": "",
                    "v-bind:chooseCity.sync": "chooseCity",
                    "v-bind:editorDataObject.sync": "editorDataObject"
                },
                welfare: {
                    "v-bind:editorDataObject.sync": "editorDataObject"
                },
                jobInfo: {
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:submitData.sync": "submitData"
                },
                moreInfo: {
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:worksRelation.sync": "worksRelation",
                    "v-bind:submitData.sync": "submitData",
                    "v-bind:submitFunDisabled.sync": "submitFunDisabled"
                },
                jobWanted: {
                    "v-bind:editorDataObject.sync": "editorDataObject",
                    "v-bind:statusType.sync": "statusType"
                }
            }, o.$events = {}, o.components = {
                jobDemand: _jobDemand2.default,
                welfare: _welfare2.default,
                jobInfo: _jobInfo2.default,
                moreInfo: _moreInfo2.default,
                jobWanted: _jobWanted2.default
            }, o.events = {
                editorData: function(e, t) {
                    this.submitData[e] = t, console.log("更新", e, t, this.submitData), this.$apply()
                }
            }, o.methods = {
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
                        if (a.removeOther && this.submitData[t] != a.removeOther.value && "" == this.submitData[a.removeOther.type]) return void this.toastView(a.hint);
                        if (a.associated && this.submitData[t] < a.associated.value && "" === this.submitData[a.associated.type]) return void this.toastView(a.associated.hint);
                        if (a.orType) {
                            if ("" === this.submitData[t] && "" === this.submitData[a.orType]) return void this.toastView(a.hint)
                        } else if ("" === this.submitData[t]) return void this.toastView(a.hint)
                    }
                    this.submitData.userId = this.state.login.userInfo.uid, this.submitFunDisabled || (this.submitFunDisabled = !0, _request2.default.cehomeRequest(this.EditOrPost ? _request2.default.Api.editJob() : _request2.default.Api.addJob(), this.submitData, "POST").then(function(t) {
                        if ("0" === t.data.ret) {
                            e.toastView("发布成功");
                            var a = setTimeout(function() {
                                clearTimeout(a), e.submitFunDisabled = !1, wx.redirectTo({
                                    url: "/pages/my-release?id=1&currentIndex=0"
                                })
                            }, 1200)
                        } else e.submitFunDisabled = !1, e.toastView(t.data.msg)
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
            }, i = a, _possibleConstructorReturn(o, i)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function(e) {
                var t = this;
                wx.removeStorage({
                    key: "JOBchooseCity"
                }), wx.removeStorage({
                    key: "worksRelation"
                }), this.state.login.login && (this.submitData.tel = this.state.login.userInfo.mobile), this.$parent.sensorsPublic.autoTrackPageShow("发布职位页"), "editor" === e.type && (this.jobType = "editor", wx.showLoading(), wx.getStorage({
                    key: "editorData",
                    complete: function(a) {
                        if (a.data) {
                            var o = JSON.parse(a.data);
                            t.editorDataObject = o, t.$apply(), t.editorDataFun(), wx.hideLoading()
                        } else t.getEditorData(e.id)
                    }
                }))
            }
        }, {
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
                            var o;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        a.data && (o = JSON.parse(a.data), e.chooseCity.name = o.province + " " + o.city + " " + o.district, e.chooseCity.code = o.code, e.submitData.area = e.chooseCity.name, e.submitData.areaCode = e.chooseCity.code, e.$apply());
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
                                o = [],
                                i = [];
                            a.forEach(function(e) {
                                o.push(e.key), i.push(e.value)
                            }), e.submitData.worksRelation = o.join(","), e.worksRelation = i.join(","), e.$apply()
                        }
                    }
                })
            }
        }, {
            key: "getEditorData",
            value: function(e) {
                var t = this;
                _request2.default.cehomeRequest(_request2.default.Api.hiringDriverDetails(), {
                    id: e,
                    userId: "DIgWKq+nEq4x7R43b150EQ=="
                }, "POST").then(function(e) {
                    wx.hideLoading(), "0" == e.data.ret && (t.editorDataObject = e.data.data, t.$apply(), t.editorDataFun())
                })
            }
        }, {
            key: "editorDataFun",
            value: function() {
                for (var e in this.submitData) this.editorDataObject[e] && "moreWelfare" != e && (this.submitData[e] = this.editorDataObject[e]);
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
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/postjob"));