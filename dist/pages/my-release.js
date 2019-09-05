"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
    }
    return Array.from(e)
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(i, s) {
                try {
                    var n = t[i](s),
                        o = n.value
                } catch (e) {
                    return void r(e)
                }
                if (!n.done) return Promise.resolve(o).then(function(e) {
                    a("next", e)
                }, function(e) {
                    a("throw", e)
                });
                e(o)
            }
            return a("next")
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
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, r, a) {
            return r && e(t.prototype, r), a && e(t, a), t
        }
    }(),
    _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _jobListItem = require("./../components/jobListItem.js"),
    _jobListItem2 = _interopRequireDefault(_jobListItem),
    _resumeListItem = require("./../components/resumeListItem.js"),
    _resumeListItem2 = _interopRequireDefault(_resumeListItem),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, r, a, i;
            _classCallCheck(this, t);
            for (var s = arguments.length, n = Array(s), o = 0; o < s; o++) n[o] = arguments[o];
            return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(n))), a.config = {
                navigationBarTitleText: "我的发布"
            }, a.$repeat = {}, a.$props = {
                jobListItem: {
                    "xmlns:v-bind": "",
                    "v-bind:item.sync": "itemLi",
                    "v-bind:page.sync": "page"
                },
                resumeListItem: {
                    "v-bind:item.sync": "itemLi",
                    "v-bind:page.sync": "page"
                }
            }, a.$events = {}, a.components = {
                jobListItem: _jobListItem2.default,
                resumeListItem: _resumeListItem2.default
            }, a.data = {
                otherHome: !1,
                avatarUrl: "",
                legalizeType: "",
                otherUserId: "",
                page: "",
                current: 0,
                listData: {
                    0: [],
                    1: []
                },
                submitData: {
                    0: {
                        pageIndex: 1,
                        pageSize: 20,
                        totalRecord: 0
                    },
                    1: {
                        pageIndex: 1,
                        pageSize: 20,
                        totalRecord: 0
                    }
                }
            }, a.methods = {
                onBottom: function() {
                    if (!this.submitData[this.current].homeDataDisable) switch (this.submitData[this.current].homeDataDisable = !0, Number(this.pageType)) {
                        case 0:
                            this.myReleaseFun(this.current);
                            break;
                        case 1:
                            this.myCollectFun(this.current);
                            break;
                        default:
                            this.otherDriver(this.current, this.otherUserId)
                    }
                },
                current: function(e) {
                    if ("touch" === e.detail.source && (this.current = e.detail.current, !this.submitData[this.current].homeDataDisable)) switch (Number(this.pageType)) {
                        case 0:
                            this.myReleaseFun(this.current);
                            break;
                        case 1:
                            this.myCollectFun(this.current);
                            break;
                        default:
                            this.otherDriver(this.current, this.otherUserId)
                    }
                },
                chooseTap: function(e) {
                    if (this.current = e.currentTarget.dataset.index, !this.submitData[this.current].homeDataDisable) switch (Number(this.pageType)) {
                        case 0:
                            this.myReleaseFun(this.current);
                            break;
                        case 1:
                            this.myCollectFun(this.current);
                            break;
                        default:
                            this.otherDriver(this.current, this.otherUserId)
                    }
                    this.$apply()
                }
            }, a.events = {}, i = r, _possibleConstructorReturn(a, i)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onLoad",
            value: function(e) {
                var t = this;
                e.currentIndex && (this.current = e.currentIndex);
                var r = "";
                1 == e.id ? (r = "我的发布", this.myReleaseFun(this.current), this.pageType = 0) : 2 == e.id ? (r = "我的收藏", this.page = "mapList", this.myCollectFun(this.current), this.pageType = 1) : "detail" == e.page && (this.pageType = 2, this.otherHome = !0, this.page = "mapList", wx.getStorage({
                    key: "otherUserInfo",
                    complete: function() {
                        function e(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                            var a;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r.data && (a = JSON.parse(r.data), t.legalizeType = a.legalizeType, t.avatarUrl = a.userAvatar, t.otherUserId = a.userId, t.otherDriver(t.current, t.otherUserId), _wepy2.default.setNavigationBarTitle({
                                            title: a.userName
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }));
                        return e
                    }()
                })), _wepy2.default.setNavigationBarTitle({
                    title: r
                })
            }
        }, {
            key: "onHide",
            value: function() {
                wx.removeStorage({
                    key: "otherUserInfo"
                })
            }
        }, {
            key: "myReleaseFun",
            value: function(e) {
                var t = 1 == e ? _request2.default.Api.myResumeList() : _request2.default.Api.myHiringDriver();
                this.getListData(t, e)
            }
        }, {
            key: "myCollectFun",
            value: function(e) {
                var t = 1 == e ? _request2.default.Api.myCollectResume() : _request2.default.Api.myCollectJobs();
                this.getListData(t, e)
            }
        }, {
            key: "otherDriver",
            value: function(e, t) {
                var r = 1 == e ? _request2.default.Api.myResumeList() : _request2.default.Api.otherHiringJobs();
                this.getListData(r, e, t)
            }
        }, {
            key: "getListData",
            value: function(e, t, r) {
                var a = this;
                _request2.default.cehomeRequest(e, {
                    pageIndex: this.submitData[t].pageIndex,
                    pageSize: 20,
                    userId: r || this.state.login.userInfo.uid
                }, "POST").then(function(e) {
                    if (wx.hideLoading(), 200 === e.statusCode && 0 == e.data.ret) {
                        if (1 == t) {
                            a.submitData[t].homeDataDisable = !0;
                            var r = e.data.data;
                            if (1 != a.pageType && e.data.data.worksRelationStr) return r.worksRelationList = e.data.data.worksRelationStr.split(","), a.listData[t].push(r), void a.$apply()
                        }
                        var i = [];
                        e.data.data.datas.forEach(function(e) {
                            e.moreWelfare && (e.moreWelfare = e.moreWelfare ? e.moreWelfare.split(",") : e.moreWelfare), e.worksRelationList && 1 == t && (e.worksRelationList = e.worksRelationList ? e.worksRelationList.split(",") : e.worksRelationList), e.worksRelationList && 0 == t && (e.worksRelationList = e.worksRelation ? e.worksRelation.split(",") : e.worksRelation), i.push(e)
                        }), a.listData[t] = [].concat(_toConsumableArray(a.listData[t]), i), a.listTotal = Math.ceil(e.data.data.totalRecord / e.data.data.pageSize), a.submitData[t].pageIndex >= a.listTotal ? a.submitData[t].homeDataDisable = !0 : a.submitData[t].homeDataDisable = !1, a.submitData[t].pageIndex = parseInt(a.submitData[t].pageIndex) + 1, a.submitData[t].totalRecord = e.data.data.totalRecord, a.$apply()
                    }
                }).catch(function(e) {
                    wx.showToast({
                        title: e,
                        icon: "none",
                        duration: 5e3
                    })
                })
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/my-release"));