"use strict";

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, s) {
                try {
                    var i = t[n](s),
                        o = i.value
                } catch (e) {
                    return void r(e)
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
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
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    },
    _createClass = function() {
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
    _addressResolution = require("./../common/addressResolution.js"),
    _addressResolution2 = _interopRequireDefault(_addressResolution),
    _request = require("./../common/request.js"),
    _request2 = _interopRequireDefault(_request),
    _wepyRedux = require("./../npm/wepy-redux/lib/index.js"),
    _utils = require("./../utils/utils.js"),
    Index = (_dec = (0, _wepyRedux.connect)({
        state: function(e) {
            return e
        }
    }))(_class = function(e) {
        function t() {
            var e, r, a, n, s = this;
            _classCallCheck(this, t);
            for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
            return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), a.config = {
                navigationBarTitleText: "招聘求职 · 铁甲网"
            }, a.components = {}, a.data = {
                canClick: !0,
                isShare: !1,
                tarBar: [{
                    name: "找工作",
                    type: "job",
                    selected: !0
                }, {
                    name: "找司机",
                    type: "driver"
                }],
                screenItemIndex: 0,
                isShowPoup: !1,
                mapType: "job",
                chooseCity: {
                    name: "江苏省 南京市",
                    code: ""
                },
                multiIndex: [0, 0],
                driver: {
                    screenType: "设备类型",
                    selected: !1,
                    type: "deviceType",
                    screenItemIndex: 0,
                    oList: {},
                    list: []
                },
                job: {
                    screenType: "设备类型",
                    selected: !1,
                    type: "driverType",
                    screenItemIndex: 0,
                    oList: {},
                    list: []
                },
                screen: [{
                    screenType: "设备类型",
                    selected: !1,
                    type: "selectType",
                    screenItemIndex: 0,
                    oList: {},
                    list: []
                }, {
                    screenType: "薪资范围",
                    selected: !1,
                    type: "salaryType",
                    screenItemIndex: 0,
                    salaryType: [],
                    oList: [],
                    list: [
                        [],
                        []
                    ]
                }, {
                    screenType: "经验要求",
                    selected: !1,
                    type: "drivingYears",
                    screenItemIndex: 0,
                    oList: [],
                    list: []
                }],
                label: [],
                view: {
                    Height: wx.getStorageSync("ScreenH") - 125
                },
                scale: 12,
                latitude: "",
                longitude: "",
                markers: [],
                requestParams: {
                    areaCode: "",
                    deviceType: "",
                    driverType: "",
                    drivingYears: "",
                    labelPara: "",
                    salaryLower: "",
                    salaryType: "",
                    salaryUpper: ""
                },
                initParams: {
                    areaCode: "",
                    deviceType: "",
                    driverType: "",
                    drivingYears: "",
                    labelPara: "",
                    salaryLower: "",
                    salaryType: "",
                    salaryUpper: ""
                },
                isDriver: "job"
            }, a.computed = {}, a.methods = {
                close: function() {
                    this.isShowPoup = !1, this.$apply()
                },
                goAuth: function() {
                    wx.navigateTo({
                        url: "realAuthentication"
                    })
                },
                bindcallouttap: function(e) {
                    var t = this;
                    if (this.canClick) {
                        wx.removeStorage({
                            key: "listParams"
                        });
                        var r = "driver" == this.isDriver ? "点击简历地图标记点" : "点击职位地图标记点";
                        this.$parent.sensorsPublic.RelatedBurialPoint("地图标记", r), wx.setStorage({
                            key: "listParams",
                            data: JSON.stringify(this.requestParams),
                            success: function(r) {
                                wx.navigateTo({
                                    url: "listPage?page=index&mapType=" + t.mapType + "&city=" + escape(e.markerId)
                                })
                            }
                        }), setTimeout(function() {
                            t.canClick = !0, t.$apply()
                        }, 2e3)
                    }
                    this.canClick = !1, this.$apply()
                },
                navigateAbout: function() {
                    _wepy2.default.navigateTo({
                        url: "about?type=homeAbout"
                    })
                },
                gotoLink: function() {
                    _wepy2.default.navigateTo({
                        url: "/pages/chooseCity?page=index"
                    })
                },
                selectedLabel: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.label[t].selected = !this.label[t].selected;
                    var r = "",
                        a = "";
                    this.label.forEach(function(e, t) {
                        e.selected && (r += e.k + ",", a += e.v + ",")
                    }), r = r.substring(0, r.length - 1), a = a.substring(0, a.length - 1);
                    var n = "driver" == this.isDriver ? "点击简历标签" : "点击职位标签";
                    this.$parent.sensorsPublic.RelatedBurialPoint("标签选项", n, a), this.updateRequest("labelPara", r, this.requestParams.salaryLower, this.requestParams.salaryUpper)
                },
                tabChange: function(e) {
                    var t = this,
                        r = e.currentTarget.dataset.index,
                        a = e.currentTarget.dataset.type;
                    this.label = this[a], this.tarBar.forEach(function(e, a) {
                        e.selected = !1, r == a && (e.selected = !0, "driver" == t.isDriver ? t.requestParams.driverType = "" : t.requestParams.deviceType = "", t.requestParams.drivingYears = "", t.requestParams.labelPara = "", t.requestParams.salaryType = "", t.requestParams.salaryLower = "", t.requestParams.salaryUpper = "", t.$apply(), t.getAllD(e.type), t.getLementType("ALL"), t.mapType = 0 == a ? "job" : "resume", t.isDriver = e.type, t.$apply(), t.getMapList())
                    })
                },
                bindPickerChange: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.screen[t].selected = !0, this.screen[t].screenItemIndex = e.detail.value;
                    var r = this.screen[t].oList[e.detail.value].k;
                    this.updateRequest(this.screen[t].type, r, this.requestParams.salaryLower, this.requestParams.salaryUpper), this.$apply()
                },
                bindMultiPickerChange: function(e) {
                    this.multiIndex = e.detail.value, this.screen[1].selected = !0;
                    var t = "",
                        r = "",
                        a = "",
                        n = this.screen[1].oList[this.multiIndex[1]].v;
                    switch (r = this.screen[1].salaryType[this.multiIndex[0]].k, n) {
                        case "全部":
                            t = "", a = "";
                            break;
                        case "100以下":
                            t = 0, a = 100;
                            break;
                        case "1000以上":
                            t = 1e3, a = 99999;
                            break;
                        case "2000以下":
                            t = 0, a = 2e3;
                            break;
                        case "10000以上":
                            t = 1e4, a = 99999;
                            break;
                        default:
                            t = n.split("-")[0], a = n.split("-")[1]
                    }
                    this.updateRequest(this.screen[1].type, r, t, a), this.$apply()
                },
                bindMultiPickerColumnChange: function(e) {
                    this.multiIndex[e.detail.column] = e.detail.value, this.multiIndex[1] = 0;
                    var t = "";
                    if (0 == e.detail.column) {
                        switch (e.detail.value) {
                            case 0:
                                t = "ALL";
                                break;
                            case 1:
                                t = "SETTLEMENT_AMOUNT_DAY";
                                break;
                            case 2:
                                t = "SETTLEMENT_AMOUNT_MONTH";
                                break;
                            case 3:
                                this.screen[1].list[1] = ["薪资面议"], t = "FACE_TO_FACE"
                        }
                        this.getLementType(t)
                    }
                    this.screen[1].selected = !0, this.$apply()
                }
            }, a.watch = {
                requestParams: function(e, t) {
                    this.getMapList()
                }
            }, a.events = {}, a.getAdInfo = function() {
                var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                r = a, _addressResolution2.default.ReverseGeocoder(t, function(e) {
                                    if (0 == e.status) {
                                        var t = e.result.ad_info.adcode.substring(0, 4) + "00";
                                        r.requestParams = _extends({}, r.requestParams, {
                                            areaCode: t
                                        }), r.chooseCity = _extends({}, r.chooseCity, {
                                            name: e.result.ad_info.province + " " + e.result.ad_info.city
                                        }), r.getMapList(), wx.setStorage({
                                            key: "JOBchooseCity",
                                            data: JSON.stringify({
                                                code: t,
                                                province: e.result.ad_info.province,
                                                city: e.result.ad_info.city,
                                                district: ""
                                            })
                                        })
                                    }
                                    r.$apply()
                                });
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, e, s)
                }));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(), a.getLocation = function() {
                var e = a;
                wx.getStorage({
                    key: "preLocation",
                    complete: function() {
                        function t(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r.data ? (n = JSON.parse(r.data), a.getAdInfo(n)) : wx.getLocation({
                                            type: "gcj02",
                                            success: function() {
                                                function t(e) {
                                                    return r.apply(this, arguments)
                                                }
                                                var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                                                    return regeneratorRuntime.wrap(function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                e.latitude = r.latitude, e.longitude = r.longitude, e.getAdInfo(r, e), e.$apply();
                                                            case 4:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }, t, s)
                                                }));
                                                return t
                                            }(),
                                            fail: function(t) {
                                                var r = {
                                                    longitude: "118.79647",
                                                    latitude: "32.05838"
                                                };
                                                e.getAdInfo(r, e)
                                            }
                                        });
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, s)
                        }));
                        return t
                    }()
                })
            }, a.initFun = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = wx.getUpdateManager(), t.onCheckForUpdate(function(e) {}), t.onUpdateReady(function() {
                                wx.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(e) {
                                        e.confirm && t.applyUpdate()
                                    }
                                })
                            }), a.$parent.methods.showLoading("玩命加载中..."), a.isDriver = "job", a.getLocation(), e.next = 8, a.getAllDictionarles();
                        case 8:
                            if ("no" != (r = e.sent)) {
                                e.next = 12;
                                break
                            }
                            return e.next = 12, a.requestGetAllDictionarles();
                        case 12:
                            a.getLementType("ALL"), a.getAllD(), setTimeout(function() {
                                a.getUserAuthInfo()
                            }, 1e3), a.$apply();
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e, s)
            })), a.getMapList = function(e) {
                var t = a,
                    r = "driver" == a.isDriver ? _request2.default.Api.getResumeListByAd() : _request2.default.Api.getHiringDriverListByAd(),
                    n = "driver" == a.isDriver ? "我要找司机界面" : "我要找工作界面";
                a.$parent.sensorsPublic.autoTrackPageShow(n);
                var s = a.requestParams.areaCode;
                return 0 == s[3] && 0 == s[2] ? a.scale = 8 : a.scale = 11, new Promise(function(e, n) {
                    _request2.default.cehomeRequest(r, a.requestParams, "GET", t).then(function(e) {
                        a.$parent.methods.hideLoading(), 200 === e.statusCode && 0 == e.data.ret && e.data.data.item.length > 0 ? (t.latitude = e.data.data.item[0].latitude, t.longitude = e.data.data.item[0].longitude, wx.setStorage({
                            key: "preLocation",
                            data: JSON.stringify({
                                adcode: e.data.data.adcode,
                                latitude: e.data.data.latitude,
                                longitude: e.data.data.longitude
                            })
                        }), a.markers = [], t.markers = t.getSchoolMarkers(e.data.data.item), a.$parent.methods.hideLoading()) : 200 === e.statusCode && 0 == e.data.ret && e.data.data.item.length <= 0 && (a.markers = [], a.$parent.methods.showToast("当前地区暂无符合条件的信息")), a.$apply()
                    })
                })
            }, a.getLementType = function(e) {
                "FACE_TO_FACE" != e && wx.getStorage({
                    key: "allDictionarles",
                    complete: function() {
                        function t(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r.data && (n = JSON.parse(r.data), a.screen[1].selected = !1, n.SETTLEMENT_TYPE.unshift({
                                            k: "",
                                            v: "全部"
                                        }), a.screen[1].salaryType = n.SETTLEMENT_TYPE, a.screen[1].list[0] = n.SETTLEMENT_TYPE.map(function(e, t) {
                                            return e.v.replace(/\n/g, "")
                                        }), "ALL" == e ? (a.screen[1].oList = [{
                                            k: "",
                                            v: "全部"
                                        }], a.screen[1].list[1] = ["全部"]) : (a.screen[1].oList = n[e], a.screen[1].list[1] = n[e].map(function(e, t) {
                                            return e.v.replace(/\n/g, "")
                                        })), a.$apply());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, s)
                        }));
                        return t
                    }()
                })
            }, a.getAllD = function(e) {
                wx.getStorage({
                    key: "allDictionarles",
                    complete: function() {
                        function t(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                            var n, i, o;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r.data && (n = JSON.parse(r.data), a.screen[0].selected = !1, n.DEVICE_TYPE.unshift({
                                            k: "",
                                            v: "全部"
                                        }), a.screen[0].oList = n.DEVICE_TYPE, a.screen[0].list = n.DEVICE_TYPE.map(function(e, t) {
                                            return e.v.replace(/\n/g, " ")
                                        }), i = "", o = "", "driver" == e ? (o = "RESUME_LABELPARA", e = "DRIVING_YEARS", n[e].unshift({
                                            k: "",
                                            v: "全部"
                                        })) : (e = "DRIVING_YEARS_HIRING", o = "HIRINGDRIVER_LABELPARA"), a.screen[2].selected = !1, a.screen[2].oList = n[e], a.screen[2].list = n[e].map(function(e, t) {
                                            return e.v.replace(/\n/g, " ")
                                        }), a.label = n[o].map(function(e, t) {
                                            return e.selected = !1, e
                                        }), a.$apply());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, s)
                        }));
                        return t
                    }()
                })
            }, n = r, _possibleConstructorReturn(a, n)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "onShareAppMessage",
            value: function() {
                return {
                    title: "我在这里找替班司机，技术好还便宜",
                    path: "/pages/index",
                    imageUrl: "https://bbs.cehome.com/wxApp/jobResume/imgs/share.png",
                    success: function(e) {},
                    fail: function(e) {}
                }
            }
        }, {
            key: "updateRequest",
            value: function(e, t, r, a) {
                "selectType" == e && "driver" == this.isDriver ? this.requestParams.deviceType = t : "selectType" == e && "driver" != this.isDriver ? this.requestParams.driverType = t : this.requestParams[e] = t, this.requestParams = _extends({}, this.requestParams, {
                    salaryLower: r,
                    salaryUpper: a
                }), this.getMapList(), this.$apply()
            }
        }, {
            key: "getSchoolMarkers",
            value: function(e) {
                var t = [],
                    r = !0,
                    a = !1,
                    n = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                        var o = s.value,
                            u = this.createMarker(o);
                        t.push(u)
                    }
                } catch (e) {
                    a = !0, n = e
                } finally {
                    try {
                        !r && i.return && i.return()
                    } finally {
                        if (a) throw n
                    }
                }
                return t
            }
        }, {
            key: "createMarker",
            value: function(e) {
                var t = e.latitude,
                    r = e.longitude;
                return {
                    iconPath: "https://bbs.cehome.com/wxApp/jobResume/imgs/home.png",
                    id: e.adName + "&" + e.adCode,
                    latitude: t,
                    longitude: r,
                    callout: {
                        content: e.adName + "\n" + e.acCount + "个",
                        color: "#ffffff",
                        borderRadius: 10,
                        bgColor: "#00ce65",
                        padding: 11,
                        display: "ALWAYS",
                        textAlign: "center",
                        borderWidth: 1,
                        borderColor: "#00ad47"
                    },
                    alpha: 1,
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    width: 1,
                    height: 1
                }
            }
        }, {
            key: "onShow",
            value: function() {
                var e = this;
                this.isShare && (this.initFun(), this.isShare = !1, this.$apply()), wx.getStorage({
                    key: "IndexChooseCity",
                    complete: function() {
                        function t(e) {
                            return r.apply(this, arguments)
                        }
                        var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                            var a;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r.data && (a = JSON.parse(r.data), e.chooseCity = _extends({}, e.chooseCity, {
                                            name: a.province + " " + a.city,
                                            code: a.code.substring(0, 4) + "00"
                                        }), e.requestParams = _extends({}, e.requestParams, {
                                            areaCode: a.code.substring(0, 4) + "00"
                                        }), e.$apply());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }));
                        return t
                    }()
                })
            }
        }, {
            key: "getUserAuthInfo",
            value: function() {
                var e = this;
                _request2.default.cehomeRequest(_request2.default.Api.getUserAuthInfo(), {}, "GET").then(function(t) {
                    if (200 === t.statusCode && 201003 == t.data.ret && "success" == e.state.login.status) {
                        var r = wx.getStorageSync("isPopup").registerTime,
                            a = wx.getStorageSync("isPopup").isPopup,
                            n = (0, _utils.nowDate)((new Date).getTime());
                        r == n && a ? (e.isShowPoup = !0, wx.setStorageSync("isPopup", {
                            registerTime: n,
                            isPopup: !1
                        })) : r == n || a || (e.isShowPoup = !0, wx.setStorageSync("isPopup", {
                            registerTime: n,
                            isPopup: !1
                        })), e.$apply()
                    }
                })
            }
        }, {
            key: "onLoad",
            value: function() {
                function e(e) {
                    return t.apply(this, arguments)
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!t.shareType) {
                                    e.next = 4;
                                    break
                                }
                                return wx.navigateTo({
                                    url: t.shareType + "?id=" + t.id + "&page=mapList"
                                }), this.isShare = !0, e.abrupt("return");
                            case 4:
                                this.initFun(), _request2.default.cehomeRequest(_request2.default.Api.testFun(), {
                                    tid: 1320625,
                                    pageNo: 2
                                }, "GET", this).then(function(e) {
                                    console.log(e)
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "requestGetAllDictionarles",
            value: function() {
                var e = this;
                return new Promise(function(t, r) {
                    _request2.default.cehomeRequest(_request2.default.Api.getAllDictionarles(), {}, "GET", e).then(function(e) {
                        200 === e.statusCode && 0 == e.data.ret && (wx.setStorage({
                            key: "allDictionarles",
                            data: JSON.stringify(e.data.data)
                        }), t("ok"))
                    }).catch(function(e) {
                        r("err")
                    })
                })
            }
        }, {
            key: "getAllDictionarles",
            value: function() {
                var e = this;
                return new Promise(function(t, r) {
                    wx.getStorage({
                        key: "allDictionarles",
                        complete: function() {
                            function r(e) {
                                return a.apply(this, arguments)
                            }
                            var a = _asyncToGenerator(regeneratorRuntime.mark(function r(a) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t(a.data ? "ok" : "no");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, r, e)
                            }));
                            return r
                        }()
                    })
                })
            }
        }]), t
    }(_wepy2.default.page)) || _class;
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index"));