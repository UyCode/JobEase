"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
    }
    return Array.from(e)
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var s = t[n](o),
                        i = s.value
                } catch (e) {
                    return void a(e)
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e)
                }, function(e) {
                    r("throw", e)
                });
                e(i)
            }
            return r("next")
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
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
        }
        return e
    },
    _createClass = function() {
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
    _wepy = require("./../npm/wepy/lib/wepy.js"),
    _wepy2 = _interopRequireDefault(_wepy),
    _jobListItem = require("./../components/jobListItem.js"),
    _jobListItem2 = _interopRequireDefault(_jobListItem),
    _nothing = require("./../components/nothing.js"),
    _nothing2 = _interopRequireDefault(_nothing),
    _resumeListItem = require("./../components/resumeListItem.js"),
    _resumeListItem2 = _interopRequireDefault(_resumeListItem),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    Index = function(e) {
        function t() {
            var e, a, r, n;
            _classCallCheck(this, t);
            for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
            return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.config = {
                navigationBarTitleText: ""
            }, r.$repeat = {}, r.$props = {
                jobListItem: {
                    "xmlns:v-bind": "",
                    "v-bind:item.sync": "itemLi",
                    "v-bind:page.sync": "page"
                },
                resumeListItem: {
                    "v-bind:item.sync": "itemLi",
                    "v-bind:page.sync": "page"
                },
                nothing: {
                    "v-bind:isDataDesc.sync": "isDataDesc"
                }
            }, r.$events = {}, r.components = {
                jobListItem: _jobListItem2.default,
                resumeListItem: _resumeListItem2.default,
                nothing: _nothing2.default
            }, r.data = {
                mapType: "job",
                page: "mapList",
                pageNo: 1,
                listData: [],
                totalRecord: "",
                loadingMsg: "",
                params: {},
                isData: !0,
                isDataDesc: ""
            }, r.watch = {}, r.methods = {
                onBottom: function() {
                    this.pageNo++, this.listData.length < this.totalRecord && (this.loadingMsg = "正在拼命加载中...", this.$apply(), this.getListData("onBottom"))
                }
            }, r.events = {}, n = a, _possibleConstructorReturn(r, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShow",
            value: function() {}
        }, {
            key: "onLoad",
            value: function(e) {
                var t = this;
                this.$parent.methods.showLoading("正在拼命加载中..."), this.mapType = e.mapType;
                var a = "",
                    r = unescape(e.city).split("&")[0],
                    n = unescape(e.city).split("&")[1];
                e.mapType && "job" == e.mapType ? a = r + " · 职位" : e.mapType && "resume" == e.mapType && (a = r + " · 简历"), wx.setNavigationBarTitle({
                    title: a
                }), wx.getStorage({
                    key: "listParams",
                    complete: function() {
                        function e(e) {
                            return a.apply(this, arguments)
                        }
                        var a = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                            var r;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a.data && (r = JSON.parse(a.data), t.params = r, t.params.areaCode = n, t.$apply(), t.getListData());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }));
                        return e
                    }()
                })
            }
        }, {
            key: "getListData",
            value: function(e) {
                var t = this,
                    a = "job" == this.mapType ? _request2.default.Api.hiringDriverList() : _request2.default.Api.resumeList();
                this.params.pageIndex = this.pageNo, this.params.pageSize = 10, _request2.default.cehomeRequest(a, this.params, "GET").then(function(a) {
                    if (200 === a.statusCode && 0 == a.data.ret) {
                        t.totalRecord = a.data.data.totalRecord, a.data.data.datas.length < 10 ? t.loadingMsg = "没有更多数据了" : t.loadingMsg = "上拉加载更多";
                        var r = a.data.data.datas.map(function(e, a) {
                            return "job" == t.mapType ? _extends({}, e, {
                                moreWelfare: e.moreWelfare.split(",")
                            }) : "resume" == t.mapType ? _extends({}, e, {
                                worksRelationList: e.worksRelationList.split(",")
                            }) : void 0
                        });
                        t.listData = "onBottom" == e ? [].concat(_toConsumableArray(t.listData), _toConsumableArray(r)) : r, 0 == a.data.data.datas.length && t.totalRecord <= 0 && (t.isData = !1, t.isDataDesc = "没有找到任何信息"), t.$apply()
                    } else t.isData = !1, t.isDataDesc = a.data.msg;
                    t.$apply(), t.$parent.methods.hideLoading()
                }).catch(function(e) {
                    "request:fail timeout" == e.errMsg ? t.$parent.methods.showToast("网络请求超时~") : t.$parent.methods.showToast("网络好像有问题，请检查网络~")
                })
            }
        }]), t
    }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/listPage"));