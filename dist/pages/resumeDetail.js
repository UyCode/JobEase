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
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _api = require("./../common/api.js"),
    _api2 = _interopRequireDefault(_api),
    _resumeDetailItem = require("./../components/resumeDetailItem.js"),
    _resumeDetailItem2 = _interopRequireDefault(_resumeDetailItem),
    _resumeDetailInfo = require("./../components/resumeDetailInfo.js"),
    _resumeDetailInfo2 = _interopRequireDefault(_resumeDetailInfo),
    _resumeRelease = require("./../components/resumeRelease.js"),
    _resumeRelease2 = _interopRequireDefault(_resumeRelease),
    _nothing = require("./../components/nothing.js"),
    _nothing2 = _interopRequireDefault(_nothing),
    _footerBtn = require("./../components/footerBtn.js"),
    _footerBtn2 = _interopRequireDefault(_footerBtn),
    _tips = require("./../components/tips.js"),
    _tips2 = _interopRequireDefault(_tips),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _utils = require("./../utils/utils.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, a, r, s;
            _classCallCheck(this, t);
            for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
            return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))), r.config = {
                navigationBarTitleText: "简历详情"
            }, r.$repeat = {}, r.$props = {
                resumeDetailItem: {
                    "v-bind:item.sync": "itemLi",
                    "v-bind:itemIndex.sync": "itemIndex"
                },
                resumeDetailInfo: {
                    "xmlns:v-bind": "",
                    "v-bind:personInfo.sync": "personInfo"
                },
                resumeRelease: {
                    "v-bind:personInfo.sync": "personInfo"
                },
                footerBtn: {
                    "v-bind:page.sync": "page",
                    "v-bind:btnParams.sync": "btnParams",
                    "v-bind:datas.sync": "datas"
                },
                nothing: {
                    "v-bind:isDataDesc.sync": "isDataDesc"
                }
            }, r.$events = {}, r.components = {
                resumeDetailItem: _resumeDetailItem2.default,
                resumeDetailInfo: _resumeDetailInfo2.default,
                resumeRelease: _resumeRelease2.default,
                tips: _tips2.default,
                footerBtn: _footerBtn2.default,
                nothing: _nothing2.default
            }, r.data = {
                datas: {},
                itemData: [],
                personInfo: {},
                page: "mapList",
                btnParams: {},
                isData: !0,
                isDataDesc: ""
            }, r.methods = {}, r.events = {
                popupParamsUpdate: function(e) {
                    r.popupInfo = e, r.$apply()
                }
            }, s = a, _possibleConstructorReturn(r, s)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShareAppMessage",
            value: function() {
                return {
                    title: "我在这里找替班司机，技术好还便宜",
                    path: "/pages/index?id=" + this.jobId + "&shareType=resumeDetail",
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
                wx.showLoading(), this.page = e.page, this.$parent.sensorsPublic.autoTrackPageShow("简历详情页"), this.jobId = e.id, this.$apply(), this.getJobDetail(e.id)
            }
        }, {
            key: "getJobDetail",
            value: function(e) {
                var t = this,
                    a = this.state.login,
                    r = "success" == a.status ? a.userInfo.uid : "",
                    s = "mapList" == this.page ? _request2.default.Api.getResumeDetail() : _request2.default.Api.findByUserId();
                _request2.default.cehomeRequest(s, {
                    userId: r,
                    resumeId: e
                }, "POST", this).then(function(e) {
                    if (200 == e.statusCode && e.data.data) {
                        var a = e.data.data;
                        t.datas = a, t.$apply(), t.processingData(a)
                    } else t.isData = !1, t.isDataDesc = e.data.msg, t.$apply();
                    wx.hideLoading()
                }).catch(function(e) {
                    "request:fail timeout" == e.errMsg ? (t.$parent.methods.showToast("网络请求超时~"), t.isData = !1, t.isDataDesc = "网络请求超时~") : (t.isData = !1, t.isDataDesc = "网络好像有问题，请检查网络~", t.$parent.methods.showToast("网络好像有问题，请检查网络~"))
                })
            }
        }, {
            key: "processingData",
            value: function(e) {
                var t = {},
                    a = {},
                    r = ["", "", "", "", ""],
                    s = {},
                    i = ["", "", "", "", ""],
                    n = [];
                for (var o in e)
                    if ("id" == o) this.btnParams[o] = e[o], this.btnParams.jobType = 2, this.btnParams.favoriteFlag = 2 == e.favoriteFlag ? 1 : 0, this.btnParams.calledPhoneNumber = e.tel, this.btnParams.complaintUserId = e.userId;
                    else if ("area" == o || "headPortrait" == o || "settlementAmountStr" == o || "statusStr" == o || "name" == o || "title" == o || "favoriteCount" == o || "updateTimeStr" == o || "userId" == o || "auditStatusStr" == o || "legalizeType" == o || "userName" == o || "userAvatar" == o) t[o] = e[o], t.workRegionStr = "" != e.workRegionStr ? "(" + e.workRegionStr + ")" : "";
                else if ("deviceStr" == o || "repairFlagStr" == o || "useHammerFlagStr" == o || "trailerFlagStr" == o || "drivingYearsStr" == o) {
                    a.title = "工作经验";
                    var u = "",
                        l = e[o].replace(/\n/g, " ");
                    if ("" != l && null != l) switch (o) {
                        case "deviceStr":
                            u = "擅长机型", r.splice(0, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "useHammerFlagStr":
                            u = "破碎锤", r.splice(1, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "repairFlagStr":
                            u = "维修保养", r.splice(2, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "trailerFlagStr":
                            u = "拖车驾驶", r.splice(3, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "drivingYearsStr":
                            u = "工作年限", r.splice(4, 1, {
                                name: u,
                                value: l
                            })
                    }
                    a.list = r
                } else if ("operationDirectionStr" == o || "worksRelationStr" == o || "videoList" == o || "workExperience" == o || "askFor" == o) {
                    s.title = "更多信息";
                    var u = "",
                        l = e[o];
                    if ("" != l && null != l) switch (o) {
                        case "operationDirectionStr":
                            u = "操作方向", i.splice(0, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "worksRelationStr":
                            u = "擅长工程", i.splice(1, 1, {
                                name: u,
                                value: l
                            });
                            break;
                        case "videoList":
                            u = "工作视频", i.splice(3, 1, {
                                name: u,
                                value: ""
                            }, {
                                value: l
                            });
                            break;
                        case "workExperience":
                            u = "更多经验", i.splice(2, 1, {
                                name: u,
                                value: l + "人"
                            });
                            break;
                        case "askFor":
                            u = "其他要求", i.splice(4, 1, {
                                name: u,
                                value: l
                            })
                    }
                    s.list = i
                }
                this.personInfo = t, a.list = (0, _utils.clearArrTrim)(a.list), s.list = (0, _utils.clearArrTrim)(s.list), n.push(a, s), this.itemData = n, this.$apply()
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/resumeDetail"));