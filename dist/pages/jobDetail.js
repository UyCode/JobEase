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
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }
        return function(t, a, s) {
            return a && e(t.prototype, a), s && e(t, s), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _api = require("./../common/api.js"),
    _api2 = _interopRequireDefault(_api),
    _jobDesc = require("./../components/jobDesc.js"),
    _jobDesc2 = _interopRequireDefault(_jobDesc),
    _resumeRelease = require("./../components/resumeRelease.js"),
    _resumeRelease2 = _interopRequireDefault(_resumeRelease),
    _footerBtn = require("./../components/footerBtn.js"),
    _footerBtn2 = _interopRequireDefault(_footerBtn),
    _tips = require("./../components/tips.js"),
    _tips2 = _interopRequireDefault(_tips),
    _nothing = require("./../components/nothing.js"),
    _nothing2 = _interopRequireDefault(_nothing),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _utils = require("./../utils/utils.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, a, s, r;
            _classCallCheck(this, t);
            for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
            return a = s = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))), s.config = {
                navigationBarTitleText: "职位详情"
            }, s.$repeat = {}, s.$props = {
                jobdesc: {
                    "xmlns:v-bind": "",
                    "v-bind:item.sync": "itemLi",
                    "v-bind:itemIndex.sync": "itemIndex"
                },
                nothing: {
                    "v-bind:isDataDesc.sync": "isDataDesc"
                },
                resumeRelease: {
                    "v-bind:personInfo.sync": "personInfo"
                },
                footerBtn: {
                    "v-bind:page.sync": "page",
                    "v-bind:btnParams.sync": "btnParams",
                    "v-bind:datas.sync": "datas"
                }
            }, s.$events = {}, s.components = {
                jobdesc: _jobDesc2.default,
                nothing: _nothing2.default,
                resumeRelease: _resumeRelease2.default,
                tips: _tips2.default,
                footerBtn: _footerBtn2.default
            }, s.data = {
                jobId: "",
                datas: {},
                itemData: [],
                isData: !0,
                isDataDesc: "",
                page: "",
                btnParams: {},
                personInfo: {}
            }, s.methods = {}, s.events = {}, r = a, _possibleConstructorReturn(s, r)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShareAppMessage",
            value: function() {
                return {
                    title: "我在这里找替班司机，技术好还便宜",
                    path: "/pages/index?id=" + this.jobId + "&shareType=jobDetail",
                    imageUrl: "https://bbs.cehome.com/wxApp/jobResume/imgs/share.png",
                    success: function(e) {},
                    fail: function(e) {}
                }
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "onLoad",
            value: function(e) {
                this.page = e.page, this.$parent.sensorsPublic.autoTrackPageShow("职位详情页"), wx.showLoading(), this.jobId = e.id, this.$apply(), this.getJobDetail(e.id)
            }
        }, {
            key: "getJobDetail",
            value: function(e) {
                var t = this,
                    a = this.state.login,
                    s = "success" == a.status ? a.userInfo.uid : "",
                    r = "mapList" == this.page ? _request2.default.Api.hiringDriverDetails() : _request2.default.Api.myDetails();
                _request2.default.cehomeRequest(r, {
                    userId: s,
                    id: e
                }, "POST", this).then(function(e) {
                    if (200 == e.statusCode && e.data.data) {
                        var a = e.data.data;
                        t.datas = e.data.data, t.$apply(), t.processingData(a), wx.hideLoading()
                    } else t.isData = !1, t.isDataDesc = e.data.msg, t.$apply()
                }).catch(function(e) {
                    "request:fail timeout" == e.errMsg ? (t.$parent.methods.showToast("网络请求超时~"), t.isData = !1, t.isDataDesc = "网络请求超时~") : (t.isData = !1, t.isDataDesc = "网络好像有问题，请检查网络~", t.$parent.methods.showToast("网络好像有问题，请检查网络~"))
                })
            }
        }, {
            key: "processingData",
            value: function(e) {
                var t = {},
                    a = [],
                    s = {},
                    r = [],
                    i = {},
                    n = [],
                    o = {},
                    u = [],
                    l = [];
                for (var p in e)
                    if ("id" == p) this.btnParams[p] = e[p], this.btnParams.jobType = 1, this.btnParams.favoriteFlag = e.isFavorite, this.btnParams.calledPhoneNumber = e.tel, this.btnParams.complaintUserId = e.userId;
                    else if ("name" == p || "userId" == p || "auditStatusStr" == p || "legalizeType" == p || "userName" == p || "userAvatar" == p) this.personInfo[p] = e[p];
                else if ("title" == p || "settlementAmountStr" == p || "settlementAmount" == p || "area" == p || "updateTimeStr" == p || "updateTime" == p || "favoriteCount" == p) {
                    t.title = e.title, t.settlementAmountStr = e.settlementAmountStr;
                    var c = "",
                        m = e[p];
                    if ("" != m && null != m) switch (p) {
                        case "area":
                            c = "工作地点", a.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "updateTimeStr":
                            c = "更新时间", a.push({
                                name: c,
                                value: m,
                                other: e.favoriteCount
                            })
                    }
                    t.list = a
                } else if ("driverTypeStr" == p || "driverType" == p || "useHammerFlagStr" == p || "useHammerFlag" == p || "drivingYears" == p || "drivingYearsStr" == p || "cutoffTimeStr" == p) {
                    s.title = "职位要求";
                    var c = "",
                        m = e[p].replace(/\n/g, " ");
                    if ("" != m && null != m) switch (p) {
                        case "driverTypeStr":
                            c = "设备类型", r.splice(0, 0, {
                                name: c,
                                value: m
                            });
                            break;
                        case "useHammerFlagStr":
                            c = "破碎锤", r.splice(1, 0, {
                                name: c,
                                value: m
                            });
                            break;
                        case "drivingYearsStr":
                            c = "驾龄要求", r.splice(2, 0, {
                                name: c,
                                value: m
                            });
                            break;
                        case "cutoffTimeStr":
                            c = "截止日期", r.push({
                                name: c,
                                value: m
                            })
                    }
                    s.list = r
                } else if ("moreWelfare" == p || "settlementAmountStr" == p || "settlementType" == p) {
                    i.title = "薪资福利";
                    var f = ["按天结", "按月结", "薪资面议"],
                        c = "",
                        m = e[p];
                    if ("" != m && null != m) switch (p) {
                        case "moreWelfare":
                            c = "更多福利", n.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "settlementType":
                            c = "结算方式", n.push({
                                name: "薪资",
                                value: e.settlementAmountStr
                            }, {
                                name: c,
                                value: f[m - 1]
                            })
                    }
                    i.list = n
                } else if ("operationDirectionStr" == p || "worksRelationStr" == p || "shiftTypeStr" == p || "humanCount" == p || "otherWelfare" == p || "sitePhotoList" == p || "jobRequire" == p) {
                    o.title = "更多信息";
                    var c = "",
                        m = e[p];
                    if ("" != m && null != m) switch (p) {
                        case "operationDirectionStr":
                            c = "操作方向", u.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "worksRelationStr":
                            c = "工程类型", u.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "shiftTypeStr":
                            c = "工作时间", u.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "humanCount":
                            c = "招聘人数", u.push({
                                name: c,
                                value: m + "人"
                            });
                            break;
                        case "otherWelfare":
                            c = "其他福利", u.push({
                                name: c,
                                value: m
                            });
                            break;
                        case "sitePhotoList":
                            c = "工作环境", u.push({
                                name: c,
                                value: ""
                            }, {
                                value: m
                            });
                            break;
                        case "jobRequire":
                            c = "经验要求", u.push({
                                name: c,
                                value: m
                            })
                    }
                    o.list = u
                }
                t.list = (0, _utils.clearArrTrim)(t.list), s.list = (0, _utils.clearArrTrim)(s.list), i.list = (0, _utils.clearArrTrim)(i.list), o.list = (0, _utils.clearArrTrim)(o.list), l.push(t, s, i, o), this.itemData = l, this.$apply()
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/jobDetail"));